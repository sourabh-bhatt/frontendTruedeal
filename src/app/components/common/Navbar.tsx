import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 border-b-2 border-gray-200">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <Image src="/Assets/NavbarImages/logo.png" alt="Truedeal Logo" width={150} height={30} />
                </Link>
            </div>

            <div className="hidden md:flex space-x-8 font-semibold">
                <Link href="/" className="text-gray-500 hover:text-red-500">Home</Link>
                <a href="#about-us" className="text-gray-500 hover:text-red-500">About Us</a>
                <a href="#services" className="text-gray-500 hover:text-red-500">Our Services</a>
                <a href="#news" className="text-gray-500 hover:text-red-500">News</a>
                <a href="#contact-us" className="text-gray-500 hover:text-red-500">Contact Us</a>
            </div>

            <div className="flex items-center space-x-4">
                <i className="fas fa-headphones-alt text-red-500 text-lg hover:text-red-500"></i>

                <i className="fas fa-user text-red-500 text-lg hover:text-red-500"></i>

                <button className="px-4 py-1 border-2 border-red-500 text-red-500 rounded-full font-semibold bg-white hover:bg-red-500 hover:text-white transition duration-300">
                    Login
                </button>
            </div>
        </nav>
    );
}
