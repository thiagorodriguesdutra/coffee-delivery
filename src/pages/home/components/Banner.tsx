import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import bannerImage from '../../../assets/banner-image.png'

export function Banner() {
    return (
        <div className="  flex items-center justify-center gap-12">
            <div className="w-full max-w-[588px]">
                <h1 className="text-base-title text-[48px] leading-tight font-extrabold">Encontre o café perfeito para qualquer hora do dia</h1>
                <p className=" mt-4 text-base-subtitle text-[20px] leading-tight">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5">
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-full bg-yellow-dark text-white">
                            <ShoppingCart />
                        </span>
                        <strong>Compra simples e segura</strong>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-full bg-yellow text-white">
                            <Timer />
                        </span>
                        <strong>Entrega rápida e rastreada</strong>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="p-2 rounded-full bg-base-text text-white">
                            <Package />
                        </span>
                        <strong>Embalagem mantém o café intacto</strong>
                    </div>
                    <div className="flex items-center gap-3 leading-tight">
                        <span className="p-2 rounded-full bg-purple text-white">
                            <Coffee />
                        </span>
                        <strong>O café chega fresquinho até você</strong>
                    </div>
                </div>
            </div>
            <img className="max-w-[476x] max-h-[360px] object-fill" src={bannerImage} alt="" />
        </div>
    )
}