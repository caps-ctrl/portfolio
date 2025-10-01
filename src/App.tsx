import AnimatedBackground from "./components/AnimatedBackground";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10">
        <AnimatedBackground />
      </div>

      <Navbar />

      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
