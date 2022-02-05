import { Link } from "react-router-dom"

const Home = () => {

  return (
    <div className="w-80 mx-auto">
      <p style={{color: "#000"}}>Hope Counseling</p>
      <Link to="/counseling" className="d-b my-2">Counseling</Link>
      <Link to="/fertility-care" className="d-b my-2">Fertlity Care</Link>
      <Link to="/crunchi" className="d-b my-2">Crunchi</Link>
    </div>
  )
}

export default Home