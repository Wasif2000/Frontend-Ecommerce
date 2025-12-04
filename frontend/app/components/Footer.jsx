"use client";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 font-sans shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Branding & Subscribe */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Eflyer</h1>
          <p className="text-gray-700 mb-3">Subscribe to get latest updates & offers</p>
          <div className="flex justify-center md:justify-start gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-500 text-white px-5 py-2 rounded-r-lg font-semibold hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-yellow-500 cursor-pointer transition">Best Sellers</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Gift Ideas</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">New Releases</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Today's Deals</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Customer Service</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-2">
            Help Line: <span className="font-semibold">+1 1800 1200 1200</span>
          </p>
          <p className="text-gray-700 mb-2">Email: <span className="font-semibold">support@eflyer.com</span></p>
          <p className="text-gray-600 text-sm mt-4">
            © 2025 All Rights Reserved. Designed by Your Company
          </p>
        </div>
      </div>
    </footer>
  );
}
