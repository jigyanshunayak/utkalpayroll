import DocutmentTypeList from "../components/companysetting/documenttype/DocumentTypeList";
import Adminlayouts from "../layouts/admin/Adminlayouts";




export default function Dashboard() {
    return (
      <Adminlayouts>
           <DocutmentTypeList/>
           </Adminlayouts>
    );
  }