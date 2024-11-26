import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Row1 = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch banner images from the API
  useEffect(() => {
    const fetchBannerImages = async () => {
      try {
        const response = await fetch("https://huge-muscles.com/api/bannerPhoto");
        if (!response.ok) {
          throw new Error("Failed to fetch banner images");
        }
        const data = await response.json();

        if (data.success) {
          const images = data.data.map((item) => {
            return item.base_url + item.internal_path + item.image_name;
          });
          setCarouselImages(images);
        } else {
          console.error("Failed to fetch banners:", data.message);
        }
      } catch (error) {
        console.error("Error fetching banner images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="flex flex-row w-full overflow-hidden">
      <div className="w-full">
        <Slider {...settings} className="w-full">
          {loading ? (
            <div></div>
          ) : carouselImages.length > 0 ? (
            carouselImages.map((image, index) => (
              <div key={index} className="w-full">
                <Link to="/allProducts">
                  <img
                    src={image}
                    alt={`Banner ${index + 1}`}
                    loading="lazy"
                    className="w-full h-[300px] sm:h-[430px] md:h-[450px] lg:h-[500px]"
                  />
                </Link>
              </div>
            ))
          ) : (
            <div>No banners available.</div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Row1;
