import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import getInputKey from "../../../../../../../../utils/getInputKey";
import { dynamicEvaluationType } from "../../../../../../tests/data/testsData/dynamicEvaluation";

function generateReportData(usersData: OrgMemberData[], section: dynamicEvaluationType[0][0]) {
   const resultArr = section.questions.map(input => {
      let inputCount = 0;
      let inputValue = 0;

      usersData.forEach(userData => {
         const formData = userData.formData['ارزیابی پویا'];

         if (formData) {
            const key = getInputKey(true, section.nameFA, input.title);
            const value = formData[key]?.value;

            if (value) {
               inputCount++;
               inputValue += Number(value);
            }
         }
      })

      return {
         name: `${input.title} (${inputCount})`,
         src: input.src,
         value: inputCount ? Number((inputValue / inputCount).toFixed(2)) * 100 : 0
      }
   })

   return resultArr;
}

export default generateReportData;