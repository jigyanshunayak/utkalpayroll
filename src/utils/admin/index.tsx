import { admin_pic, announcement_pic, att_pic, attens_pic, dash_pic, emp_pic, holiday_pic, leave_pic, pay_pic, payroll_pic, reim_pic, reports_pic, resign_pic, salary_pic, shift_pic } from "@/src/assets/admin/adminicon"
import { adminsideBarArrType, sideBarArrType } from "@/src/types"

export const addEmployeeArr= [
    {
      id: 21,
      title: "Personal Profile",
      path: "/addEmployee",
    },
    {
      id: 22,
      title: "Professional Profile",
      path: "/professionalDetails",
    },
    {
      id: 23,
      title: "Educational Profile",
      path: "/educationDetails",
    },
    {
      id: 24,
      title: "Experience Profile",
      path: "/experienceDetails",
    },
    {
      id: 25,
      title: "Family Information",
      path: "/familyDetails",
    },
    {
      id: 26,
      title: "Financial Details",
      path: "/financialDetail",
    },
    {
      id: 27,
      title: "Document Details",
      path: "/documentDetail",
    },
    {
      id: 28,
      title: "Compensation",
      path: "/compensationPage",
    },
    {
      id: 29,
      title: "Credential",
      path: "/credentialForm",
    }
  ]

  export const sideBarArr: sideBarArrType[] = [
  
    {
        id: 1,
        title: "Dashboard",
        img :dash_pic,
        path: "/admin/admin-dashboard",
      },
      {
        id: 2,
        title: "Employees",
        img :emp_pic,
        path: "/AllEmployees",
     
      },
      {
        id: 3,
        title: "Attendance",
        img :att_pic,
        path: "/AttendancePage",
      },
      {
        id: 4,
        title: "Attendance Status ",
        img :attens_pic,
        path: "/AttendanceStatusPage",
      },
      {
        id: 5,
        title: "Shift Status",
        img :shift_pic,
        path: "/ShiftStatuspage",
      },
      {
        id: 6,
        title: "Leave",
        img :leave_pic,
        path: "/LeavePage",
      },
      {
        id: 7,
        title: "Reimbursment",
        img :reim_pic,
        path: "/ReimbursementPage",
      },
      {
        id: 8,
        title: "Resignation",
        img :resign_pic,
        path: "/ResignationPage",
      },
      {
        id: 9,
        title: "Salary Request",
        img :salary_pic,
        path: "/SalaryRequestPage",
      },
      {
        id: 10,
        title: "Payslip",
        img :pay_pic,
        path: "/PayslipPage",
      },
      {
        id: 11,
        title: "Payroll Details ",
        img :payroll_pic,
        path: "/PayrollDetailsPage",
      },
      {
        id: 12,
        title: "Holiday",
        img :holiday_pic,
        path: "/Holidaypage",
      },
      {
        id: 13,
        title: "Reports",
        img :reports_pic,
        path: "/ReportsGalleryPage",
      },
      {
        id: 14,
        title: "Announcement",
        img :announcement_pic,
        path: "/AnnouncementsPage",
      },
]


// src/utils/admin.ts
export interface CardProps {
  id: number;
  title: string;
  count: number;
  img: {
    src: string;
  };
}
// Sample data
export const cardData: CardProps[] = [
  {
    id: 1,
    title: 'Card 1',
    count: 10,
    img: {
      src: emp_pic.src , 
    },
  },
  // More card data...
];

export const adminsideBarArr: adminsideBarArrType[] = [
  
  {
      id: 1,
      title: "Department",
      img :dash_pic,
      path: "/DepartmentLists",
    },
    {
      id: 2,
      title: "Designation",
      img :emp_pic,
      path: "/DesignationLists",
   
    },
    {
      id: 3,
      title: "Grade",
      img :att_pic,
      path: "/GradeLists",
    },
    {
      id: 4,
      title: "Attendance",
      img :attens_pic,
      path: "/",
    },
    {
      id: 5,
      title: "Leave Type",
      img :shift_pic,
      path: "/LeaveTypeLists",
    },
    {
      id: 6,
      title: "Leave Policy",
      img :leave_pic,
      path: "/LeavePolicyLists",
    },
    {
      id: 7,
      title: "Leave Detail",
      img :reim_pic,
      path: "/leaveDetail",
    },
    {
      id: 8,
      title: "Shift Applicability",
      img :resign_pic,
      path: "/ShiftApplicabiltyLists",
    },
    {
      id: 9,
      title: "Salary Request",
      img :salary_pic,
      path: "/SalaryRequestPage",
    },
    {
      id: 10,
      title: "Document Type",
      img :pay_pic,
      path: "/DocumentTypeLists",
    },
    {
      id: 11,
      title: "Reimbursment ",
      img :payroll_pic,
      path: "/ReimbursmentLists",
    },
    {
      id: 12,
      title: "resignation",
      img :holiday_pic,
      path: "/ResignationLists",
    },
    {
      id: 13,
      title: "Salary Component",
      img :reports_pic,
      path: "/SalaryComponentLists",
    },
    {
      id: 14,
      title: "Pay Group",
      img :announcement_pic,
      path: "/PayGroupLists",
    },
]