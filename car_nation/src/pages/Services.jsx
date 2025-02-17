// pages/Services.jsx
import { motion } from 'framer-motion'
import pic1 from "./../assets/images/image/1.jpg";

export default function Services() {
  return (
    <div 
      className="bg-zinc-50 overflow-hidden relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${pic1})` }}
    >
      <div className="flex items-center justify-center h-screen">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          className="text-4xl text-white md:text-5xl font-bold text-center"
        >
          OUR SERVICES
        </motion.h2>
      </div>
    </div>
  )
}
