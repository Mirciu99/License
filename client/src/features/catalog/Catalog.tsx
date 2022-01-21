import { useEffect, useState } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList"



export default function Catalog(){
    const [products, SetProducts] = useState<Product[]>([]);
    console.log(products);
  
    useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => SetProducts(data))
    }, [])
  

    return (
        <>
            <h1>Catalog</h1>
            <ProductList products={products}/>
        </>
    )
}