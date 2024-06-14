
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="p-2 py-3 flex justify-between items-center shadow-xl rounded-md bg-white">
      <div className="logo">
      <p className='font-bold text-slate-800 mx-4'>Docker Draggable</p>
      </div>
      <div className="flex space-x-5 mx-3">
        <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link>
        <Link to="/add-note" className="text-gray-800 hover:text-blue-600">AddNote</Link>
        <Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;