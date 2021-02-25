import React from 'react'
import './ScreenRight.css'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

function ScreenRight() {
    return (
        <div className="screenRight">
            <div className="top__box">
                <h1>Hey there!</h1>
                <p>We're delighted to have you here. Take the test and get an accurate assessment.</p>
            </div>
            <div className="middle__box">
                <div className="tin">
                    <h2>Enter TIN to start:</h2>
                    <input type="text" placeholder="123456"></input>
                </div>
                <div className="signin">
                    <button type="submit">Sign in  <TrendingFlatIcon/> </button>

                    <p className="siginDesc">By signing in and using the service, you accept and consent to the <span>Private Policy.</span></p>
                    
                </div>
            </div>
            <div className="bottom__box">
                <img src="p.png"></img>
                <p>Copyright 2021 Pearson Education, Inc. or its affiliates. All rights reserved.</p>
            </div>
        </div>
    )
}

export default ScreenRight
