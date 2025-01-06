'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function syncUserProfile() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) return null;

  // profiles 테이블에 해당 유저가 있는지 확인
  const { data: existingProfile } = await (await supabase)
    .from('profiles')
    .select()
    .eq('id', user.id)
    .single();

  if (!existingProfile) {
    // 프로필이 없으면 새로 생성
    const { error } = await (await supabase).from('profiles').insert({
      id: user.id,
      email: user.email,
      full_name: user.user_metadata.full_name,
      avatar_url: user.user_metadata.avatar_url,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.error('Error creating profile:', error);
    }
  } else {
    // 프로필이 있으면 업데이트
    const { error } = await (
      await supabase
    )
      .from('profiles')
      .update({
        email: user.email,
        full_name: user.user_metadata.full_name,
        avatar_url: user.user_metadata.avatar_url,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id);

    if (error) {
      console.error('Error updating profile:', error);
    }
  }
}
