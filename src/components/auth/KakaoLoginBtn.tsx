'use client';

import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

export function KakaoLoginButton() {
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      console.log(data, error);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('카카오 로그인 에러:', error);
    }
  };

  return (
    <Button
      onClick={handleLogin}
      className='bg-[#FEE500] text-[#000000] hover:bg-[#FEE500]/90'
    >
      카카오로 시작하기
    </Button>
  );
}
