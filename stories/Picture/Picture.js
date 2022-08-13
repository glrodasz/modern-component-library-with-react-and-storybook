import PropTypes from 'prop-types'
import withStyles from '../../hoc/withStyles'
import styles from './Picture.module.css'

export const Picture = ({
	getStyles,
	src,
	width,
	height,
	isRounded
}) => (
	<picture className={getStyles("picture", {
		"is-rounded": isRounded
	})}>
		<img src={src} style={{ height, maxWidth: width }} />
	</picture>
)

Picture.propTypes = {
	src: PropTypes.string.isRequired,
	getStyles: PropTypes.func.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number,
	isRounded: PropTypes.bool
}

Picture.defaultProps = {
	height: "auto",
	getStyles: () => {}
}

export default withStyles(styles)(Picture)