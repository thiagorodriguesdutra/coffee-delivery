import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <header className="py-8 w-full flex justify-between">
      <img src={logo} alt="" />
      <div className="flex items-center justify-center gap-3">
        <div className="p-2 bg-purple-light text-purple-dark rounded-md flex items-center justify-center">
          <MapPin size={22} />
          <a
            href="https://goo.gl/maps/VnADMxMJ6MWdr7aM6"
            target={'_blank'}
            rel="noreferrer"
          >
            Uberaba, MG
          </a>
        </div>
        <NavLink to="/checkout" className="p-2 bg-yellow-light rounded-md">
          <span className="w-5 h-5 absolute top-14 right-[155px] text-white grid place-items-center text-12 leading-130 font-bold rounded-full bg-yellow-dark">
            2
          </span>
          <ShoppingCart size={22} className=" text-yellow-dark" />
        </NavLink>
      </div>
    </header>
  )
}
