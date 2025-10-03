import WritingText from "./WritingText";
import Aspects from "./ui/aspects";
import ShinyText from "../components/ShinyText";
import { Button } from "./ui/button";
import { SocialButtons } from "./ui/SocialButtons";

const BasicInfo = () => {
  return (
    <div>
      <h1 className="text-white text-6xl font-bold  tracking-tight">
        Full Stack <br />{" "}
        <span className="text-yellow-500 text-7xl ">Developer</span>
      </h1>
      <WritingText />
      <ShinyText
        text="Building scalable and beautiful websites that grow with your vision and your business."
        disabled={false}
        speed={4}
        className="py-4"
      />
      <div className="flex gap-5">
        <Aspects name="NodeJS" />
        <Aspects name="React" />
        <Aspects name="TypeScript" />
        <Aspects name="PostgreSQL" />
      </div>
      <div className="flex gap-4 px-4 py-5">
        <Button variant="nav">Projects</Button>
        <Button variant="nav">My resume</Button>
        <SocialButtons />
      </div>
    </div>
  );
};

export default BasicInfo;
