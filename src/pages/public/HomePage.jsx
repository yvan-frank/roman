import React, {useEffect, useState} from 'react'
import BookItem from '../../components/BookItem'
import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'
import Loading from "../../components/Loading.jsx";
import Hero from "../../components/Hero.jsx";

export default function HomePage() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    return (
    <>
        <TopBar />
        <Header />
        <Hero />
        <div className=' max-w-7xl mx-auto px-4'>
            {
                loading &&
                <div className='flex justify-center items-center mt-10'>
                    <Loading />
                </div>
            }
            <div className='flex flex-col mt-14'>
                <div className='flex justify-between'>
                    <h2 className=' font-bold text-2xl lg:text-3xl text-purple'>Populaires</h2>
                    <span>Tout voir</span>
                </div>
                <div className='flex flex-wrap mt-5'>
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </div>
            </div>
            <div className='flex flex-col mt-14'>
                <div className='flex justify-between'>
                    <h2 className=' font-bold text-2xl lg:text-3xl text-purple'>Recommandations</h2>
                    <span>Tout voir</span>
                </div>
                <div className='flex flex-wrap mt-5'>
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
