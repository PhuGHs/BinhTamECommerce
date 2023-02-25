import React, { Fragment } from "react";
import ProductDetail from "@/components/ui/ProductDetail";
import { IProduct } from "@/utils/interfaces";

interface Props {
    product : IProduct
}

const DetailPage : React.FC<Props> = ({product}) => {
    return <Fragment>
        <ProductDetail product={product}/>
    </Fragment>
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.SERVER}/api/get-products-id`);
    const products = await res.json();
    return {
        fallback: false,
        paths: products.map((product: IProduct) => ({
            params: {ProductID: product.id}
        }))
    }
}

export async function getStaticProps(context : any) {
    const productId = context.params.ProductID;
    const res = await fetch(`${process.env.SERVER}/api/get-specificProduct?id=${productId}`);
    const product : IProduct = await res.json();

    console.log(productId);

    return {
        props: {
            product
        }
    }
}

export default DetailPage;