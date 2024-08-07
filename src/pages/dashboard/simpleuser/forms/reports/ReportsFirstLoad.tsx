import { useNavigate, useSearchParams } from "react-router-dom";
import Reports from "./Reports";
import Container from "../../../../common/Container";
import PrevBtn from "../../../../common/PrevBtn";
import generateReportsArr from "./analysis/generateReportsArr";
import { useUserDataContext } from "../../../../authentication/UserDataProvider";
import simpleuserGFormData from "../../../../../api/simpleuser/simpleuserGFormData";
import Loading from "../../../../common/Loading";

function ReportsFirstLoad() {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();

   const { data: formData, isPending } = simpleuserGFormData(searchParams.get('formName') || '');
   const userData = useUserDataContext();
   
   if (isPending) return <Loading />
   
   if (formData) {
      const reportsArr = generateReportsArr(formData, userData.gender);
      if (!reportsArr) {
         return <Container>
            <h1 className="mb-6 lg:text-lg text-center">شما ابتدا باید جنسیت خود را تعیین کنید!</h1>
            <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard')} />
         </Container>
      }

      if (formData.access !== 'false' && Object.keys(formData).length > 0 && reportsArr.length > 0) {
         return <Reports userData={userData} reportsArr={reportsArr} formData={formData} />
      } else {
         return <Container>
            <h1 className="mb-6 lg:text-lg text-center">اطلاعاتی برای این فرم پیدا نشد!</h1>
            <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard/forms')} />
         </Container>
      }
   }
}

export default ReportsFirstLoad