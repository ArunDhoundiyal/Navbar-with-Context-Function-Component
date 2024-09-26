import {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => {
  const {toggleTheme} = useContext(ThemeContext)
  return (
    <div
      className={`${
        toggleTheme ? `dark-background` : `white-background`
      } bg-container`}
    >
      <Navbar />
      <img
        src={`${
          toggleTheme
            ? `https://assets.ccbp.in/frontend/react-js/about-dark-img.png`
            : `https://assets.ccbp.in/frontend/react-js/about-light-img.png`
        }`}
        alt="home-img"
        className="image-sty"
      />
      <h1
        className={`${
          toggleTheme ? `about-light-heading` : `about-dark-heading`
        }`}
      >
        About
      </h1>
    </div>
  )
}
export default About
