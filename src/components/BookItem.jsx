import { NavLink } from "react-router-dom";
import { bookViewRoute } from "../routes";
import {useEffect} from "react";
import LazyLoadImage from "./LazyLoadImage.jsx";
import {placeHolderImage} from "../api/index.js";



const BookItem = ({ keyY, book = []}) => {
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
        <div className="w-52 bg-white rounded-lg mb-4 mr-5" key={keyY}>
        <div className="flex flex-col justify-between items-center p-4 w-full">
          <div className="w-full">
            {/*<img className="w-full h-60" src="https://picsum.photos/600/400" alt="Image de livre" />*/}
              <LazyLoadImage
                  placeholderSrc={placeHolderImage}
                  src={book.back_cover}
                  className='"w-full h-60'
                  placeholderClass='"w-full h-60'
              />
          </div>
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-2 text-slate">
                {book.name.length > 50 ? book.name.slice(0,50)+'...':book.name}
            </h2>
        
            <p className="text-xs mb-2 text-purple tracking-wider">{book.author_name}</p>
            <div className="flex justify-between">
              <a href="#" className="text-yellow text-sm">Acheter</a>
              <NavLink to={`${bookViewRoute}?sourceid=${key}&bookid=${book.book_id}`} className=" text-slate font-semibold text-sm">En savoir plus</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BookItem;