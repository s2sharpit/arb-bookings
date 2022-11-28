import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Homes</li>
                <li className="fListItem">Apartments</li>
                <li className="fListItem">Resorts</li>
                <li className="fListItem">Villas</li>
                <li className="fListItem">Hostels</li>
                <li className="fListItem">Guest Houses</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Unique play to stay</li>
                <li className="fListItem">All Destinations</li>
                <li className="fListItem">Discover</li>
                <li className="fListItem">Reviews</li>
                <li className="fListItem">Discover monthly stays</li>
                <li className="fListItem">Travel Communities</li>
                <li className="fListItem">Seassonal and holiday deals</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Car hire</li>
                <li className="fListItem">Flight finder</li>
                <li className="fListItem">Restaurent reservations</li>
                <li className="fListItem">ARBbookins.com for Travel Agents</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Coronavirus (COVID-19) FAQs</li>
                <li className="fListItem">Customer Service help</li>
                <li className="fListItem">Partner help</li>
                <li className="fListItem">Carrers</li>
                <li className="fListItem">Sustainability</li>
                <li className="fListItem">Press centre</li>
                <li className="fListItem">Safety resource centre</li>
                <li className="fListItem">Investor relations</li>
                <li className="fListItem">Terms & Conditions</li>
            </ul>
        </div>
        <div className="fText">Copyright © {new Date().getFullYear()} ARB Bookings.</div>
    </div>
  )
}

export default Footer