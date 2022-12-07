import React from 'react'
import '../Styles/About.css'
import ebra3 from '../img/7.jpg';
function About() {
    return (
        <section className="about section" id="hakkimda">

        <h2 className="section_title">Hakkımızda</h2>

        <div className="aboutContainer bd_grid">
            <div className="about_text_Section">
                <h2 className="about_subtitle">
                    SAKARYA HALI YIKAMA <br /> <span>HAKKIMIZDA</span>
                </h2>
                <p>
                HALILARINIZ OTOMATİK YIKAMA İLE YIKANIR KAPALI ALANDA MUHAFAZA EDİLİP KURUTULUR HIZLI TESLİMAT İLE KAPINIZA SERVİS EDİLİR</p>
            </div>

            <div className="aboutImage">
                <img src={ebra3} alt=""></img>
            </div>
        </div>
    </section>
    )
}

export { About }