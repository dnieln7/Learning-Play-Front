import "./pages-styles.css";

import brand from "../assets/images/brand.png"

import React from "react";

export class ErrorComponent extends React.Component {
    render() {
        const message = this.props.message;
        const returnFunc = this.props.returnFunc;

        return (
            <div className="make-column text-light text-center align-items-center p-4">
                <img className="img-fluid w-50 my-4" src={brand}/>
                <p className="font-title">Ha ocurrido un error</p>
                <p className="font-subtitle">{message}</p>
                <p className="secondary-button-text cursor-pointer my-4 font-subtitle" onClick={returnFunc}>Regresar</p>
            </div>
        )
    }
}
