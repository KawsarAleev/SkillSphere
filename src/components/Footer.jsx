import Link from "next/link";
import { FaGithub, FaGlobe, FaLinkedin, FaYoutube } from "react-icons/fa";

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
                    <FaGlobe className="text-2xl hover:text-primary transition-colors cursor-pointer" />
                    <FaGithub className="text-2xl hover:text-primary transition-colors cursor-pointer" />
                    <FaYoutube className="text-2xl hover:text-primary transition-colors cursor-pointer" />
                    <FaLinkedin className="text-2xl hover:text-primary transition-colors cursor-pointer" />
                </div>
            </div>

            <div className="flex flex-col gap-2 text-sm">
                <p>Copyright © {new Date().getFullYear()} | SkillSphere Learning Platform</p>
            </div>
        </footer>
    );
}
