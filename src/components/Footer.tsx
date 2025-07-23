import logoImg from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-8 relative">
        {" "}
        {/* Changed py-16 to py-8 */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Durga Puja Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-primary bg-clip-text text-transparent">
                  SPECTRA
                </h3>
                <p className="text-xs text-muted-foreground">
                 
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Your gateway to the world’s biggest public art festival Durga Puja
              Art 2025. Experience authentic culture and specially curated
              tours.
            </p>
            <div className="flex space-x-4">
              {/* Social Buttons */}
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:text-accent-foreground h-10 w-10 hover:bg-primary">
                {/* Facebook icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:text-accent-foreground h-10 w-10 hover:bg-primary">
                {/* Instagram icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:text-accent-foreground h-10 w-10 hover:bg-primary">
                {/* Twitter icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a
                href="#home"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="#packages"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Explore Packages
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Our Services
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>Durga Puja Art Tours</p>
              <p>Cultural Experiences</p>
              <p>Heritage Tours</p>
              <p>River Cruises</p>
              <p>Premium Accommodation</p>
              <p>Private Transport</p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                <span>WhatsApp for instant support</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <a
                  href="mailto:mail@spectrainfo.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mail@spectrainfo.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Kolkata, West Bengal</span>
              </div>
              <button
                onClick={() => {
                  const phoneNumber = "918420797474";
                  const message =
                    "Hi! I'm interested in your Durga Puja travel packages. Please share more details.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 w-full bg-green-500 hover:bg-green-600 text-background transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
        {/* Footer bottom bar */}
        <div className="border-t border-primary/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left text-muted-foreground text-sm">
              <p>© 2025 Durga Puja Art 2025. All rights reserved.</p>
              <p>
                Official Travel Partner -{" "}
                <a
                  rel="noopener noreferrer"
                  className="text-primary hover:underline hover:cursor-pointer"
                >
                  massArt
                </a>
              </p>
            </div>
            <div>
              <a href="#home">
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  Back to Top ↑
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
