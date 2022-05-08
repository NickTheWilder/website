import './App.css';

function App() {
  return (
    <div className="shell">
      <div className="name">Nick Wilder</div>
      <div className="btn-container">
        <a class="btn" href="https://github.com/NickTheWilder">
          <img src={require("./img/github.png")} alt="GithHub Logo" />GitHub
        </a>
        <a class="btn" href="https://www.linkedin.com/in/nick-wilder/">
          <img src={require("./img/linkedin.png")} alt="GithHub Logo" />GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
