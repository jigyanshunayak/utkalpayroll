import LeavePolicyList from "../components/companysetting/leavepolicy/LeavePolicy";
import Adminlayouts from "../layouts/admin/Adminlayouts";



export default function Dashboard() {
    return (
      <Adminlayouts>
           <LeavePolicyList/>
           </Adminlayouts>
    );
  }