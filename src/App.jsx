import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Honors from './components/Honors/Honours';
import Accordion from './components/Accordion/Accordion';
import Memories from './components/Memories/Memories';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Honors />
        <Accordion />
        <Memories />
      </main>
    </>
  );
};

export default App;
