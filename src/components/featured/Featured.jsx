import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1 className="">Taj Mahal</h1>
                <h2 className="">Agra, Uttar Pradesh</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-golden-temple-amritsar.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1 className="">Golden Temple</h1>
                <h2 className="">Amritsar, Punjab</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-darjeeling-west-bengal.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1 className="">Darjeeling</h1>
                <h2 className="">West Bengal</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured