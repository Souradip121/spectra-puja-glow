const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-8 relative">
        {/* Footer bottom bar */}
        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left text-muted-foreground text-sm">
              <p>Copyright © 2025 SPECTRA. <br /> Designed, Developed & Maintained by Calverts Digital Technology.</p>
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
