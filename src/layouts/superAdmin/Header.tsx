import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { logo } from '@/src/assets/dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { logout } from '@/src/redux/actions/authActions';
const Header = () => {
  const dispatch = useDispatch<any>();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/'); // Redirect to login page after logout
};
  return (
    <header>
      <section className="main-container flex items-center justify-end p-4 bg-white shadow-md transition duration-500 ease-in-out">
        <HelpOutlineIcon className="mx-2 text-gray-600 hover:text-blue-500 transition duration-300" />
        <NotificationsNoneIcon className="mx-2 text-gray-600 hover:text-blue-500 transition duration-300" />
        <div className="mx-8 flex gap-6 items-center">
          <img src={logo.src} alt="Company Logo" className="h-8 w-auto" />
          <span className='group flex items-center gap-2' onClick={handleLogout}>
            <LogoutIcon/>
            <p className='hidden uppercase cursor-pointer group-hover:block'>logout</p>
          </span>
        </div>
      </section>
    </header>
  );
};

export default Header;