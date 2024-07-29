// components/Adminheader.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { user_pic } from '@/src/assets/admin/adminicon';
import { fetchAdminProfile } from '@/src/redux/actions/authActions'; // Adjust the path to your authActions

const Adminheader: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { admin } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(fetchAdminProfile());
  }, [dispatch]);

  console.log("admin:-", admin);

  return (
    <header className="w-full">
      <section className="flex items-center justify-end p-4 bg-white shadow-md transition duration-500 ease-in-out">
        <NotificationsNoneIcon className="mx-2 text-gray-600 hover:text-blue-500 transition duration-300" />
        {admin && (
          <div className="mx-8 rounded-xl flex justify-between items-center gap-2 border border-red-600">
            <img src={user_pic.src} alt="User Avatar" className="h-12 w-auto rounded-xl" />
            <span className='items-center justify-center'>
              <p className="font-semibold text-sm text-center">{`Welcome, ${admin.name.split(" ")[0]}`}</p>
              {/* <p className="font-bold text-sm">{admin.email}</p> */}
            </span>
          </div>
        )}
      </section>
    </header>
  );
};

export default Adminheader;
