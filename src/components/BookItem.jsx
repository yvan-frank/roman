import { NavLink } from "react-router-dom";
import { bookViewRoute } from "../routes";
import {useEffect} from "react";
import LazyLoadImage from "./LazyLoadImage.jsx";
import {placeHolderImage} from "../api/index.js";


const BookItem = ({ book = []}) => {
    let bookName = 'La vérité sur l\'amour\n'


    return (
        <div className="w-52 bg-white rounded-lg mb-4 mr-5">
        <div className="flex flex-col justify-between items-center p-4 w-full">
          <div className="w-full">
            {/*<img className="w-full h-60" src="https://picsum.photos/600/400" alt="Image de livre" />*/}
              <LazyLoadImage
                  placeholderSrc={placeHolderImage}
                  src="https://assets.dreame.com/dreame/image/96a5b352f4aa9f2424c4894b8a5f03fd.png@.webp"
                  className='"w-full h-60'
                  placeholderClass='"w-full h-60'
              />
          </div>
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-2 text-slate">
                {bookName.length > 50 ? bookName.slice(0,50)+'...':bookName}
            </h2>
        
            <p className="text-xs mb-2 text-purple">Rabipek</p>
            <div className="flex justify-between">
              <a href="#" className="text-yellow text-sm">Acheter</a>
              <NavLink to={bookViewRoute} className=" text-slate font-semibold text-sm">En savoir plus</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BookItem;