import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import ourcartlogo from '../../../assets/images/ourcartfull.png';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <a class="text-black" href="/">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img className="shadow-md rounded-md" src={ourcartlogo}/>
        </div>
        OurCart
      </div>
      <div className="flex mt-4 sm:mt-0">
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Shop Together</Button>
      </div>
    </div>
    </a>
  </header>
);

export default Header;
