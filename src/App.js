import Button from './components/Buttons';

function App() {
  return (
    <div className="shell">
      <div className="name">Nick Wilder</div>
      <div className="btn-container">
        <Button label="Github" imgPath="../img/github.png"/>
        <Button label="Email" imgPath="../img/email.png"/>
        <Button label="LinkedIn" imgPath="../img/linkedin.png"/>
      </div>
    </div>
  );
}

export default App;
