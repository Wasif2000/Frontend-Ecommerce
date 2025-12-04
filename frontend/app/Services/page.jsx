"use client";

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h1>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Shipping */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-yellow-600">
              Free & Fast Shipping
            </h2>
            <p className="text-gray-600">
              Enjoy free shipping on all orders above $50. Get your fashion
              delivered quickly and safely to your doorstep.
            </p>
          </div>

          {/* Easy Returns */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-yellow-600">
              Easy Returns
            </h2>
            <p className="text-gray-600">
              Not satisfied? Return or exchange within 7 days hassle-free. Your
              satisfaction is our priority.
            </p>
          </div>

          {/* 24/7 Customer Support */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-yellow-600">
              24/7 Customer Support
            </h2>
            <p className="text-gray-600">
              Our support team is available all the time to answer your queries
              about clothing, accessories, and orders.
            </p>
          </div>

          {/* Personal Styling */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-yellow-600">
              Personal Styling
            </h2>
            <p className="text-gray-600">
              Need help choosing the perfect outfit? Our style experts are here
              to guide you with personalized recommendations.
            </p>
          </div>

          {/* Secure Payments */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-yellow-600">
              Secure Payments
            </h2>
            <p className="text-gray-600">
              Shop confidently with our safe and secure payment gateway. Your
              data is always protected.
            </p>
          </div>

          {/* Exclusive Deals */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-yellow-600">
              Exclusive Deals
            </h2>
            <p className="text-gray-600">
              Get access to members-only discounts and seasonal offers on our
              men’s & women’s collections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
