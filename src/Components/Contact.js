import React from 'react'
import '../Styles/Contact.css'

function Contact() {

    return (
        <section className="bd_grid contact" id="iletisim">
            <div class="contact container">
            <h2 className="section_title" id="iletişim">İletişim</h2>
                <div class="contact-items">
                    <div class="contact-item">
                        <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
                        <div class="contact-info">
                            <h1>telefon</h1>
                            <h2>0535 060 99 33</h2>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
                        <div class="contact-info">
                            <h1>Email</h1>
                            <h2>info@gmail.com</h2>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
                        <div class="contact-info">
                            <h1>Adres</h1>
                            <h2>TEKELER MAH.KARASU CADDESİ NO:100 ADAPAZARI-SAKARYA</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Contact }