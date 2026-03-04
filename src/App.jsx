import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='bg-[#F5F5F5]'>
        {/* Navbar Section */}
        <Navbar/>
        {/* Banner Section */}
        <Banner/>
      </div>
    </>
  )
}

export default App
