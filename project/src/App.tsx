import React from 'react';
import { Anchor, Ship, Wrench, Users, Award, Package, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>Contact Us</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@oemsources.com</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-blue-200">About Us</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900">OEM SOURCES</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#products" className="text-gray-700 hover:text-blue-900 flex items-center">
                Products <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-900">Services</a>
              <a href="#team" className="text-gray-700 hover:text-blue-900">Our Team</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1569091791842-7cfb64e04797?auto=format&fit=crop&q=80"
          alt="Marine Equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Marine & Shipyard Solutions</h1>
            <p className="text-xl md:text-2xl mb-8">Since 2000</p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose OEM SOURCES?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-900" />
              <h3 className="text-xl font-bold mb-2">World Class Products</h3>
              <p>Find world class reputed makers for marine equipment and shipyard solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-900" />
              <h3 className="text-xl font-bold mb-2">Customer Success</h3>
              <p>Your success is our mission. We deliver competitive solutions for growth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Package className="w-12 h-12 mx-auto mb-4 text-blue-900" />
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p>Following quality procedures as per ISO 9001 standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Major Equipment</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Anchor & Mooring Chain",
              "Steel / Pipes / Cu-Ni Pipes",
              "Deck Machinery",
              "Hatch Cover",
              "Stern Tube",
              "Kopico",
              "Accommodation",
              "Lighting",
              "Cables",
              "Windows/Doors/Scuttle",
              "Emergency Generators",
              "Compressors"
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p>Equipment supply company with global & domestic source for marine, shipyards and repair solutions since 2000.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#products" className="hover:text-blue-400">Products</a></li>
                <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                <li><a href="#team" className="hover:text-blue-400">Our Team</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@oemsources.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  India
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded text-gray-900"
                />
                <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <p className="text-center">© 2024 OEM SOURCES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;