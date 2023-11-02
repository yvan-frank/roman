import HomePage from './pages/public/HomePage'
import { Route, Routes } from 'react-router-dom'
import { bookViewRoute, root, searchLink } from './routes'
import BookViewPage from './pages/public/BookViewPage'
import SearchPage from './pages/public/SearchPage'


function App() {
  return (
    <Routes>
      <Route path={root} element={<HomePage />} />
      <Route path={bookViewRoute} element={<BookViewPage />} />
      <Route path={searchLink} element={<SearchPage />} />
      <Route path='*' element={'Not page found'} />
    </Routes>
  )
}

export default App
