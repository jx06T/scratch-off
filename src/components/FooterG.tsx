function FooterG() {
    return (
        <footer className=" bg-black text-white py-12">
            <div className=" mx-auto text-lg px-6">
                <p>&copy; {new Date().getFullYear()} scratch-off . All rights reserved.</p>
                <nav>
                    <ul className="text-base ">
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>)
}

export default FooterG