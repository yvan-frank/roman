import React, {useEffect, useState, Fragment} from 'react'
import {NavLink, useNavigate, useSearchParams} from 'react-router-dom'
import {BiLoader, BiLoaderAlt, BiSolidUser} from 'react-icons/bi'
import BookItem from '../../components/BookItem'
import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'
import {baseUrl, fetchAddBookRating, fetchAddToCart, fetchBookDetails, placeHolderImage} from "../../api/index.js";
import LazyLoadImage from "../../components/LazyLoadImage.jsx";
import {cartLink, loginLink, root} from "../../routes/index.js";
import {TbMathGreater} from "react-icons/tb";
import MobileUser from "../../components/MobileUser.jsx";
import Loading from "../../components/Loading.jsx";
import Comment from "../../components/Comment.jsx";
import Head from "../../components/Head.jsx";
import {Dialog, Transition} from "@headlessui/react";
import {FaUserCircle} from "react-icons/fa";
import useAuth from "../../hooks/useAuth.js";
import axios from "axios";


export default function BookViewPage() {
    const [tabOpen, setTabOpen] = useState(1)
    const [results, setResults] = useState([]);
    const [searchParam] = useSearchParams()
    const [loading, setLoading] = useState(true);

    const bookId = searchParam.get('bookid')
    const [bookDetails, setBookDetails] = useState(null);
    const [authorBookList, setAuthorBookList] = useState(null);
    const [bookRatingData, setBookRatingData] = useState(null);
    const [recommendedBook, setRecommendedBook] = useState(null);
    const [userReviewData, setUserReviewData] = useState(null);
    const [authorDetails, setAuthorDetails] = useState(null);

    const [isOpen, setIsOpen] = useState(false);

    const {auth} = useAuth()
    const closeModal = () => {
      setIsOpen(!isOpen)
    }
    const openModal = () => {
        setIsOpen(!isOpen)
    }

    const getData = async () => {
        const res = await fetchBookDetails({book_id: bookId});
        if (res) {
            setResults(res.data);
            //console.log(res.author_detail[0])
            setBookDetails(res.book_detail[0])
            setAuthorBookList(res.author_book_list)
            setAuthorDetails(res.author_detail[0])
            setBookRatingData(res.book_rating_data)
            setLoading(false)
        }
    }

    const navigate = useNavigate()

    const [cartLoad, setCartLoad] = useState(false);
    const addToCart = async () => {
        const data = {
            "id":"",
            "book_id" : parseInt(bookId),
            "added_qty" : 1
        }
        setCartLoad(true)
        const init = await fetchAddToCart(data, auth?.googleToken)

       if (auth?.googleToken) {
           //console.log(init)
           if (init.status === 401){
               navigate(loginLink)
           }else {
               setTimeout(() => {
                   navigate(cartLink)
                   setCartLoad(false)
               }, 2000)
           }
       }else {
           navigate(loginLink)
       }
    }

    useEffect(() => {
       getData()
    }, []);
    const [openNav, setOpenNav] = useState(false);

    const [isReview, setIsReview] = useState(false);
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');

    //add comment
    const AddComment = async () => {
      const data = {
          id: "",
          book_id: parseInt(bookId),
          rating: "4",
          review: comment
      }
      const res = await fetchAddBookRating(data, auth?.googleToken)
        if (res){
            //console.log(res)
            if (res.status === 401){
                navigate(loginLink)
            }else {
                getData()
                setMessage('Votre commentire a été bien enregisté')
                setTimeout(() => {
                    setMessage('')
                    setIsReview(false)
                },3000)
            }
        }
    }

    return (
   <>
       <Head
           title={bookDetails?.name ? bookDetails?.name + ' | Rabipek Novel' : 'Rabipek Novel'}
           description={bookDetails?.description.length > 150 ? bookDetails?.description.slice(0, 150) : bookDetails?.description}
           image={bookDetails?.image}
           url={window.location.href}
           keywords={`${bookDetails?.category_name}, ${bookDetails?.subcategory_name}, ${bookDetails?.name}`}
       />
       <MobileUser openNav={openNav} setOpenNav={() => setOpenNav(!openNav)} />
       <TopBar />
       <Header open={openNav} setOpen={setOpenNav} />

       <div className='w-full bg-slate/5 p-3 px-5 lg:px-10 overflow-hidden'>
           <ul className='flex items-center text-sm overflow-x-auto'>
               <li className='px-2 hover:underline'><NavLink to={root}>Accueil</NavLink></li>
               <li className='px-2'><TbMathGreater /></li>
               <li className='text-slate/50'>
                   {bookDetails?.category_name}
               </li>
               <li className='px-2'><TbMathGreater /></li>
               <li className='text-slate/50'>
                   {bookDetails?.subcategory_name}
               </li>
               <li className='px-2'><TbMathGreater /></li>
               <li className='text-slate/50'>
                   {bookDetails?.name}
               </li>
           </ul>
       </div>
     <div className='max-w-7xl mx-auto lg:p-2 px-4 overflow-hidden'>
        <div className='w-full block lg:flex mt-20'>
            <div className='lg:w-1/4 flex flex-col lg:mr-5'>
                <LazyLoadImage
                    placeholderSrc={placeHolderImage}
                    src={bookDetails?.back_cover}
                    className='w-full h-auto'
                    placeholderClass='w-full h-auto'
                />
                <a className='mt-5 p-2 border-2 rounded border-slate/20 text-center font-bold uppercase hover:bg-yellow
                cursor-pointer duration-150 hover:text-white hover:border-yellow'>
                    Lire l'extrait en ligne
                </a>
            </div>
            <div className='lg:w-3/4 lg:ml-5 flex flex-col'>
                {/* Book tilte */}
                <div className='flex flex-col mb-14 mt-10 lg:mt-0'>
                    <h1 className='font-bold text-2xl md:text-4xl'>{bookDetails?.name}</h1>
                    <p className='md:text-lg text-sm'>de {' '}
                        <button onClick={openModal} className='text-purple'>{bookDetails?.publisher}
                        </button> (Auteur)
                    </p>
                </div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900 bg-gradient rounded-lg text-white text-center p-2"
                                        >
                                            Auteur
                                        </Dialog.Title>
                                        <div className="mt-2 flex flex-col items-center">
                                            <FaUserCircle size={50}/>
                                            <p className="text-sm text-yellow font-semibold">
                                                {authorDetails?.name}
                                            </p>
                                            <p>
                                                {authorDetails?.designation}
                                            </p>
                                            <p className='text-xs md:text-lg'>
                                                {authorDetails?.address}
                                            </p>
                                            <p className='text-xs md:text-lg'>
                                               Téléphone: {authorDetails?.mobile_no ? authorDetails?.mobile_no : '----'}
                                            </p>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Fermer
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
                {/* Buy */}
                <div className='mb-20 flex items-center'>
                    <button
                        disabled={cartLoad}
                        //to={cartLink}
                        onClick={addToCart}
                        className='py-4 px-8 duration-500 bg-yellow hover:bg-purple rounded text-white font-semibold text-sm
                        md:text-base disabled:cursor-not-allowed'>
                        Acheter pour {bookDetails?.price} FCFA
                    </button>
                    {cartLoad && <BiLoaderAlt size={30} className='animate-spin ml-2' />}
                </div>
                {/* category */}
                <div className='flex flex-wrap'>
                    <div className='text-center mr-2 lg:mr-5'>
                        <p className=' duration-150 py-2 px-2 lg:px-5 rounded-full border border-slate/20 font-semibold cursor-pointer hover:bg-slate/20 hover:border-slate/10'>
                            {bookDetails?.category_name}
                        </p>
                    </div>
                    <div className='text-center mr-5'>
                        <p className=' duration-150 py-2 px-5 rounded-full border border-slate/20 font-semibold cursor-pointer hover:bg-slate/20 hover:border-slate/10'>
                            {bookDetails?.subcategory_name}
                        </p>
                    </div>
                </div>
                {/* details table */}
                <div className='w-full mt-10'>
                    <ul className='flex border-b border-slate/10'>
                        <li onClick={() => setTabOpen(1)} className={`border-b-2 hover:border-current cursor-pointer duration-150 pb-2 ${tabOpen === 1 ? 'border-purple' : 'border-transparent'}`}>Description</li>
                        <li onClick={() => setTabOpen(2)} className={`ml-8 border-b-2 hover:border-current cursor-pointer duration-150 pb-2 ${tabOpen === 2 ? 'border-purple' : 'border-transparent'}`}>Details</li>
                        {/* <li onClick={() => setTabOpen(3)} className='ml-8  border-b-2 hover:border-b-yellow cursor-pointer duration-150 pb-2'>Details</li> */}
                    </ul>
                    {/* display single table */}
                    <div className={`${tabOpen === 1 ? 'block': 'hidden'}`}>
                        <div>
                            <h3 className='font-semibold my-5'>
                                {bookDetails?.title}
                            </h3>
                            <p>
                                {bookDetails?.description}
                            </p>
                        </div>
                    </div>
                    <div className={`${tabOpen === 2 ? 'block': 'hidden'}`}>
                        <table className=' text-left'>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Format</th>
                                <tr>{bookDetails?.format}</tr>
                            </tr>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Catégorie</th>
                                <tr>{bookDetails?.category_name}</tr>
                            </tr>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Date de publication</th>
                                <tr>{bookDetails?.date_of_publication}</tr>
                            </tr>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Editeur</th>
                                <tr>{bookDetails?.publisher}</tr>
                            </tr>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Nombre de pages</th>
                                <tr>...</tr>
                            </tr>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Langue</th>
                                <tr>{bookDetails?.language}</tr>
                            </tr>
                        
                        </table>
                    </div>
                </div>
                {/* comment */}
                <div className='mt-10 flex flex-col'>
                    <div className='lg:flex justify-between'>
                        <h3 className=' text-lg font-semibold'>Commentaires</h3>
                        <button
                            onClick={() => setIsReview(true)}
                            className='p-2 bg-yellow rounded text-white font-semibold'>
                            Ecrire un Commentaire
                        </button>
                    </div>
                    <Transition appear show={isReview} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={() => setIsReview(false)}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900 bg-gradient rounded-lg text-white text-center p-2"
                                            >
                                                Ajouter un commantaire
                                            </Dialog.Title>
                                            <form onSubmit={event => event.preventDefault()} className="mt-2 flex flex-col items-center">
                                                {message && <div
                                                    className='text-green bg-green/10 rounded px-4 py-2 mb-1'>{message}</div>}
                                                <textarea
                                                    onChange={(event) => setComment(event.target.value)}
                                                    rows="5"
                                                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2"
                                                    maxLength={150}
                                                />
                                                <button
                                                    onClick={AddComment}
                                                    className={'text-white bg-slate hover:bg-purple rounded px-4 py-2'}
                                                >
                                                    Ajouter
                                                </button>
                                            </form>

                                            <div className="mt-4">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={() => setIsReview(false)}
                                                >
                                                    Fermer
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                    <div className='flex flex-wrap mt-5 bg-slate/10 rounded p-5'>
                        {
                            bookRatingData && bookRatingData.length > 0 ?
                                bookRatingData.map((review, index) => {
                                    return (
                                        <Comment key={index} review={review} />
                                    )
                                }):
                                <div className='text-xs'>Pas de données à afficher pour le moment...</div>
                        }
                    </div>
                </div>
                {/* Livres recommandes */}
                <div className='mt-20 flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <h3 className=' text-lg font-semibold'>Recommandés</h3>
                        <button className='p-2 rounded text-yellow font-semibold underline'>Tout voir</button>
                    </div>
                    <div className='flex  mt-5'>
                        <span className=' text-xs'>Pas de données à afficher pour le moment...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
       <div className={`${loading ? 'block': 'hidden'}`}>
           <div className='fixed inset-0 flex items-center justify-center w-full'>
               {loading && <Loading />}

           </div>
       </div>
    <Footer />
   </>
  )
}
