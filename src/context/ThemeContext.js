import {useState, createContext} from 'react'

export const ThemeContext = createContext()
export const ThemeProvider = ({children}) => {
  const [toggleTheme, setToggleTheme] = useState(false)
  return (
    <ThemeContext.Provider value={{toggleTheme, setToggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
