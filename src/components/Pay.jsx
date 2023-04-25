import { productSelect } from "../atom/statesAtom";
import { useAtom } from "jotai";

function Pay() {

    const [selectProduct, setSelectProduct] = useAtom(productSelect)

    return (
        <div className='flex justify-evenly'>
            <div className='flex flex-col w-[18rem]'>
                <p>Pagamento</p>
                <form className='flex flex-col gap-[1rem]'>
                    <input className='border-black border-2' type="text" />
                    <input className='border-black border-2' type="text" />
                    <div className='flex justify-between'>
                        <input className='border-black border-2 w-[7.5rem]' type="text" />
                        <input className='border-black border-2 w-[7.5rem]' type="text" />
                    </div>
                </form>

                <button className='bg-black text-white mt-[1rem] p-[.5rem]'>Pagar Agora</button>
            </div>

            <div>
                <p>Resumo da Compra</p>
                <p>{selectProduct.name}</p>
                <p>{selectProduct.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
        </div>
    )
}

export default Pay