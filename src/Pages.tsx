import { Link } from 'react-router';

export function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>WELCOME</p>
      <Link to="/about"> About Page</Link>
      <a href="/about">Test About</a>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>we the best ♥</p>
      <Link to="/"> Home Page</Link>
    </div>
  );
}
