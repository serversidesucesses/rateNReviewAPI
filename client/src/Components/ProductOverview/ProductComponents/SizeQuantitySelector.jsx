import React, { useState, useEffect } from "react";
import { SizeQtyContainer } from './styleSelector.styled.js';
import { FaAngleDown, FaRegHeart, FaHeart } from 'react-icons/fa';

export default function SizeQuantitySelector({ currentStyleSkus }) {
  // quantity and size information are inside currentStyleSkus, which is an object, NOT an array
  // different skus means different size
  // If there is no remaining stock for the current style, the dropdown should become inactive and read “OUT OF STOCK”.
  const [selectedSku, setSelectedSku] = useState(currentStyleSkus[0]);
  const outOfStockStatus = currentStyleSkus.length === 0 ? true : false;
  const currentStyleSkusArray = Object.entries(currentStyleSkus)
  // currentStyleArray example: [[1394805, {quanitity: 8, size: 'XS'}],[1394806, {quanitity: 16, size: 'S'}]]
  const [favoriteStatus, setFavoriteStatus] = useState(false);
  const [sizeSeletedStatus, setSizeSelectedStatus] = useState(false);

  useEffect(() => {
    const currentStyleSkusArray = Object.entries(currentStyleSkus);
    console.log('currentStyleSkusArray is: ', currentStyleSkusArray);
    setSizeSelectedStatus(false);
  }, [currentStyleSkus])


  const handleSizeSelect = (event) => {
    // when a size is selected, record the size.
    setSelectedSku(event.target.value);
    setSizeSelectedStatus(true);
  }

  const sizeOptions = () => {
    if (outOfStockStatus) {
      return <option value="out of stock">OUT OF STOCK</option>
    } else {
      var skuArray = [];
      skuArray.push(<option key="" value="">SELECT SIZE</option>);
      skuArray.push(currentStyleSkusArray.map((sku, index) => {
        return <option key={sku[0] + index} value={sku[0]}>{sku[1].size}</option>;
      }))
      return skuArray;
    }
  }

  const quantityOptions = () => {
    let qtyPlaceholder = sizeSeletedStatus ? 'QTY' : '-----'
    let qtyArray = []
    const maxQuantity = 15;
    const quantityAvailable = currentStyleSkus[selectedSku]?.quantity;
    const quantityDropdownNum = Math.min(quantityAvailable, maxQuantity);
    qtyArray.push((<option key="" value="">{qtyPlaceholder}</option>))
    for (var i = 1; i < quantityDropdownNum + 1; i++) {
      qtyArray.push(<option key={i} value={i}>{i}</option>)
    }
    return qtyArray;
  }

  const handleFavorite = () => {
    setFavoriteStatus(!favoriteStatus);
  }

  // If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown, and a message should appear above the dropdown stating “Please select size”.
  const handleAddToBag = () => {
    if(!outOfStockStatus) {
      return (
        <button onClick={console.log('added to bag')}>ADD TO BAG</button>
      )
    }
  }

  return (
    <>
      {/* div for size selecting */}
      <SizeQtyContainer >
        <select onChange={handleSizeSelect} name="size" id="size-select">
          {sizeOptions()}
        </select>
        <select name="quantity" id="quantity-select">
          {quantityOptions()}
        </select>
      </SizeQtyContainer>

      <SizeQtyContainer>
        {handleAddToBag()}
        <div onClick={handleFavorite}>{
          favoriteStatus ? <FaHeart/> : <FaRegHeart/>}
        </div>
      </SizeQtyContainer>
    </>
  )
}