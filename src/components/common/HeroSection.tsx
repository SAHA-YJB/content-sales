import { Card, CardContent } from '@/components/ui/card';

interface HeroSectionProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export function HeroSection({
  title,
  description,
  price,
  imageUrl,
}: HeroSectionProps) {
  return (
    <Card className='w-full border-none'>
      <CardContent className='relative h-[600px] w-full overflow-hidden rounded-2xl p-0'>
        {/* 배경 이미지 */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}
        >
          {/* 어두운 오버레이 */}
          <div className='absolute inset-0 bg-black/50' />
        </div>

        {/* 텍스트 콘텐츠 */}
        <div className='relative z-10 flex h-full flex-col justify-center px-6 text-white'>
          <h1 className='mb-4 text-5xl font-bold'>{title}</h1>
          <p className='mb-6 max-w-2xl text-xl'>{description}</p>
          <div className='text-3xl font-semibold'>
            ₩{price.toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
