import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";
import Banner1 from "./Banner1.jpg";
import Banner2 from "./Banner2.jpg";
import Banner3 from "./Banner3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Row1 = () => {
  const dealItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.17.title")
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Default to 1 slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,  // Tablet screen
        settings: {
          slidesToShow: 1,  // 1 slide per view
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,  // Mobile screen
        settings: {
          slidesToShow: 1,  // 1 slide per view
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,  // Small mobile screen
        settings: {
          slidesToShow: 1,  // 1 slide per view
          slidesToScroll: 1
        }
      }
    ]
  };

  const carouselImages = [
    Banner1,
    Banner2,
    Banner3
  ];

  return (
    <div className="flex flex-row w-full overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-row w-full">
        <Slider {...settings} style={{ width: "100%" }}>
          {carouselImages.map((image, index) => (
            <div key={index} className="w-full">
              <Link to="/allProducts">
                <img
                  style={{
                    width: "100%", 
                    height: "auto", 
                    maxHeight: "500px", 
                    objectFit: "cover"
                  }}
                  src={image} // Display local images here
                  alt={`Apple Deal ${index + 1}`}
                  loading="lazy"
                  className="w-full hover:motion-safe:animate-pulse"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Row1;
