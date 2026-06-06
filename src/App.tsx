import './App.css';

function App() {
  const name = 'React';
  const age = 5;

  function test() {
    console.log('test');
  }
  return (
    <>
      <p className="hello" style={{ color: 'blue', fontSize: '50px' }}>
        Hello, {name}, {age}
      </p>
      <p className="hello" style={{ color: 'blue', fontSize: '50px' }}>
        Hello, {name}, {age}
      </p>

      <p className="hello" style={{ color: 'blue', fontSize: '50px' }}>
        Hello, {name}, {age}
      </p>

      <button onClick={test}>Click me</button>
    </>
  );
}

export default App;
