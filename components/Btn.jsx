import React from "react";
import "../styles/btn.css";
import PropTypes from "prop-types";
export const Btn = ({ primary, backgroundColor, label, size }) => {
  const mode = primary ? "btn-primary" : "btn-secondary";
  return (
    <button
      type="button"
      className={["btn", `btn-${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
    >
      {label}
    </button>
  );
};
Btn.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "default", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};
Btn.defaultProps = {
  backgroundColor: null,
  label: "Button",
  primary: false,
  size: "default",
};
