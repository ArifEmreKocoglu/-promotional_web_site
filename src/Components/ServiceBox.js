import React from 'react'

function ServiceBox({imgName, box_name}) {
    return (
        <div className="service_box">
            <img src={imgName} alt=""></img>
            <h2>{box_name}</h2>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, </p>
        </div>
    )
}

export  { ServiceBox }