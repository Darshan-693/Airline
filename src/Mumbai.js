import footer from "./images/footer.png" 
const Mumbai = ({ session, changepage, funxtion, x }) => {
    return (
      <>
        <div className="tickinfo">
          <h1>Mumbai</h1>
          <div className="incontent">
            <div className="p">
            <p>
"Set Your Sights on Mumbai: Embrace a World Where Traditional 
Heartbeats Sync with Modern Rhythms, Explore Iconic Landscapes and 
Unveil Hidden Treasures."
            </p>
            <h4>Destination : Chhatrapati Shivaji Maharaj international airport</h4>
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
  export default Mumbai;
  