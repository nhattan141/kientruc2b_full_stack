import * as React from "react";

import './Bubble.scss';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Bubble = () => {
    const [bubble, setBubble] = React.useState();

    React.useEffect(() => {
        setBubble(document.querySelector(".bubble-container"));
    }, [])

    window.onscroll = () => {
        if (window.scrollY > 300) {
            bubble.classList.add("show")
        } else {
            bubble.classList.remove("show")
        }
    }

    const handleScrollToTop = () => {
        document.querySelector("#checkboxBubble").click();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="bubble-container">
            <div className="bubble-content">
                <div className="bubble-wrapper">
                    <input type="checkbox" id='checkboxBubble' />
                    <label htmlFor="checkboxBubble">
                        <MoreVertIcon />
                    </label>
                    <div className="bubble-items">
                        <button
                            onClick={handleScrollToTop}
                            style={{ ['--delay']: "0s" }}
                        >
                            <ArrowUpwardIcon />
                        </button>
                        <button style={{ ['--delay']: ".5s" }}>
                            <LocalPhoneIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bubble;