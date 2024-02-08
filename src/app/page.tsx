import Carousel from '@/components/carousel';

export default function Home() {
  return (
    <main className={`w-full max-w-[80rem] block text-white flex-wrap`}>
      <div className='w-full my-2'>
        <Carousel />
      </div>
    </main>
  );
}
