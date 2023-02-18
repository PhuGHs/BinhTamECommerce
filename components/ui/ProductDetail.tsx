import React from "react";
import classes from 'ProductDetail.module.css';
import { Image } from "react-bootstrap";

interface Props {
  product: {
    id: string;
    img: string;
    productName: string;
    description: string;
    price: Number;
  };
}

const ProductDetail : React.FC<Props> = ({product}) => {
    return <div className={classes.container}>
        <div className={classes.product_info}>
            <div className={classes.product_img_preview}>
                <Image />
            </div>
            <div className={classes.product_name_buybtn}></div>
        </div>
        <div></div>
        <div></div>
    </div>  
}

export default ProductDetail;