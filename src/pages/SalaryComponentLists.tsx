import SalaryComponentList from "../components/companysetting/salarycomponent/SalaryComponentList";
import Adminlayouts from "../layouts/admin/Adminlayouts";



export default function Dashboard() {
    return (
      <Adminlayouts>
           <SalaryComponentList/>
           </Adminlayouts>
    );
  }