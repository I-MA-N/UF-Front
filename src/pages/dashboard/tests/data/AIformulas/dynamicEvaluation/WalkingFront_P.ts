import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function WalkingFront_P(landmarks: NormalizedLandmark[]) {
   const values = {
      'صاف شدن پاها و زانو به داخل': "0",
   }
   const degrees: DegreeType[] = [];

   const kneeTop = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
   const kneeBottom = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
   const kneeSum = kneeTop + kneeBottom;
   degrees.push({
      landmarksUsed: [23, 25, 27],
      degree: kneeSum,
   })

   if (kneeSum <= 173) values["صاف شدن پاها و زانو به داخل"] = "1";

   return {
      values,
      degrees
   };
}

export default WalkingFront_P;