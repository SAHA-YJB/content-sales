import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FC } from 'react';

export const Navigation: FC = () => {
  return (
    <Tabs defaultValue='products' className='sticky top-0 z-50 w-full'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='products'>상품</TabsTrigger>
        <TabsTrigger value='management'>관리</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
