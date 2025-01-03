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

      <HeroSection />

      <div className='w-full'>
        <MarkdownContent content={COURSE_CONTENT} />
      </div>
    </main>
  );
}
