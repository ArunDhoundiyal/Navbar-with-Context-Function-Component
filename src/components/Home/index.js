import {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => {
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
            ? `https://assets.ccbp.in/frontend/react-js/home-dark-img.png`
            : `https://assets.ccbp.in/frontend/react-js/home-light-img.png`
        }`}
        alt="website logo"
        className="image-sty"
      />
      <h1
        className={`${
          toggleTheme ? `home-light-heading` : `home-dark-heading`
        }`}
      >
        Home
      </h1>
    </div>
  )
}

export default Home
