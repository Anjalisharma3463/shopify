const CommerceSection = () => {
    return (
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16">
            The one commerce platform behind it all
          </h2>
  
          <div className="text-3xl md:text-4xl font-light text-white leading-relaxed">
            <p className="mb-6">
              <span className="text-white">Sell online and in person. </span>
              <span className="text-gray-500">Sell locally and globally. </span>
              <span className="text-gray-500">Sell direct and social.</span>
            </p>
            <p className="mb-6">
              <span className="text-gray-500">Shopify handles everything from marketing and payments, to </span>
              <span className="text-white">secure checkout and shipping.</span>
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Online Store</h3>
              <p className="text-gray-400">
                Sell online with an ecommerce website. Bring your vision to life with our online store builder.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Point of Sale</h3>
              <p className="text-gray-400">Sell in person at retail locations, pop-ups, or markets with Shopify POS.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Buy Button</h3>
              <p className="text-gray-400">Add ecommerce to any website with a simple buy button.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default CommerceSection;
  
  