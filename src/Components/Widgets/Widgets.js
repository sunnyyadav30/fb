import React from 'react'
import './Widgets.scss'

function Widgets() {
    return (
        <div className="widgets">
            <iframe src="https://www.facebook.com/" 
            width="340"
            height="100%"
            style={{border:"none",overflow:"hidden"}}
            title="facebook" 
            scrolling="no" 
            frameBorder="0" 
            allowTransparency="true" 
            allow="encrypted-media">
                
            </iframe>
        </div>
    )
}
export default Widgets