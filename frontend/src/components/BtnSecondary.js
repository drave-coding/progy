import React from 'react'

const BtnSecondary = (props) => {
    return (
        <button {...props} className='text-gray-600 bg-white border border-gray-500 text-sm px-4 py-2 rounded-md hover:bg-gray-500 hover:text-gray-50 transition-colors focus:outline-none focus:ring focus:ring-gray-300 focus:ring-offset-1'>{props.children}</button>
    )
}

export default BtnSecondary