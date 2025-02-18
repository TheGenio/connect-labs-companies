
import { Link } from "react-router-dom";
import { Search, MessageSquare, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="layout-container h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold hover-slide">
          ConnectLabs
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/search" className="hover-slide">
            <Search className="h-5 w-5" />
          </Link>
          <Link to="/messages" className="hover-slide">
            <MessageSquare className="h-5 w-5" />
          </Link>
          <Link to="/profile" className="hover-slide">
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
