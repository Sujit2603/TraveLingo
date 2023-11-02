import "./HomeCardStyles.css"

function HomeCardData(props) {
    return (
        <>
            <div className="t-card">
                <div className="t-image">
                    <img src={props.image} alt="image is unable to load"></img>
                </div>
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
            </div>
        </>
    )
}
export default HomeCardData;