import { useState, useEffect } from "react";
import i18n from "../common/components/LangConfig";
import FlashSaleItem from "../common/components/FlashSaleItem";
import RedTitle from "../common/components/RedTitle";
import ViewAll from "../common/components/ViewAll";
import { Grid } from "@mui/material";

const RelatedItems = ({ selectedProduct }) => {
  const [relatedItems, setRelatedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedProduct) return; // Avoid fetching if no selectedProduct

    const fetchRelatedItems = async () => {
      try {
        const response = await fetch(
          `https://huge-muscles.com/api/product?type=${selectedProduct.type}&limit=4&offset=0`
        );
        const result = await response.json();

        if (result.success) {
          const transformedItems = result.data.map((product) => {
            const bannerImage = product.productPhotos.find(
              (photo) => photo.is_banner
            );
            return {
              id: product.id,
              imageSrc: bannerImage
                ? `${bannerImage.base_url}${bannerImage.internal_path}${bannerImage.image_name}`
                : "path/to/default-image.jpg",
              title: product.product_name,
              price: parseInt(product.product_discount_price),
              stars: Math.floor(Math.random() * 3) + 3, // Random stars between 3 and 5
              rates: Math.floor(Math.random() * 100), // Random reviews count
              orignal: parseInt(product.product_orignal_price),
              discount: product.product_discount
                ? product.product_discount.replace("%", "")
                : "",
              quantity: parseInt(product.product_quantity),
              details: product.product_description,
            };
          });
          setRelatedItems(transformedItems);
        } else {
          setError("Failed to load related items");
        }
      } catch (error) {
        setError("Error fetching related items: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedItems();
  }, [selectedProduct]);

  if (loading) return <div>Loading related items...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="mx-auto md:mx-2">
        <RedTitle title={i18n.t("productPage.relatedItems")} />
        <div className="relative mt-10 flex flex-row gap-2 md:gap-12 transition-transform duration-300 transform ">
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {relatedItems.map((item, index) => (
              <Grid item key={item.id}>
                <FlashSaleItem
                  item={item}
                  index={index}
                  totalItems={relatedItems.length}
                  stars={item.stars}
                  rates={item.rates}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <ViewAll name={i18n.t("redButtons.viewAllProducts")} />
      </div>
    </>
  );
};

export default RelatedItems;
