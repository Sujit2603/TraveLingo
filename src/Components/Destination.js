import "./DestinationStyles.css"
import DestinationData from "./DestinationData";
import des1 from "../Assets/des1.jpg"
import des2 from "../Assets/des2.jpg"
import des3 from "../Assets/des3.jpg"
import des4 from "../Assets/des4.jpg"

const Destination = () => {
    return (
        <>
            <div className="destination">
                <h1>Less Known Places</h1>
                <p>India Has Wide Range Of Unknown Tourist Places..</p>

                <DestinationData
                    className="first-des"
                    heading="Dhanushkodi, Tamil Nadu"
                    text="Dhanushkodi is an abandoned town at the south-eastern tip of Pamban Island of the state of Tamil Nadu in India. It is south-east of Pamban and is about 24 kilometres west of Talaimannar in Sri Lanka. The town was destroyed during the 1964 Rameswaram cyclone and remains uninhabited in the aftermath."
                    img1={des1}
                    img2={des2} />
                <br />
                <hr />
                <DestinationData
                    className="first-des-reverse"
                    heading="Majuli, Assam"
                    text="Mājuli or Majuli (mazuli) is a river island in the Brahmaputra River, Assam and in 2016, it became the first island to be made a district in India."
                    img1={des3}
                    img2={des4} />
            </div>
        </>
    )
}

export default Destination;