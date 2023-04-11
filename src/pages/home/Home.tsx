import { useState } from 'react'
import { ProductCard } from '../../components/ProductCard'
import { Banner } from './components/Banner'

export interface ProductProps {
  id: number
  apparence?: 'slim'
  src: string
  category: string[]
  title: string
  description: string
  price: number
}

const products = [
  {
    id: 1,
    apparence: '',
    src: '/src/assets/tradicional.png',
    category: ['tradicional'],
    title: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 2,
    apparence: '',
    src: '/src/assets/american.png',
    category: ['tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 3,
    apparence: '',
    src: '/src/assets/cremoso.png',
    category: ['tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 4,
    apparence: '',
    src: '/src/assets/gelado.png',
    category: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 5,
    apparence: '',
    src: '/src/assets/cafe-com-leite.png',
    category: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 6,
    apparence: '',
    src: '/src/assets/latte.png',
    category: ['tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 7,
    apparence: '',
    src: '/src/assets/capuccino.png',
    category: ['tradicional', 'com leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 8,
    apparence: '',
    src: '/src/assets/macchiato.png',
    category: ['tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 9,
    apparence: '',
    src: '/src/assets/mocaccino.png',
    category: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 10,
    apparence: '',
    src: '/src/assets/chocolate.png',
    category: ['tradicional', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 11,
    apparence: '',
    src: '/src/assets/cubano.png',
    category: ['tradicional', 'alcoólico', 'gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 12,
    apparence: '',
    src: '/src/assets/havaiano.png',
    category: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 13,
    apparence: '',
    src: '/src/assets/arabe.png',
    category: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    quantity: 0,
    price: 9.9,
  },
  {
    id: 14,
    apparence: '',
    src: '/src/assets/irlandes.png',
    category: ['especial', 'alcoolico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    quantity: 0,
    price: 9.9,
  },
]

export function Home() {

  return (
    <>
      <Banner />
      <div className="mt-[5rem] flex items-center flex-col">
        <strong className="cursive text-base-subtitle text-32 leading-130 font-extrabold">
          Nossos cafés
        </strong>
        <div className="mt-8 grid gap-4 grid-cols-4 place-items-center xxl:grid-cols-3  xl:grid-cols-2">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.description}
                id={product.id}
                src={product.src}
                category={product.category}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
