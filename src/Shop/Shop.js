import { useEffect, useState } from "react"
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css'
import { addToDb, getShoppingCart } from "../utilities/fakedb";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        // .then(data => console.log(data))

    }, [])

        // mod- 51 lec - 4...........................................................

        useEffect(()=>{
            const storedCart = getShoppingCart();
            console.log(storedCart);
        })


    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);

        // mod- 51 lec - 4...........................................................
        addToDb(product.id)
    }

    return(
        <div className="container">
            {/* <h2>Total products - {products.length}</h2> */}

        <div className="products-container">

            {
                products.map(product => <Product key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
            }

        </div>

        <div>
           
        </div>
        <Cart cart={cart}></Cart>

        </div>
        
    )
}

export default Shop;