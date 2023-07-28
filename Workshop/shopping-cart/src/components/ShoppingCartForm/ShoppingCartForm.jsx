import { useEffect, useState } from "react";
import { ReactComponent as AddIcon } from '../../assests/add-icon.svg';
import { addProductToCart } from "../../services/product-service";

function ShoppingCartForm() {
    let [itemName, setItemName] = useState('');
    let [itemCost, setItemCost] = useState('');
    let [itemImgUrl, setItemImgUrl] = useState('');

    const addButtonHandler = (event) => {
        event.preventDefault();
        addProductToCart(itemName, itemCost, itemImgUrl)
            .then((res) => {
                setItemName('');
                setItemCost('');
                setItemImgUrl('');
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <form>
            <div className="shopping-cart__form-control"><input value={itemName} type="text" name="item-name" placeholder="Name" onChange={(e) => setItemName(e.target.value)} /></div>
            <div className="shopping-cart__form-control"><input value={itemCost} type="number" name="item-cost" placeholder="Cost" onChange={(e) => setItemCost(e.target.value)}/></div>
            <div className="shopping-cart__form-control"><input value={itemImgUrl} type="text" name="item-image" placeholder="Place image url here" onChange={(e) => setItemImgUrl(e.target.value)}/></div>
            <div className="shopping-cart__form-control">
                <button disabled={!itemName || !itemCost || !itemImgUrl} type="submit" onClick={addButtonHandler}>
                    <span>Add</span>
                    <AddIcon />
                </button>
            </div>
        </form>
    )
}

export default ShoppingCartForm;