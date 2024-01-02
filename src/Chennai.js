import footer from "./images/footer.png" 
const Chennai = ({ session, changepage, funxtion, x }) => {
    return (
      <>
        <div className="tickinfo">
          <h1>Chennai</h1>
          <div className="incontent">
            <div className="p">
            <p>
"Set Sail to Chennai: Where Ancient Temples Meet Modern Marvels, Experience the Warmth of South Indian Hospitality as You Discover a City that Dances to the Rhythms of Nature and Tradition,"
            </p>
            <h4>Destination : Chennai International Airport</h4>
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
  export default Chennai;
  