import BasicInfo from "../components/BasicInfo";
import { Navbar } from "@/components/Navbar";
import Galaxy from "@/components/Galaxy";
import Projects from "@/components/Projects";
import PurpleLine from "@/components/ui/PurpleLine";
const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full">
          <Galaxy />
        </div>
      </div>

      <Navbar />

      <main>
        <div>
          <div className="flex justify-evenly h-[70vh] items-center  p-10">
            <BasicInfo />
          </div>
        </div>
        <div className="flex justify-center mt-20 relative">
          {" "}
          <PurpleLine />
        </div>{" "}
        <div></div>
      </main>
    </div>
  );
};

export default Home;
