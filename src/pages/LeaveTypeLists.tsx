import LeaveTypeList from "../components/companysetting/leavetype/LeaveTypeList";
import Adminlayouts from "../layouts/admin/Adminlayouts";




export default function Dashboard() {
    return (
      <Adminlayouts>
           <LeaveTypeList/>
           </Adminlayouts>
    );
  }