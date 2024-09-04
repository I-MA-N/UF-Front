import AIContextType from "../../../../../../../../../types/AIContextType";

type CloseBtnProps = {
   stopCamera: () => Promise<void>,
   setAIData: React.Dispatch<React.SetStateAction<AIContextType | null>>
}

function CloseBtn({ stopCamera, setAIData }: CloseBtnProps) {
   return (
      <button
         type="button"
         onClick={() => {
            stopCamera();
            setAIData(prevValue => ({
               ...prevValue,
               currentSection: undefined
            }))
         }}
         className="flex items-center justify-center size-11 border-2 border-yellow bg-primary text-yellow rounded-full"
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="w-5">
            <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </button>
   );
};

export default CloseBtn;