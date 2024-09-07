import React from 'react'
import '../../assets/css/style.css'

const Footer = ( props ) => {
    return (
        <footer id="footerType" className={`footer__wrap ${props.element}`}>
            <div className="footer__inner">
                <div className="footer__right">
                    <a href='https://sites.google.com/view/drleeslab/lab'>Dr.Lee's Lab @ 2024. All rights reserved.</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer