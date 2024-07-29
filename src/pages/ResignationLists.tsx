import ResignationList from "../components/companysetting/resignation/ResignationList";
import Adminlayouts from "../layouts/admin/Adminlayouts";




export default function Dashboard() {
    return (
      <Adminlayouts>
           <ResignationList/>
           </Adminlayouts>
    );
  }