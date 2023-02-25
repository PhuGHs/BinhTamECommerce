import { Container, Stack } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { IProduct } from "@/utils/interfaces";

interface Props {
  product: IProduct
}

const ProductDetail : React.FC<Props> = ({product}) => {
  return (
    <Stack gap={3}>
      <Container>
        <Container>
          <Col>
            {product.productName}
          </Col>
          <Col>
           <Image src={product.imgURL}/>
          </Col>
        </Container>
        <Container>
          <Row>
            <h1>{product.productName}</h1>
          </Row>
          <Row>
            <Stack direction="horizontal">
              <Row>
                <h4>Số lượng</h4>
              </Row>
            </Stack>
          </Row>
          <Row>
            <Stack direction="horizontal">
              <Button>MUA NGAY</Button>
              <Button>THÊM VÀO GIỎ HÀNG</Button>
            </Stack>
          </Row>
        </Container>
      </Container>
      <Container></Container>
      <Container></Container>
    </Stack>
  )
}

export default ProductDetail;