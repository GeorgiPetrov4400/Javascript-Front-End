import { ReactComponent as BuyIcon } from '../../assests/buy-icon.svg';
import { ReactComponent as RemoveIcon } from '../../assests/remove-icon.svg';


function ShoppingCartItem(individualProduct) {
   const { name, cost, imgUrl, isBought } = individualProduct;
   const inlineStyle = {
      textDecoration: isBought ? 'line-through' : 'none'
   };
   const handleByItem = () => {

   };
   const handleRemoveItem = () => {

   };

   return (
      <article style={inlineStyle} className="shopping-cart__item-container">
         <img className="shopping-cart__item-img" src={imgUrl} alt="Item" />
         <p className="shopping-cart__item-name">{name}</p>
         <p className="shopping-cart__item-cost">{cost.toFixed(2)}$</p>
         <div className="shopping-cart__item-actions">
            {
               !isBought && (
                  <button onClick={handleByItem} className="shopping-cart__item--buy-btn">
                     <span>Buy</span>
                     <BuyIcon />
                  </button>
               )
            }

            <button onClick={handleRemoveItem} className="shopping-cart__item--remove-btn">
               <span>Remove</span>
               <RemoveIcon />
            </button>
         </div>
      </article>
   )
}

export default ShoppingCartItem;