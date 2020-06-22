import React from 'react'

const Popup = () => {
    return (
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src="../img/nat-8.jpg" alt="Tour photo" className="popup__img" />
                    <img src="../img/nat-9.jpg" alt="Tour photo" className="popup__img" />
                </div>
                
                <div className="popup__right">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; please read these terms before booking</h3>
                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Sed euismod nisi porta lorem. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Magna sit amet purus gravida 
                        quis blandit. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Dolor sed viverra ipsum nunc aliquet 
                        bibendum enim facilisis. Rhoncus mattis rhoncus urna neque viverra justo nec. Aenean et tortor at risus. At varius vel pharetra 
                        vel turpis. Habitasse platea dictumst vestibulum rhoncus. Magna sit amet purus gravida quis. Non quam lacus suspendisse faucibus. 
                        Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Proin sagittis nisl rhoncus mattis rhoncus.
                    </p>
                    <a className="btn btn--green">Book now</a>
                </div>
            </div>
            
        </div>
    )
}

export default Popup;
