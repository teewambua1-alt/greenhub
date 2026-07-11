import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Categories } from '../components/Categories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { AppPromo } from '../components/AppPromo';
import { FAQ } from '../components/FAQ';

export function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <AppPromo />
      <FAQ />
    </main>
  );
}
