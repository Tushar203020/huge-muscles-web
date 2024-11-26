import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import FlashSaleItem from "../common/components/FlashSaleItem"; // Assuming you have this component for displaying each product
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://huge-muscles.com/api/product");
      const result = await response.json();

      if (result.success) {
        const transformedProducts = result.data.map((product) => {
          const bannerImage = product.productPhotos.find(
            (photo) => photo.is_banner
          );
          return {
            id: product.id,
            imageSrc: bannerImage
              ? `${bannerImage.base_url}${bannerImage.internal_path}${bannerImage.image_name}`
              : "path/to/default-image.jpg",
            title: product.product_name,
            flavour:product.product_flavours,
            price: parseInt(product.product_discount_price),
            stars: Math.floor(Math.random() * 3) + 3,
            rates: Math.floor(Math.random() * 100),
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

  return (
    <div className="my-12 mx-auto w-full px-4 max-w-screen-xl">
      <h2 className="text-3xl font-semibold text-center mb-6">{i18n.t("allProducts.title")}</h2>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-10">{error}</div>
      ) : (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {products.map((item) => (
            <Grid item key={item.id}>
            {/* <Link to={`/product/${item.id}`}> */}
              <FlashSaleItem
                item={item}
                stars={item.stars}
                rates={item.rates}
                totalItems={products.length}
              />
            {/* </Link> */}
          </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default AllProductsPage;
