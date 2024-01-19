import React, {useEffect, useState} from 'react'
import BookItem from '../../components/BookItem'
import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'
import Loading from "../../components/Loading.jsx";
import Hero from "../../components/Hero.jsx";
import MobileUser from "../../components/MobileUser.jsx";
import Head from "../../components/Head.jsx";
import {baseUrl, fetchBooks} from "../../api/index.js";
import axios from "axios";
import {useQuery} from "react-query";

export default function HomePage() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openNav, setOpenNav] = useState(false);



    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res = await fetchBooks();
        if (res) {
            console.log(res.data)
            setResults(res.data);
            setLoading(false);
        }
        // axios.get('https://api.rabipeknovel.com/api/book-list?page=1').then((res) => {
        //     setResults(res.data);
        //     setLoading(false);
        // }).catch(error => {
        //     console.log(error)
        //     setLoading(false);
        // })
    };

    // const {isLoading, error, data} = useQuery('book', () =>
    //     fetch(baseUrl + '/book-list?page=1').then(res => res.json()))
    //  console.log(data)
    // console.log('Error => ', error)
    return (
    <>
        <Head
            title='Rabipek Novel - Voyage dans un monde de passion enchantée'
            description='Rabipek Novel est une plateforme de lecture de roman'
            url={window.location.href}
        />
        <MobileUser openNav={openNav} setOpenNav={() => setOpenNav(!openNav)} />
        <TopBar />
        <Header open={openNav} setOpen={setOpenNav} />

        <Hero />
        <div className=' max-w-7xl mx-auto px-4 overflow-hidden'>
            {
                loading &&
                <div className='flex justify-center items-center mt-10'>
                    <Loading />
                </div>
            }
            <div className='flex flex-col mt-14'>
                <div className='flex justify-between'>
                    <h2 className=' font-bold md:text-2xl lg:text-3xl text-purple'>Populaires</h2>
                    <span className='text-sm md:text-base'>Tout voir</span>
                </div>
                <div className='flex flex-wrap mt-5 md:bg-slate/10 p-5'>
                    {
                        results && results.map((book, i) => {
                            return <BookItem key={i} book={book} />
                        })
                    }


                </div>
            </div>
            <div className='flex flex-col mt-14'>
                <div className='flex justify-between'>
                    <h2 className=' font-bold md:text-2xl lg:text-3xl text-purple'>Recommandations</h2>
                    <span className='text-sm md:text-base'>Tout voir</span>
                </div>
                <div className='flex flex-wrap mt-5'>
                    <span className='text-center text-xs md:text-lg'>Pas de données à afficher pour le moment...</span>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
