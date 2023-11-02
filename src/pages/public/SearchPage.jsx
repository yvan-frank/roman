import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSearchParams } from 'react-router-dom'

export default function SearchPage() {
  const [params] = useSearchParams()
  const query = params.get('q')
  return (
    <div>
      <Header />
        <div className='h-screen'>
          <div className='flex flex-col items-center mt-20'>
            <h2 className='text-3xl'>Recherche: </h2>
            <span className=' font-bold'>{query}</span>
          </div>
        </div>
      <Footer />
    </div>
  )
}
