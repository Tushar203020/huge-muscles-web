import Logo from "./Logo";
import Navigations from "./Navigations";
import Profile from "./Profile";
import SearchAppBar from "./Search";

const Header = () => {
  return (
    <header
      dir="ltr"
      style={{ top: "0rem" }}
      className="fixed top-12 md:top-14 left-0 w-full z-50 bg-white shadow-md"
    >
      <div className="flex justify-between items-center px-4 py-2 md:px-8 md:py-4">
        {/* Logo Section */}
        <Logo />
        
        {/* Navigation Section */}
        <Navigations />
        
        {/* Profile and Search Section */}
        <div className="flex justify-center items-center gap-2">
          <SearchAppBar />
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
