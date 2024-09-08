import { PoseLandmarker } from "@mediapipe/tasks-vision";
import usePhotoStore from "../../../../store/photoStore";
import CameraLandmarks from "./CameraLandmarks";
import EditElemFirstLoad from "./EditElemFirstLoad";
import CameraSimple from "./CameraSimple";
import { dynamicEvaluationType } from "../../../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../../../data/testsData/staticEvaluation";
import { useEffect } from "react";

type CameraFirstLoadProps = {
   model: PoseLandmarker,
   activeTestData: dynamicEvaluationType[0] | staticEvaluationType[0]
}

function CameraFirstLoad({ model, activeTestData }: CameraFirstLoadProps) {
   const { image, removePhoto } = usePhotoStore(state => ({ image: state.image, removePhoto: state.removePhoto }));

   useEffect(() => {
      return () => {
         removePhoto();
      }
   }, [])

   return (
      <div className="w-full fixed top-0 left-0 z-30 bg-primary/60 px-4">
         {
            image
               ?
               <EditElemFirstLoad />
               :
               "src" in activeTestData.questions[0]
                  ?
                  <CameraLandmarks model={model} />
                  :
                  <CameraSimple model={model} />
         }
      </div>
   );
};

export default CameraFirstLoad;