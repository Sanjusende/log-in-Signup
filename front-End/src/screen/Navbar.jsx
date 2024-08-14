import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li>

          <Link to="/dashboard" className="text-white hover:text-gray-400">Dashboard</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
