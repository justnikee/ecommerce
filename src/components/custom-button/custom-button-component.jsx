import React from "react";

import './custom-button-style.scss'

const CunstomButton = ({ children, ...otherProps}) => {
    return(
        <button className="custom-button" {...otherProps}>
           {children}
        </button>
    )
}

export default CunstomButton;