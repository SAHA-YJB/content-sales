import { KakaoLoginButton } from '@/components/auth/KakaoLoginBtn';
import { HeroSection } from '@/components/common/HeroSection';
import { MarkdownContent } from '@/components/common/MarkdownContent';
import { Navigation } from '@/components/common/Navigation';
import { COURSE_CONTENT } from '@/const/courseContent';

export default function Home() {
  return (
    <main className='row-start-2 mx-auto flex w-full flex-col items-center gap-4 px-2 pt-2 sm:items-start lg:max-w-4xl lg:gap-8 lg:pt-8'>
      <div className='flex w-full items-center justify-between'>
        <span className='text-2xl font-bold text-black'>Content-sales</span>
        <KakaoLoginButton />
      </div>
      <Navigation />

      <HeroSection
        title='Next.js 완벽 가이드'
        description='Next.js의 모든 것을 배우는 완벽한 강의입니다. React Server Components부터 풀스택 개발까지 마스터하세요.'
        price={99000}
        imageUrl='/hero-image.jpg'
      />

      <div className='w-full'>
        <MarkdownContent content={COURSE_CONTENT} />
      </div>
    </main>
  );
}
