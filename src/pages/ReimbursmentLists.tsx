
import ReimbursmentList from "../components/companysetting/reimbursment/ReimbursmentList";
import Adminlayouts from "../layouts/admin/Adminlayouts";




export default function Dashboard() {
    return (
      <Adminlayouts>
           <ReimbursmentList/>
           </Adminlayouts>
    );
  }