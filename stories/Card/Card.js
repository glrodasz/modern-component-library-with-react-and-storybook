import * as React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import classNames from "classnames";

import styles from "./Card.module.css";
import { getClasses } from "../../helpers/styles";

export const Card = ({
  children,
  color = "primary",
  size = "sm",
  isClickable,
  isDraggable,
}) => {
  const getStyles = getClasses(styles)({
    color,
    size,
  });

  return (
    <div
      className={getStyles("card", ["color", "size"], {
        "is-clickable": isClickable,
        "is-draggable": isDraggable,
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

export default Card;
