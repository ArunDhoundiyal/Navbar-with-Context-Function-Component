import {useContext} from 'react'
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
      <div className="home-about-container">
        <p className="nav-txt">Home</p> <p className="nav-txt">About</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
        alt="dark-img"
        className="navbar-logo"
        onClick={onClickToggle}
      />
    </div>
  )
}

export default Navbar
