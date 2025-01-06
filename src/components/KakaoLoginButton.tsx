import { NextResponse } from 'next/server';

import { createClient } from '@/utils/supabase/server';

// 구글 인증 콜백 처리를 위한 라우트 핸들러
export async function GET(request: Request) {
  // URL 파라미터 추출
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const next = searchParams.get('next');
  const error_description = searchParams.get('error_description');

  // 에러 발생 시 에러 페이지로 리다이렉션
  if (error || error_description) {
    console.error('Auth error:', { error, error_description });
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  }

  // 인증 코드 존재 시 세션 교환 프로세스
  // 세션 교환 과정
  // 구글 로그인할 때 구글이 우리에게 주는 건 임시 티켓(인증 코드)
  // 이 임시 티켓을 가지고 진짜 입장권(세션)으로 바꾸는 과정
  // 놀이공원 입장 과정과 비슷
  // 먼저 매표소에서 교환권(인증 코드)을 받음
  // 그 교환권을 가지고 입구에서 실제 입장 팔찌(세션)로 교환
  // 이제 이 팔찌로 놀이공원을 자유롭게 이용 가능
  if (code) {
    const supabase = await createClient();
    const { error: exchangeError } =
      await supabase.auth.exchangeCodeForSession(code);

    // 세션 교환 실패 시 에러 페이지로 리다이렉션
    if (exchangeError) {
      console.error('Exchange error:', exchangeError);
      return NextResponse.redirect(`${origin}/auth/auth-code-error`);
    }
    // 성공 시 지정된 페이지로 리다이렉션
    return NextResponse.redirect(`${origin}${next || '/'}`);
  }
  // 인증 코드 부재 시 에러 페이지로 리다이렉션
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
