import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSearchParams } from 'react-router-dom'
import MobileUser from "../../components/MobileUser.jsx";
import TopBar from "../../components/TopBar.jsx";
import GeneralHeader from "../../components/index.jsx";

export default function SearchPage() {
  const [params] = useSearchParams()
  const query = params.get('q')


    useEffect(() => {
        document.title = "Recherche ";
    }, []);
  return (
    <div>
      <GeneralHeader title='Recherche'>
          <div className='flex flex-col items-center mt-20'>
              <h2 className='text-3xl'>Recherche: </h2>
              <span className=' font-bold'>{query}</span>
          </div>
          <Footer />
      </GeneralHeader>
    </div>
  )
}
