import * as React from "react";
import headervideo from '../../../../assets/videos/headervideo.mp4';
import './VideoHome.scss';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const VideoHome = () => {
    const [isPlay, setPlay] = React.useState(true);
    const [isUnmute, setUnmute] = React.useState(true);
    const [videoheader, setVideo] = React.useState();

    React.useEffect(() => {
        setVideo(document.querySelector("#video"));
    }, []);

    const handlePauseVideo = () => {
        if (videoheader.paused) {
            videoheader.play();
            setPlay(true);
        } else {
            videoheader.pause();
            setPlay(false);
        }
    }

    const handleMuteVideo = () => {
        if (videoheader.muted === false) {
            videoheader.muted = true;
            setUnmute(true);
        } else {
            videoheader.muted = false;
            setUnmute(false);
        }
    }

    return (
        <div className="video-container">
            <div className="video-content">
                <video id="video" src={headervideo}
                    autoPlay
                    loop
                    muted
                ></video>
                <div className='video-controllers'>
                    <button onClick={handlePauseVideo}>
                        {isPlay ? <PauseIcon /> : <PlayArrowIcon />}
                    </button>
                    <button onClick={handleMuteVideo}>
                        {isUnmute ? <VolumeOffIcon /> : <VolumeUpIcon />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoHome;