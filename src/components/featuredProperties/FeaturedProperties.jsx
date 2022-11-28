import './featuredProperties.css';

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className="fpItem">
        <img src="https://www.theasiacollective.com/wp-content/uploads/2020/03/Umaid-Bhawan-Palace-1.jpg" alt="" className="fpImg" />
        <span className="fpName">Umaid Bhawan Palace</span>
        <span className="fpCity">Jodhpur, Rajasthan</span>
        <span className="fpPrice">Starting from ₹3000</span>
        <div className="fpRating">
          <button className="">7.1</button>
          <span className="">Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://www.theasiacollective.com/wp-content/uploads/2020/03/Evolve-Back-Hampi-1.jpg" alt="" className="fpImg" />
        <span className="fpName">Evolve Back Hampi</span>
        <span className="fpCity">Hosapete, Karnataka</span>
        <span className="fpPrice">Starting from ₹3000</span>
        <div className="fpRating">
          <button className="">7.1</button>
          <span className="">Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://www.theasiacollective.com/wp-content/uploads/2020/03/Taj-Falaknuma-Palace-1.jpg" alt="" className="fpImg" />
        <span className="fpName">Taj Falaknuma Palace</span>
        <span className="fpCity">Hyderabad, Telangana</span>
        <span className="fpPrice">Starting from ₹3000</span>
        <div className="fpRating">
          <button className="">7.1</button>
          <span className="">Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://www.theasiacollective.com/wp-content/uploads/2020/03/The-Leela-Palace-Chennai-1.jpg" alt="" className="fpImg" />
        <span className="fpName">The Leela Palace</span>
        <span className="fpCity">Chennai, Tamil Nadu</span>
        <span className="fpPrice">Starting from ₹3000</span>
        <div className="fpRating">
          <button className="">7.1</button>
          <span className="">Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://www.theasiacollective.com/wp-content/uploads/2020/03/Taj-Lake-Palace-1.jpg" alt="" className="fpImg" />
        <span className="fpName">Taj Lake Palace</span>
        <span className="fpCity">Udaipur, Rajasthan</span>
        <span className="fpPrice">Starting from ₹3000</span>
        <div className="fpRating">
          <button className="">7.1</button>
          <span className="">Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties