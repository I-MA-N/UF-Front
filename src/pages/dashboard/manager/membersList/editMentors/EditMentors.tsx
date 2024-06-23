import { useState } from "react"
import Container from "../../../../common/Container"
import Link from "../../../../common/Link"
import MentorDataModal from "./components/modals/MentorDataModal";
import managerGMentorsInfo from "../../../../../api/manager/managerGMentorsInfo";
import TopInfo from "./components/TopInfo"

function EditMentors() {
   const [mentorData, setMentorData] = useState<any>(null);
   const { data, isPending } = managerGMentorsInfo();

   if (isPending) return <h1>Loading...</h1>

   return (
      <Container>
         <TopInfo mentors={data} />

         <ul className="w-64 max-h-[304px] divide-y divide-primary mt-0.5 rounded-b-[18px] overflow-y-auto">
            {
               data?.map((mentorInfo: any) => (
                  <li
                     key={mentorInfo.username}
                     className="flex items-center justify-between h-9 text-[10px] bg-white text-primary cursor-pointer"
                     onClick={() => setMentorData(mentorInfo)}
                  >
                     <div className="flex justify-between items-center px-1.5 flex-grow">
                        <p className="line-clamp-1 mx-auto">{mentorInfo.name || mentorInfo.email}</p>
                        <p className="text-xs">|</p>
                        <p className="line-clamp-1 mx-auto">{mentorInfo.username}</p>
                     </div>
                     <div className="w-px bg-primary h-full" />
                     <div className="flex justify-center items-center gap-1.5 px-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" className={mentorInfo.age && mentorInfo.name && mentorInfo.phone && 'text-secondary'}>
                           <path d="M0.5 9.5C0.5 9.98492 0.558599 10.3097 0.67083 10.5406C0.773806 10.7525 0.940969 10.9245 1.25323 11.0673C1.58195 11.2176 2.06134 11.33 2.76424 11.4014C3.46237 11.4724 4.34682 11.5 5.46746 11.5C6.58809 11.5 7.47254 11.4724 8.17067 11.4014C8.87357 11.33 9.35296 11.2176 9.68168 11.0673C9.99394 10.9245 10.1611 10.7525 10.2641 10.5406C10.3763 10.3097 10.4349 9.98492 10.4349 9.5C10.4349 9.01508 10.3763 8.69032 10.2641 8.45941C10.1611 8.24754 9.99394 8.07547 9.68168 7.93269C9.35296 7.78238 8.87357 7.66998 8.17067 7.59855C7.47254 7.52761 6.58809 7.5 5.46746 7.5C4.34682 7.5 3.46237 7.52761 2.76424 7.59855C2.06134 7.66998 1.58195 7.78238 1.25323 7.93269C0.940969 8.07547 0.773806 8.24754 0.67083 8.45941C0.558599 8.69032 0.5 9.01508 0.5 9.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M2.98521 3C2.98521 4.38351 4.09934 5.5 5.46746 5.5C6.83557 5.5 7.94971 4.38351 7.94971 3C7.94971 1.61649 6.83557 0.5 5.46746 0.5C4.09934 0.5 2.98521 1.61649 2.98521 3Z" stroke="currentColor" />
                           <path d="M9.44385 5.25L10.1894 6L12.1776 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </div>
                  </li>
               ))
            }
         </ul>

         <Link
            text="اضافه کردن مربی جدید"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M0.55 3.66683C0.55 4.40915 0.590493 4.96813 0.6852 5.39428C0.778519 5.81417 0.917003 6.07064 1.08993 6.24357C1.26286 6.41649 1.51932 6.55498 1.93922 6.6483C2.36536 6.743 2.92434 6.7835 3.66667 6.7835C4.40899 6.7835 4.96797 6.743 5.39411 6.6483C5.81401 6.55498 6.07048 6.41649 6.2434 6.24357C6.41633 6.07064 6.55481 5.81417 6.64813 5.39428C6.74284 4.96813 6.78333 4.40915 6.78333 3.66683C6.78333 2.92451 6.74284 2.36553 6.64813 1.93938C6.55481 1.51948 6.41633 1.26302 6.2434 1.09009C6.07048 0.917166 5.81401 0.778682 5.39411 0.685363C4.96797 0.590656 4.40899 0.550163 3.66667 0.550163C2.92434 0.550163 2.36536 0.590656 1.93922 0.685363C1.51932 0.778682 1.26286 0.917166 1.08993 1.09009C0.917003 1.26302 0.778519 1.51948 0.6852 1.93938C0.590493 2.36553 0.55 2.92451 0.55 3.66683Z" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M0.55 12.3333C0.55 13.0757 0.590493 13.6346 0.6852 14.0608C0.778519 14.4807 0.917003 14.7371 1.08993 14.9101C1.26286 15.083 1.51932 15.2215 1.93922 15.3148C2.36536 15.4095 2.92434 15.45 3.66667 15.45C4.40899 15.45 4.96797 15.4095 5.39411 15.3148C5.81401 15.2215 6.07048 15.083 6.2434 14.9101C6.41633 14.7371 6.55481 14.4807 6.64813 14.0608C6.74284 13.6346 6.78333 13.0757 6.78333 12.3333C6.78333 11.591 6.74284 11.032 6.64813 10.6059C6.55481 10.186 6.41633 9.92952 6.2434 9.7566C6.07048 9.58367 5.81401 9.44519 5.39411 9.35187C4.96797 9.25716 4.40899 9.21667 3.66667 9.21667C2.92434 9.21667 2.36536 9.25716 1.93922 9.35187C1.51932 9.44519 1.26286 9.58367 1.08993 9.7566C0.917003 9.92952 0.778519 10.186 0.6852 10.6059C0.590493 11.032 0.55 11.591 0.55 12.3333Z" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M9.2165 3.66683C9.2165 4.40915 9.257 4.96813 9.3517 5.39428C9.44502 5.81417 9.58351 6.07064 9.75643 6.24357C9.92936 6.41649 10.1858 6.55498 10.6057 6.6483C11.0319 6.743 11.5908 6.7835 12.3332 6.7835C13.0755 6.7835 13.6345 6.743 14.0606 6.6483C14.4805 6.55498 14.737 6.41649 14.9099 6.24357C15.0828 6.07064 15.2213 5.81417 15.3146 5.39428C15.4093 4.96813 15.4498 4.40915 15.4498 3.66683C15.4498 2.92451 15.4093 2.36553 15.3146 1.93938C15.2213 1.51948 15.0828 1.26302 14.9099 1.09009C14.737 0.917166 14.4805 0.778682 14.0606 0.685363C13.6345 0.590656 13.0755 0.550163 12.3332 0.550163C11.5908 0.550163 11.0319 0.590656 10.6057 0.685363C10.1858 0.778682 9.92936 0.917166 9.75643 1.09009C9.58351 1.26302 9.44502 1.51948 9.3517 1.93938C9.257 2.36553 9.2165 2.92451 9.2165 3.66683Z" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M9.2165 12.3333C9.2165 13.0757 9.257 13.6346 9.3517 14.0608C9.44502 14.4807 9.58351 14.7371 9.75643 14.9101C9.92936 15.083 10.1858 15.2215 10.6057 15.3148C11.0319 15.4095 11.5908 15.45 12.3332 15.45C13.0755 15.45 13.6345 15.4095 14.0606 15.3148C14.4805 15.2215 14.737 15.083 14.9099 14.9101C15.0828 14.7371 15.2213 14.4807 15.3146 14.0608C15.4093 13.6346 15.4498 13.0757 15.4498 12.3333C15.4498 11.591 15.4093 11.032 15.3146 10.6059C15.2213 10.186 15.0828 9.92952 14.9099 9.7566C14.737 9.58367 14.4805 9.44519 14.0606 9.35187C13.6345 9.25716 13.0755 9.21667 12.3332 9.21667C11.5908 9.21667 11.0319 9.25716 10.6057 9.35187C10.1858 9.44519 9.92936 9.58367 9.75643 9.7566C9.58351 9.92952 9.44502 10.186 9.3517 10.6059C9.257 11.032 9.2165 11.591 9.2165 12.3333Z" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
            className="w-[300px] mt-0.5"
            url="/manager/dashboard/memberslist/editmentors/addmentor"
         />

         {
            mentorData && <MentorDataModal mentorData={mentorData} setMentorData={setMentorData} />
         }
      </Container>
   )
}

export default EditMentors