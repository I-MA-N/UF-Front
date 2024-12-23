import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import SearchElement from "../../common/components/members/SearchElement";
import Container from "../../../common/Container";
import Btn from "../../../common/Btn";
import ListElement from "./components/MembersListElem";
import { UserData2 } from "../../../../types/UserData";
import OrgModal from "./components/modals/OrgModal";
import UserModalFirstLoad from "./components/modals/UserModalFirstLoad";
import { Link as RouterLink } from "react-router-dom";

type MembersProps = {
   orgSelected: string,
   setOrgSelected: React.Dispatch<React.SetStateAction<string>>,
   orgNames: string[],
   users: UserData2[],
}

function Members({ orgSelected, setOrgSelected, orgNames, users }: MembersProps) {
   const [orgModal, setOrgModal] = useState(false);
   const [selectedUsers, setSelectedUsers] = useState(users);
   const [username, setUsername] = useState<string | null>(null);
   const navigate = useNavigate();

   useEffect(() => {
      setSelectedUsers(users);
   }, [users])

   return (
      <Container>
         <h2 className="text-center text-sm lg:text-base">
            <span>با انتخاب نام سازمان و استفاده از گزینه "اضافه کردن </span>
            <br className="md:hidden" />
            <span>کاربر" یک نفر را در سازمان مد نظرتان ثبت نام کنید.</span>
         </h2>
         <h3 className="text-center text-xs lg:text-sm font-Estedad-ExtraLight mt-2 mb-6">
            برای مشاهده یا تغییر اطلاعات فرد، روی نام فرد کلیک کنید.
         </h3>

         <Btn
            text={orgSelected}
            type="button"
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" fill="none" className="w-4 lg:w-4.5">
               <path d="M13 1L7 7L1 1" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
            className="w-[300px] lg:w-96"
            onClick={() => setOrgModal(true)}
         />

         <ul className={`w-64 lg:w-80 max-h-[220px] lg:max-h-[260px] divide-y divide-primary mt-0.5 rounded-b-[18px] ${users.length > 0 && 'overflow-y-auto'}`}>
            {
               users.length > 0 ?
                  <>
                     <SearchElement setSelectedUsers={setSelectedUsers} users={users} />
                     <ListElement selectedUsers={selectedUsers} setUsername={setUsername} />
                  </>
                  :
                  <li className="flex gap-2 items-center justify-center text-yellow text-sm lg:text-base mt-2 mb-10">
                     کاربری برای شما تعریف نشده است!
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-8 lg:size-9">
                        <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.5493 8.47826C14.6434 7.56533 13.3877 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3877 7.56533 14.6434 8.47826 15.5493M15.5493 8.47826C16.446 9.38197 17 10.6263 17 12C17 14.7614 14.7614 17 12 17C10.6263 17 9.38197 16.446 8.47826 15.5493M15.5493 8.47826L8.47826 15.5493" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </li>
            }
         </ul>

         <Btn
            text="اضافه کردن کاربر"
            type="button"
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" fill="none" className="w-4.5 lg:w-5">
               <path d="M0.55 11.0833C0.55 11.6483 0.622235 12.0281 0.762591 12.3002C0.89294 12.5529 1.10838 12.7634 1.51183 12.9373C1.93191 13.1183 2.53743 13.2508 3.41224 13.3345C4.28169 13.4178 5.38077 13.45 6.76923 13.45C8.15769 13.45 9.25677 13.4178 10.1262 13.3345C11.001 13.2508 11.6066 13.1183 12.0266 12.9373C12.4301 12.7634 12.6455 12.5529 12.7759 12.3002C12.9162 12.0281 12.9885 11.6483 12.9885 11.0833C12.9885 10.5184 12.9162 10.1386 12.7759 9.86644C12.6455 9.61372 12.4301 9.40324 12.0266 9.2294C11.6066 9.0484 11.001 8.9159 10.1262 8.83213C9.25677 8.74887 8.15769 8.71667 6.76923 8.71667C5.38077 8.71667 4.28169 8.74887 3.41224 8.83213C2.53743 8.9159 1.93191 9.0484 1.51183 9.2294C1.10838 9.40324 0.89294 9.61372 0.762591 9.86644C0.622235 10.1386 0.55 10.5184 0.55 11.0833Z" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M3.62693 3.5C3.62693 5.10189 5.0057 6.45 6.76924 6.45C8.53278 6.45 9.91155 5.10189 9.91155 3.5C9.91155 1.89811 8.53278 0.55 6.76924 0.55C5.0057 0.55 3.62693 1.89811 3.62693 3.5Z" stroke="#E4F4FD" strokeWidth="1.1" />
               <path d="M13.5384 4.08325V5.83325M13.5384 7.58325V5.83325M13.5384 5.83325H15.3846H11.6923" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
            className="mt-0.5 mb-16"
            onClick={() => {
               navigate(`/mentor/dashboard/members/${orgSelected}`)
            }}
         />

         <RouterLink
            to="/mentor/dashboard"
            className="relative w-64 lg:w-80 h-14 flex items-center justify-center bg-transparent text-white text-sm lg:text-base rounded-[48px] border-2 border-white"
         >
            <span className="text-yellow">برگشت</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className="w-4.5 lg:w-5 absolute left-6 top-1/2 -translate-y-1/2">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </RouterLink>


         {
            orgModal &&
            <OrgModal orgSelected={orgSelected} setOrgSelected={setOrgSelected} setOrgModal={setOrgModal} orgNames={orgNames} />
         }
         {
            username &&
            <UserModalFirstLoad username={username} setUsername={setUsername} orgSelected={orgSelected} />
         }
      </Container>
   )
}

export default Members