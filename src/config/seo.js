import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Logo from "../img/favicon/logo1923.png";

const SEO = ({title, titleTemplate, description}) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {title} | {titleTemplate}
                </title>
                <meta name="description" content={description} />
                <link rel="icon" href={Logo} />
                <link rel="apple-touch-icon" href={Logo} />
            </Helmet>
        </HelmetProvider>
    )
}

SEO.propTypes = {
    title: PropTypes.string,
    titleTemplate: PropTypes.string,
    description: PropTypes.string,
}

SEO.defaultProps = {
    title: "Sowgatlar",
    titleTemplate: "Sowgatlar Dünýäsi",
    description: "Onlaýn söwda Sowgatlar",
}

export default SEO;