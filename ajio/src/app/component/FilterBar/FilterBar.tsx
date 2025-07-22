import { ChevronDown, Plus, Minus } from "lucide-react"
import { useState } from "react"

interface ExpandedSections {
    Gender: boolean,
    Category: boolean,
    Price: boolean
}

const FilterBar = () => {
    const [expandedSections, setExpandedSections] = useState({
        Gender: true,
        Category: true,
        Price: true
    })

    const toggleSection = (section: keyof ExpandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }))
    }

    const filterOptions = {
        Gender: ['Men', 'Women'],
        Category: ['Shirts', 'T-Shirts', 'Polos', 'Sweaters', 'Hoodies', 'Jackets', 'Pants', 'Jeans'],
        Price: [
            { label: 'Below Rs.500', value: 'under-500' },
            { label: 'Rs.500 - 1000', value: '25-50' },
            { label: 'Rs.1001 - 1500', value: '50-75' },
            { label: 'Rs.1501 - 2000', value: '75-100' },
            { label: 'Rs.2001 - 2500', value: 'over-100' }
        ]
    }

    return (
        <div>
            <div className="flex flex-col gap-7 font-sans">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Refine By</h2>
                    <span><ChevronDown /></span>
                </div>

                {/* Gender Section */}
                <div>
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => toggleSection('Gender')}
                    >
                        {expandedSections.Gender ? <Minus /> : <Plus />}
                        <h4 className="font-medium text-base">Gender</h4>
                    </div>
                    {expandedSections.Gender && (
                        <div className="mt-2.5 px-4 py-1">
                            {filterOptions.Gender.map((option) => (
                                <label key={option} className="flex items-center gap-2 mt-1.5 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 accent-[#B09975]" />
                                    <span className="text-sm">{option}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Category Section */}
                <div>
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => toggleSection('Category')}
                    >
                        {expandedSections.Category ? <Minus /> : <Plus />}
                        <h4 className="font-medium text-base">Category</h4>
                    </div>
                    {expandedSections.Category && (
                        <div className="mt-2.5 px-4 py-1">
                            {filterOptions.Category.map((option) => (
                                <label key={option} className="flex items-center gap-2 mt-1.5 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 accent-[#B09975]" />
                                    <span className="text-sm">{option}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Price Section */}
                <div>
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => toggleSection('Price')}
                    >
                        {expandedSections.Price ? <Minus /> : <Plus />}
                        <h4 className="font-medium text-base">Price</h4>
                    </div>
                    {expandedSections.Price && (
                        <div className="mt-2.5 px-4 py-1">
                            {filterOptions.Price.map((option) => (
                                <label key={option.value} className="flex items-center gap-2 mt-1.5 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 accent-[#B09975]" />
                                    <span className="text-sm">{option.label}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FilterBar