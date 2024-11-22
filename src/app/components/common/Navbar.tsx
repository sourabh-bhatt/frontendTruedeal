// 'use client';

// import { Dialog, DialogContent } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button"
// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import Image from "next/image"
// import Link from "next/link"
// import { Plane, Cloud } from "lucide-react"

// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false)
//     const [showLoginModal, setShowLoginModal] = useState(false)
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     const navItems = [
//         { href: "/", label: "Home" },
//         { href: "#about-us", label: "About Us" },
//         { href: "#services", label: "Our Services" },
//         { href: "#news", label: "News" },
//         { href: "#contact-us", label: "Contact Us" },
//     ]

//     return (
//         <>
//             <nav className="relative flex items-center justify-between p-2 border-b-2 border-gray-200">
//                 <div className="flex items-center space-x-4">
//                     <Link href="/">
//                         <Image src="/Assets/NavbarImages/logo.png" alt="Truedeal Logo" width={150} height={30} />
//                     </Link>
//                 </div>

//                 <div className="hidden md:flex space-x-8 font-semibold">
//                     {navItems.map((item) => (
//                         <Link
//                             key={item.label}
//                             href={item.href}
//                             className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff] transition-colors duration-300"
//                         >
//                             {item.label}
//                         </Link>
//                     ))}
//                 </div>

//                 <div className="flex items-center space-x-4">
//                     <Image src="/Assets/NavbarImages/call.webp" alt="Call" width={24} height={24} className="w-6 h-6" />
//                     <Image src="/Assets/NavbarImages/profile.webp" alt="Profile" width={24} height={24} className="w-6 h-6" />
//                     <h1 className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins text-sm font-semibold">+91 8447498498</h1>

//                     <button
//                         className="px-6 py-2 rounded-full font-medium bg-white relative group"
//                         onClick={() => isLoggedIn ? setIsLoggedIn(false) : setShowLoginModal(true)}
//                     >
//                         <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent relative font-bold">
//                             {isLoggedIn ? 'Logout' : 'Login'}
//                         </span>
//                         <span
//                             className="absolute inset-0 rounded-full border-2 border-transparent"
//                             style={{
//                                 background: 'linear-gradient(to right, #017ae3, #00f6ff) border-box',
//                                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                                 WebkitMaskComposite: 'xor',
//                                 maskComposite: 'exclude',
//                             }}
//                         />
//                     </button>

//                     <button
//                         className="md:hidden text-gray-500 focus:outline-none"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             {isMenuOpen ? (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             ) : (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                             )}
//                         </svg>
//                     </button>
//                 </div>

//                 {isMenuOpen && (
//                     <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50">
//                         {navItems.map((item) => (
//                             <Link
//                                 key={item.label}
//                                 href={item.href}
//                                 className="block py-2 px-4 text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff] transition-colors duration-300"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 {item.label}
//                             </Link>
//                         ))}
//                     </div>
//                 )}
//             </nav>

//             <LoginModal
//                 isOpen={showLoginModal}
//                 onClose={() => setShowLoginModal(false)}
//                 onLogin={() => {
//                     setIsLoggedIn(true)
//                     setShowLoginModal(false)
//                 }}
//             />
//         </>
//     )
// }

// function LoginModal({
//     isOpen,
//     onClose,
//     onLogin
// }: {
//     isOpen: boolean
//     onClose: () => void
//     onLogin: () => void
// }) {
//     const router = useRouter()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [rememberMe, setRememberMe] = useState(false)

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault()
//         onLogin()
//         router.push('/')
//     }

//     return (
//         <Dialog open={isOpen} onOpenChange={onClose}>
//             <DialogContent className="sm:max-w-[850px] p-0 overflow-hidden">
//                 <div className="grid sm:grid-cols-2">
//                     {/* Left side with gradient background */}
//                     <div className="relative hidden sm:block bg-gradient-to-br from-[#017ae3] to-[#00f6ff] p-8 text-white">
//                         <div className="relative z-10">
//                             <h2 className="text-3xl font-bold mb-6">Truedeal</h2>
//                             <p className="text-xl leading-relaxed">
//                                 Turning travel mishaps
//                                 <br />
//                                 into memorable
//                                 <br />
//                                 achievements
//                                 <span className="block mt-2">
//                                     since 2014
//                                 </span>
//                             </p>
//                         </div>
//                         <div className="absolute inset-0 opacity-10">
//                             <Plane className="absolute top-12 left-12 w-8 h-8" />
//                             <Cloud className="absolute top-24 right-12 w-8 h-8" />
//                             <div className="absolute bottom-0 left-0 right-0 h-48 bg-contain bg-bottom bg-no-repeat"
//                                 style={{
//                                     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`
//                                 }}
//                             />
//                         </div>
//                     </div>

//                     {/* Right side with login form */}
//                     <div className="p-8 bg-white">
//                         <div className="text-center mb-8">
//                             <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
//                                 <svg
//                                     className="w-10 h-10 text-gray-400"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                     />
//                                 </svg>
//                             </div>
//                             <h2 className="text-2xl font-semibold">
//                                 Welcome to{' '}
//                                 <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
//                                     My Dashboard
//                                 </span>
//                             </h2>
//                         </div>

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="space-y-1">
//                                 <Input
//                                     placeholder="Enter Your Email"
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                     className="rounded-full border-gray-300 focus:border-[#017ae3] focus:ring-[#017ae3]"
//                                 />
//                             </div>

//                             <div className="space-y-1">
//                                 <Input
//                                     placeholder="Enter Password"
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                     className="rounded-full border-gray-300 focus:border-[#017ae3] focus:ring-[#017ae3]"
//                                 />
//                             </div>

//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center space-x-2">
//                                     <Checkbox
//                                         id="remember"
//                                         checked={rememberMe}
//                                         onCheckedChange={(checked) => setRememberMe(checked as boolean)}
//                                         className="border-gray-300 text-[#017ae3] focus:ring-[#017ae3]"
//                                     />
//                                     <label
//                                         htmlFor="remember"
//                                         className="text-sm text-gray-600"
//                                     >
//                                         Remember me
//                                     </label>
//                                 </div>
//                                 <Link
//                                     href="#"
//                                     className="text-sm text-[#017ae3] hover:text-[#00f6ff] transition-colors"
//                                 >
//                                     Forgot Password
//                                 </Link>
//                             </div>

//                             <Button
//                                 type="submit"
//                                 className="w-full rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white hover:opacity-90 transition-opacity"
//                             >
//                                 Login
//                             </Button>
//                         </form>
//                     </div>
//                 </div>
//             </DialogContent>
//         </Dialog>
//     )
// }

// fix

// 'use client';

// import { Dialog, DialogContent } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button"
// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import Image from "next/image"
// import Link from "next/link"
// import { Plane, Cloud } from 'lucide-react'

// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false)
//     const [showLoginModal, setShowLoginModal] = useState(false)
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     const navItems = [
//         { href: "/", label: "Home" },
//         { href: "#about-us", label: "About Us" },
//         { href: "#services", label: "Our Services" },
//         { href: "#news", label: "News" },
//         { href: "#contact-us", label: "Contact Us" },
//     ]

//     return (
//         <>
//             <nav className="relative flex flex-wrap items-center justify-between p-2 border-b-2 border-gray-200">
//                 <div className="flex items-center space-x-4">
//                     <Link href="/">
//                         <Image src="/Assets/NavbarImages/logo.png" alt="Truedeal Logo" width={150} height={30} />
//                     </Link>
//                 </div>

//                 <div className="hidden md:flex space-x-8 font-semibold">
//                     {navItems.map((item) => (
//                         <Link
//                             key={item.label}
//                             href={item.href}
//                             className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff] transition-colors duration-300"
//                         >
//                             {item.label}
//                         </Link>
//                     ))}
//                 </div>

//                 <div className="flex items-center space-x-4">
//                     <Image src="/Assets/NavbarImages/call.webp" alt="Call" width={24} height={24} className="w-6 h-6" />
//                     <Image src="/Assets/NavbarImages/profile.webp" alt="Profile" width={24} height={24} className="w-6 h-6" />
//                     <h1 className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins text-sm font-semibold">+91 8447498498</h1>

//                     <button
//                         className="px-6 py-2 rounded-full font-medium bg-white relative group"
//                         onClick={() => isLoggedIn ? setIsLoggedIn(false) : setShowLoginModal(true)}
//                     >
//                         <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent relative font-bold">
//                             {isLoggedIn ? 'Logout' : 'Login'}
//                         </span>
//                         <span
//                             className="absolute inset-0 rounded-full border-2 border-transparent"
//                             style={{
//                                 background: 'linear-gradient(to right, #017ae3, #00f6ff) border-box',
//                                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                                 WebkitMaskComposite: 'xor',
//                                 maskComposite: 'exclude',
//                             }}
//                         />
//                     </button>

//                     <button
//                         className="md:hidden text-gray-500 focus:outline-none"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             {isMenuOpen ? (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             ) : (
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                             )}
//                         </svg>
//                     </button>
//                 </div>

