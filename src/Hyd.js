import footer from "./images/footer.png" 
const Hyderabad = ({ session, changepage, funxtion, x }) => {
    return (
      <>
        <div className="tickinfo">
          <h1>Hyderabad</h1>
          <div className="incontent">
            <div className="p">
            <p>

            ""Embark on a Journey to Hyderabad: Dive into the Enchanting Melange of Nizami Grandeur and Cutting-Edge Innovation. From Majestic Monuments to Culinary Delights"
            </p>
            <h4>Destination : Rajiv Gandhi International, Begumpet Airport</h4>
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
  export default Hyderabad;
  