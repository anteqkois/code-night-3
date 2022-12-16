import Button from '../src/components/utils/Button';
import SliderCarousel from '../src/components/utils/SliderCarousel';

export default function Home() {
  return (
    <div>
      <main>
        {/* <div className="min-h-screen bg-red-300"></div> */}
        <div className="bg-black">
          <SliderCarousel />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
