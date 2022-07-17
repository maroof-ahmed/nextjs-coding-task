import PropTypes from "prop-types";
import "../styles/index.scss";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
	Component: PropTypes.shape.isRequired,
	pageProps: PropTypes.shape.isRequired,
};

MyApp.defaultProps = {
	
};


export default MyApp;
