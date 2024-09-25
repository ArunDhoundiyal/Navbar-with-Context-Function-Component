import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import {ThemeProvider} from './context/ThemeContext'

const App = () => (
  <ThemeProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  </ThemeProvider>
)

export default App
