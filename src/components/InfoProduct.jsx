import { Link } from 'react-router-dom'
import { productSelect } from '../atom/statesAtom'
import { useAtom } from 'jotai'

function InfoProduct() {

    const [selectProduct, setSelectProduct] = useAtom(productSelect)

    console.log(selectProduct);

    return (
        <div>
            <div>
                <img className='w-[5rem] h-[5rem]' src={selectProduct.image} alt="" />
                <div>
                    <p>{selectProduct.name}</p>
                    <p>{selectProduct.description}</p>
                    <p>{selectProduct.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <Link to='/pay'><button className='bg-black text-white p-[.5rem] rounded-[.4rem]'>Comprar</button></Link>
                </div>
            </div>
        </div>
    )
}

export default InfoProduct