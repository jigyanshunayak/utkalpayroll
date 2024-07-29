import DesignationList from "../components/companysetting/designation/DesignationList";
import Adminlayouts from "../layouts/admin/Adminlayouts";




export default function Dashboard() {
    return (
      <Adminlayouts>
           <DesignationList/>
           </Adminlayouts>
    );
  }