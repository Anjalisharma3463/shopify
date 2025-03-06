const TestimonialsSection = () => {
    return (
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Millions of businesses trust Shopify</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From startup to enterprise, Shopify helps businesses of all sizes grow
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-400">Founder, BeautyBrand</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Shopify has been instrumental in scaling our business. The platform is intuitive, powerful, and allows us
                to focus on our products rather than technical issues."
              </p>
            </div>
  
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-400">CEO, TechGadgets</p>
                </div>
              </div>
              <p className="text-gray-300">
                "We migrated from a custom solution to Shopify and saw our conversion rates increase by 45%. The built-in
                tools and app ecosystem have everything we need."
              </p>
            </div>
  
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-400">Owner, HomeDecor</p>
                </div>
              </div>
              <p className="text-gray-300">
                "As a small business owner, I needed a solution that wouldn't break the bank but could still help me
                compete with larger retailers. Shopify delivered exactly that."
              </p>
            </div>
          </div>
  
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-gray-400 text-xl font-semibold">AllBirds</div>
              <div className="text-gray-400 text-xl font-semibold">Gymshark</div>
              <div className="text-gray-400 text-xl font-semibold">Staples</div>
              <div className="text-gray-400 text-xl font-semibold">Kylie Cosmetics</div>
              <div className="text-gray-400 text-xl font-semibold">Rothy's</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default TestimonialsSection
  
  