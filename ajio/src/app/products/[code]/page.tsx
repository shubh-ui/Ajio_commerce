'use client'
import { use, useEffect, useState } from 'react';
import { AppDispatch, RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import Container from '@/app/component/container/Container';
import ImageSlider from '@/app/component/ImageSlider/ImageSlider';
import Footer from '@/app/component/Footer/Footer';

interface PageProps {
    params: Promise<{
        code: string;
    }>
}

const ProductItemPage = ({ params }: PageProps) => {
    const dispatch: AppDispatch = useDispatch();
    const [slides, setSlides] = useState([{}])
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const products = useSelector((state: RootState) => state.product.products);
    const { code } = use(params);
    console.log({products})

    const filterdProduct = products.find((p) => p.code == code);
    console.log({filterdProduct})
    
    if(!filterdProduct) {
        return <div className="flex items-center justify-center min-h-screen">
            <div className="text-gray-600">Something went wrong</div>
        </div>
    }

    useEffect(()=> {
        const slides = filterdProduct.extraImages.map(e => {
            return {
                url: e.images[0].url
            }
        });
        setSlides(slides)
    },[])

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    // Calculate discount percentage
    const originalPrice = filterdProduct.wasPriceData?.value || 0;
    const currentPrice = filterdProduct.price?.value || 0;
    const offerPrice = filterdProduct.offerPrice?.value || currentPrice;
    const discountPercent = filterdProduct.discountPercent || '';
    
    // Extract brand and product name
    const brandName = filterdProduct.fnlColorVariantData?.brandName || '';
    const productName = filterdProduct.name || '';
    
    // Build breadcrumb
    const segmentText = filterdProduct.segmentNameText || 'Men';
    const verticalText = filterdProduct.verticalNameText || 'Western Wear';
    const brickText = filterdProduct.brickNameText || 'Shirts';

    return (
       <>
         <Container>
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-6">
                    <span>Home</span> / <span>{segmentText}</span> / <span>{verticalText}</span> / <span>{brickText}</span> / <span>{productName}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Thumbnail Column */}
                    <div className="lg:col-span-1">
                        <div className="flex lg:flex-col flex-row gap-2 overflow-x-auto lg:overflow-visible">
                            {/* Up Arrow */}
                            <button className="hidden lg:block p-2 text-gray-400 hover:text-gray-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                            
                            {/* Thumbnail Images */}
                            {filterdProduct.extraImages.slice(0, 7).map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`border-2 rounded cursor-pointer flex-shrink-0 ${
                                        selectedImageIndex === index ? 'border-gray-400 opacity-70' : 'border-gray-200'
                                    }`}
                                    onClick={() => setSelectedImageIndex(index)}
                                >
                                    <img
                                        src={item.images[0].url}
                                        alt={`Model image ${item.model}`}
                                        className="w-16 h-20 object-cover rounded"
                                    />
                                </div>
                            ))}
                            
                            {/* Down Arrow */}
                            <button className="hidden lg:block p-2 text-gray-400 hover:text-gray-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Main Image Column */}
                    <div className="lg:col-span-6">
                        <div className="relative">
                            {/* NEWSEASON Badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-gray-800 text-white px-3 py-1 text-xs font-medium">
                                    NEWSEASON
                                </span>
                            </div>

                            {/* Share Icon */}
                            <button className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                            </button>

                            {/* Navigation Arrows */}
                            {/* <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button> */}

                            {/* Main Product Image */}
                            <div className="bg-gray-50 rounded-lg overflow-hidden">
                                <ImageSlider height={600} width={560} slides={slides} startIndex={selectedImageIndex} />
                            </div>
                        </div>
                    </div>

                    {/* Product Details Column */}
                    <div className="lg:col-span-5">
                        <div className="space-y-6">
                            {/* Brand and Title */}
                            <div>
                                <h2 className="text-lg text-[#866528] font-medium mb-1">{brandName}</h2>
                                <h1 className="text-xl text-gray-800">{productName}</h1>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    <span className="text-lg font-medium text-gray-900">{filterdProduct.averageRating}</span>
                                    <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500">({filterdProduct.ratingCount})</span>
                            </div>

                            {/* Price */}
                            <div className="space-y-2">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl text-gray-900">{filterdProduct.price.displayformattedValue}</span>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <span className='text-[#866528]'>MRP </span>
                                    <span className="line-through text-[#866528]">{filterdProduct.wasPriceData.displayformattedValue}</span>
                                    <span className="text-[#866528] font-bold ml-1">({discountPercent})</span>
                                </div>
                                <p className="text-xs text-gray-500">Price inclusive of all taxes</p>
                            </div>

                            {/* Offer */}
                            {offerPrice < currentPrice && (
                                <div className="bg-gray-50 p-3 rounded border-l-4 border-gray-300">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="bg-gray-200 px-2 py-1 text-xs rounded">Offer</span>
                                        <span className="font-medium">Get it for Rs. {offerPrice}</span>
                                    </div>
                                    <div className="text-xs text-gray-600 mt-1">
                                        Use Code <span className="font-medium">FREEDEL</span>
                                    </div>
                                    <div className="text-xs text-blue-600 mt-1">
                                        Free Shipping on 799 and above. Just for you. <span className="underline cursor-pointer">View All Products</span>
                                    </div>
                                    <div className="text-xs text-blue-600 underline cursor-pointer mt-1">T&C</div>
                                </div>
                            )}

                            {/* Coupon Status */}
                            {filterdProduct.couponStatus && (
                                <div className="text-sm text-green-600 font-medium">
                                    ✓ {filterdProduct.couponStatus}
                                </div>
                            )}

                            {/* Color - Extract from product data */}
                            <div>
                                <h3 className="text-sm text-gray-900 mb-2">
                                    {filterdProduct.fnlColorVariantData?.colorGroup?.split('_')[1]?.charAt(0).toUpperCase() + 
                                     filterdProduct.fnlColorVariantData?.colorGroup?.split('_')[1]?.slice(1) || 'Blue'}
                                </h3>
                                <div className={`w-8 h-8 border-2 border-gray-300 rounded-full ${
                                    filterdProduct.fnlColorVariantData?.colorGroup?.includes('blue') ? 'bg-blue-400' :
                                    filterdProduct.fnlColorVariantData?.colorGroup?.includes('white') ? 'bg-gray-100' :
                                    filterdProduct.fnlColorVariantData?.colorGroup?.includes('black') ? 'bg-gray-800' :
                                    filterdProduct.fnlColorVariantData?.colorGroup?.includes('red') ? 'bg-red-400' :
                                    filterdProduct.fnlColorVariantData?.colorGroup?.includes('green') ? 'bg-green-400' :
                                    'bg-gray-300'
                                }`}></div>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-sm text-gray-900">Select Size</h3>
                                    <button className="text-xs text-blue-600 underline flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                        Check Size Chart
                                    </button>
                                </div>
                                    <div className="flex gap-2">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`border rounded-full cursor-pointer hover:bg-slate-700 hover:text-[#fff] w-9 h-9 text-xs font-medium flex items-center justify-center ${selectedSize === size
                                                        ? 'border-gray-800 bg-gray-800 text-white'
                                                        : 'border-gray-300 text-gray-600 hover:border-gray-400'
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                            </div>

                            {/* Size Guide */}
                            <div className="flex items-center gap-2 h-[40px] bg-[#fdf8e8] text-xs text-gray-600">
                                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Select your size to know your estimated delivery date.</span>
                            </div>

                            {/* Add to Bag Button */}
                            <button className="w-full bg-yellow-700 hover:bg-yellow-800 cursor-pointer text-white font-medium py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                                </svg>
                                ADD TO BAG
                            </button>

                            {/* Quality Assurance */}
                            <div className="text-xs text-gray-500 text-center">
                                HANDPICKED STYLES | ASSURED QUALITY
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rating Section Placeholder */}
                <div className="mt-12">
                    <div className="border-t pt-8">
                        {/* You can add rating/review section here */}
                    </div>
                </div>
            </div>
        </Container>
        <Footer />
       </>

    );
};

export default ProductItemPage;