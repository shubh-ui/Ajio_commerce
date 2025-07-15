'use client'

import { useState } from "react"
import Container from "../component/container/Container"
import FilterBar from "../component/FilterBar/FilterBar"
import { data } from "../utils/data"
import ProductCard from "../component/ProductCard/ProductCard"
import { formatIndianNumber } from "../utils/utils"
import VerticalBarsUI from "../component/verticalbar/VerticalBar"
const page = () => {
    console.log(data)
    const [bigInfo, setBigInfo] = useState(false);

    const hadleInfo = () => {
        setBigInfo(prev => !prev);
    }

    return (
        <Container>
            <div className="h-[40px]">

            </div>
            <div className="flex w-full">


                <div className="w-[20%]">
                    <FilterBar />
                </div>


                <div className="w-[80%]">
                    <div className="info flex flex-col items-center">
                        <h1>
                            <div className="header1">
                                {data.categoryforheader}
                            </div>
                            <div className="header2">
                                {data.categoryName}
                            </div>
                        </h1>
                        <div className="info-desc">
                            <div
                                className="prose text-sm prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: data.categoryDescription }}
                                style={{
                                    // Override inline styles for better appearance
                                    fontFamily: 'inherit',
                                    lineHeight: '1.6',
                                    height: bigInfo ? '400px' : '70px',
                                    overflow: 'hidden'
                                }}
                            />
                            <div>
                                <a onClick={hadleInfo} style={{color: '#176d93'}}>{bigInfo ? 'Show less' :'Show more'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="filter-container flex justify-between items-center px-2.5">
                        <div className="flex items-center gap-1.5 font-medium">
                            <span>
                                {formatIndianNumber(data?.pagination.totalResults)}
                            </span>
                            <span>
                                Items found
                            </span>
                        </div>
                        <div className="flex gap-1.5">
                            <span>GRID</span>
                            <VerticalBarsUI />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>SORT BY</span>
                            <div>
                                <select className="w-full border bg-[#fff] border-gray-300 outline-none">
                                  {data.sorts.map(el => {
                                    return (
                                        <option key={el.code} value={el.code}>{el.name}</option>
                                    )
                                  })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="main-containt">
                                <div>
                                    <div className="reactVirtualized__Grid">
                                <div className="ReactVirtualized__Grid__innerScrollContainer Grid_five">
                                        {
                                            data.products.map((product,i) => {
                                                return <div key={product.code} className="h-[405px]">
                                                    <ProductCard product={product} />
                                                </div>
                                            })
                                        }
                                </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default page