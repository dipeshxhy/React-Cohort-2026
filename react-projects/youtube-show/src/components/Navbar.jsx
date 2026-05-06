import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 p-4 text-white text-2xl font-bold mb-10">
      <div className="container mx-auto">
        <Link to="/">CodeYT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
