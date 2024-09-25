import Navbar from '../Navbar'
import './index.css'

const NotFound = () => {
  console.log('home')
  return (
    <div className="about-white-bg-container">
      <Navbar />
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="home-img"
        className="not-found-sty"
      />
      <h1 className="heading">Not Found</h1>
    </div>
  )
}
export default NotFound
