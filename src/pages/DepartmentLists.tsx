import DepartmentList from "../components/companysetting/department/DepartmentList";
import Adminlayouts from "../layouts/admin/Adminlayouts";





export default function Dashboard() {
    return (
      <Adminlayouts>
           <DepartmentList/>
           </Adminlayouts>
    );
  }