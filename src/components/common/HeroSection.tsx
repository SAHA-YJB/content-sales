import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export const HeroSection = () => {
  return (
    <Card className='w-full border-none'>
      <CardContent className='relative h-[500px] w-full overflow-hidden rounded-2xl'>
        {/* 배경 이미지 */}
        <Image
          src={'/hosehappy_2589.jpg'}
          alt={'Next.js 완벽 가이드'}
          fill
          className='object-contain'
          priority
        />
        {/* 어두운 오버레이 */}
        <div className='absolute inset-0 bg-black/50' />

        {/* 텍스트 콘텐츠 */}
        <div className='relative z-10 flex h-full flex-col justify-center px-2 text-white'>
          <h1 className='mb-4 w-full text-4xl font-bold'>
            Next.js 완벽 가이드
          </h1>
          <p className='mb-6 max-w-2xl text-xl'>
            Next.js의 모든 것을 배우는 완벽한 강의입니다. React Server
            Components부터 풀스택 개발까지 마스터하세요.
          </p>
          <div className='flex flex-col items-center gap-2 lg:items-end'>
            {99000 < 159000 && (
              <div className='flex items-center gap-2'>
                {/* 할인 퍼센트 */}
                <Badge variant='destructive' className='px-2 py-1'>
                  {Math.round(((159000 - 99000) / 159000) * 100)}% OFF
                </Badge>
                {/* 원가 */}
                <span className='text-lg line-through opacity-60'>
                  ₩ 159,000
                </span>
              </div>
            )}
            <div className='text-3xl font-semibold'>
              ₩ {'99000'.toLocaleString()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
