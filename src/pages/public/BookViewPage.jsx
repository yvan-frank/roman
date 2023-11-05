import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {BiSolidUser} from 'react-icons/bi'
import BookItem from '../../components/BookItem'
import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'


export default function BookViewPage() {
    const [tabOpen, setTabOpen] = useState(1)
  return (
   <>
        <TopBar />
        <Header />
     <div className='max-w-7xl mx-auto lg:p-2 px-4 overflow-hidden'>
        <div className='w-full block lg:flex mt-20'>
            <div className='lg:w-1/4 flex flex-col lg:mr-5'>
                <img className="w-full h-auto" src="https://picsum.photos/600/400" alt="Image de livre" />
                <a className='mt-5 p-2 border-2 rounded border-slate/20 text-center font-bold uppercase hover:bg-yellow
                cursor-pointer duration-150 hover:text-white hover:border-yellow'>
                    Lire l'extrait en ligne
                </a>
                <a className='mt-5 p-2 border-2 rounded border-slate/20 text-center font-bold uppercase hover:bg-yellow
                cursor-pointer duration-150 hover:text-white hover:border-yellow'>
                    Télécharger l'extrait
                </a>
            </div>
            <div className='lg:w-3/4 lg:ml-5 flex flex-col'>
                {/* Book tilte */}
                <div className='flex flex-col mb-14 mt-10 lg:mt-0'>
                    <h1 className='font-bold text-4xl'>Book title</h1>
                    <p className='text-lg'>de <NavLink className='text-yellow'>Asha Lemmie</NavLink> (Auteur)</p>
                </div>
                {/* Buy */}
                <div className='mb-20'>
                    <NavLink className='py-4 px-8 duration-500 bg-yellow hover:bg-purple rounded text-white font-semibold'>Acheter pour 5000 FCFA</NavLink>
                </div>
                {/* category */}
                <div className='flex flex-wrap'>
                    <div className='text-center mr-2 lg:mr-5'>
                        <p className=' duration-150 py-2 px-2 lg:px-5 rounded-full border border-slate/20 font-semibold cursor-pointer hover:bg-slate/20 hover:border-slate/10'>
                            Science-fiction
                        </p>
                    </div>
                    <div className='text-center mr-5'>
                        <p className=' duration-150 py-2 px-5 rounded-full border border-slate/20 font-semibold cursor-pointer hover:bg-slate/20 hover:border-slate/10'>
                            Science
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
                            <h3 className='font-semibold'>
                            Un premier roman bouleversant sur le passage à l'âge adulte d’une jeune femme dans le Japon de l’après Seconde Guerre mondiale
                            </h3>
                            <p>
                            Kyoto, 1948. Nori Kamiza n’a que huit ans lorsque sa mère la laisse devant l’immense demeure de sa grand-mère. La famille Kamiza est parmi les plus nobles du Japon, or Nori, aux cheveux crépus et à la peau foncée, est le fruit d'une relation scandaleuse avec un gaijin, un étranger, noir de surcroît. Alors sa grand-mère l’accueille, mais va tout faire pour la cacher. Elle l’installe au grenier et l'oblige à subir des traitements pour la rendre plus « japonaise » : elle lui lisse les cheveux et la soumet à des bains d'eau de Javel pour blanchir sa peau. Nori accepte son sort, malgré sa curiosité lancinante pour ce qui se trouve à l’extérieur des murs du grenier. Mais lorsque le hasard amène son demi-frère aîné légitime, Akira, sur le domaine qui est son héritage et son destin, Nori accède à un monde nouveau. Un monde dans lequel elle n’est pas une intruse, mais un être libre, digne d’être aimé. Cependant tout a un prix. Et la liberté de Nori exigera plus d’un sacrifice…

                            </p>
                        </div>
                    </div>
                    <div className={`${tabOpen === 2 ? 'block': 'hidden'}`}>
                        <table className=' text-left'>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Format</th>
                                <tr>EPUB</tr>
                            </tr>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Protection</th>
                                <tr>Avec DRM</tr>
                            </tr>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Date de publication</th>
                                <tr>4 octobre 2023</tr>
                            </tr>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Editeur</th>
                                <tr>HarperCollins</tr>
                            </tr>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Nombre de pages</th>
                                <tr>400</tr>
                            </tr>
                            <tr>
                                <th className='pr-10 pb-3 font-semibold'>Langue</th>
                                <tr>Français</tr>
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
                    <div className='w-96 bg-white py-2 px-3 rounded border border-slate/10 mt-5 lg:mt-0'>
                        <div className=' w-full flex flex-col justify-start'>
                           <div className='flex items-center'>
                                <div className='h-10 w-10 rounded-full bg-slate/10 flex items-center justify-center'>
                                    <BiSolidUser />
                                </div>
                                <div className='flex flex-col text-sm ml-3'>
                                    <span className=' font-semibold'>VAns</span>
                                    <span className='text-xs'>28 may</span>
                                </div>
                           </div>
                           <p className='mt-5 mb-2'>Good book</p>
                        </div>
                    </div>
                </div>
                {/* Livres recommandes */}
                <div className='mt-20 flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <h3 className=' text-lg font-semibold'>Recommandés</h3>
                        <button className='p-2 rounded text-yellow font-semibold underline'>Tout voir</button>
                    </div>
                    <div className='flex flex-wrap justify-center lg:justify-start mt-5'>
                        <BookItem />
                        <BookItem />
                        <BookItem />
                        <BookItem />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
   </>
  )
}
