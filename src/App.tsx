// components
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { PriceList } from "./components/PriceList/PriceList";
import { Story } from "./components/Story/Story";
import { Usage } from "./components/Usage/Usage";
import { Footer } from "./components/Footer/Footer";
import { Team } from "./components/Team/Team";


function App() {
  return (
    <>
        <Header />
        <Hero />
        <Story />
        <Usage />
        <PriceList />
        <Team />
        <Footer />
    </>
  );
}

export default App;
