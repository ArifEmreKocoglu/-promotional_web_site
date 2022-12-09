import React from 'react'
import '../Styles/Services.css'
import { ServiceBox } from './ServiceBox'
import TL from '../img/TL.png';
import kargo from '../img/Kargo.png';
import temizlik from '../img/temizlik.png';

function Services() {
    return (
        <section className="services section bd_grid" id="hizmetler">
            <h2 className="section_title">Hizmetler</h2>

            <div className="serviceContainer bd_grid">
                <div className="serviceImage">

                    <ServiceBox imgName={TL} box_name={"Uygun fiyatlı"}></ServiceBox>
                    <ServiceBox imgName={kargo} box_name={"Hızlı teslimat"}></ServiceBox>
                    <ServiceBox imgName={temizlik} box_name={"Kaliteli hizmet"}></ServiceBox>

                </div>
            </div>
        </section>
    )
}

export {Services};
