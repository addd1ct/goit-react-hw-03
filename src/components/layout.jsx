import Navigation from './navigation';

const Layout = ({ children }) => (
  <div>
    <header>
      <Navigation />
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
