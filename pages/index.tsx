import React, { Fragment } from "react";
import ProductList  from '@/components/ui/ProductList';
import CarouselSlider from "@/components/banner/CarouselSlider";
import { IProduct } from "@/utils/interfaces";

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
    const res = await fetch(`${process.env.SERVER}/api/get-products`);
    const data : IProduct[] = await res.json();

    return {
        props: {
            products: data,
        },
        revalidate: 1,
    }
}

export default HomePage;
