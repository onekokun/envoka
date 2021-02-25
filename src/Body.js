import React from 'react'
import './Body.css'
import ScreenLeft from './ScreenLeft'
import ScreenRight from './ScreenRight'

function Body() {
    return (
        <div className="body">
            <ScreenLeft/>
            <ScreenRight/>
        </div>
    )
}

export default Body
