import Link from "next/link"
function FooterG() {
    return (
        <footer className=" bg-black text-white py-12">
            <div className=" mx-auto text-lg px-6">
                <p>&copy; {new Date().getFullYear()} scratch-off . All rights reserved.</p>
                <nav>
                    <ul className="text-base ">
                        <li>
                            <Link className="hover:underline" href="/privacy">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:underline" href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:underline" href="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>)
}

export default FooterG