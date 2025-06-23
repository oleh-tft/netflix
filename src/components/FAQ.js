
import React, { useState } from "react";
import "./FAQ.css";
import { ButtonSVG } from "./ButtonSVG";
import { Emailinput } from "./Emailinput";
import { AccordionMain } from "./AccordionMain";

import { useTranslation } from 'react-i18next';

export function FAQSection() {

  const { t } = useTranslation();
  const rightArrow = 'M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z'

  const faqItems = [
    {
      q: "What is Netflix?",
      a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    },
    {
      q: "How much does Netflix cost?",
      a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 4.99 to EUR 9.99 a month. No extra costs, no contracts."
    },
    {
      q: "Where can I watch?",
      a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
      q: "How do I cancel?",
      a: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      q: "What can I watch on Netflix?",
      a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
    },
    {
      q: "Is Netflix good for kids?",
      a: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly content."
    },
    {
      q: "Why am I seeing this language?",
      a: "Your browser preferences determine the language shown here."
    }
  ];

  return(
    <main id="faq-main">
      <div id="acc-wrapper">
        <h1 id="faq-text-questions">Frequently Asked Questions</h1>
        <section style={{width: '100%'}}>
          <AccordionMain items={faqItems}/>
        </section>
      </div>
      <div style={{ textAlign: "center", marginTop: "4rem", width: "50vw"}}>
        <p style={{ color: "white", fontSize: "1rem", marginBottom: "1rem" }}>Ready to watch? Enter your email to create or restart your membership.</p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
          <Emailinput/>
          <ButtonSVG color="red" text={t('landing.button.1')} d={rightArrow}></ButtonSVG>
        </div>
      </div>
    </main>
  );
}
