import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function Side_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;
   
   const left = (isEven ? landmarks[30].x : landmarks[29].x) * videoSize.width;
   const top = (isEven ? landmarks[6].y : landmarks[3].y) * videoSize.height;
   const height = ((isEven ? landmarks[30].y : landmarks[29].y) - (isEven ? landmarks[6].y : landmarks[3].y)) * videoSize.height;

   return {
      left: left - 40,
      top: top - 30,
      width: (isEven ? left : left - 70),
      height: height + 80
   }
}

export default Side_C;