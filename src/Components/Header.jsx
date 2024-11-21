import { Navbar, NavbarLink } from "flowbite-react"

const Header = () => {
    return (
        <nav>
            <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 ">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <span className="text-2xl text-gray-900 font-semibold">Logo</span>
                        <div className="flex space-x-4 text-gray-900">
                            <a href="#">About Me</a>
                            <h1>|</h1>
                            <a href="#">Projects</a>
                            <h1>|</h1>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    )
}

export default Header