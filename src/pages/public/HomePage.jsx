import React from 'react'
import BookItem from '../../components/BookItem'
import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'

export default function HomePage() {
  return (
    <>
        <TopBar />
        <Header />
        <div className=' max-w-7xl mx-auto px-4'>
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <h2 className=' font-bold text-2xl lg:text-3xl text-purple'>Populaires</h2>
                <span>Tout voir</span>
            </div>
            <div className='flex flex-wrap'>
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
                <h2 className=' font-bold text-2xl lg:text-3xl text-purple'>Populaires</h2>
                <span>Tout voir</span>
            </div>
            <div className='flex flex-wrap'>
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
