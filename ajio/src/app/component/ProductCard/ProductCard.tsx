const ProductCard = ({ product }: any) => {
    return (
        <div className="w-[176px]">
            <div>
                <img style={{ objectFit: 'scale-down' }} src={product.fnlColorVariantData.outfitPictureURL} alt="" />

            </div>
            <div className="flex flex-col items-center">
                <div className="text-sm brand">
                    <strong>{product.fnlColorVariantData.brandName}</strong>
                </div>

                <div className="text-sm text-center">
                    {product.name}
                </div>
                <div>
                    {product.averageRating}
                </div>
                <div>
                    {product.price.displayformattedValue}
                </div>
            </div>
        </div>
    )
}

export default ProductCard