import './App.css'
import Header from './components/Header';
import Home from './components/HomeContent';
import Sobre from './components/AboutContent';
import Projetos from './components/ProjectsContent';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="sobre">
          <Sobre />
        </section>
        <section id="projetos">
          <Projetos />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;