import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Checkout } from './pages/checkout/Checkout'
import { DefaultLayout } from './layouts/DefautLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
