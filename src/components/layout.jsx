import Navigation from './Navigation';

const Layout = ({ children }) => (
  <div>
    <header>
      <Navigation />
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
