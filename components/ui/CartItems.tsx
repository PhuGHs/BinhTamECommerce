import { IOrderingProduct } from "@/utils/interfaces";
import { Button } from "react-bootstrap";
import CartItem from "./CartItem";
import classes from "./CartItems.module.css";

import { faTicket, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { convertToVND } from "@/utils/convertToVND";

interface Props {
  items: IOrderingProduct[];
}

const CartItems: React.FC<Props> = ({ items }) => {
  const sumPrice: number = items.reduce(
    (sum, { totalPrice }) => sum + totalPrice,
    0
  );
  return (
    <div className={classes.cartPage}>
      <div className={classes.cart}>
        <h2 className={classes.title}>GIỎ HÀNG SẢN PHẨM</h2>
        {items.length === 0 ? (
          <div className={classes.notifContainer}>
            <h2>Bạn chưa order sản phẩm nào! Order đi!</h2>
            <img src="/emptyCart.png" alt="emptyCart" />
          </div>
        ) : (
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
        )}
      </div>
      {items.length === 0 ? (
        ""
      ) : (
        <div className={classes.summaryContainer}>
          <div className={classes.discount}>
            <div className={classes.first}>
              <div className={classes.first_1}>
                <FontAwesomeIcon
                  className={classes.ticketIcon}
                  icon={faTicket}
                />
                <p>KHUYẾN MÃI</p>
              </div>
              <div className={classes.first_2}>
                <Link className={classes.link} href="">
                  Xem thêm
                </Link>
                <FontAwesomeIcon
                  className={classes.angleRight}
                  icon={faAngleRight}
                />
              </div>
            </div>
            <div className={classes.availableVouchers}> Voucher 1</div>
            <div className={classes.caution}></div>
          </div>
          <div className={classes.summary}>
            <div className={classes.thanhtien}>
              <p>Thành tiền</p>
              <p>{convertToVND(sumPrice)}</p>
            </div>
            <div className={classes.tongsotien}>
              <h5>Tổng Số Tiền (gồm VAT)</h5>
              <p>{convertToVND(sumPrice)}</p>
            </div>
            <div className={classes.thanhtoan_button}>
              <Button className={classes.button}>THANH TOÁN</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
