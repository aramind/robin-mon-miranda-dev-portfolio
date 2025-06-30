import React from "react";
import ParagraphWrapper from "./ParagraphWrapper";
import Highlighted from "./Highlighted";

const ParagraphV2 = () => {
  return (
    <>
      {/* <ParagraphWrapper>
        <Highlighted>Engineer</Highlighted> by training,{" "}
        <Highlighted>builder</Highlighted> by passion, and{" "}
        <Highlighted>user-centered</Highlighted> by mindset — I craft solutions
        engineered with logic and designed with empathy.
      </ParagraphWrapper> */}
      <ParagraphWrapper>
        My <Highlighted>background in engineering</Highlighted> taught me how to
        think critically and approach problems with structure. Over time, I
        discovered my <Highlighted>passion in building </Highlighted> digital
        products — not just writing code, but creating thoughtful,{" "}
        <Highlighted>usable solutions</Highlighted> from the ground up.
      </ParagraphWrapper>
      <ParagraphWrapper>
        Alongside this, I developed a strong fascination with{" "}
        <Highlighted>UX and psychology</Highlighted>: how people think and feel,
        what influences behavior, and how design can shape{" "}
        <Highlighted>better experiences.</Highlighted>
      </ParagraphWrapper>
      <ParagraphWrapper>
        I don’t see these areas as separate — to me, they form a{" "}
        <Highlighted>powerful combination</Highlighted>. By blending{" "}
        <Highlighted>technical rigor</Highlighted>,{" "}
        <Highlighted>product thinking</Highlighted>, and{" "}
        <Highlighted>human insight</Highlighted>, I strive to build tools and
        experiences that are both effective and meaningful.{" "}
      </ParagraphWrapper>
      <ParagraphWrapper>
        I’m most excited by challenges that involve solving real-world problems
        — especially those that live at the intersection of{" "}
        <Highlighted>technology</Highlighted>, <Highlighted>design</Highlighted>
        , and <Highlighted>human behavior</Highlighted>.
      </ParagraphWrapper>
      <ParagraphWrapper>
        As I <Highlighted>continue learning</Highlighted> and building, I’ve had
        the <Highlighted>chance to work</Highlighted> with the following{" "}
        <Highlighted>technologies:</Highlighted>
      </ParagraphWrapper>
    </>
  );
};

export default ParagraphV2;
