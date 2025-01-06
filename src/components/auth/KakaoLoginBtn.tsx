'use client';

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

  return (
    <button
      onClick={handleLogin}
      className='rounded-md bg-[#FEE500] px-4 py-2 text-black hover:bg-[#FEE500]/90'
    >
      카카오로 시작하기
    </button>
  );
};
