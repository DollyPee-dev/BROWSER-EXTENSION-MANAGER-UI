import { useState } from 'react';
import data from '../../data.json';


const Extension = ({ activeFilters, theme }) => {

    const [extensionData, setExtensionData] = useState(data)

    function handleActive(id) {
        setExtensionData(prevData =>
            prevData.map(singleData => (
                singleData.id === id ?
                    { ...singleData, isActive: !singleData.isActive } :
                    singleData
            )
            ))
    }

    const filteredData = extensionData.filter((ext) => {
        if (activeFilters === "All") return true;
        if (activeFilters === "Active") return ext.isActive === true
        if (activeFilters === "Inactive") return ext.isActive === false
    })

    function handleDelete(id) {
        setExtensionData(prevData => prevData.filter((ext) => ext.id !== id))
    }

    return (
        <div className='flex flex-wrap flex-shrink gap-2'>
            {filteredData.map((ext) => (
                <div key={ext.id} className={`${theme ? 'bg-neutral-800' : 'bg-white'} p-2 rounded-xl min-w-[250px] flex-1  border border-white/10 shadow-md`}>
                    <div className='flex items-start mb-10'>
                        <img className='mr-4' src={ext.logo} alt="" />
                        <div className={`${theme ? 'text-white' : 'text-neutral-900'}`}>
                            <h3 className='font-notoSansBold'>{ext.name}</h3>
                            <p className='text-[13px] text-neutral-400'>{ext.description}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <button onClick={
                            () => handleDelete(ext.id)}
                            className={`
                        ${theme ? 'text-white border-white/20' : 'text-neutral-900 border-neutral-900/20'}
                        px-4 py-1.5 border rounded-full text-[14px]
                         hover:border-red-400 focus:border-red-400/60`}
                        >
                            Remove
                        </button>
                        <div onClick={() => handleActive(ext.id)} className={`${ext.isActive ? 'bg-red-500' : 'bg-neutral-100/10'} w-8 h-4 rounded-full relative transition-all duration-300`}>
                            <div className={`bg-white w-4 h-[15px] rounded-full absolute top-1/2 -translate-y-1/2 ${ext.isActive ? 'right-[1px]' : 'left-[1px]'} transition-all duration-300`}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Extension