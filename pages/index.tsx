import React, { Fragment } from "react";
import ProductList  from '@/components/ui/ProductList';
import CarouselSlider from "@/components/banner/CarouselSlider";
import { IProduct } from "@/utils/interfaces";
import { getData } from "@/utils/fetchData";

interface Props {
    products: IProduct[]
}

const HomePage : React.FC<Props> = ({products}) => {
    return <Fragment>
        <CarouselSlider />
        <ProductList ProductList={products}/>
    </Fragment>
}

export async function getStaticProps() {
    const data : IProduct[] = await getData('get-products');

    return {
        props: {
            products: data,
        },
        revalidate: 10,
    }
}

export default HomePage;
