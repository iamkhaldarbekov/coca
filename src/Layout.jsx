import {Outlet} from 'react-router-dom';

import {Nav, Footer} from './components';

export default function Layout() {
  return (
    <div className="bg-white mx-auto sm:w-[375px] w-[1440px] font-inter">
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}