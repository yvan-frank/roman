import React from 'react'
import TopBar from '../../components/TopBar'
import Header from '../../components/Header'

export default function Library() {
  return (
	<>
		<TopBar />
		<Header />
		<div className='h-screen flex items-center justify-center'>
			<h1 className='font-bold text-2xl'>No book added</h1>
		</div>
	</>
  )
}
