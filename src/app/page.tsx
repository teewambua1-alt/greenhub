import { Hero } from '@/components/greenhub/Hero'
import { Stats } from '@/components/greenhub/Stats'
import { Categories } from '@/components/greenhub/Categories'
import { FeaturedProducts } from '@/components/greenhub/FeaturedProducts'
import { HowItWorks } from '@/components/greenhub/HowItWorks'
import { Testimonials } from '@/components/greenhub/Testimonials'
import { FAQ } from '@/components/greenhub/FAQ'
import { Newsletter } from '@/components/greenhub/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  )
}
