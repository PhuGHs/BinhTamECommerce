import { faCaretRight, faMagnifyingGlass, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const MainNavigation : React.FC<{}> = () => {
    const data = useSelector((state : RootState) => state.cart);

    return (
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href='/'>
            <img src="logo.png" alt="logo.png" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">TRANG CHỦ</Link>
            </li>
            <li>
              <button>GIỚI THIỆU</button>
            </li>
            <li>
              <div className={classes.dropdown}>
                <button className={classes.dropbtn}>
                  SẢN PHẨM
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={classes.caretRight}
                  />
                </button>
                <div className={classes.dropdown_content}>
                  <a href="">Chăm sóc da</a>
                  <a href="">Sản phẩm khác</a>
                  <a href="">Đặc trị</a>
                  <a href="">Trang điểm</a>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.dropdown}>
                <button className={classes.dropbtn}>
                  CHÍNH SÁCH
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={classes.caretRight}
                  />
                </button>
                <div className={classes.dropdown_content}>
                  <a href="">Chính sách vận chuyển</a>
                  <a href="">Chính sách thanh toán</a>
                  <a href="">Chính sách đổi trả</a>
                </div>
              </div>
            </li>
            <li>
              <button>LIÊN HỆ</button>
            </li>
          </ul>
        </nav>
        <div className={classes.rightFunc}>
          <div className={classes.right}>
            <button className={classes.rightbtn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className={classes.right}>
            <Link href='/Cart' className={classes.cart_button}>
              <span className={classes.cart_button_count}>{data.items.length.toString()}</span>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
          <div className={classes.right}>
            <Link href='/Login' className={classes.rightbtn}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </div>
      </header>
    );
}

export default MainNavigation