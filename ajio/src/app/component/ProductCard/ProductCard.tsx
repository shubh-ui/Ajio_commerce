import { priceFormater, truncateText } from "@/app/utils/utils"
import Star from "../Star/Star"
import { BadgePercent, IndianRupeeIcon } from "lucide-react"

const ProductCard = ({ product }: any) => {
    // console.log(truncateText(product.fnlColorVariantData.brandName))
    return (
        <div className="w-[176px] flex flex-col gap-2.5">
            <div>
                <img style={{ objectFit: 'scale-down' }} src={product.fnlColorVariantData.outfitPictureURL} alt="" />

            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="text-[13px] brand font-source_Serif">
                    <strong>{truncateText(product.fnlColorVariantData.brandName)}</strong>
                </div>

                <div className="text-[13px] text-center font-lora">
                    {product.name}
                </div>
                <div>
                    <Star rating={product.averageRating} ratingCount={product.ratingCount} />
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-sm flex items-center font-medium font-source_Serif"><IndianRupeeIcon size={12} /> {priceFormater(product.price.displayformattedValue)}</span>
                    <span className="text-xs flex items-center"><IndianRupeeIcon size={10} /> {priceFormater(product.wasPriceData.displayformattedValue)}</span>
                    <span className="text-xs font-source_Serif text-[#866528]">({product.discountPercent})</span>
    
                </div>

                <div className="flex items-center gap-0.5">
                    <span><BadgePercent size={14} fill="#008526" color="#fff" /></span>
                    <span className="text-xs font-medium text-[#008526]">Offer Price:</span>
                    <span className="flex items-center text-xs font-medium text-[#008526]"><IndianRupeeIcon size={10} />{priceFormater(product.offerPrice.displayformattedValue)}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard