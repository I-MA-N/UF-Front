import JSZip from "jszip";
import { DrawingUtils, NormalizedLandmark, PoseLandmarker } from "@mediapipe/tasks-vision";
import ExtractedZipType from "../types/ExtractedZipType";
import { staticEvaluationType } from "../pages/dashboard/tests/data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../pages/dashboard/tests/data/testsData/dynamicEvaluation";
import useAIStore from "../pages/dashboard/tests/store/AIStore";
import usePhotoStore from "../pages/dashboard/tests/store/photoStore";
import DegreeType from "../types/DegreeType";
import DistanceType from "../types/DistanceType";

export const addExtraLandmarks = (
   landmarks: NormalizedLandmark[],
) => {
   // Direction of coordinates on side images have differences, so 'x' coordinate should be changed
   const currentSection = useAIStore.getState().currentSection;
   const isFromSide = currentSection?.name.toLowerCase().includes("side");

   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   if (isFromSide) {
      landmarks[33] = {
         x: ((landmarks[11].x + landmarks[12].x) / 2) - (isEven ? 0.03 : -0.03),
         y: landmarks[11].y - (30 * (landmarks[11].y - landmarks[7].y)) / 100,
         z: landmarks[29].z,
         visibility: landmarks[29].visibility,
      }

      landmarks[34] = {
         x: (isEven ? landmarks[12].x : landmarks[11].x) - (isEven ? 0.05 : -0.05),
         y: (landmarks[11].y + landmarks[23].y) / 2,
         z: isEven ? landmarks[28].z : landmarks[29].z,
         visibility: isEven ? landmarks[12].visibility : landmarks[11].visibility,
      }
   } else {
      landmarks[33] = {
         x: ((landmarks[11].x + landmarks[12].x) / 2),
         y: landmarks[11].y - (30 * (landmarks[11].y - landmarks[7].y)) / 100,
         z: landmarks[29].z,
         visibility: landmarks[29].visibility,
      }

      landmarks[34] = {
         x: (landmarks[11].x + landmarks[12].x) / 2,
         y: (landmarks[11].y + landmarks[23].y) / 2,
         z: landmarks[29].z,
         visibility: landmarks[11].visibility,
      }
   }

   const isSide = currentSection?.name === "side";
   if (isSide) {
      landmarks[35] = {
         x: isEven ? landmarks[28].x : landmarks[27].x,
         y: (landmarks[3].y + landmarks[6].y) / 2,
         z: isEven ? landmarks[28].z : landmarks[27].z,
         visibility: isEven ? landmarks[28].visibility : landmarks[27].visibility,
      }

      landmarks[36] = {
         x: isEven ? landmarks[28].x : landmarks[27].x,
         y: isEven ? landmarks[30].y : landmarks[29].y,
         z: isEven ? landmarks[28].z : landmarks[27].z,
         visibility: isEven ? landmarks[28].visibility : landmarks[27].visibility,
      }
   }
}

export const drawOnCanvas = (
   canvas: HTMLCanvasElement,
   palette: string[],
   landmarks: NormalizedLandmark[],
   isSide: boolean,
   editableLandmarks: number[]
) => {
   const ctx = canvas.getContext("2d");

   if (ctx) {
      ctx.save();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let newLandmarks: NormalizedLandmark[] = [];
      let newConnectors: { start: number, end: number }[] = [];

      if (isSide) {
         let isEven = true;
         if (landmarks[11].z < landmarks[12].z) isEven = false;

         const deletedLandmarks = [1, 2, 3, 4, 5, 6, 9, 10, 17, 18, 19, 20, 21, 22, 33, 34, 35, 36];
         const filteredLandmarks = landmarks.filter((_value, index) => {
            if (index === 0) return true;
            if (deletedLandmarks.includes(index)) return false;
            if (isEven) return index % 2 === 0;
            return index % 2 !== 0;
         }).concat([landmarks[33], landmarks[34]]);
         newLandmarks = [...new Set(filteredLandmarks)]
         newConnectors = [{ start: 0, end: 1 }, { start: 1, end: 10 }, { start: 10, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 2, end: 11 }, { start: 11, end: 5 }, { start: 5, end: 6 }, { start: 6, end: 7 }, { start: 7, end: 8 }, { start: 8, end: 9 }];
      } else {
         newLandmarks = landmarks;
         const extraConnectors = [{ start: 33, end: 11 }, { start: 33, end: 12 }, { start: 34, end: 11 }, { start: 34, end: 12 }, { start: 34, end: 23 }, { start: 34, end: 24 }];
         newConnectors = PoseLandmarker.POSE_CONNECTIONS.concat(extraConnectors);
      }

      const drawingUtils = new DrawingUtils(ctx);

      drawingUtils.drawLandmarks(newLandmarks, { color: palette[0], radius: 1.5 });
      drawingUtils.drawConnectors(newLandmarks, newConnectors, { color: palette[1], lineWidth: 0.8 });

      if (landmarks[35] && landmarks[36]) {
         const plumbLineLandmarks = [landmarks[35], landmarks[36]];
         const plumbLineConnectors = [{ start: 0, end: 1 }];
         drawingUtils.drawLandmarks(plumbLineLandmarks, { color: palette[0], radius: 1 });
         drawingUtils.drawConnectors(plumbLineLandmarks, plumbLineConnectors, { color: palette[1], lineWidth: 0.5 });
      }

      let font = "12px 'Estedad-Regular'";
      if (canvas.width > 400) font = "14px 'Estedad-Regular'";

      ctx.font = font;
      ctx.fillStyle = palette[2];
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      editableLandmarks.forEach(index => {
         const landmark = landmarks[index];
         if (landmark) {
            const pixelX = landmark.x * canvas.width;
            const pixelY = landmark.y * canvas.height;
            ctx.fillText(index.toString(), pixelX, pixelY);
         }
      })

      ctx.restore();
   }
}

