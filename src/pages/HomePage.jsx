import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { db } from "../utils";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [prod, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    return () => {};
  }, []);

  const fetchCategories = async () => {
    const data = await db.listDocuments("categories");
    console.log(data);

    setCategories(data);
  };

  const fetchProducts = async () => {
    const data = await db.listDocuments("products");
    const res = data.map((i) => i.data);
    setProducts(res);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              TechStore
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Deals
              </a>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                />
              </div>
            </div>

            {/* Cart */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2">
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartCount}
                </span>
                <span className="text-xl">🛒</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-purple-600"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-purple-600"
            >
              Products
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-purple-600"
            >
              Categories
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-purple-600"
            >
              Deals
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {prod.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(({ data: category }) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-2">
                  {category.name === "Electronics" && "📱"}
                  {category.name === "Fashion" && "👕"}
                  {category.name === "Home" && "🏠"}
                  {category.name === "Beauty" && "💄"}
                  {category.name === "Sports" && "⚽"}
                  {category.name === "Books" && "📚"}
                </div>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-6">
            Get updates on our latest products and special offers!
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                Your one-stop shop for all things tech. Quality products,
                competitive prices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <p>Home</p>
                <p>Products</p>
                <p>Categories</p>
                <p>Deals</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <div className="space-y-2 text-sm">
                <p>Contact Us</p>
                <p>Shipping Policy</p>
                <p>Returns & Exchanges</p>
                <p>FAQs</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-2 text-sm">
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>© 2024 TechStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
