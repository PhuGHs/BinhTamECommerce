import { convertToVND } from "@/utils/convertToVND";
import { IOrderingProduct, IProduct } from "@/utils/interfaces";
import classes from './CartItem.module.css';
import { useState } from "react";

import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import { cartActions } from "@/store/cart-slice";

interface Props {
    item: IOrderingProduct
}

const CartItem: React.FC<Props> = ({item}) => {
  const [isChecked, setIsChecked] = useState<boolean>(item.isSelected);
  const checkboxOnChangeHandler = () => {
    setIsChecked(!isChecked);
  }
  const dispatch : Dispatch = useDispatch();
  const removeCartItemHandler = () => {
    dispatch(cartActions.removeItemfromCart(item.id));
  }
  return (
    <tr className={classes.row}>
      <td className={classes.data}>
        <div className={classes.productNameContainer}>
          <div className={classes.round}>
            <input
              type="checkbox"
              id={'checkbox-' + item.id}
              checked={isChecked}
              className={classes.checkbox}
              onChange={checkboxOnChangeHandler}
            />
            <label htmlFor={'checkbox-' + item.id}></label>
          </div>
        </div>
      </td>
      <td className={classes.data_first}>
        <img src={item.img} alt="sanpham" />
        {item.productName}
      </td>
      <td className={classes.data}>{convertToVND(item.price)}</td>
      <td className={classes.data}>{item.quantity}</td>
      <td className={classes.data}>{convertToVND(item.price)}</td>
      <td className={classes.data}>
        <button onClick={removeCartItemHandler}>Xoá</button>
      </td>
    </tr>
  );
};

export default CartItem;