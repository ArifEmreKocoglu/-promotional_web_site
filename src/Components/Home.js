import React from 'react'
import '../Styles/Home.css';
import { HomeSocial } from './HomeSocial.js';
// import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Grid';

function Home() {

    return (
        <section className="home section bd-grid" id="anasayfa">
                        {/* <div className="homeImg">
                            <Slider></Slider>
                        </div> */}
                        <div className="anasayfa">
                            <div>
                            <h1>SAKARYA NOVA HALI YIKAMA <span></span></h1>
                            <h1>En iyisi,<span></span></h1>
                            <h2 className="extra">En temizi <span></span></h2>
                            <a href="#iletisim" type="button" className="cta">İletişim</a>
                           
                        </div>
                        <div className="homeSocial">
                                {
                                    HomeSocial && HomeSocial.map((social) => (
                                        <a href={social.iconLink} key={social.id}>
                                            {social.iconName}
                                        </a>
                                    ))
                                }
                            </div>
                        </div>

        </section>
    )
}

export { Home };