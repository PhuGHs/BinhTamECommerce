import React, { Fragment, HtmlHTMLAttributes } from "react";
import Product from "./Product";
import classes from './ProductList.module.css';
import { useState } from "react";
import { Button } from "react-bootstrap";
import { IProduct } from "@/utils/interfaces";

interface Props {
    ProductList: Array<IProduct>
}

const ProductList : React.FC<Props> = ({ProductList}) => {
    const [data, setData] = useState(ProductList.slice(0,5));
    const [showMore, setShowMore] = useState(true);

    const showMoreHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setShowMore((current) => !current);
        setData(ProductList);
    }
    return (
      <Fragment>
        <div className={classes.product_list}>
          {data.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
        {
            showMore && 
            <div className={classes.btnContainer}>
                <Button className={classes.showmoreBtn} onClick={showMoreHandler}>Xem thêm</Button>
            </div>
        }
      </Fragment>
    );
}

export default ProductList;