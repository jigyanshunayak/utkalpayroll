import GradeList from "../components/companysetting/grade/GradeList";
import Adminlayouts from "../layouts/admin/Adminlayouts";



export default function Dashboard() {
    return (
      <Adminlayouts>
           <GradeList/>
           </Adminlayouts>
    );
  }
