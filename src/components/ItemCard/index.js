import {useContext, useState} from 'react'
import {BiFoodTag} from 'react-icons/bi'
import CartContext from '../../utils/CartContext'
import './index.css'

function ItemCard(props) {
  const {incrementCartItemQuantity, decrementCartItemQuantity} = useContext(
    CartContext,
  )
  const {itemData} = props
  const {
    dish_Type,
    dish_name,
    dish_currency,
    dish_price,
    dish_description,
    dish_Availability,
    addonCat,
    dish_calories,
    dish_image,
  } = itemData

  const [quantity, setQuantity] = useState(0)

  const onIncrementQuantity = () => {
    setQuantity(prev => prev + 1)
    incrementCartItemQuantity()
  }

  const onDecrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1)
      decrementCartItemQuantity()
    }
  }

  return (
    <li className="ic-con">
      <div className="ic-con1">
        {dish_Type === 1 ? (
          <BiFoodTag color="red" className="veg-non" />
        ) : (
          <BiFoodTag color="green" className="veg-non" />
        )}
        <div className="ic-con2">
          <h1 className="dish-name">{dish_name}</h1>
          <p className="dish-price">{`${dish_currency} ${dish_price}`}</p>
          <p className="dish-desc">{dish_description}</p>
          {dish_Availability ? (
            <div className="ic-btn-con">
              <button
                className="in-de-btn"
                type="button"
                onClick={onDecrementQuantity}
              >
                -
              </button>
              <p className="qty">{quantity}</p>
              <button
                className="in-de-btn"
                type="button"
                onClick={onIncrementQuantity}
              >
                +
              </button>
            </div>
          ) : (
            <p className="dna">Not available</p>
          )}
          {addonCat.length > 0 ? (
            <p className="cus">Customizations available</p>
          ) : null}
        </div>
      </div>
      <div className="ic-con3">
        <p className="calo">{`${dish_calories} calories`}</p>
        <img src={dish_image} alt={dish_name} className="dish-img" />
      </div>
    </li>
  )
}

export default ItemCard
