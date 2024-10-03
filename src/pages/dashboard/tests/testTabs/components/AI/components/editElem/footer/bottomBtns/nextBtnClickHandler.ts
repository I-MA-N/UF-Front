import JSZip from "jszip";
import SectionNames from "../../../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../../../store/AIStore";
import useFormStore from "../../../../../../../store/formStore";
import usePhotoStore from "../../../../../../../store/photoStore";
import { DrawingUtils, NormalizedLandmark } from "@mediapipe/tasks-vision";
import DistanceType from "../../../../../../../../../../types/DistanceType";
import { drawDegree, drawDistance } from "../../../../../../../../../../utils/AIFuncs";

function nextBtnClickHandler(
   landmarks: NormalizedLandmark[],
   nextSectionName: SectionNames | undefined,
) {
   const { currentSection, setCurrentSection, getOrSetZipFile, userHeight } = useAIStore.getState();
   const { updateFormData, setValue } = useFormStore.getState();
   const { image, removePhoto, videoSize } = usePhotoStore.getState();

   const zip = new JSZip();

   if (image && currentSection && videoSize && setValue) {
      const img = new Image();
      img.src = image;
      img.onload = async () => {
         const canvas = document.createElement("canvas");
         const ctx = canvas.getContext("2d");

         if (ctx) {
            const editCanvas = document.getElementById("editCanvas") as HTMLCanvasElement;
            const result = currentSection.photoFn(landmarks, userHeight, { width: editCanvas.clientWidth, height: editCanvas.clientHeight });
            const { values, degrees } = result;
            const isSectionDynamic = "src" in currentSection.questions[0];
            
            Object.entries(values).forEach(([key, value]) => {
               setValue(key, value);
            })
            updateFormData();

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const drawingUtils = new DrawingUtils(ctx);

            degrees.forEach(degree => drawDegree(landmarks, degree, drawingUtils, ctx, canvas.width, canvas.height, isSectionDynamic));
            if ("distances" in result) {
               const distances = result.distances as DistanceType[];
               distances.forEach(distance => drawDistance(landmarks, distance, drawingUtils, ctx, canvas.width, canvas.height, isSectionDynamic));
            }

            const finalCanvas = document.createElement("canvas");
            const finalCtx = finalCanvas.getContext("2d");

            if (finalCtx) {
               const { result: { left, width, top, height } } = currentSection.cropFn(landmarks, videoSize);
               finalCanvas.width = width;
               finalCanvas.height = height;
               finalCtx.drawImage(canvas, left, top, width, height, 0, 0, width, height);

               const imageBase64 = finalCanvas.toDataURL("image/png");
               zip.file('image.jpeg', imageBase64);

               const landmarksJson = JSON.stringify(landmarks);
               zip.file('landmarks.json', landmarksJson);

               const imageSizeJson = JSON.stringify(videoSize);
               zip.file('imageSize.json', imageSizeJson);

               const base64 = await zip.generateAsync({ type: 'base64' });
               getOrSetZipFile(currentSection.name, base64);

               setCurrentSection(nextSectionName);
               removePhoto();
            }
         }
      }
   }
}

export default nextBtnClickHandler;