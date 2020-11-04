import './scss/style.scss';
import Header from './components/Header';
import OwlCarousel from 'react-owl-carousel2';
function App() {
  const options = {
    items: 1,
    nav: true,
    loop: true,
    // autoplay: true
  };

  return (
    <>
      <Header />

      <OwlCarousel options={options}>
        <div><h1>hallo</h1></div>
        <div><h1>hallo</h1></div>
        <div><h1>hallo</h1></div>
      </OwlCarousel>
    </>
  );
}

export default App;
