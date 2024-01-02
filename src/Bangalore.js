const Bangalore = ({ session, changepage, funxtion, x }) => {
  return (
    <>
      <div className="tickinfo">
        <h1>Bangalore</h1>
        <div className="incontent">
          <div className="p">
          <p>
            "Embark on a Journey to Bangalore: Experience the Perfect Blend of
            Bustling Cityscapes and Timeless Traditions, All While Soaring on
            Wings of Unparalleled Comfort and Service"
          </p>
          <h4>Destination : Kempegowda International Airport</h4>
          <h5>Free cab services available</h5>
          </div>
          <button
            className="bang_button"
            onClick={() => (session === 1 ? changepage("book") : funxtion(1))}
          >
            Book Now
          </button>
          <img className="incontent_img" src={require("./images/footer.png")} />
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
export default Bangalore;
