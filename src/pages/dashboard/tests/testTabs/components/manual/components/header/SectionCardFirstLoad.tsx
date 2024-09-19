import SectionCard from "./SectionCard";
import { useEffect, useState } from "react";
import ExtractedZipType from "../../../../../../../../types/ExtractedZipType";
import { extractZip } from "../../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../../common/Loading";
import SectionNames from "../../../../../../../../types/SectionNames";

type SectionCardFirtLoadProps = {
   sectionName: SectionNames,
   zipFile: string
}

function SectionCardFirtLoad({ sectionName, zipFile }: SectionCardFirtLoadProps) {
   const [files, setFiles] = useState<ExtractedZipType | null | undefined>(undefined);

   useEffect(() => {
      const extractFiles = async () => {
         const files = await extractZip(zipFile);
         setFiles(files);
      }

      extractFiles();
   }, [zipFile])

   if (files === undefined) return (
      <Loading fullHeight={false} />
   )

   if (files === null) return (
      <p className="text-xs lg:text-sm text-center text-yellow mb-10">دریافت عکس با مشکل مواجه شد!</p>
   )

   return (
      <SectionCard
         sectionName={sectionName}
         files={files}
      />
   )
};

export default SectionCardFirtLoad;