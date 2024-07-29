import { company, dashboardImg, img1, img2, img3, img4, img5, img6, leads } from "@/src/assets/dashboard";

export interface CardData {
  id: number;
  title: string;
  img: string ;
  count: number;
}

export const cardData = [
  {
    id:1,
    title: 'Company',
   img: img1,
    count: 17,
  },
  {
    id:2,
    title: 'Employee',
    img: img2,
    count: 1157,
  },
  {
    id:3,
    title: 'Leave',
    img: img3,
    count: 12,
  },
  {
    id:4,
    title: 'Reimbursement',
    img: img4,
    count: 43,
  },
  {
    id:5,
    title: 'Attendance',
    img: img5,
    count: 345,
  },
  {
    id:6,
    title: 'Salary Request',
    img: img6,
    count: 18,
  },
];

// utils/companyData.ts
export const companyData = [
  {
     image: 'https://via.placeholder.com/150',
    name: 'Company A',
    phone: '123-456-7890',
    email: 'emailA@company.com',
    about: 'About Company A',
  },
  {
     image: 'https://via.placeholder.com/150',
    name: 'Company B',
    phone: '098-765-4321',
    email: 'emailB@company.com',
    about: 'About Company B',
  },
  // Add more companies as needed
];

// utils/leadsData.ts
export const leadsData = [
  {
    name: 'Lead A',
    phone: '123-456-7890',
    email: 'leadA@company.com',
    companyName: 'Company A',
    status: 'Active',
    image: '/path/to/imageA.jpg', 
  },
  {
    name: 'Lead B',
    phone: '098-765-4321',
    email: 'leadB@company.com',
    companyName: 'Company B',
    status: 'Inactive',
    image: '/path/to/imageB.jpg', 
  },
  // Add more leads as needed
];
import { sideBarArrType } from "@/src/types";
export const sideBarArr: sideBarArrType[] = [
  
  {
      id: 1,
      title: "Dashboard",
      img :dashboardImg,
      path: "./dashboard",
    },
    {
      id: 2,
      title: "Company",
      img :company,
      path: "./company",
   
    },
    {
      id: 3,
      title: "Leads",
      img :leads,
      path: "./leads",
    },
]