import { Play } from "lucide-react"
import shopifyimage from "../assets/homeofshopiFy.png";
const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20">
      {/* Background image - in a real implementation, you'd use a proper image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
          style={{
            backgroundImage: {shopifyimage},
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}

          
        ></div>

      </div>

      <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Be the next
            <br />
            big thing
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Dream big, build fast, and
            <br />
            grow far on Shopify.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a href="#" className="bg-white text-black px-6 py-3 rounded-full font-medium text-lg hover:bg-gray-200">
              Start free trial
            </a>
            <div className="text-sm text-gray-300">
              Get 3 days free
              <br />
              then 1 month for ₹20
            </div>
          </div>

          <div className="mt-12">
            <button className="flex items-center text-white hover:text-gray-300">
              <Play className="h-5 w-5 mr-2" />
              <span className="underline">Why we build Shopify</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

