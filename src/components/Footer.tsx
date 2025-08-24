const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold">Moringa School</span>
            </div>
            <p className="text-background/80 text-sm">
              Transforming lives through world-class tech education across Africa.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Software Development</li>
              <li>Data Science</li>
              <li>Digital Marketing</li>
              <li>UX/UI Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Career Services</li>
              <li>Student Portal</li>
              <li>Financial Aid</li>
              <li>Alumni Network</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>+254 700 000 000</li>
              <li>info@moringaschool.com</li>
              <li>Nairobi, Kenya</li>
              <li>Kampala, Uganda</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 Moringa School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;