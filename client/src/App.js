import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src="https://media.newyorker.com/photos/601b5bbe9029cdf74e3e94b2/master/w_1600%2Cc_limit/210215_r37928.jpg" alt=""></img>
        </div>
        <div className="texts">
          <h2>Stalker by Andrei Tarkovsky</h2>
          <p className="info">
            <a className="author">Nathan Stefanik</a>
            <time>2023-02-21 11:59</time>
          </p>
          <p>Stalker is characterized by religious metaphors that are reflective of a soviet
            era, post-apocalyptic universe viewed through a sepia lens.</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://media.newyorker.com/photos/601b5bbe9029cdf74e3e94b2/master/w_1600%2Cc_limit/210215_r37928.jpg" alt=""></img>
        </div>
        <div className="texts">
          <h2>Stalker by Andrei Tarkovsky</h2>
          <p className="info">
            <a className="author">Nathan Stefanik</a>
            <time>2023-02-21 11:59</time>
          </p>
          <p className="summary">Stalker is characterized by religious metaphors that are reflective of a soviet
            era, post-apocalyptic universe viewed through a sepia lens.</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://media.newyorker.com/photos/601b5bbe9029cdf74e3e94b2/master/w_1600%2Cc_limit/210215_r37928.jpg" alt=""></img>
        </div>
        <div className="texts">
          <h2>Stalker by Andrei Tarkovsky</h2>
          <p className="info">
            <a className="author">Nathan Stefanik</a>
            <time>2023-02-21 11:59</time>
          </p>
          <p>Stalker is characterized by religious metaphors that are reflective of a soviet
            era, post-apocalyptic universe viewed through a sepia lens.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
