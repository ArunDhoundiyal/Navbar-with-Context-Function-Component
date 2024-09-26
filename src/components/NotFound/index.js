import {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => {
  const {toggleTheme} = useContext(ThemeContext)
  return (
    <div
      className={`${
        toggleTheme ? `dark-background` : `white-background`
      } not-found-white-bg-container`}
    >
      <Navbar />
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="home-img"
        className="not-found-sty"
      />
      <h1
        className={`${
          toggleTheme ? `not-found-light-heading` : `not-found-dark-heading`
        }`}
      >
        Lost Your Way ?
      </h1>
      <p
        className={`${
          toggleTheme ? `light-not-found-paragraph` : `dark-not-found-paragraph`
        }`}
      >
        We cannot seem to find the page you are looking for.
      </p>
    </div>
  )
}
export default NotFound
