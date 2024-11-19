import { LogoWhite, Triangle, Triangle2, TriangleCircle } from "@/assets";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full !pb-6  py-10 md:py-16 lg:py-22 bg-[#14132d] text-white">
      <div className="container mx-auto relative">
        <motion.div
          className="absolute top-[-10%] left-[5%]"
          animate={{
            y: [0, 10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <img src={TriangleCircle} alt="triangle-circle" />
        </motion.div>
        <motion.div
          className="absolute bottom-[5%] right-[5%]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <img src={Triangle} alt="triangle-circle" />
        </motion.div>
        <motion.div
          className="absolute bottom-[10%] left-[30%]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <img src={Triangle2} alt="triangle-circle" />
        </motion.div>
        <div className="flex justify-center mb-8 ">
          <Link to="/" className="flex items-center space-x-2">
            <img src={LogoWhite} alt="logo white" className="w-[150px]" />
          </Link>
        </div>

        <nav className="flex justify-center space-x-8 mb-6">
          <Link
            href="/courses"
            className="text-sm hover:text-primary-dark transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="text-sm hover:text-primary-dark transition-colors"
          >
            Organizations
          </Link>
        </nav>

        {/* Secondary Navigation */}
        <nav className="flex justify-center space-x-8 mb-8">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-white  transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-gray-400 hover:text-white  transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/faq"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/support"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Support
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.facebook.com"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.x.com"
            target="_blank"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Legal */}
        <div className="text-center text-sm text-gray-400">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p>
            Copyright © {new Date().getFullYear()} EPathshala. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
