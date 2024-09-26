import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {ThemeContext} from '../../context/ThemeContext'
import './index.css'

const Navbar = () => {
  const {toggleTheme, setToggleTheme} = useContext(ThemeContext)
  const onClickToggle = () => {
    setToggleTheme(preState => !preState)
  }

  return (
    <div className={`${toggleTheme ? 'dark' : 'light'} navbar-bg-container`}>
      <img
        src={`${
          toggleTheme
            ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        }`}
        alt="website logo"
        className="website-logo"
      />
      <ul className="home-about-container">
        <li>
          <Link
            to="/"
            className={`${
              toggleTheme ? `nav-txt-light` : `nav-txt-dark`
            } nav-txt`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${
              toggleTheme ? `nav-txt-light` : `nav-txt-dark`
            } nav-txt`}
          >
            About
          </Link>
        </li>
      </ul>
      <img
        src={`${
          toggleTheme
            ? `https://assets.ccbp.in/frontend/react-js/light-theme-img.png`
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        }`}
        alt="dark-img"
        className="navbar-logo"
        onClick={onClickToggle}
      />
    </div>
  )
}

export default Navbar
