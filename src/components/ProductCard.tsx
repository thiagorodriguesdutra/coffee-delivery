import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react";
import expresso from "../assets/expresso.png";

let productApparence = "cart";

export function ProductCard() {
  return productApparence === "cart" ? (
    <div className="px-6 py-4 max-w-[256px] max-h-[350px] bg-base-card text-center rounded-tl-[0.375rem] rounded-br-[0.375rem] rounded-tr-[2.25rem] rounded-bl-[2.25rem] flex flex-col items-center gap-4">
      <img src={expresso} alt="" className="" />
      <span className=" px-2 py-1 bg-yellow-light text-yellow-dark text-[0.625rem] font-bold rounded-[25%] leading-tight">
        TRADICIONAL
      </span>
      <strong className="block cursive text-20 leading-130">
        Expresso Tradicional
      </strong>
      <p className=" text-sm text-base-label leading-130">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className="flex items-center justify-between gap-[1.5rem]">
        <div>
          <span className="pr-1 text-sm">R$</span>
          <strong className="cursive text-2xl text-base-text font-extrabold">
            9,90
          </strong>
        </div>
        <div className="flex gap-4">
          <div className="p-2 w-[4.5rem] h-[2.375rem] bg-base-button rounded-md flex items-center justify-center gap-1">
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </div>
          <button className="w-[2.375rem] h-[2.375rem] bg-purple-dark rounded-md text-white flex items-center justify-center hover:bg-purple  ">
            <ShoppingCart size={22} />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="p-2 text-center bg-base-card flex items-start gap-4">
      <img src={expresso} alt="" className=" max-w-[64px]" />
      <div className="flex flex-col items-start justify-center gap-2">
        <strong className="text-base-subtitle leading-130 text-16">
          Expresso Tradicional
        </strong>
        <div className="flex gap-2 items-center justify-center">
          <div className="p-1 w-[4.5rem] bg-base-button rounded-md flex items-center justify-center gap-1">
            <button>
              <Minus className="text-purple" />
            </button>
            <span>1</span>
            <button>
              <Plus className="text-purple" />
            </button>
          </div>

          <div className="p-2 w-full bg-base-button rounded-md hover:bg-base-hover">
            <button className="flex items-center justify-center gap-1 text-12 text-base-text ">
              <Trash size={16} className=" text-purple" />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <strong className="cursive text-16 text-2xl text-base-text font-bold leading-none">
        R$ 9,90
      </strong>
    </div>
  );
}
