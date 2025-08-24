import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold text-foreground">Moringa School</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#programs" className="text-foreground hover:text-primary transition-colors">Programs</a>
          <a href="#success" className="text-foreground hover:text-primary transition-colors">Success Stories</a>
          <a href="#impact" className="text-foreground hover:text-primary transition-colors">Global Impact</a>
          <a href="#apply" className="text-foreground hover:text-primary transition-colors">Apply</a>
        </nav>
        
        <Button variant="default" className="bg-primary hover:bg-primary/90">
          Start Your Journey
        </Button>
      </div>
    </header>
  );
};

export default Header;