export const drawOnVideo = (
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   video: HTMLVideoElement,
   landmarks: NormalizedLandmark[]
) => {
   const canvas = canvasRef.current;
   const ctx = canvas?.getContext("2d");

   if (canvas && ctx) {
      ctx.save();

      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      if (landmarks?.length) {
         let drawingUtils = new DrawingUtils(ctx);

         drawingUtils.drawLandmarks(landmarks, { color: '#fff', radius: 1 });
         drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: '#fff', lineWidth: 0.5 });
      }

      ctx.restore();
   }
}

let deltaX = 0;
let deltaY = 0;
export const circleDown = (
   pageX: number,
   pageY: number,
   circle: HTMLDivElement | null
) => {
   const setIsMovingLandmark = usePhotoStore.getState().setIsMovingLandmark;

   if (circle) {
      setIsMovingLandmark(true);
      const rect = circle.getBoundingClientRect();
      const offsetX = pageX - rect.left;
      const offsetY = pageY - rect.top;
      deltaX = offsetX - (rect.width / 2);
      deltaY = offsetY - (rect.height / 2);
   }
}

export const circleMove = (
   circle: HTMLDivElement | null,
   pageX: number,
   pageY: number,
   canvas: HTMLCanvasElement,
   landmarks: NormalizedLandmark[],
   setLandmarks: (landmarks: NormalizedLandmark[]) => void,
   selectedLandmark: number,
) => {
   const isMovingLandmark = usePhotoStore.getState().isMovingLandmark;

   if (isMovingLandmark && circle) {
      const rect = canvas.getBoundingClientRect();
      pageX = pageX - rect.left;
      pageY = pageY - rect.top;

      const isOutOfCanvasX = pageX - deltaX >= canvas.clientWidth || pageX - deltaX <= 0;
      const isOutOfCanvasY = pageY - deltaY >= canvas.clientHeight || pageY - deltaY <= 0;

      if (!isOutOfCanvasX && !isOutOfCanvasY) {
         const circleRect = circle.getBoundingClientRect();
         circle.style.left = `${pageX - deltaX - (circleRect.width / 2)}px`;
         circle.style.top = `${pageY - deltaY - (circleRect.height / 2)}px`;

         landmarks[selectedLandmark].x = (pageX - deltaX) / canvas.clientWidth;
         landmarks[selectedLandmark].y = (pageY - deltaY) / canvas.clientHeight;

         setLandmarks(landmarks);
      }

   }
}

export const executeVideoFn = (
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   currentSection: staticEvaluationType[0] | dynamicEvaluationType[0] | undefined,
   landmarks: NormalizedLandmark[],
   landmarksStatus: boolean[]
) => {
   const ctx = canvasRef.current?.getContext("2d");
   if (ctx && currentSection && "videoFn" in currentSection && landmarks?.length) {
      const videoStates = currentSection.videoFn(landmarks);
      videoStates.forEach(({ landmarks, status }) => {
         let drawingUtils = new DrawingUtils(ctx);
         drawingUtils.drawLandmarks(landmarks, { color: status ? '#4CB648' : '#FF0000', radius: 1.5 });
         drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: status ? '#4CB648' : '#FF0000', lineWidth: 1 });

         landmarksStatus.push(status);
      })
   }
}

