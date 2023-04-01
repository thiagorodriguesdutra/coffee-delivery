import { Minus, Plus, ShoppingCart } from "phosphor-react";
import expresso from "../assets/expresso.png";

export function ProductCard() {
  return (
    <div className="px-6 py-4 max-w-[256px] max-h-[350px] text-center rounded-tl-[0.375rem] rounded-br-[0.375rem] bg-base-card rounded-tr-[2.25rem] rounded-bl-[2.25rem] flex flex-col items-center gap-4">
      <img src={expresso} alt="" className="" />
      <span className=" px-2 py-1 bg-yellow-light rounded-[25%] text-[0.625rem] leading-tight text-yellow-dark font-bold ">
        TRADICIONAL
      </span>
      <strong className="block cursive text-[1.25rem] leading-tight">
        Expresso Tradicional
      </strong>
      <p className=" text-sm text-base-label leading-tight">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className="flex items-center justify-between gap-[1.5rem]">
        <div>
          <span className="text-sm pr-1 ">R$</span>
          <strong className="cursive text-2xl text-base-text font-extrabold">
            9,90
          </strong>
        </div>
        <div className="flex gap-4">
          <div className="w-[4.5rem] h-[2.375rem] bg-base-button rounded-md flex items-center justify-center gap-1">
            <Minus />
            <span>1</span>
            <Plus />
          </div>
          <button className="w-[2.375rem] h-[2.375rem] bg-purple-dark rounded-md text-white flex items-center justify-center">
            <ShoppingCart size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
