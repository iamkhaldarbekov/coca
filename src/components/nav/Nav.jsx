import {Link} from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';

export default function Nav() {
  return (
    <nav className="wrapper py-[25px] flex justify-between items-center">
      <img src={logo} alt="logo" />
      <ul>
        <Link className='mr-[32px] font-medium text-dark hover:underline' to='/'>Home</Link>
        <Link className='mr-[32px] font-medium text-dark hover:underline' to='/about'>About</Link>
        <Link className='mr-[32px] font-medium text-dark hover:underline' to='/blog'>Blog</Link>
        <Link className='mr-[68px] font-medium text-dark hover:underline' to='/pricing'>Pricing</Link>
        <Link className='pb-[5px] font-semibold text-black border-black border-b-[1px]' to='/contact'>Contact Us</Link>
      </ul>
    </nav>
  )
}