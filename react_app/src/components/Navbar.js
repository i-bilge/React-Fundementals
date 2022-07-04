import React from "react";
import PropTypes from "prop-types";

function Navbar(props) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
Navbar.prototype = {
    title : PropTypes.string.isRequired
}//That means: we have to send in App.js a title in string. Simdi de bune default ayarlayalim:
Navbar.defaultProps = {
    title : "Default App"
}

export default Navbar;