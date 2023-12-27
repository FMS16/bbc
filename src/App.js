import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import OrderNow from './components/OrderNow';
import Restaurants from './components/Restaurants';
import WhoWeAre from './components/WhoWeAre';
import img from "./assets/images/bannerthree.jpg"
import imgTwo from "./assets/images/banner.jpg"
import imgThree from "./assets/images/bannerfour.jpg"
import BannerBetween from './components/BannerBetween';
import Idea from './components/Idea';
import Difference from './components/Difference';
import Footer from './components/Footer';
import imgS from "./assets/images/bannerfive.jpg"

function App() {
  const windowWidth = window.innerWidth;
  return (
    <div className="App">
      <Header />
      <Banner />
      <WhoWeAre />
      <BannerBetween img={imgTwo} />
      <Restaurants />
      {windowWidth <= 600 ? <BannerBetween img={imgS} /> : <BannerBetween img={img} />}
      <Idea />
      <BannerBetween img={imgThree} />
      <Difference />
      <Footer />
      <OrderNow />
    </div>
  );
}

export default App;
