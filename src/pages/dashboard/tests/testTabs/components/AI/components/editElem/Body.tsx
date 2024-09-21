import { useRef } from "react";
import CanvasElem from "./body/CanvasElem";
import EditCursor from "./body/EditCursor";
import usePhotoStore from "../../../../../store/photoStore";

type BodyProps = {
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>
}

function Body({ selectedLandmark, setSelectedLandmark }: BodyProps) {
   const { image, landmarks, videoSize } = usePhotoStore(state => ({ image: state.image, landmarks: state.landmarks, videoSize: state.videoSize }));
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   // console.log(image);
   // console.log(landmarks);

   return (
      <div className="relative">
         <img src={image!} width={videoSize?.width} height={videoSize?.height} />

         {
            landmarks?.length > 0 &&
            <CanvasElem
               canvasRef={canvasRef}
               selectedLandmark={selectedLandmark}
               setSelectedLandmark={setSelectedLandmark}
            />
         }

         <EditCursor />

         {landmarks?.length <= 0 &&
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-52 text-center text-sm lg:text-base font-Estedad-Black text-red bg-white px-4 py-2 rounded-full">
               نقطه ای در عکس یافت نشد!
            </span>
         }
      </div>
   );
};

export default Body;