import { NavLink } from "react-router-dom";
import { bookViewRoute } from "../routes";
import {useEffect} from "react";
import LazyLoadImage from "./LazyLoadImage.jsx";
import {placeHolderImage} from "../api/index.js";
import {BsArrowRight} from "react-icons/bs";
import {FaLongArrowAltRight} from "react-icons/fa";



const BookItem = ({  book = []}) => {
    let bookName = 'La vérité sur l\'amour\n'
    //const key = 'RABIPEK'
    //generate key
    const generateKey = () => {
        let text = ''
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return text
    }
    const key = generateKey()

    return (
        <>
            <div className='md:w-2/5 flex flex-col justify-center lg:flex-row h-[28rem] lg:h-72 bg-white rounded md:p-2 lg:m-2'>
                <LazyLoadImage
                    placeholderSrc={placeHolderImage}
                    src={book.back_cover}
                    className='w-44 h-auto border rounded mr-2'
                    placeholderClass='w-44  h-auto border rounded mr-2'
                />
                <div className='pt-5 flex flex-col md:justify-between'>
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-slate">
                            {book.name.length > 50 ? book.name.slice(0, 50) + '...' : book.name}

                        </h2>
                        <p className='italic text-sm'>Extrait du livre</p>
                        <p className='tracking-widest'>{book.description.length > 100 ? book.description.slice(0, 100) + '...' : book.description}</p>

                    </div>
                    <a

                        href={`${bookViewRoute}?sourceid=${key}&bookid=${book.book_id}`}
                        className='text-white text-sm md:text-lg bg-purple p-2  w-44
                    rounded text-center flex items-center justify-between border-2 border-purple
                    hover:bg-white hover:text-purple'>
                        <span
                           className="">
                            Voir le livre
                        </span>
                        <FaLongArrowAltRight  size={20}/>
                    </a>
                </div>
            </div>
            {/*<div*/}
            {/*    className="w-28 md:w-52 bg-white rounded-lg mb-4 m-1 lg:mr-5 border border-slate/10 shadow-xl hover:shadow-none duration-200">*/}
            {/*    <div className="flex flex-col justify-between items-center p-1 lg:p-4 w-full">*/}
            {/*        <div className="w-full">*/}
            {/*            /!*<img className="w-full h-60" src="https://picsum.photos/600/400" alt="Image de livre" />*!/*/}
            {/*            <LazyLoadImage*/}
            {/*                placeholderSrc={placeHolderImage}*/}
            {/*                src={book.back_cover}*/}
            {/*                className='w-full md:h-60 h-32'*/}
            {/*                placeholderClass='w-full md:h-60 h-32'*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <div className="w-full">*/}
            {/*            <h2 className="text-xs md:text-lg font-semibold mb-2 text-slate">*/}
            {/*                {book.name.length > 50 ? book.name.slice(0, 50) + '...' : book.name}*/}
            {/*            </h2>*/}

            {/*            <p className="text-[0.6rem] md:text-xs mb-2 text-purple tracking-wider">{book.author_name}</p>*/}
            {/*            <div className="flex justify-between flex-col md:flex-row">*/}
            {/*                <a href={`${bookViewRoute}?sourceid=${key}&bookid=${book.book_id}`}*/}
            {/*                   className="text-yellow font-semibold text-xs md:text-sm bg-yellow/10 md:p-2 p-0.5 rounded text-center">*/}
            {/*                    Acheter*/}
            {/*                </a>*/}
            {/*                /!*<NavLink to={`${bookViewRoute}?sourceid=${key}&bookid=${book.book_id}`} className=" text-slate-600 font-semibold text-xs md:text-sm">En savoir plus</NavLink>*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    );
};

export default BookItem;