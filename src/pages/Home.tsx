import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Transformations from '../components/home/Transformations';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Transformations />
      <CallToAction />
    </div>
  );
}
