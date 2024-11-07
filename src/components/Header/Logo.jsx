import { Link } from "@mui/material";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex justify-between items-center gap-4 px-2 md:px-8 w-full">
      {/* Logo for large screens */}
      <div className="flex justify-start min-[1300px]:flex hidden sm:block">
        <Link href="/">
          <img 
            src={logo}
            alt="logo"
            width="100"
            height="50"
          />
        </Link>
      </div>

      {/* Logo for mobile and smaller screens */}
      <div className="sm:hidden flex justify-center w-full">
        <Link href="/">
          <img
            src={logo}
            alt="logo"
            width="80"
            height="40"
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
