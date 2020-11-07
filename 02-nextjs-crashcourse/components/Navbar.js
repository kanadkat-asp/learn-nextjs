import Link from './Link'

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="container px-3">
      <a href="#" className="navbar-brand">Axios</a>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
          <li className="nav-item mx-4">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item mx-4">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;