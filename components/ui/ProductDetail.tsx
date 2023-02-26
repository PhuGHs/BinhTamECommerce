import { Container, Stack } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { IProduct } from "@/utils/interfaces";
import classes from './ProductDetail.module.css';

import { useState } from "react";

interface Props {
  product: IProduct
}

const ProductDetail : React.FC<Props> = ({product}) => {
  const imageList : Array<string> = product.imageList;
  const [currentImage, setCurrentImage] = useState<string>(product.img);
  
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
                      className={classes.image_thumbnail} 
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
                <h3 className={classes.price}>{product.price.toString()}</h3>
              </Row>
              <Row>SoLuong</Row>
              <Row>
                <Col>
                  <Button>Mua Ngay</Button>
                </Col>
                <Col>
                  <Button>Them vao gio hang</Button>
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