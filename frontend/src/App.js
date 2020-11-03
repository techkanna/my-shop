import './scss/style.scss';

function App() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="left">
            <button className="logo">MY SHOP</button>
            <form>
              <input type="text" placeholder='Search Products...'/>
              <button type="submit">SEARCH</button>
            </form>
          </div>
          <div className="right"></div>
        </div>
      </nav>
    </>
  );
}

export default App;
