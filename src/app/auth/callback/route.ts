import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');

    if (code) {
      const supabase = createRouteHandlerClient({ cookies });
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      // 이메일 관련 에러는 무시하고 진행
      if (error && !error.message.includes('email')) {
        throw error;
      }
    }

    // 성공적으로 처리되면 홈으로 리다이렉트
    return NextResponse.redirect(requestUrl.origin);
  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.redirect(
      `${new URL(request.url).origin}?error=로그인 처리 중 오류가 발생했습니다`,
    );
  }
}
