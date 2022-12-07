import React from 'react'
import '../Styles/Fotos.css';
import { Slider } from './Slider.js';

// import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Grid';

function Fotos() {

    return (
        <div>
            <h2 className="section_title" id="galeri">Galeri</h2>
            <Slider></Slider>
        </div>
    )
}

export { Fotos };