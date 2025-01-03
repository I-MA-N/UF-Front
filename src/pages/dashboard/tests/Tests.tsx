import { useCallback, useEffect } from "react"
import { TestObj } from "../../../types/TestsTypes";
import HeaderSection from "../common/components/headerSection/HeaderSection";
import testsData from "./data/testsData";
import MessageModal from "./components/common/messageModal/MessageModal";
import AITestsContainer from "./components/AITests/AITestsContainer";
import useFormDataStore from "./store/formDataStore";
import SaveBtn from "./components/common/saveBtn/SaveBtn";
import FooterSection from "../common/components/footerSection/FooterSection";
import useAIStore from "./store/AIStore";
import NoAITestsContainer from "./components/NoAITests/NoAITestsContainer";
import { useShallow } from "zustand/react/shallow";

type TestsProps = {
   testsArr: TestObj[],
}

function Tests({ testsArr }: TestsProps) {
   const { currentTestName, setCurrentTestName } = useFormDataStore(useShallow(
      state => ({ currentTestName: state.currentTestName, setCurrentTestName: state.setCurrentTestName })
   ));
   const updateTestsData = useAIStore(state => state.updateTestsData);
   
   useEffect(() => {
      setCurrentTestName(testsArr[0].testName);
   }, [])

   const clickHandler = useCallback((page: string) => {
      updateTestsData(page);
      setCurrentTestName(page);
   }, [currentTestName])

   if (currentTestName) return (
      <>
         <div className="px-4 sm:container pt-24 lg:pt-32 pb-16 lg:pb-24">
            <HeaderSection>
               <HeaderSection.ExitBtn exitModalText="آیا از خروج مطمئنید؟ (اگر ذخیره نکرده باشید، تغییرات شما اعمال نمی شود)" />
               <HeaderSection.Title text={currentTestName} />
               <SaveBtn />
            </HeaderSection>

            <section className="mt-16 lg:mt-20">
               {
                  testsData[currentTestName as keyof typeof testsData].testSubTitle &&
                  <div className="relative">
                     <p className="text-base lg:text-lg leading-6 mb-6 mr-6">
                        {testsData[currentTestName as keyof typeof testsData].testSubTitle}
                     </p>
                     <div className="absolute w-2.5 lg:w-3 h-2.5 lg:h-3 bg-white rounded-full right-0 top-1/2 -translate-y-1/2" />
                  </div>
               }

               {
                  (currentTestName === 'ناهنجاری ها' || currentTestName === 'ارزیابی پویا')
                     ?
                     <AITestsContainer key={currentTestName} />
                     :
                     <NoAITestsContainer />
               }
            </section>

            <FooterSection
               pages={testsArr.map(test => test.testName)}
               currentPage={currentTestName}
               clickHandler={clickHandler}
            />
         </div>

         <MessageModal />
      </>
   )
}

export default Tests