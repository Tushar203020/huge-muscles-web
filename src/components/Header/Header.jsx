import Logo from "./Logo";
import Navigations from "./Navigations";
import Profile from "./Profile";
import SearchAppBar from "./Search";
import { useMediaQuery, useTheme, IconButton } from "@mui/material";


const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-2 md:px-8 md:py-4">
        {/* Toggle Button for Mobile View */}
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu">
           <Navigations />
          </IconButton>
        )}

        {/* Logo Section */}
        <Logo />

        {/* Navigation Section - Only show on larger screens */}
        {!isMobile && <Navigations />}

         {/* Search Bar Section for Desktop View */}
         {!isMobile && <SearchAppBar />}

        {/* Profile Section */}
        <Profile />

        {/* Search Bar Section for Desktop View */}
       
      </div>

      {/* Search Bar for Mobile View */}
      {isMobile && (
        <div className="flex justify-center items-center px-4 py-2 md:px-8 md:py-4">
          <SearchAppBar />
          {/* <Profile /> */}
        </div>
      )}
    </header>
  );
};

export default Header;