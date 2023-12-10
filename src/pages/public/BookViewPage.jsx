import React, {useEffect, useState} from 'react'
import {NavLink, useSearchParams} from 'react-router-dom'
import {BiSolidUser} from 'react-icons/bi'
import BookItem from '../../components/BookItem'
import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'
import {fetchBookDetails, placeHolderImage} from "../../api/index.js";
import LazyLoadImage from "../../components/LazyLoadImage.jsx";
import {root} from "../../routes/index.js";
import {TbMathGreater} from "react-icons/tb";
import MobileUser from "../../components/MobileUser.jsx";
import Loading from "../../components/Loading.jsx";
import Comment from "../../components/Comment.jsx";


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

    const getData = async () => {
        const res = await fetchBookDetails({book_id: bookId});
        if (res) {
            setResults(res.data);
            //console.log(res.book_detail[0])
            setBookDetails(res.book_detail[0])
            setAuthorBookList(res.author_book_list)
            setAuthorDetails(res.author_detail[0])
            setLoading(false)
        }
    }

    useEffect(() => {
       getData()
    }, []);
    const [openNav, setOpenNav] = useState(false);


    return (
   <>
       <MobileUser openNav={openNav} setOpenNav={() => setOpenNav(!openNav)} />
       <TopBar />
       <Header open={openNav} setOpen={setOpenNav} />

       <div className='w-full bg-slate/5 p-3 px-5 lg:px-10 overflow-hidden'>
           <ul className='flex items-center text-sm overflow-x-scroll'>
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
                    <p className='md:text-lg text-sm'>de <NavLink className='text-purple'>{authorDetails?.name}</NavLink> (Auteur)</p>
                </div>
                {/* Buy */}
                <div className='mb-20'>
                    <NavLink
                        className='py-4 px-8 duration-500 bg-yellow hover:bg-purple rounded text-white font-semibold text-sm md:text-base'>
                        Acheter pour {bookDetails?.price} FCFA
                    </NavLink>
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
                        <button className='p-2 bg-yellow rounded text-white font-semibold'>Ecrire un Commentaire</button>
                    </div>
                    <div className='block mt-5'>
                        {
                            userReviewData && userReviewData.length > 0 ?
                                userReviewData.map((review, index) => {
                                    return (
                                        <Comment />
                                    )
                                }):
                                <span className='text-center text-xs flex'>Pas de données à afficher pour le moment...</span>
                        }
                    </div>
                </div>
                {/* Livres recommandes */}
                <div className='mt-20 flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <h3 className=' text-lg font-semibold'>Recommandés</h3>
                        <button className='p-2 rounded text-yellow font-semibold underline'>Tout voir</button>
                    </div>
                    <div className='flex flex-wrap justify-center lg:justify-start mt-5'>
                        <span className='text-center text-xs'>Pas de données à afficher pour le moment...</span>
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
