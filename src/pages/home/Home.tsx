import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { Banner } from "./components/Banner";

export function Home() {
    const products = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    return (
        <>
        <Header />
        <Banner />
        <div className="mt-[8.75rem] max-w-[1120px]">
            <strong>Nossos cafés</strong>
            <div className="grid grid-cols-4 place-items-center">
                {products.map((item) => <ProductCard key={new Date().getMilliseconds()} />)}
            </div>
        </div>
        </>
    )
}