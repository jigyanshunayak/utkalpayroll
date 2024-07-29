import ShfitApplicabiltyList from "../components/companysetting/shiftapplicabilty/ShiftApplicabiltyList";
import Adminlayouts from "../layouts/admin/Adminlayouts";




export default function Dashboard() {
    return (
      <Adminlayouts>
           <ShfitApplicabiltyList/>
           </Adminlayouts>
    );
  }