import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";

const GoToProduct = ({ item }) => {

  return (
    <Link
      to={{
        pathname: `/allProducts/${item.title}`,
        state: { product: item },
      }}
      // onClick={() => handleProductClick(item)}
      key={item.id}
    >
      <img loading="lazy" src={item.imageSrc} alt={item.title} />
    </Link>
  );
};
export default GoToProduct;

GoToProduct.propTypes = {
  item: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
