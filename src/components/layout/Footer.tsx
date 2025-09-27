import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { SoftaroLogo } from '../icons';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <SoftaroLogo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">Softaro Labs</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Building the future of software, one line of code at a time.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/services" className="text-muted-foreground hover:text-primary">Web Development</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-primary">Mobile Apps</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-primary">UI/UX Design</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-primary">Cloud Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Softaro Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
