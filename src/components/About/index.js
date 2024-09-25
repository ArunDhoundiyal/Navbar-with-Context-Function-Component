import Navbar from '../Navbar'
import './index.css'

const About = () => {
  console.log('home')
  return (
    <div className="bg-container">
      <Navbar />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
        alt="home-img"
        className="image-sty"
      />
      <h1 className="heading">Home</h1>
    </div>
  )
}
export default About
