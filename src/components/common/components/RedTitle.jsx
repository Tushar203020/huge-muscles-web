/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const RedTitle = ({ title, color = "#f7af31" }) => {
  return (
    <div className="mb-8 flex flex-row gap-4 items-center md:text-lg font-semibold">
      <span className="bg-[#f7af31] h-10 w-5 rounded"></span>
      <span style={{ color }}>{title}</span>
    </div>
  );
};

RedTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default RedTitle;
