import React from "react";
import Construction from '../images/under_construction.svg';
import containerStyles from "./container.module.css"

export default ({ children }) => (
    <div className={containerStyles.container}>
        {children}
    </div>
)
