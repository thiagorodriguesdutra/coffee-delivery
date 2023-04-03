import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { Banner } from "./components/Banner";

export function Home() {
    const products = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    return (
        <>
        <Header />
        <Banner />
        <div className="mt-[5rem]">
            <strong className="cursive text-base-subtitle text-32 leading-130 font-extrabold">Nossos cafés</strong>
            <div className=" mt-8 grid gap-4 grid-cols-4">
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            <ProductCard /> 
            </div>
        </div>
        </>
    )
}