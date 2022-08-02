import React, {useState} from 'react';
import "../../css/styles.css"
import notebook from "../../img/noteboo.png"
import startNote from "../../img/start-note.png"
import Slide from "../Slide/Slide"

const Slides = () => {

    const [text, setText] = useState(`2`)

    const back = () => {
            if (text === `2`) {
                setText(`1`)
            }
            // if (text === "1") {
            //     setText(`3`)
            // }
            else {
                setText(`2`)
            }
    }

    const forward = () => {
        if (text === `2`) {
            setText(`3`)
        }
        if (text === "3") {
            setText(`1`)
        }
        else {
            setText(`2`)
        }
    }
    return (
        <div className="slider">
            <div className="slider-wrapper">
                <svg
                    onClick={back}
                    xmlns="http://www.w3.org/2000/svg" width="27" height="19" viewBox="0 0 27 19" fill="none">
                    <path d="M25 9.5L2 9.5M2 9.5L9.81132 17M2 9.5L9.81132 2"
                          className="arrow"
                          stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <Slide
                    text={text}
                />
                <svg
                    onClick={forward}
                    xmlns="http://www.w3.org/2000/svg" width="27" height="19" viewBox="0 0 27 19" fill="none">
                    <path d="M2 9.5H25M25 9.5L17.1887 2M25 9.5L17.1887 17"
                          className="arrow"
                          stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default Slides;