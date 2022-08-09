import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../styles/index.scss';

const Layout = () => (
  <div id="layout" className="flex flex-col w-full">
    <Header />
    <Outlet />
  </div>
);

export default Layout;
