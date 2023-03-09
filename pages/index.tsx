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
    const res = await fetch('http://localhost:3000/api/products', {
        method: 'GET'
    });

    const data = await res.json();

    return {
        props: {
            products: data,
        },
        revalidate: 10,
    }
}

export default HomePage;
