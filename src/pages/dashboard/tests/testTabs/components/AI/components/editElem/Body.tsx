import EditElem from "../EditElem";
import PhotoResult from "../../../../../../../../types/PhotoData";

type BodyProps = {
   photoData: PhotoResult | null,
   setPhotoData: React.Dispatch<React.SetStateAction<PhotoResult | undefined>>,
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>
}

function Body({ photoData, setPhotoData, selectedLandmark, setSelectedLandmark }: BodyProps) {
   return (
      <div className="min-h-80 flex items-center justify-center">
         {
            photoData?.image ?
               <EditElem
                  photoData={photoData}
                  setPhotoData={setPhotoData}
                  selectedLandmark={selectedLandmark}
                  setSelectedLandmark={setSelectedLandmark}
               />
               :
               <div>
                  <svg className="size-12 text-yellow mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                     <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <path fillRule="evenodd" clipRule="evenodd" d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V17ZM12 9C11.4477 9 11 8.55229 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55229 12.5523 9 12 9Z" fill="currentColor" />
                  </svg>

                  <p className="text-sm font-Estedad-Black text-red bg-white px-4 py-2 rounded-full mt-5">
                     دریافت عکس گرفته شده با مشکل مواجه شد!
                  </p>
               </div>
         }
      </div>
   );
};

export default Body;