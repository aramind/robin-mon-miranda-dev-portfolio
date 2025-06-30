import Highlighted from "./Highlighted";
import ParagraphWrapper from "./ParagraphWrapper";

const Paragraph = () => {
  return (
    <>
      <ParagraphWrapper>
        I come from a background in{" "}
        <Highlighted>electronics engineering</Highlighted>, with years of
        experience as a college and review instructor—helping future engineers
        pass and excel in their licensure exams.
      </ParagraphWrapper>
      <ParagraphWrapper>
        While I love teaching and mentoring, what truly energized me were the
        moments I had to <Highlighted>think</Highlighted> of solutions to
        specific problems: <Highlighted>designing</Highlighted> specialized
        materials, <Highlighted>creating</Highlighted> systems tailored to
        unique needs, and <Highlighted>figuring out</Highlighted> how to make
        ideas work in practice. That’s where I discovered my{" "}
        <Highlighted>passion — building solutions</Highlighted>.
      </ParagraphWrapper>
      <ParagraphWrapper>
        This led me to <Highlighted>explore software development</Highlighted>,
        a field where I can continue doing what I love: thinking critically and
        turning ideas into tools that solve problems.
      </ParagraphWrapper>
      <ParagraphWrapper>
        Now, I’m actively <Highlighted>transitioning</Highlighted> into this new
        path. I’ve recently{" "}
        <Highlighted>
          completed a full-stack web development bootcamp
        </Highlighted>
        , where I trained in the <Highlighted>MERN stack</Highlighted> (MongoDB,
        Express, React, Node.js) and added Material UI through creating side
        projects.
      </ParagraphWrapper>
      <ParagraphWrapper>
        Though I’m just starting out, I bring with me a strong foundation in{" "}
        <Highlighted>logic</Highlighted> and{" "}
        <Highlighted>systems thinking</Highlighted>,{" "}
        <Highlighted>problem-solver’s mindset</Highlighted>, passion for{" "}
        <Highlighted>building</Highlighted>, and a deep commitment to{" "}
        <Highlighted>continuous learning</Highlighted> and growth.
      </ParagraphWrapper>
      <ParagraphWrapper>
        As I <Highlighted>continue learning</Highlighted> and building, I’ve had
        the <Highlighted>chance to work</Highlighted> with the following{" "}
        <Highlighted>technologies:</Highlighted>
      </ParagraphWrapper>
    </>
  );
};

export default Paragraph;
