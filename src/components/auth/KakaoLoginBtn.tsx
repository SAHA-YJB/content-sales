'use client';

import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const KakaoLoginBtn = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        router.refresh();
      }
    };
    fetchUser();
  }, [router]);

  const handleLogin = async () => {
    const supabase = createClient();
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            scope: 'profile_nickname profile_image account_email',
          },
        },
      });

      if (error) {
        console.error('Kakao OAuth error:', error.message);
        throw error;
      }

      router.refresh();
    } catch (error) {
      console.error('Kakao login error:', error);
    }
  };

  if (user) {
    return null;
  }

  return (
    <button
      onClick={handleLogin}
      className='rounded-md bg-[#FEE500] px-4 py-2 text-black hover:bg-[#FEE500]/90'
    >
      카카오로 시작하기
    </button>
  );
};
