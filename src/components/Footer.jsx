import React from 'react'
import appleLogo from '../assets/apple.png'
import playLogo from '../assets/playstore.png'

export default function Footer() {
  return (
    <div className='border-t border-slate/20 mt-20'>
        <div className='max-w-4xl mx-auto p-5'>
            <div className='grid grid-cols-3 gap-5'>
                <div className='flex flex-col bg-slate/5 p-4'>
                    <h2 className=' text-purple font-bold text-4xl'>Rapek Novel</h2>
                    <p className=' text-slate font-medium'>Voyage dans un monde de passion enchantée</p>
                </div>
                <div>
                    <div className='flex p-1 w-[7.5rem] bg-black cursor-pointer items-center rounded text-white/80'>
                        <div className='mr-1'>
                            <img className='w-6' src={playLogo} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[0.6rem] -tracking-wider uppercase'>disponible sur</span>
                            <span className=' font-bold text-sm'>Google Play</span>
                        </div>
                    </div>
                    <div className='flex p-1 w-[7.5rem] bg-black cursor-pointer items-center rounded text-white/80 mt-2'>
                        <div className='mr-1'>
                            <img className='w-6' src={appleLogo} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[0.6rem] -tracking-wider'>Télécharger dans</span>
                            <span className=' font-bold text-sm'>l'App Store</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
