import "./BannerStyles.css";

function Banner(props) {
    return (
        <>
            <div className={props.Cname}><img alt=" image not loaded" src={props.Bannerimg}></img >
                <div style={{ position: "absolute", top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))', }}></div>
                <div className="banner-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnclass}>{props.btnText}</a>
                </div>
            </div >
        </>
    );
}

export default Banner;