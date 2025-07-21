'use client'
import { use } from 'react';
import { AppDispatch, RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Container } from 'lucide-react';

interface PageProps {
    params: Promise<{
        code: string;
    }>
}

const ProductItemPage = ({ params }: PageProps) => {
    const dispatch: AppDispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product.products);
    const { code } = use(params);
    console.log(products)

    const filterdProduct = products.find((p) => p.code == code);
    console.log({filterdProduct})
    return (
        <Container>
            <div>
                <div className='bredcrumb'>

                </div>
                <div className='prod-container'>

                </div>
                <div className='rating-section'>

                </div>
            </div>
        </Container>
    );
};

export default ProductItemPage;