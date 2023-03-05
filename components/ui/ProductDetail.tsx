import { Container, Stack } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { IProduct } from "@/utils/interfaces";
import classes from './ProductDetail.module.css';

import { useState } from "react";
import { convertToVND } from "@/utils/convertToVND";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { cartActions } from "@/store/cart-slice";

import { toast } from "react-toastify";

interface Props {
  product: IProduct
}

const ProductDetail : React.FC<Props> = ({product}) => {
  const notify = () => toast.success("Thêm vào giỏ hàng thành công!");

  const imageList : Array<string> = product.imageList;
  const dispatch : Dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState<string>(product.img);
  const addItemToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id: product.id,
      productName: product.productName,
      img: product.img,
      price: product.price,
    }));
    notify();
  }
  
  const handleImageClick = (image : string) => {
    setCurrentImage(image);
  }

  return (
    <Stack gap={3} className={classes.detailpage}>
      <Container className={classes.productInfo}>
        <Row>
          <Col>
            <Container className={classes.imageGallery}>
              <Row className="justify-content-md-center">
                <Col xs={3} className={classes.thumbnail_list}>
                  {imageList !== null && imageList.map((image : string) => (
                    <Image 
                      className={image === currentImage ? classes.selected : ''} 
                      src={image}
                      onClick={() => handleImageClick(image)}/>
                  ))}
                </Col>
                <Col className={classes.imageContainer}>
                  <Image className={classes.image} src={currentImage}/>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row>
                <h2>{product.productName}</h2>
              </Row>
              <Row>
                <h3 className={classes.price}>{convertToVND(product.price)}</h3>
              </Row>
              <Row>SoLuong</Row>
              <Row>
                <Col>
                  <Button>Mua Ngay</Button>
                </Col>
                <Col>
                  <Button onClick={addItemToCartHandler}>Them vao gio hang</Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container></Container>
      <Container></Container>
    </Stack>
  )
}

export default ProductDetail;