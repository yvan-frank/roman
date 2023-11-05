import HomePage from './pages/public/HomePage'
import { Route, Routes } from 'react-router-dom'
import {bookViewRoute, libraryLInk, loginLink, profileLink, root, searchLink, signupLink} from './routes'
import BookViewPage from './pages/public/BookViewPage'
import SearchPage from './pages/public/SearchPage'
import Library from './pages/auth/Library'
import LoginPage from "./pages/auth/Login.jsx";
import SignupPage from "./pages/auth/Signup.jsx";
import ProfilePage from "./pages/auth/Profile.jsx";
import PersistLogin from "./hooks/PersistLogin.jsx";
import RequireAuth from "./hooks/RequireAuth.jsx";
import {googleLocalToken} from "./api/index.js";
import useAuth from "./hooks/useAuth.js";


function App() {
    // Empêche l'enregistrement de la page
    const {auth} = useAuth()
    function preventScreenshot() {
        // Vérifie si l'utilisateur tente d'enregistrer la page
        if (window.event.ctrlKey && window.event.altKey && window.event.keyCode === 80) {
            // Empêche l'enregistrement
            window.event.preventDefault();
            // Affiche un message d'avertissement
            alert("L'enregistrement de cette page est interdit.");
        }
    }
    // Ajoute l'événement à la page
    document.addEventListener("keydown", preventScreenshot);
  return (
    <Routes>


        <Route element={<PersistLogin />} >
            <Route path={root} element={<HomePage />} />
            <Route path={bookViewRoute} element={<BookViewPage />} />
            <Route path={searchLink} element={<SearchPage />} />
            <Route path={loginLink} element={<LoginPage />} />
            <Route path={signupLink} element={<SignupPage />} />

            {/*Protected routes*/}
            <Route element={<RequireAuth />}>
                <Route path={libraryLInk} element={<Library />} />
                <Route path={profileLink} element={<ProfilePage />} />
            </Route>


            <Route path='*' element={'Not page found'} />
        </Route>


    </Routes>
  )
}

export default App
