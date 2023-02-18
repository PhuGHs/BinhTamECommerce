import { Carousel } from "react-bootstrap"
import classes from './CarouselSlider.module.css';
const CarouselSlider : React.FC = () => {
    return <div className={classes.carousel}>
        <Carousel className={classes.carousel} fade>
            <Carousel.Item>
                <img width='100%' src="https://dm4fv4ltmsvz0.cloudfront.net/f4744ca8-dced-436f-baa9-c479d32fbfa0.jpeg" alt="1stimg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width='100%' src="https://dm4fv4ltmsvz0.cloudfront.net/adbaccdd-35ad-4dea-acd7-8637a803c538.jpeg" alt="2ndimg" />
            </Carousel.Item>
        </Carousel>
    </div>
}

export default CarouselSlider;