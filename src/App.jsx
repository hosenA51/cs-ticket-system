import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'

const fetchTickets = async () => {
  const res = await fetch("/tickets.json")
  return await res.json()
}

function App() {

  const ticketsPromise = fetchTickets()

  return (
    <>
      <div className='bg-[#F5F5F5]'>
        {/* Navbar Section */}
        <Navbar></Navbar>

        {/* Main Section */}
        <Suspense fallback={<div className='w-full min-h-screen flex items-center justify-center'><span className="loading loading-bars loading-xl text-black"></span></div>}>
          <MainContent ticketsPromise={ticketsPromise}></MainContent>
        </Suspense>

        {/* Footer Section */}
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