//                 {isMenuOpen && (
//                     <div className="w-full md:hidden mt-2">
//                         {navItems.map((item) => (
//                             <Link
//                                 key={item.label}
//                                 href={item.href}
//                                 className="block py-2 px-4 text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff] transition-colors duration-300"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 {item.label}
//                             </Link>
//                         ))}
//                     </div>
//                 )}
//             </nav>

//             <LoginModal
//                 isOpen={showLoginModal}
//                 onClose={() => setShowLoginModal(false)}
//                 onLogin={() => {
//                     setIsLoggedIn(true)
//                     setShowLoginModal(false)
//                 }}
//             />
//         </>
//     )
// }

// function LoginModal({
//     isOpen,
//     onClose,
//     onLogin
// }: {
//     isOpen: boolean
//     onClose: () => void
//     onLogin: () => void
// }) {
//     const router = useRouter()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [rememberMe, setRememberMe] = useState(false)

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault()
//         onLogin()
//         router.push('/')
//     }

//     return (
//         <Dialog open={isOpen} onOpenChange={onClose}>
//             <DialogContent className="sm:max-w-[850px] p-0 overflow-hidden">
//                 <div className="grid sm:grid-cols-2">
//                     {/* Left side with gradient background */}
//                     <div className="relative hidden sm:block bg-gradient-to-br from-[#017ae3] to-[#00f6ff] p-8 text-white">
//                         <div className="relative z-10">
//                             <h2 className="text-3xl font-bold mb-6">Truedeal</h2>
//                             <p className="text-xl leading-relaxed">
//                                 Turning travel mishaps
//                                 <br />
//                                 into memorable
//                                 <br />
//                                 achievements
//                                 <span className="block mt-2">
//                                     since 2014
//                                 </span>
//                             </p>
//                         </div>
//                         <div className="absolute inset-0 opacity-10">
//                             <Plane className="absolute top-12 left-12 w-8 h-8" />
//                             <Cloud className="absolute top-24 right-12 w-8 h-8" />
//                             <div className="absolute bottom-0 left-0 right-0 h-48 bg-contain bg-bottom bg-no-repeat"
//                                 style={{
//                                     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`
//                                 }}
//                             />
//                         </div>
//                     </div>

