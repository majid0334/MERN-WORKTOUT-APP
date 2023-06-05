import { Link } from "react-router-dom";


//Med hjälp av link react router dom navigarar vi tillbka till home page
function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
