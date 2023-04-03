import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { ProductCard } from "../../components/ProductCard";

export function Checkout() {
  return (
    <>
    <div>
    <form>
        <div>
          <MapPin />
          <fieldset>
            <legend>Ederenço de Entrega</legend>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <div>
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <div>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </div>
              <div>
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </div>
            </div>
          </fieldset>
        </div>
      </form>
      <div>
        <div>
            <div>
                <CurrencyDollar />
                <div>
                    <span>Pagamento</span>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </div>
            <div>
                <button>
                    <CreditCard />
                    CARTÃO DE CRÉDITO
                </button>
                <button>
                    <Bank />
                    CARTÃO DE DÉBITO
                </button>
                <button>
                    <Money />
                    DINHEIRO
                </button>
            </div>
        </div>
      </div>
    </div>
    <div>
        <strong>Cafés selecionados</strong>
        <div>
            { /* <ProductCard fill={true} /> */ }
            <table>
                <thead>
                    <tr>
                        <th>Total de itens</th>
                        <th>Entrega</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>R$ 3,50</td>
                        <td>33,20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
  );
}
