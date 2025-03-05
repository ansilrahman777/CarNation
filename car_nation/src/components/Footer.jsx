import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">CNAR Garage</h3>
            <p className="text-white">Quality automotive care since 2008</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase()}`} className="text-white hover:text-orange-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white">
              <li>123 Auto Street</li>
              <li>Car City, CC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: contact@cnar.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            {/* <div className="flex space-x-4">
              {[
                { icon: FacebookIcon, name: 'Facebook' },
                { icon: TwitterIcon, name: 'Twitter' },
                { icon: InstagramIcon, name: 'Instagram' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div> */}
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center text-white">
          <p>&copy; 2023 CNAR Garage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}