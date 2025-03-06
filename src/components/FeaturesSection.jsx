import { ShoppingBag, Globe, CreditCard, BarChart } from "lucide-react"

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need to succeed</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Shopify takes care of everything from marketing and payments to secure checkout and shipping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Online Store</h3>
            <p className="text-gray-400">
              Design, set up, and manage your online store with powerful tools and flexible customization.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Commerce</h3>
            <p className="text-gray-400">
              Sell in multiple languages and currencies with international domains and local payment methods.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Payments</h3>
            <p className="text-gray-400">
              Accept credit cards and popular payment methods with Shopify Payments and 100+ payment gateways.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-gray-400">
              Gain insights about your business with detailed reporting and analytics tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

