'use client'

import Container from "../component/container/Container"
import FilterBar from "../component/FilterBar/FilterBar"

const page = () => {
    return (
        <Container>
               <div className="h-[40px]">

                </div>
            <div className="flex w-full">
             

                <div className="w-[20%]">
                    <FilterBar />
                </div>


                <div className="w-[80%] bg-gray-100 p-4">
                    Main Content Area
                </div>
            </div>
        </Container>
    )
}

export default page