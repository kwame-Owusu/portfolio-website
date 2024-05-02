import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="container animate__animated animate__fadeInDown">
      <div>
        <h1>Not Found</h1>
        <hr />
        <p>The page you are looking for was not found, I'm probably working on it <span>👨🏿‍💻</span></p>
      </div>
      <div><a href="/" className="btn">Return to Home</a></div>
    </div>
  );
}

export default NotFound;
