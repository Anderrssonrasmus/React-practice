import React from 'react'
import heroImage from "../media/hero.jpg";
import badrumImage from "../media/badrum.jpg";

export default function Homepage() {
  return (
    <>
      <section id="hero">
        <h1>Inreder allmänna och privata utrymmen</h1>
        <div>
            <img src={heroImage}/>
            <div>
                <p>
                Långsiktiga resultat och samarbeten är en av våra styrkor då vi miljö- och kvalitetssäkrar i alla led. Vi är kreativa och innovativa. Vi samarbetar gärna med den modiga kunden, som vågar och vill.
                <br/>
                <br/>
                “Ljusets skiftande former är grundläggande för människans välbefinnande. Samspelet mellan ljus, skugga och mörker har en djupgående effekt på var och ens sinnesstämning. Att hitta den optimala balansen är ständigt vad vi strävar efter.” 
                <br/>
                <br/>
                Mats Nordin
                </p>

                <div>
                    <a href="#">Våra projekt</a>
                    <a href="#">Utforska showroom</a>
                </div>
            </div>
        </div>
      </section>   

      <section id="justified-text">
        <div>
            <img src={badrumImage} alt="" />
            <h2>Design</h2>
        </div>
        <h2>Vi erbjuder <span>brett</span> utbud</h2>
        <div>
            <h2>Av varumärken.</h2>
            <p>Med ett stort nätverk och kontakter arbetar vi över hela Sverige och ett antal projekt i Spanien i samarbete med Europas ledande leverantörer och designers.</p>
        </div>
      </section>
    </>
  )
}
