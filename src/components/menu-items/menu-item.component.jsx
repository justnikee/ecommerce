import React from "react";
import './menu-items.styles.scss'
 
const MenuItem = ( {title, imageUrl, size} ) => {
    return(
    <div 
    style={{
               backgroundImage : `url(${imageUrl})`
           }} 
    className={`${size}, menu-items`}>
                <div className="content">
                    <h1 className="title">{ title }</h1>
                    <span className="subtitle"> shop now </span>
                </div>
            </div>
    )
}


export default MenuItem;