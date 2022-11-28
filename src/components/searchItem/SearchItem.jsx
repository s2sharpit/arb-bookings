import './searchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://t-cf.bstatic.com/xdata/images/xphoto/600x400/89180574.jpg?k=4de12858ec9867ae5eaf7732c4afc56ab4bc86851fd3778162bdad169b2c12db&o=" alt="" className='siImg' />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">Entire studio • 1 bathroom • 21 m<sup>2</sup> 1 full bed</span>
            <span className="siCancelOp">Free Cancelation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">₹2000</span>
                <span className="siTaxOp">Includes taxis and fees</span>
                <button className='siCheckBtn'>See availability</button>
            </div>
        </div>
        </div>
  )
}

export default SearchItem