export const getEditableLandmarks = (
   landmarks: NormalizedLandmark[]
) => {
   const currentSection = useAIStore.getState().currentSection;
   if (currentSection && landmarks?.length) {
      let editableLandmarks: number[] = [];
      // Dont forget for adding 23, 24, 25, 26, 27, 28 landmarks for squatSide section
      const photoData = currentSection.photoFn(landmarks, 1, { width: 0, height: 0 });
      const cropData = currentSection.cropFn(landmarks, { width: 0, height: 0 });

      photoData.degrees.forEach(degree => {
         editableLandmarks = editableLandmarks.concat(degree.landmarksUsed)
      })

      if ("distances" in photoData) {
         const distances = photoData.distances as DistanceType[];
         distances.forEach(distance => {
            editableLandmarks = editableLandmarks.concat(distance.landmarksUsed[0])
         })
      }

      editableLandmarks = editableLandmarks.concat(cropData.landmarksUsed);

      editableLandmarks.sort((a, b) => a - b);

      return [...new Set(editableLandmarks)];
   }

   return undefined;
}

export const drawDegree = (
   landmarks: NormalizedLandmark[],
   degree: DegreeType,
   drawingUtils: DrawingUtils,
   ctx: CanvasRenderingContext2D,
   width: number,
   height: number,
) => {
   const landmarksUsed: NormalizedLandmark[] = [];
   degree.landmarksUsed.forEach(landmarkIndex => {
      const landmark = landmarks[landmarkIndex];
      if (landmark) landmarksUsed.push(landmark);
   })

   drawingUtils.drawLandmarks(landmarksUsed, { radius: 0.5, color: "#FF0000" });
   drawingUtils.drawConnectors(landmarksUsed, [{ start: 0, end: 1 }, { start: 1, end: 2 }], { color: '#FF0000', lineWidth: 1.5 });

   let x = 0;
   let y = 0;
   if (landmarksUsed.length <= 2) {
      x = (landmarksUsed[0].x + landmarksUsed[1].x) / 2;
      y = (landmarksUsed[0].y + landmarksUsed[1].y) / 2;
   } else {
      x = landmarksUsed[1].x;
      y = landmarksUsed[1].y;
   }
   x *= width;
   y *= height;

   const text = degree.degree.toFixed(1) + '°';
   drawText(ctx, text, x, y);
}

export const drawDistance = (
   landmarks: NormalizedLandmark[],
   distance: DistanceType,
   drawingUtils: DrawingUtils,
   ctx: CanvasRenderingContext2D,
   width: number,
   height: number,
) => {
   const firstLandmark = landmarks[distance.landmarksUsed[0]];
   const secondLandmark = landmarks[distance.landmarksUsed[1]];
   const landmarksUsed: NormalizedLandmark[] = [
      firstLandmark,
      {
         x: secondLandmark.x,
         y: firstLandmark.y,
         z: firstLandmark.z,
         visibility: firstLandmark.visibility,
      }
   ];

   drawingUtils.drawLandmarks(landmarksUsed, { radius: 0.5, color: "#FF0000" });
   drawingUtils.drawConnectors(landmarksUsed, [{ start: 0, end: 1 }, { start: 1, end: 2 }], { color: '#FF0000', lineWidth: 1.5 });

   let x = (landmarksUsed[0].x + landmarksUsed[1].x) / 2;
   let y = (landmarksUsed[0].y + landmarksUsed[1].y) / 2;
   x *= width;
   y *= height;
   y -= 4;

   const text = distance.distance.toFixed(1) + ' cm';
   drawText(ctx, text, x, y);
}

const drawText = (
   ctx: CanvasRenderingContext2D,
   text: string,
   x: number,
   y: number
) => {
   ctx.font = "11px 'Estedad-Regular'";
   ctx.textAlign = "center";
   ctx.textBaseline = "bottom";
   const padding = 4;

   const metrics = ctx.measureText(text);
   const boxX = x - metrics.actualBoundingBoxLeft - padding;
   const boxY = y - metrics.actualBoundingBoxAscent - padding;
   const textWidth = metrics.width + (padding * 2);
   const textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent + (padding * 2);

   ctx.fillStyle = "#FFFFFF";
   ctx.fillRect(boxX, boxY, textWidth, textHeight);

   ctx.fillStyle = "#FF0000";
   ctx.fillText(text, x, y);
}

export const extractZip = async (fileContent: string) => {
   const zip = new JSZip();
   await zip.loadAsync(fileContent, { base64: true });

   const image = zip.file("image.jpeg");
   const landmarksJson = zip.file("landmarks.json");
   const imageSizeJson = zip.file("imageSize.json");

   if (image && landmarksJson && imageSizeJson) {
      const base64 = await image.async("string");

      const imageSizeString = await imageSizeJson.async("string");
      const imageSize: { width: number, height: number } = JSON.parse(imageSizeString);

      const landmarksString = await landmarksJson.async("string");
      const landmarks: NormalizedLandmark[] = JSON.parse(landmarksString);

      return {
         image: base64,
         imageSize,
         landmarks
      } as ExtractedZipType
   }

   return null;
}