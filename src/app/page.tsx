import { Navigation } from '@/components/common/Navigation';

export default function Home() {
  return (
    <main className='row-start-2 mx-auto flex w-full flex-col items-center gap-4 px-2 pt-2 sm:items-start lg:max-w-4xl lg:gap-8 lg:pt-8'>
      <Navigation />

      <div className='h-[2000px] w-full bg-red-400'>body</div>
    </main>
  );
}
