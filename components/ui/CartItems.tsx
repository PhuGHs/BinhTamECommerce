import { IOrderingProduct } from '@/utils/interfaces';
import CartItem from './CartItem';
import classes from './CartItems.module.css';

interface Props {
    items: IOrderingProduct[];
}

const CartItems: React.FC<Props> = ({items}) => {
  return (
    <div className={classes.cartPage}>
      <h2 className={classes.title}>GIỎ HÀNG SẢN PHẨM</h2>
      <table className={classes.table}>
        <tr className={classes.row}>
          <th className={classes.head}>
            <div className={classes.radiobutton}>
              <div className={classes.round}>
                <input
                  type="checkbox"
                  checked
                  className={classes.checkbox}
                />
                <label htmlFor="checkbox"></label>
              </div>
              CHỌN TẤT CẢ
            </div>
          </th>
          <th className={classes.head}>SẢN PHẨM</th>
          <th className={classes.head}>ĐƠN GIÁ</th>
          <th className={classes.head}>SỐ LƯỢNG</th>
          <th className={classes.head}>THÀNH TIỀN</th>
          <th className={classes.head}>THAO TÁC</th>
        </tr>
        {items.map((item: IOrderingProduct) => (
          <CartItem item={item} key={item.id} />
        ))}
      </table>
    </div>
  );
};

export default CartItems;
