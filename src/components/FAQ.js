
import React, { useState } from "react";
import "./FAQ.css";
import { ButtonMain } from "./ButtonMain";
import { Emailinput } from "./Emailinput";

export function FAQSection(){
    const [openIndex, setOpenIndex] = useState(null);

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

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    return(
              <main style={{ maxWidth: "960px", margin: "0 auto", padding: "60px 20px" }}>
        <h1 style={{
            color: "white",
          fontSize: "2.5rem",
          textAlign: "center",
          fontWeight: "700",
          marginBottom: "40px"
        }}>
          Frequently Asked Questions
        </h1>

<section>
          {faqItems.map((item, index) => (
            <div key={index} style={{ backgroundColor: "#303030", marginBottom: "8px" }}>
              <button
                onClick={() => toggle(index)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "24px",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer"
                }}
              >
                {item.q}
                <span style={{ fontSize: "2rem" }}>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div style={{ padding: "0 24px 24px", fontSize: "1.1rem", color: "#ddd" }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </section>

         <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ color: "white", fontSize: "1.1rem", marginBottom: "20px" }}>
          Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
      <Emailinput/>
               <ButtonMain color="red" text="Get Started"></ButtonMain>
          </div>
        </div>
      </main>
    );
}
