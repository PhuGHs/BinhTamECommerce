import { Fragment} from "react";
import classes from "./Product.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useRouter } from "next/router";
import { IProduct } from "@/utils/interfaces";
import { convertToVND } from "@/utils/convertToVND";

interface Props {
  item: IProduct
}


const Product: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  const showDetailPageHandler = () => {
    router.push(`${item.id}`);
  }

  return (
    <Fragment>
      <Card className={classes.card} style={{ width: "18rem" }}>
        <Card.Img className={classes.image} variant="top" src={item.img} />
        <Card.Body>
          <Card.Title className={classes.title}>{item.productName}</Card.Title>
          <Card.Text>
            <h2 className={classes.price}>{convertToVND(item.price)}</h2>
          </Card.Text>
          <Button className={classes.buyBtn} onClick={showDetailPageHandler}>Mua ngay</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Product;
