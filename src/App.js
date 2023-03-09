import "./App.css";
import Conhecimentos from "./components/Conhecimentos/Conhecimentos";
import Contato from "./components/Contact/Contato";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projetos from "./components/Projetos/Projetos";
import Sobre from "./components/Sobre/Sobre";

function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Projetos />
      <Conhecimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
