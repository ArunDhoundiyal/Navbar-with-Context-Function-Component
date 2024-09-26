import {Routes, Route, Navigate} from 'react-router-dom'
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
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </ThemeProvider>
)

export default App
