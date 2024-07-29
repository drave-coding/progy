import React from 'react'

const BtnPrimary = (props) => {
    return (
        <button {...props} className="text-gray-50 bg-gray-500 text-sm px-4 py-2 border border-gray-500 rounded-md hover:bg-gray-600/90 transition-colors focus:outline-none focus:ring focus:ring-gray-300 focus:ring-offset-1">
            {props.children}
        </button>
    )
}

export default BtnPrimary;