import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
    return (
      <header className='mt-8 flex items-center justify-around'>
        <img src={logo} alt="" />
        <div className='flex items-center justify-center gap-3'>
            <div className='p-2 bg-purple-light text-purple-dark rounded-md flex items-center justify-center'>
                <MapPin size={22} />
                <a href="https://goo.gl/maps/VnADMxMJ6MWdr7aM6" target={'_blank'}>Uberaba, MG</a>
            </div>
            <button className='p-2 bg-yellow-light rounded-md'>
                <ShoppingCart size={22} />
            </button>
        </div>
      </header>
    )
}