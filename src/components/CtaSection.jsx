const CtaSection = () => {
    return (
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start your business journey with Shopify</h2>
          <p className="text-xl text-gray-400 mb-8">
            Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="bg-green-500 text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-green-600">
              Start free trial
            </a>
            <a
              href="#"
              className="border border-white text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-white hover:text-black"
            >
              Learn more
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            No credit card required. Get 3 days free, then ₹20/month for your first month.
          </p>
        </div>
      </section>
    )
  }
  
  export default CtaSection
  
  