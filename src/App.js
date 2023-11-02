import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Team from "./routes/Team";
import Contact from "./routes/Contact";
import Learn from "./routes/Learn";
import Signup from "./routes/Signup";
import States from "./routes/States";
import MadhyaPradesh from "./States/MadhyaPradesh";
import Mahrashtra from "./States/Maharashtra";
import Chattisgarh from "./States/Chattisgarh";
import UttarPradesh from "./States/UttarPradesh";
import Uttrakhand from "./States/Uttrakhand";
import Rajasthan from "./States/Rajasthan";
import Punjab from "./States/Punjab";
import Assam from "./States/Assam";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/states" element={<States />} />
        <Route path="/mppage" element={<MadhyaPradesh />} />
        <Route path="/mhpage" element={<Mahrashtra />} />
        <Route path="/chpage" element={<Chattisgarh />} />
        <Route path="/uppage" element={<UttarPradesh />} />
        <Route path="/utpage" element={<Uttrakhand />} />
        <Route path="/rjpage" element={<Rajasthan />} />
        <Route path="/punpage" element={<Punjab />} />
        <Route path="/asmpage" element={<Assam />} />
      </Routes>
    </div>
  );
}
