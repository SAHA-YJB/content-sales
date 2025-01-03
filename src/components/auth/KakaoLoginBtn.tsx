'use client';

import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export const KakaoLoginButton = () => {
  const router = useRouter();

  const handleLogin = async () => {
    const supabase = createClient();
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            scope: 'profile_nickname profile_image', // 이메일 scope 제거
          },
        },
      });

      if (error) {
        console.error('Kakao OAuth error:', error.message);
        throw error;
      }
      console.log('data', data);
      router.refresh();
    } catch (error) {
      console.error('Kakao login error:', error);
    }
  };

  return (
    <Button
      onClick={handleLogin}
      className='bg-[#FEE500] text-black hover:bg-[#FEE500]/90'
    >
      카카오로 시작하기
    </Button>
  );
};
