import { useState } from "react"
import Extension from "./Extension"

const Hero = ( {theme} ) => {

    const [activeFilters, setActiveFilters] = useState("All")
    
    const filters = ["All", "Active", "Inactive"]

  return (
    <div className="container text-neutral-100">
        <div className="flex justify-between items-center mb-6 flex-col sm:flex-row">
            <h2 className={`${theme? 'text-neutral-100' : 'text-neutral-900'} font-notoSansBold text-xl mb-4 sm:mb-0`}>Extensions List</h2>
            <div className="flex gap-2 items-center">
                {filters.map(filter => (
                    <div className={`${activeFilters === filter? 
                        'filterBtnActive' :
                         `${theme? 'filterBtnInactiveBlack' : 'filterBtnInactiveWhite text-neutral-900'}`} 
                         filterBtn cursor-pointer font-notoSansMedium`}
                        onClick={() => setActiveFilters(filter)}
                    >
                        {filter}
                    </div>
                ))}
            </div>
        </div>

        <Extension activeFilters = {activeFilters} theme = {theme}/>
    </div>
  )
}

export default Hero