import Navbar from "../src/components/Navbar";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="flixed top-0 -z-10 h-full">
        
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar/>
      <div className="container mx-auto px-8"></div>
    </div>
  );
};

export default App;
