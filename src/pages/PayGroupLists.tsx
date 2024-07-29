import PayGroupList from "../components/companysetting/paygroup/PayGroupList";
import Adminlayouts from "../layouts/admin/Adminlayouts";



export default function Dashboard() {
    return (
      <Adminlayouts>
           <PayGroupList/>
           </Adminlayouts>
    );
  }