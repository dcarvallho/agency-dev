import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({ children, noRounded }) => {
  return (
    <div>
      <div
        className={classNames({
          [style.buttonRounded]: noRounded,
          [style.buttonNoRounded]: !noRounded,
        })}
      >
        {children}
      </div>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object
  ]),
  noRounded: PropTypes.bool,
};

export default Button;