//                     {/* Right side with login form */}
//                     <div className="p-8 bg-white">
//                         <div className="text-center mb-8">
//                             <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
//                                 <svg
//                                     className="w-10 h-10 text-gray-400"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                     />
//                                 </svg>
//                             </div>
//                             <h2 className="text-2xl font-semibold">
//                                 Welcome to{' '}
//                                 <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
//                                     My Dashboard
//                                 </span>
//                             </h2>
//                         </div>

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="space-y-1">
//                                 <Input
//                                     placeholder="Enter Your Email"
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                     className="rounded-full border-gray-300 focus:border-[#017ae3] focus:ring-[#017ae3]"
//                                 />
//                             </div>

//                             <div className="space-y-1">
//                                 <Input
//                                     placeholder="Enter Password"
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                     className="rounded-full border-gray-300 focus:border-[#017ae3] focus:ring-[#017ae3]"
//                                 />
//                             </div>

//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center space-x-2">
//                                     <Checkbox
//                                         id="remember"
//                                         checked={rememberMe}
//                                         onCheckedChange={(checked) => setRememberMe(checked as boolean)}
//                                         className="border-gray-300 text-[#017ae3] focus:ring-[#017ae3]"
//                                     />
//                                     <label
//                                         htmlFor="remember"
//                                         className="text-sm text-gray-600"
//                                     >
//                                         Remember me
//                                     </label>
//                                 </div>
//                                 <Link
//                                     href="#"
//                                     className="text-sm text-[#017ae3] hover:text-[#00f6ff] transition-colors"
//                                 >
//                                     Forgot Password
//                                 </Link>
//                             </div>

