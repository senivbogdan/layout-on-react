import React from 'react';
import logo from "../../img/svg/logo.svg"
import facebook from "../../img/svg/facebook.svg"
import M from "../../img/svg/M.svg"
import telegram from "../../img/svg/telegram.svg"
import twitter from "../../img/svg/twitter.svg"

const Menu = () => {
    return (
        <header className="header">
            <div className="header_wrapper">
                <div className="logo-nav">
                    <img
                        src={logo}
                        alt="logo"
                        className="header_logo"
                    />
                    <nav className="header_nav">
                        <ul className="header_list">
                            <li className="header_item">
                                <a
                                    href="/dfg"
                                    className="header_item-link"
                                >
                                    Home</a>
                            </li>
                            <li className="header_item">
                                <a
                                    href="/dfgdfg"
                                    className="header_item-link"
                                >
                                    Blog
                                </a>
                            </li>
                            <li className="header_item">
                                <a
                                    href="/dfggd"
                                    className="header_item-link"
                                >
                                    Features
                                </a>
                            </li>
                            <li className="header_item">
                                <a
                                    href="/asd"
                                    className="header_item-link"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li className="header_item">
                                <a
                                    href="/fd"
                                    className="header_item-link"
                                >
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="social-networks">
                    <a href="" className="social_link">
                        <img src={facebook} alt="social-networks" className="social_img"/>
                    </a>
                    <a href="" className="social_link">
                        <img src={telegram} alt="social-networks" className="social_img"/>
                    </a>
                    <a href="" className="social_link">
                        <img src={twitter}  alt="social-networks" className="social_img"/>
                    </a>
                    <a href="" className="social_link">
                        <img src={M} alt="social-networks" className="social_img"/>
                    </a>
                    <button className="button-start">
                        Get started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Menu;