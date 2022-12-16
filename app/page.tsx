import Button from '../src/components/utils/Button';
import SliderCarousel from '../src/components/utils/SliderCarousel';

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <div className="pt-5 h-96">
            <div className='text-center py-4'>
              <span className='text-center text-3xl px-10 pb-3 font-thin border-b-2 border-black'>Ostatnio wyszukiwane</span>
            </div>
            <SliderCarousel />
          </div>
          <div className='text-center bg-red-500'>
            Tutaj trzeba zajebac jakis baner 
          </div>
          <div className="h-80 pt-5">
            <div className='text-center py-4'>
              <span className='text-center text-3xl px-10 pb-3 font-thin border-b-2 border-black'>Wybrane dla ciebie</span>
            </div>
            <SliderCarousel />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
