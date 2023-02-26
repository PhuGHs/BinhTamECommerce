import React, { Fragment } from "react";
import ProductDetail from "@/components/ui/ProductDetail";
import { IProduct } from "@/utils/interfaces";
import { getData } from "@/utils/fetchData";

interface Props {
    product : IProduct
}

const DetailPage : React.FC<Props> = ({product}) => {
    return <Fragment>
        <ProductDetail product={product}/>
    </Fragment>
}

export async function getStaticPaths() {
    const products = await getData('get-products-id');
    return {
        fallback: false,
        paths: products.map((product: IProduct) => ({
            params: {ProductID: product.id}
        }))
    }
}

export async function getStaticProps(context : any) {
    const productId = context.params.ProductID;
    const product : IProduct = await getData(`get-specificProduct?id=${productId}`)

    console.log(productId);

    return {
        props: {
            product
        }
    }
}

export default DetailPage;