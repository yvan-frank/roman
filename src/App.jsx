import { useState } from 'react'
import HomePage from './pages/public/HomePage'
import { Route, Routes } from 'react-router-dom'
import { bookViewRoute, root, searchLink } from './routes'
import BookViewPage from './pages/public/BookViewPage'
import SearchPage from './pages/public/SearchPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path={root} element={<HomePage />} scrollToTop={0} />
      <Route path={bookViewRoute} element={<BookViewPage />} scrollToTop={0} />
      <Route path={searchLink} element={<SearchPage />} scrollToTop={0} />
      <Route path='*' element={'Not page found'} scrollToTop={0} />
    </Routes>
  )
}

export default App