//                             <Button
//                                 type="submit"
//                                 className="w-full rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white hover:opacity-90 transition-opacity"
//                             >
//                                 Login
//                             </Button>
//                         </form>
//                     </div>
//                 </div>
//             </DialogContent>
//         </Dialog>
//     )
// }

// fix

// 'use client';

// import { Dialog, DialogContent } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button"
// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import Image from "next/image"
// import Link from "next/link"
// import { Plane, Cloud, Menu } from 'lucide-react'
// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false)
//     const [showLoginModal, setShowLoginModal] = useState(false)
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     const navItems = [
//         { href: "/", label: "Home" },
//         { href: "#about-us", label: "About Us" },
//         { href: "#services", label: "Our Services" },
//         { href: "#news", label: "News" },
//         { href: "#contact-us", label: "Contact Us" },
//     ]

//     return (
//         <>
//             <nav className="relative flex items-center justify-between p-2 border-b-2 border-gray-200">
//                 <div className="flex items-center space-x-2 md:space-x-4">
//                     <Link href="/" className="flex-shrink-0">
//                         <Image src="/Assets/NavbarImages/logo.png" alt="Truedeal Logo" width={100} height={20} className="w-20 md:w-[150px]" />
//                     </Link>
//                 </div>

//                 <div className="hidden md:flex space-x-8 font-semibold">
//                     {navItems.map((item) => (
//                         <Link
//                             key={item.label}
//                             href={item.href}
//                             className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff] transition-colors duration-300"
//                         >
//                             {item.label}
//                         </Link>
//                     ))}
//                 </div>

//                 <div className="flex items-center space-x-2 md:space-x-4">
//                     <Image src="/Assets/NavbarImages/call.webp" alt="Call" width={20} height={20} className="w-4 h-4 md:w-6 md:h-6" />
//                     <Image src="/Assets/NavbarImages/profile.webp" alt="Profile" width={20} height={20} className="w-4 h-4 md:w-6 md:h-6" />
//                     <h1 className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins text-xs md:text-sm font-semibold hidden sm:inline-block">+91 8447498498</h1>

//                     <button
//                         className="px-2 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium bg-white relative group"
//                         onClick={() => isLoggedIn ? setIsLoggedIn(false) : setShowLoginModal(true)}
//                     >
//                         <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent relative font-bold">
//                             {isLoggedIn ? 'Logout' : 'Login'}
//                         </span>
//                         <span
//                             className="absolute inset-0 rounded-full border-2 border-transparent"
//                             style={{
//                                 background: 'linear-gradient(to right, #017ae3, #00f6ff) border-box',
//                                 WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
//                                 WebkitMaskComposite: 'xor',
//                                 maskComposite: 'exclude',
//                             }}
//                         />
//                     </button>

//                     <button
//                         className="md:hidden text-gray-500 focus:outline-none"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         <Menu className="h-5 w-5" />
//                     </button>
//                 </div>
//             </nav>

//             {isMenuOpen && (
//                 <div className="md:hidden bg-white shadow-md">
//                     {navItems.map((item) => (
//                         <Link
//                             key={item.label}
//                             href={item.href}
//                             className="block py-2 px-4 text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff] transition-colors duration-300"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             {item.label}
//                         </Link>
//                     ))}
//                 </div>
//             )}

//             <LoginModal
//                 isOpen={showLoginModal}
//                 onClose={() => setShowLoginModal(false)}
//                 onLogin={() => {
//                     setIsLoggedIn(true)
//                     setShowLoginModal(false)
//                 }}
//             />
//         </>
//     )
// }

// function LoginModal({
//     isOpen,
//     onClose,
//     onLogin
// }: {
//     isOpen: boolean
//     onClose: () => void
//     onLogin: () => void
// }) {
//     const router = useRouter()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [rememberMe, setRememberMe] = useState(false)

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault()
//         onLogin()
//         router.push('/')
//     }

//     return (
//         <Dialog open={isOpen} onOpenChange={onClose}>
//             <DialogContent className="sm:max-w-[850px] p-0 overflow-hidden">
//                 <div className="grid sm:grid-cols-2">
//                     {/* Left side with gradient background */}
//                     <div className="relative hidden sm:block bg-gradient-to-br from-[#017ae3] to-[#00f6ff] p-8 text-white">
//                         <div className="relative z-10">
//                             <h2 className="text-3xl font-bold mb-6">Truedeal</h2>
//                             <p className="text-xl leading-relaxed">
//                                 Turning travel mishaps
//                                 <br />
//                                 into memorable
//                                 <br />
//                                 achievements
//                                 <span className="block mt-2">
//                                     since 2014
//                                 </span>
//                             </p>
//                         </div>
//                         <div className="absolute inset-0 opacity-10">
//                             <Plane className="absolute top-12 left-12 w-8 h-8" />
//                             <Cloud className="absolute top-24 right-12 w-8 h-8" />
//                             <div className="absolute bottom-0 left-0 right-0 h-48 bg-contain bg-bottom bg-no-repeat"
//                                 style={{
//                                     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`
//                                 }}
//                             />
//                         </div>
//                     </div>

//                     {/* Right side with login form */}
//                     <div className="p-8 bg-white">
//                         <div className="text-center mb-8">
//                             <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
//                                 <svg
//                                     className="w-10 h-10 text-gray-400"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                     />
//                                 </svg>
//                             </div>
//                             <h2 className="text-2xl font-semibold">
//                                 Welcome to{' '}
//                                 <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
//                                     My Dashboard
//                                 </span>
//                             </h2>
//                         </div>

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="space-y-1">
//                                 <Input
//                                     placeholder="Enter Your Email"
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                     className="rounded-full border-gray-300 focus:border-[#017ae3] focus:ring-[#017ae3]"
//                                 />
//                             </div>

//                             <div className="space-y-1">
//                                 <Input
//                                     placeholder="Enter Password"
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                     className="rounded-full border-gray-300 focus:border-[#017ae3] focus:ring-[#017ae3]"
//                                 />
//                             </div>

//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center space-x-2">
//                                     <Checkbox
//                                         id="remember"
//                                         checked={rememberMe}
//                                         onCheckedChange={(checked) => setRememberMe(checked as boolean)}
//                                         className="border-gray-300 text-[#017ae3] focus:ring-[#017ae3]"
//                                     />
//                                     <label
//                                         htmlFor="remember"
//                                         className="text-sm text-gray-600"
//                                     >
//                                         Remember me
//                                     </label>
//                                 </div>
//                                 <Link
//                                     href="#"
//                                     className="text-sm text-[#017ae3] hover:text-[#00f6ff] transition-colors"
//                                 >
//                                     Forgot Password
//                                 </Link>
//                             </div>

//                             <Button
//                                 type="submit"
//                                  className="w-full rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white hover:opacity-90 transition-opacity"
//                             >
//                                 Sign in
//                             </Button>
//                         </form>
//                     </div>
//                 </div>
//             </DialogContent>
//         </Dialog>
//     )
// }

// fix 2 with clerk

'use client';

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { href: "/", label: "Home" },
        { href: "#about-us", label: "About Us" },
        { href: "#services", label: "Our Services" },
        { href: "#news", label: "News" },
        { href: "#contact-us", label: "Contact Us" },
    ]

    return (
        <>
            <nav className="relative flex items-center justify-between p-2 border-b-2 border-gray-200">
                <div className="flex items-center space-x-2 md:space-x-4">
                    <Link href="/" className="flex-shrink-0">
                        <Image src="/Assets/NavbarImages/logo.png" alt="Truedeal Logo" width={100} height={20} className="w-20 md:w-[150px]" />
                    </Link>
                </div>

                <div className="hidden md:flex space-x-8 font-semibold">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff] transition-colors duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-2 md:space-x-4">
                    <Image src="/Assets/NavbarImages/call.webp" alt="Call" width={20} height={20} className="w-4 h-4 md:w-6 md:h-6" />
                    <Image src="/Assets/NavbarImages/profile.webp" alt="Profile" width={20} height={20} className="w-4 h-4 md:w-6 md:h-6" />
                    <h1 className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins text-xs md:text-sm font-semibold hidden sm:inline-block">+91 8447498498</h1>

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button
                                className="px-2 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium bg-white relative group"
                            >
                                <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent relative font-bold">
                                    Login
                                </span>
                                <span
                                    className="absolute inset-0 rounded-full border-2 border-transparent"
                                    style={{
                                        background: 'linear-gradient(to right, #017ae3, #00f6ff) border-box',
                                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                        WebkitMaskComposite: 'xor',
                                        maskComposite: 'exclude',
                                    }}
                                />
                            </button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10"
                                }
                            }}
                        />
                    </SignedIn>

                    <button
                        className="md:hidden text-gray-500 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="block py-2 px-4 text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff] transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

