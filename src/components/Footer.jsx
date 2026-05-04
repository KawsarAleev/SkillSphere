import Link from "next/link";
import { FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row lg:justify-between footer footer-center p-6 md:p-10 bg-base-200 text-base-content rounded-none mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
        <Link href="#" className="link link-hover">About us</Link>
        <Link href="#" className="link link-hover">Contact</Link>
        <Link href="#" className="link link-hover">Terms & Conditions</Link>
        <Link href="#" className="link link-hover">Privacy policy</Link>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap justify-center gap-6">
          <Link 
            href="https://kawsar.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Website"
          >
            <FaGlobe className="text-2xl hover:text-primary transition-colors" />
          </Link>
          <Link 
            href="https://github.com/kawsarcodes" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl hover:text-primary transition-colors" />
          </Link>
          <Link 
            href="https://youtube.com/@kawsarcodes" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="text-2xl hover:text-primary transition-colors" />
          </Link>
          <Link 
            href="https://linkedin.com/in/mdkawsarahmed" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl hover:text-primary transition-colors" />
          </Link>
          <Link 
            href="https://instagram.com/kawsarcodes" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl hover:text-primary transition-colors" />
          </Link>
          <Link 
            href="https://facebook.com/kawsarcodes" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm md:text-base">
        <p className="px-4">Copyright © {new Date().getFullYear()} | All right reserved by SkillSphere Learning Platform</p>
        <p>Email: contact@kawsar.dev | Phone: +8801234567890</p>
      </div>
    </footer>
  );
}