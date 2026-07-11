import { Leaf, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-12 sm:pt-20 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 sm:mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">GreenHub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6 sm:mb-8">
              The premier marketplace for premium cannabis products. Curated, lab-tested, and delivered with discretion.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'Youtube' },
                { Icon: Linkedin, label: 'Linkedin' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors text-gray-400"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Shop</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
              {['Flower', 'Vaporizers', 'Edibles', 'Concentrates', 'CBD Products', 'Accessories'].map((item) => (
                <li key={item}>
                  <a href="/shop" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
              {['About Us', 'Careers', 'Affiliates', 'Become a Seller'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Support</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
              {['Help Center', 'Track Order', 'Returns', 'Contact Us', 'Compliance'].map((item) => (
                <li key={item}>
                  <a href="/faq" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left">Copyright &copy; {new Date().getFullYear()} GreenHub. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
        <p className="text-center text-[10px] text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed px-4">
          For use only by adults 21+. Cannabis has not been analyzed or approved by the FDA. Keep out of reach of children and pets. Consume responsibly.
        </p>
      </div>
    </footer>
  )
}
