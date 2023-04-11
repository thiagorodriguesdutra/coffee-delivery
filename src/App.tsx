import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Header } from './components/Header'
import { Checkout } from './pages/checkout/Checkout'
import { Home } from './pages/home/Home'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
