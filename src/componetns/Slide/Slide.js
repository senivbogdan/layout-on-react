import React from 'react';
import startNote from "../../img/start-note.png";
import notebook from "../../img/noteboo.png";

const Slide = ({ text }) => {
    return (
        <div className="slider-div">
            <div className="kek">
                <div className="slider-pictures-div">
                    <img src={startNote} alt="" className="start-note"/>
                    <div className="two-pic-slider">
                        <img src={notebook} alt="" className="start-note"/>
                        <img src={notebook} alt="" className="start-note"/>
                    </div>
                </div>
                <div className="slider-text">
                    <h2 className="start-title">How to start planning</h2>
                    <p className="start-text">{text}</p>
                    <div className="slider-button-div">
                        <button className="read-now-button">Read now</button>
                        <button className="add-button">Add to your bookmarks</button>
                    </div>
                </div>
            </div>
            <div className="svg-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4"
                            className={text === "1" ? "active-slide" : "disabled-slide"}
                    />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4"
                            className={text === "2" ? "active-slide" : "disabled-slide"}
                    />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4"
                            className={text === "3" ? "active-slide" : "disabled-slide"}
                    />
                </svg>
            </div>
        </div>
    );
};

export default Slide;