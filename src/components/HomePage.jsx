import { useState, useEffect } from "react";
import { useAtom } from 'jotai'
import {allProducts} from "../atom/statesAtom.jsx";
import {productSelect} from "../atom/statesAtom.jsx";
import { Link } from "react-router-dom";

function HomePage() {
    const [products, setProducts] = useAtom(allProducts)
    const [selectProduct, setSelectProduct] = useAtom(productSelect)

    useEffect(() => {
        fetch("https://apiproducts.up.railway.app/api/products")
          .then((response) => response.json())
          .then((data) => {
            const getAllProducts = data.products;
            setProducts(getAllProducts);
          });
      }, []);


    function handleClick(prod) {
        setSelectProduct(prod)
        localStorage.setItem('productSelect', JSON.stringify(prod))
    }


    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <img className='w-[5rem] h-[5rem]' src={product.image} alt={product.name} />
                    <p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <Link to='/infoproduct'><button onClick={() => handleClick(product)} className='bg-black text-white p-[.5rem] rounded-[.4rem]'>Comprar</button></Link>
                </div>
            ))}
        </div>
    )
}

export default HomePage