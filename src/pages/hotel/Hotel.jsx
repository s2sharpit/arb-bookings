import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './hotel.css'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {src: "https://www.theasiacollective.com/wp-content/uploads/2020/03/Umaid-Bhawan-Palace-1.jpg"},
    {src: "https://www.theasiacollective.com/wp-content/uploads/2020/03/Evolve-Back-Hampi-1.jpg"},
    {src: "https://www.theasiacollective.com/wp-content/uploads/2020/03/Taj-Falaknuma-Palace-1.jpg"},
    {src: "https://www.theasiacollective.com/wp-content/uploads/2020/03/The-Leela-Palace-Chennai-1.jpg"},
    {src: "https://www.theasiacollective.com/wp-content/uploads/2020/03/Taj-Lake-Palace-1.jpg"},
    {src: "https://www.theasiacollective.com/wp-content/uploads/2020/03/The-Oberoi-Udaivilas-1.jpg"},
  ]

  const handleOpen = i => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "l") {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber-1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber+1;
    }
    
    setSlideNumber(newSliderNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon className='close' onClick={() => setOpen(false)} icon={faCircleXmark} />
          <FontAwesomeIcon className='arrow' onClick={() => handleMove("l")} icon={faCircleArrowLeft} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon className='arrow' onClick={() => handleMove("r")} icon={faCircleArrowRight} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">
            Reserve or Book Now!
          </button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">Excellent locatin - 500m from center</span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹2500 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Dehradun</h1>
              <p className="hotelDesc">
              Offering a fitness centre, Lemon Tree Hotel, Dehradun is located atop the upscale Pacific Mall. It is just 2 km from the famous Paltan Bazar and the Dehradun Bus Station. WiFi access is available.
              Each air-conditioned room here will provide you with a flat-screen cable TV and minibar. There is also an electric kettle and work desk. Featuring a shower, private bathroom comes with a hairdryer.
              At Lemon Tree Hotel, Dehradun you will find a 24-hour front desk, snack bar and mini-market. Other facilities offered at the property include a ticket service, a tour desk and luggage storage. The dry cleaning, ironing service and laundry facilities are available at a surcharge. The property offers free parking.
              The hotel is located 35 km from Mussoorie and 50 km from Haridwar and Rishikesh. The Dehradun Railway Station is 9 km while the Jolly Grant Airport is 34 km away. The snow-capped mountains of Mussoorie is a 45-minute drive away.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night day!</h1>
              <span>
                Located in the real heart of Dehradun, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>₹5000</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel