import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";
import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function Front_P(landmarks: NormalizedLandmark[]) {
   const values = {
      'گردن کج': '5',
      'شانه نابرابر': '5',
      'انحراف جانبی لگن': '5',
      'زانو پرانتزی': '5',
      'زانو ضربدری': '5',
      'چرخش خارجی پا': '5',
      'چرخش داخلی پا': '5',
   };
   const degrees: DegreeType[] = [];

   const ears = Math.abs(degreeTwoPoints(landmarks[7], landmarks[8]));
   if (ears >= 2.5) values["گردن کج"] = "3";
   if (ears >= 7.5) values["گردن کج"] = "1";

   degrees.push({
      landmarksUsed: [7, 8],
      degree: ears,
      value: values["گردن کج"]
   })

   const shoulders = Math.abs(degreeTwoPoints(landmarks[11], landmarks[12]));
   if (shoulders >= 2.5) values["شانه نابرابر"] = "3";
   if (shoulders >= 7.5) values["شانه نابرابر"] = "1";

   degrees.push({
      landmarksUsed: [11, 12],
      degree: shoulders,
      value: values["شانه نابرابر"]
   })

   const asis = Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
   if (asis >= 2.5) values["انحراف جانبی لگن"] = "3";
   if (asis >= 7.5) values["انحراف جانبی لگن"] = "1";

   degrees.push({
      landmarksUsed: [23, 24],
      degree: asis,
      value: values["انحراف جانبی لگن"]
   })

   const kneeTopLeft = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
   const kneeBottomLeft = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
   // const kneeTopRight = 180 - Math.abs(degreeTwoPoints(landmarks[24], landmarks[26]));
   // const kneeBottomRight = Math.abs(degreeTwoPoints(landmarks[26], landmarks[28]));
   const kneeSumLeft = kneeTopLeft + kneeBottomLeft;
   if (kneeSumLeft >= 160 && kneeSumLeft <= 173) values["زانو ضربدری"] = "3";
   if (kneeSumLeft < 160) values["زانو ضربدری"] = "1";
   if (kneeSumLeft >= 180 && kneeSumLeft <= 190) values["زانو پرانتزی"] = "3";
   if (kneeSumLeft > 190) values["زانو پرانتزی"] = "1";

   let kneeSumLeftValue = "5";
   if (values["زانو ضربدری"] === "1" || values["زانو پرانتزی"] === "1") {
      kneeSumLeftValue = "1";
   }
   if (values["زانو ضربدری"] === "3" || values["زانو پرانتزی"] === "3") {
      kneeSumLeftValue = "3";
   }
   degrees.push({
      landmarksUsed: [23, 25, 27],
      degree: kneeSumLeft,
      value: kneeSumLeftValue
   })

   const footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;
   // const footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
   if (footLeft >= 15 && footLeft <= 25) values["چرخش خارجی پا"] = "3";
   if (footLeft > 25) values["چرخش خارجی پا"] = "1";
   if (footLeft >= -10 && footLeft <= 5) values["چرخش داخلی پا"] = "3";
   if (footLeft < -10) values["چرخش داخلی پا"] = "1";

   let footLeftValue = "5";
   if (values["چرخش خارجی پا"] === "1" || values["چرخش داخلی پا"] === "1") {
      footLeftValue = "1";
   }
   if (values["چرخش خارجی پا"] === "3" || values["چرخش داخلی پا"] === "3") {
      footLeftValue = "3";
   }
   degrees.push({
      landmarksUsed: [29, 31],
      degree: footLeft,
      value: footLeftValue
   })

   return {
      values,
      degrees,
   };
}

export default Front_P;