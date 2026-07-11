import { Navbar } from '@/components/greenhub/Navbar'
import { Hero } from '@/components/greenhub/Hero'
import { Stats } from '@/components/greenhub/Stats'
import { Categories } from '@/components/greenhub/Categories'
import { FeaturedProducts } from '@/components/greenhub/FeaturedProducts'
import { HowItWorks } from '@/components/greenhub/HowItWorks'
import { Shop } from '@/components/greenhub/Shop'
import { Testimonials } from '@/components/greenhub/Testimonials'
import { AppPromo } from '@/components/greenhub/AppPromo'
import { FAQ } from '@/components/greenhub/FAQ'
import { Newsletter } from '@/components/greenhub/Newsletter'
import { Footer } from '@/components/greenhub/Footer'
import { CartDrawer } from '@/components/greenhub/CartDrawer'
import { AIAssistantWidget } from '@/components/greenhub/AIAssistantWidget'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Categories />
        <FeaturedProducts />
        <HowItWorks />
        <Shop />
        <Testimonials />
        <AppPromo />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <AIAssistantWidget />
    </div>
  )
}
