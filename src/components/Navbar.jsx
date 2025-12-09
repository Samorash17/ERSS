import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>My Application</h1>
            <div className="links">
                <Link to="/">Home</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;