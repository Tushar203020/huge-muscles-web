import { useState, useEffect } from "react";
import Row1 from "../components/Home/Row1";
import Services from "../components/common/components/Services";
import AllProducts from "../components/Home/AllProducts";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://huge-muscles.com/api/product?limit=8&offset=0");
      const result = await response.json();

      if (result.success) {
        const transformedProducts = result.data.map((product) => {
          // Find the banner image from productPhotos
          const bannerImage = product.productPhotos.find(
            (photo) => photo.is_banner
          );

          return {
            id: product.id,
            imageSrc: bannerImage
              ? `${bannerImage.base_url}${bannerImage.internal_path}${bannerImage.image_name}`
              : "path/to/default-image.jpg", // Fallback to a default image if bannerImage is undefined
            title: product.product_name,
            price: parseInt(product.product_discount_price),
            stars: Math.floor(Math.random() * 3) + 3, // Random stars between 3 and 5
            rates: Math.floor(Math.random() * 100), // Random number of ratings
            orignal: parseInt(product.product_orignal_price),
            discount: product.product_discount ? product.product_discount.replace("%", "") : "",
            quantity: parseInt(product.product_quantity),
            details: product.product_description,
          };
        });

        setProducts(transformedProducts);
      } else {
        setError("Failed to fetch products");
      }
    } catch (err) {
      setError("Error fetching products: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleViewAllClick = () => {
    setShowAllProducts(true); // This will trigger the display of all products
  };

  return (
    <div dir="ltr" className="flex flex-col xl:mt-28">
      <Row1 />
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-10">{error}</div>
      ) : (
        <AllProducts 
          items={showAllProducts ? products : products.slice(0, 8)} // Show all or first 8 products
          showAll={showAllProducts}
          onViewAllClick={handleViewAllClick}
        />
      )}
      <Services />
    </div>
  );
};

export default Home;
