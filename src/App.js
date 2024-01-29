import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import './App.scss';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Skils from './Pages/Skils/Skils';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Resume from './Pages/Resume/Resume';
import Scroll_btn from './Components/Scroll/Scroll_btn';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Scroll_btn/>
      <About/>
      <Service/>
      <Skils/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Toaster />
    </div>
  );
}

export default App;
