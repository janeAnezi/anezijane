import { useState } from 'react'
import logo from '../../public/my-logo.png'



const NavItems = () => {
    return(
        <div>
            
        </div>
    )
}


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

  return (
    <header className="fixed top-0 left-0     right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space ">
                
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors flex items-center">
                    <img src={logo} alt="my profile logo" className='w-20' />
                    <span>Anezi Jane</span>
                </a>

                <button onClick={toggleMenu} className='text-neutral-400 font-bold text-xl hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle menu'>
                    <img src={isOpen ? 'public/assets/close.svg' : 'public/assets/menu.svg'} alt="menu icon toggle" className='w-6 h-6'/>
                </button>


                <nav className='sm:flex hidden'>
                    <NavItems />

                </nav>

            </div>
        </div>
    </header>
  )
}
