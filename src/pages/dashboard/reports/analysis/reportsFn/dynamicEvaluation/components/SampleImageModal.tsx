import { useState } from "react";
import Modal from "../../../../../../common/Modal";
import SectionNames from "../../../../../../../types/SectionNames";

type SampleImageModalProps = {
   sectionName: SectionNames,
   sectionNameFA: string
}

function SampleImageModal({ sectionName, sectionNameFA }: SampleImageModalProps) {
   const [showImage, setShowImage] = useState(false);

   return (
      <>
         <button
            className="absolute top-2 right-2 text-primary"
            type="button"
            onClick={() => setShowImage(true)}
         >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="w-5 lg:w-6">
               <path d="M0.5 10C0.5 12.0473 0.610354 13.6584 0.892545 14.9282C1.17347 16.1922 1.61801 17.0872 2.26543 17.7346C2.91284 18.382 3.80776 18.8265 5.07183 19.1075C6.34158 19.3896 7.95266 19.5 10 19.5C12.0473 19.5 13.6584 19.3896 14.9282 19.1075C16.1922 18.8265 17.0872 18.382 17.7346 17.7346C18.382 17.0872 18.8265 16.1922 19.1075 14.9282C19.3896 13.6584 19.5 12.0473 19.5 10C19.5 7.95266 19.3896 6.34158 19.1075 5.07183C18.8265 3.80776 18.382 2.91284 17.7346 2.26543C17.0872 1.61802 16.1922 1.17347 14.9282 0.892546C13.6584 0.610353 12.0473 0.5 10 0.5C7.95266 0.5 6.34158 0.610353 5.07183 0.892546C3.80776 1.17347 2.91284 1.61802 2.26543 2.26543C1.61801 2.91284 1.17347 3.80776 0.892545 5.07183C0.610354 6.34158 0.5 7.95266 0.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
               <path fillRule="evenodd" clipRule="evenodd" d="M10.5 14.1667C10.5 14.4429 10.2761 14.6667 10 14.6667C9.72386 14.6667 9.5 14.4429 9.5 14.1667V9.16675C9.5 8.89061 9.72386 8.66675 10 8.66675C10.2761 8.66675 10.5 8.89061 10.5 9.16675V14.1667ZM10 7.50008C9.65482 7.50008 9.375 7.22026 9.375 6.87508C9.375 6.5299 9.65482 6.25008 10 6.25008C10.3452 6.25008 10.625 6.5299 10.625 6.87508C10.625 7.22026 10.3452 7.50008 10 7.50008Z" fill="currentColor" />
            </svg>
         </button>

         {
            showImage &&
            <Modal className="text-white">
               <Modal.Header>
                  <Modal.CloseBtn setShowModal={setShowImage} />
                  <Modal.Title text={sectionNameFA} />
               </Modal.Header>
               <Modal.Body className="flex items-center justify-center">
                  <img
                     src={`/images/sampleImages/${sectionName}.png`}
                     className="rounded-lg max-h-[500px]"
                     alt="عکس نمونه برای این قسمت یافت نشد!"
                  />
               </Modal.Body>
            </Modal>
         }
      </>
   );
};

export default SampleImageModal;