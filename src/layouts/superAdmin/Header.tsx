import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { logo } from '@/src/assets/dashboard';

const Header = () => {
  return (
    <header>
      <section className="main-container flex items-center justify-end p-4 bg-white shadow-md transition duration-500 ease-in-out">
        <HelpOutlineIcon className="mx-2 text-gray-600 hover:text-blue-500 transition duration-300" />
        <NotificationsNoneIcon className="mx-2 text-gray-600 hover:text-blue-500 transition duration-300" />
        <div className="mx-8">
          <img src={logo.src} alt="Company Logo" className="h-8 w-auto" />
        </div>
      </section>
    </header>
  );
};

export default Header;
