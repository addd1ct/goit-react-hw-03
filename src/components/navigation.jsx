import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contacts">Contacts</Link>
  </nav>
);

export default Navigation;
