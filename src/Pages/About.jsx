/* eslint-disable react/prop-types */
import StatsCardExported from "../components/About/StatsCard.jsx";
import Services from "../components/common/components/Services.jsx";
import ActiveLastBreadcrumb from "../components/common/components/Link.jsx";

import logo from "../assets/logo.svg";
import i18n from "../components/common/components/LangConfig.jsx";

const About = () => {
  return (
    <>
      {/* Reduced top margin from mt-48 to mt-24 for better spacing */}
      <div className="flex flex-col justify-center items-start mt-24">
        <div className="md:mx-40">
          <ActiveLastBreadcrumb
            path={`${i18n.t("home")}/${i18n.t("aboutPage.title")}`}
          />
        </div>

        {/* Adjusted margins and padding for better responsiveness */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:mt-8 my-12 sm:mb-24">
          {/* Content Section */}
          <div className="flex flex-col gap-8 items-center sm:items-start justify-center max-w-lg mx-4 sm:mx-40">
            <h1 className="text-4xl sm:text-5xl font-bold font-inter">
              {i18n.t("aboutPage.story")}
            </h1>
            <p className="text-base text-justify">
              {i18n.t("aboutPage.paragraph1")}
            </p>
            <p className="text-base text-justify">
              {i18n.t("aboutPage.paragraph2")}
            </p>
          </div>

          {/* Logo Section with responsive margins */}
          {/* Mobile */}
          <div className="sm:hidden my-8 w-full flex justify-center">
            <img
              src={logo}
              alt="logo"
              className="w-40 h-20 object-contain"
            />
          </div>

          {/* Tablet */}
          <div className="hidden sm:block md:hidden my-8 w-full flex justify-center">
            <img
              src={logo}
              alt="logo"
              className="w-48 h-24 object-contain"
            />
          </div>

          {/* Desktop */}
          <div className="hidden md:block relative flex justify-center mt-10 p-36">
            <img
              src={logo}
              alt="logo"
              className="object-contain"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <StatsCardExported />
      </div>

      <Services />
    </>
  );
};

export default About;
