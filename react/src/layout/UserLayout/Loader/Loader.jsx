import './Loader.scss';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <span className='one' style={{ ['--bgClr']: "#4285f4" }}></span>
                <span className='two' style={{ ['--bgClr']: "#ea4335" }}></span>
                <span className='three' style={{ ['--bgClr']: "#fbbc05" }}></span>
                <span className='four' style={{ ['--bgClr']: "#34a853" }}></span>
            </div>
        </div>
    );
};

export default Loader;