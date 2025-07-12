'use client'

import { useState } from "react"
import Container from "../component/container/Container"
import FilterBar from "../component/FilterBar/FilterBar"
import { data } from "../utils/data"
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


                <div className="w-[80%] p-4">
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
                                <a onClick={hadleInfo} style={{color: '#176d93;'}}>{bigInfo ? 'Show less' :'Show more'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default page