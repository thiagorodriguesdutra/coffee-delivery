import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { ProductCard } from '../../components/ProductCard'

export function Checkout() {
  return (
    <>
      <div className="flex gap-3 justify-center flex-wrap">
        <div>
          <strong className="cursive text-18 leading-130 font-bold text-base-subtitle">
            Complete seu pedido
          </strong>

          <div className="mt-4">
            <div className="max-w-[640px]">
              <form className="p-10 bg-base-card rounded-md">
                <div className="">
                  <fieldset>
                    <div className="flex gap-2">
                      <MapPinLine size={22} className="text-yellow-dark" />
                      <div>
                        <legend className="text-base-subtitle leading-130">
                          Endereço de Entrega
                        </legend>
                        <p className="text-14 text-base-text leading-130">
                          Informe o endereço onde deseja receber seu pedido
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 w-full flex flex-col gap-4">
                      <input
                        className="p-3 max-w-[200px] bg-base-input border border-base-button rounded"
                        type="text"
                        placeholder="CEP"
                      />
                      <input
                        className="p-3 bg-base-input border border-base-button rounded flex-1"
                        type="text"
                        placeholder="Rua"
                      />
                      <div className="flex gap-3">
                        <input
                          className="p-3 max-w-[200px] bg-base-input border border-base-button rounded"
                          type="text"
                          placeholder="Número"
                        />
                        <input
                          className="p-3 bg-base-input border border-base-button rounded flex-1"
                          type="text"
                          placeholder="Complemento"
                        />
                      </div>
                      <div className="flex gap-3">
                        <input
                          className="p-3 max-w-[200px] bg-base-input border border-base-button rounded"
                          type="text"
                          placeholder="Bairro"
                        />
                        <input
                          className="p-3 bg-base-input border border-base-button rounded flex-1"
                          type="text"
                          placeholder="Cidade"
                        />
                        <input
                          className="p-3 max-w-[60px] bg-base-input border border-base-button rounded"
                          type="text"
                          placeholder="UF"
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>

              <div className="mt-3 p-10 bg-base-card rounded-md FILHO 2">
                <div>
                  <div className="flex items-start justify-start gap-2">
                    <CurrencyDollar size={22} className="text-purple" />
                    <div className="">
                      <span className="text-16 text-base-subtitle leading-130">
                        Pagamento
                      </span>
                      <p className="text-14 text-base-text leading-130">
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button className="p-4 w-[11rem] bg-base-button text-base-text leading-160 text-12 rounded-md flex items-center justify-center gap-3 hover:bg-base-hover">
                      <CreditCard size={16} className="text-purple" />
                      CARTÃO DE CRÉDITO
                    </button>
                    <button className="p-4 w-[11rem] bg-base-button text-base-text leading-160 text-12 rounded-md flex items-center justify-center gap-3 hover:bg-base-hover">
                      <Bank size={16} className="text-purple" />
                      CARTÃO DE DÉBITO
                    </button>
                    <button className="p-4 w-[11rem] bg-base-button text-base-text leading-160 text-12 rounded-md flex items-center justify-start gap-3 hover:bg-base-hover">
                      <Money size={16} className="text-purple" />
                      DINHEIRO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <strong className="cursive text-18 leading-130 font-bold text-base-subtitle">
            Cafés selecionados
          </strong>
          <div className=" mt-4 p-10 bg-base-card rounded-tl-[0.375rem] rounded-br-[0.375rem] rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
            <div className="flex flex-col">
              <li className="pb-6 border-b border-base-button">
                <ProductCard
                  id={1}
                  apparence="slim"
                  src=""
                  category={[]}
                  title=""
                  description=""
                  price={100}
                />
              </li>
              <li className="pb-6 border-b border-base-button">
                <ProductCard
                  id={1}
                  apparence="slim"
                  src=""
                  category={[]}
                  title=""
                  description=""
                  price={100}
                />
              </li>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <span className="font-sans font-normal text-14 text-base-text leading-130">
                  Total de itens
                </span>
                <span className="font-sans font-normal text-16 text-base-text leading-130">
                  R$ 29,70
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-sans font-normal text-14 text-base-text leading-130">
                  Entrega
                </span>
                <span className="font-sans font-normal text-16 text-base-text leading-130">
                  R$ 3,50
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <strong className="text-base-subtitle leading-130 text-20 font-bold">
                  Total
                </strong>
                <strong className="text-base-subtitle leading-130 text-20 font-bold">
                  R$ 33,20
                </strong>
              </div>
            </div>

            <button className="mt-6 py-3 px-2 w-full bg-yellow text-white font-bold leading-160 text-14 rounded-md hover:bg-yellow-dark">
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
