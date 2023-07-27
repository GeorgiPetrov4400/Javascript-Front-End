import { useState } from "react";
import ShoppingCartForm from "../ShoppingCartForm/ShoppingCartForm";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";

function ShoppingCart() {
    let [products, setProducts] = useState([
        { name: 'Milk', cost: 5, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Oat_milk_glass_and_bottles.jpg', isBought: true},
        { name: 'Bread', cost: 10, imgUrl: 'https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/5:4/w_2815,h_2252,c_limit/milk-bread.jpg', isBought: true},
        { name: 'Eggs', cost: 15, imgUrl: 'https://img.taste.com.au/oI-2zjyU/taste/2007/04/eggs-182316-1.jpg', isBought: false},
    ]);

    const totalPrice = products
        .filter((p) => p.isBought)
        .reduce((sum, product) => sum + product.cost, 0);

    return (
        <section className="shopping-cart__container">
            <ShoppingCartForm />
            <section className="shopping-cart__items-list">
                {
                    products.map((p, index) => (
                        <ShoppingCartItem key={index} {...p}/>
                    ))
                }
            </section>
            <div className="shopping-cart__total-price">
                <h1>Total Price: {totalPrice}$</h1>
            </div>
        </section>
    )
}

export default ShoppingCart;