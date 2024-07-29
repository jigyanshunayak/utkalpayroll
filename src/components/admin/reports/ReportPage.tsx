// pages/reportsGallery.tsx

import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

const ReportsGalleryPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Reports Gallery</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Reports Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Attendance Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Attendance</h2>
          <p className="text-gray-600 mb-4">
            Explore different reports related to attendance.
          </p>
          <div className="flex items-center space-x-2 text-blue-500 cursor-pointer hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4a1 1 0 112 0v6a1 1 0 11-2 0V4zm2 10a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="/attendance/daily">
              <span>Daily wise report</span>
            </Link>
          </div>
        </div>

        {/* User-wise Report Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">User-wise Report</h2>
          <p className="text-gray-600 mb-4">
            View reports categorized by individual users.
          </p>
          <div className="flex items-center space-x-2 text-blue-500 cursor-pointer hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4a1 1 0 112 0v6a1 1 0 11-2 0V4zm2 10a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="/attendance/user">
              <span>User wise report</span>
            </Link>
          </div>
        </div>

        {/* Company-wise Report Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Company-wise Report</h2>
          <p className="text-gray-600 mb-4">
            Reports specific to different companies.
          </p>
          <div className="flex items-center space-x-2 text-blue-500 cursor-pointer hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4a1 1 0 112 0v6a1 1 0 11-2 0V4zm2 10a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="/attendance/company">
              <span>Company wise report</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsGalleryPage;
