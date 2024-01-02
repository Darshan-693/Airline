import footer from "./images/footer.png" 
const Delhi = ({ session, changepage, funxtion, x }) => {
    return (
      <>
        <div className="tickinfo">
          <h1>Delhi</h1>
          <div className="incontent">
            <div className="p">
            <p>

            "Journey to Delhi with Us: Immerse Yourself in an Epic Tapestry of History, Culture, and Innovation. From the Majestic Red Fort to the Bustling Chandni Chowk, Embrace the Spirit of India's Heart"
            </p>
            <h4>Destination : Indira Gandhi International Airport</h4>
            <h5>Free cab services available</h5>
            </div>
            <button
              className="bang_button"
              onClick={() => (session === 1 ? changepage("book") : funxtion(1))}
            >
              Book Now
            </button>
            <img className="incontent_img" src={footer} />
            <img
              className="incontent_img"
              src={require("./images/footer.png")}
              style={{ left: "550px", top: "-360px" }}
            />
          </div>
        </div>
      </>
    );
  };
  export default Delhi;
  