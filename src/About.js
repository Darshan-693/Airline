const About = ()=>
{
    return(
        <>
        <div className="content">
        <h1 className='hi'>Intra-India Airlines</h1>
        <p className='para'>
            Welcome to the world of aviation excellence, where seamless journeys and unparalleled service converge to create a soaring experience. As a premier airline company, we pride ourselves on redefining the art of travel. With a steadfast commitment to safety, innovation, and customer satisfaction, we have established ourselves as a trusted leader in the global aviation industry.
        </p>

            <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require('./images/airplane.jpg')} className="d-block w-75 car-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('./images/inner flight.jpg')} className="d-block w-75 car-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('./images/airport.jpg')} className="d-block w-75 car-img" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
    <span className="visually-hidden bg-black">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-black" aria-hidden="true" ></span>
    <span className="visually-hidden bg-black" >Next</span>
  </button>
</div>
        <p className='para'>Innovation is at the heart of everything we do. From cutting-edge technology in our aircraft to streamlined booking processes, we continuously strive to enhance the travel experience. Our commitment to sustainability is reflected in our efforts to reduce our environmental footprint and contribute to a greener future for aviation.
        </p>
        <p className='para'>
        Embark on a journey with us, where each flight is not just a passage from one point to another, but an experience marked by excellence, comfort, and efficiency. Welcome aboard, where the sky is not the limit – it's just the beginning of your adventure with us.
        </p></div>
        </>
    );
}

export default About;