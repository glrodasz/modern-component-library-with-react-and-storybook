import PropTypes from "prop-types";
import Picture from "../Picture";

import styles from "./Avatar.module.css";
import { mapSize } from "./helpers";
import { options } from "./constants";
import withStyles from "../../hoc/withStyles";

export const Avatar = ({ src, size, getStyles }) => {
  return (
    <div className={getStyles("avatar")}>
      <Picture
        src={src}
        width={mapSize(size)}
        height={mapSize(size)}
        isRounded
      />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  getStyles: PropTypes.func.isRequired,
  size: PropTypes.oneOf(options.sizes),
};

Avatar.defaultProps = {
  size: "md",
  getStyles: () => {},
};

export default withStyles(styles)(Avatar);
