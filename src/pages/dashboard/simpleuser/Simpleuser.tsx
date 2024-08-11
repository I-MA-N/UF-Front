import { useState } from "react";
import Container from "../../common/Container";
import Link from "../../common/Link";
import Btn from "../../common/Btn";
import ProfileModal from "../common/components/modals/ProfileModal";
import ShowInfo from "../common/components/ShowInfo";
import { useUserDataContext } from "../../authentication/UserDataProvider";
import Loading from "../../common/Loading";
import GFormNames from "../../../api/common/form/GFormNames";

function Simpleuser() {
   const [profileModal, setProfileModal] = useState(false);
   const userData = useUserDataContext();
   const { data, isError, isPending } = GFormNames(userData.username);

   if (isPending) return <Loading />

   return (
      <Container>
         <div className="mb-6">
            <h2 className="mb-2 text-center lg:text-lg">{userData?.name || 'کاربر بدون نام!'}</h2>
            <p className="font-Estedad-ExtraLight text-sm leading-7 lg:text-base lg:leading-9 text-center">
               <ShowInfo age={userData?.age} phone={userData?.phone} />
            </p>
            {
               isError &&
               <span className="text-xs lg:text-sm text-yellow">مشکلی در دریافت اطلاعات آخرین گزارش به وجود آمده است!</span>
            }
         </div>

         <div className="flex flex-col gap-8 justify-center mt-4">
            <Link
               text="پرسشنامه های من"
               url="/simpleuser/dashboard/forms"
               icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16" fill="none" className="w-4.5 lg:w-5">
                  <mask id="path-1-inside-1_314_996" fill="white">
                     <path d="M0 8.61538C0 14.6966 1.30338 16 7.38462 16C13.4658 16 14.7692 14.6966 14.7692 8.61538C14.7692 7.94319 14.7533 7.32937 14.7168 6.76923C14.4227 2.26194 12.7936 1.23077 7.38462 1.23077C1.97558 1.23077 0.34652 2.26194 0.052468 6.76923C0.0159252 7.32937 0 7.94319 0 8.61538Z" />
                  </mask>
                  <path d="M14.7168 6.21923C15.0205 6.21923 15.2668 6.46547 15.2668 6.76923C15.2668 7.07299 15.0205 7.31923 14.7168 7.31923V6.21923ZM0.052468 7.31923C-0.251289 7.31923 -0.497532 7.07299 -0.497532 6.76923C-0.497532 6.46547 -0.251289 6.21923 0.052468 6.21923V7.31923ZM14.7168 7.31923H0.052468V6.21923H14.7168V7.31923ZM14.7168 6.76923L13.6191 6.84084L14.7168 6.76923ZM0.052468 6.76923L1.15013 6.84084L0.052468 6.76923ZM1.1 8.61538C1.1 10.1106 1.18155 11.237 1.37247 12.0961C1.56062 12.9427 1.84004 13.4607 2.18966 13.8103C2.53929 14.16 3.05731 14.4394 3.90389 14.6275C4.76297 14.8184 5.88941 14.9 7.38462 14.9V17.1C5.8392 17.1 4.52226 17.0186 3.42661 16.7751C2.31846 16.5289 1.37041 16.1023 0.634029 15.366C-0.102348 14.6296 -0.528852 13.6815 -0.775128 12.5734C-1.01863 11.4777 -1.1 10.1608 -1.1 8.61538H1.1ZM7.38462 14.9C8.87982 14.9 10.0063 14.8184 10.8653 14.6275C11.7119 14.4394 12.2299 14.16 12.5796 13.8103C12.9292 13.4607 13.2086 12.9427 13.3968 12.0961C13.5877 11.237 13.6692 10.1106 13.6692 8.61538H15.8692C15.8692 10.1608 15.7879 11.4777 15.5444 12.5734C15.2981 13.6815 14.8716 14.6296 14.1352 15.366C13.3988 16.1023 12.4508 16.5289 11.3426 16.7751C10.247 17.0186 8.93003 17.1 7.38462 17.1V14.9ZM13.6692 8.61538C13.6692 7.95955 13.6537 7.37065 13.6191 6.84084L15.8144 6.69762C15.853 7.28808 15.8692 7.92682 15.8692 8.61538H13.6692ZM13.6191 6.84084C13.4767 4.65812 13.0239 3.71409 12.3184 3.1969C11.5207 2.61209 10.1085 2.33077 7.38462 2.33077V0.130769C10.0697 0.130769 12.1766 0.365029 13.6192 1.42263C15.154 2.54785 15.6628 4.37304 15.8144 6.69762L13.6191 6.84084ZM7.38462 2.33077C4.66071 2.33077 3.2485 2.61209 2.4508 3.1969C1.74534 3.71409 1.29253 4.65812 1.15013 6.84084L-1.0452 6.69762C-0.893545 4.37304 -0.384794 2.54785 1.15005 1.42263C2.59265 0.365029 4.69949 0.130769 7.38462 0.130769V2.33077ZM1.15013 6.84084C1.11557 7.37066 1.1 7.95955 1.1 8.61538H-1.1C-1.1 7.92682 -1.08372 7.28808 -1.0452 6.69762L1.15013 6.84084Z" fill="#E4F4FD" mask="url(#path-1-inside-1_314_996)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.31201 12.6966L11.7736 10.2351C11.9883 10.0203 11.9883 9.67202 11.7736 9.45723C11.5588 9.24245 11.2105 9.24245 10.9957 9.45723L8.9231 11.5299L8.38894 10.9957C8.17415 10.7809 7.82591 10.7809 7.61112 10.9957C7.39633 11.2105 7.39633 11.5587 7.61112 11.7735L8.53419 12.6966C8.74898 12.9114 9.09722 12.9114 9.31201 12.6966ZM3.14233 9.84614C3.14233 9.54239 3.38858 9.29614 3.69233 9.29614H5.53849C5.84224 9.29614 6.08849 9.54239 6.08849 9.84614C6.08849 10.1499 5.84224 10.3961 5.53849 10.3961H3.69233C3.38858 10.3961 3.14233 10.1499 3.14233 9.84614ZM3.14233 12.3077C3.14233 12.0039 3.38858 11.7577 3.69233 11.7577H5.53849C5.84224 11.7577 6.08849 12.0039 6.08849 12.3077C6.08849 12.6114 5.84224 12.8577 5.53849 12.8577H3.69233C3.38858 12.8577 3.14233 12.6114 3.14233 12.3077Z" fill="#E4F4FD" />
               </svg>}
            />
            {
               data && typeof data !== "string" && Object.keys(data).length ?
                  <Link
                     text="آخرین گزارش من"
                     url={`/simpleuser/reports/${data[data.length - 1].formName}/${userData.username}`}
                     icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4.5 lg:w-5">
                        <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="#E4F4FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 7H14" stroke="#E4F4FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 12H17" stroke="#E4F4FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 17L14 17" stroke="#E4F4FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>}
                  /> : ""
            }
            <Btn
               text="پروفایل من"
               icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="w-4.5 lg:w-5">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.09307 9.89542C1.07483 9.60036 0.832925 9.36674 0.537307 9.36674C0.225186 9.36674 -0.0252543 9.62791 -0.0063162 9.93946C0.261099 14.3386 1.66132 15.7389 6.06051 16.0063C6.37206 16.0252 6.63323 15.7748 6.63323 15.4627C6.63323 15.167 6.3996 14.9251 6.10455 14.9069C5.34927 14.8602 4.70992 14.7796 4.16625 14.6587C3.23443 14.4517 2.65248 14.1415 2.2555 13.7445C1.85852 13.3475 1.54832 12.7655 1.34123 11.8337C1.22041 11.2901 1.13976 10.6507 1.09307 9.89542ZM14.8496 9.89542C14.8679 9.60036 15.1098 9.36674 15.4054 9.36674C15.7175 9.36674 15.9679 9.62791 15.949 9.93946C15.6816 14.3387 14.2814 15.7389 9.88216 16.0063C9.57061 16.0252 9.30944 15.7748 9.30944 15.4627C9.30944 15.1671 9.54306 14.9251 9.83812 14.9069C10.5934 14.8602 11.2328 14.7796 11.7764 14.6587C12.7083 14.4517 13.2902 14.1415 13.6872 13.7445C14.0842 13.3475 14.3944 12.7655 14.6015 11.8337C14.7223 11.2901 14.8029 10.6507 14.8496 9.89542ZM16 8.05829C16 8.04841 16 8.03853 16 8.02863C16 8.01874 16 8.00885 16 7.99898V8.05829ZM15.949 6.11781C15.9679 6.42936 15.7175 6.69053 15.4054 6.69053C15.1098 6.69053 14.8679 6.45691 14.8496 6.16185C14.8029 5.40656 14.7223 4.76721 14.6015 4.22354C14.3944 3.29172 14.0842 2.70977 13.6872 2.31279C13.2902 1.91581 12.7083 1.60561 11.7764 1.39852C11.2328 1.2777 10.5934 1.19705 9.83812 1.15036C9.54306 1.13212 9.30944 0.890216 9.30944 0.594597C9.30944 0.282476 9.57061 0.0320363 9.88216 0.0509741C14.2814 0.318387 15.6816 1.71861 15.949 6.11781ZM1.09307 6.16185C1.07483 6.45691 0.832925 6.69053 0.537307 6.69053C0.225185 6.69053 -0.0252545 6.42936 -0.00631646 6.11781C0.261098 1.71862 1.66132 0.318392 6.06051 0.0509754C6.37206 0.0320372 6.63323 0.282477 6.63323 0.594599C6.63323 0.890217 6.39961 1.13212 6.10455 1.15036C5.34927 1.19705 4.70992 1.2777 4.16625 1.39852C3.23443 1.60561 2.65248 1.91581 2.2555 2.31279C1.85852 2.70977 1.54832 3.29172 1.34123 4.22354C1.22041 4.76721 1.13976 5.40656 1.09307 6.16185ZM7.97134 0L7.9852 2.07765e-06H7.95749L7.97134 0Z" fill="#E4F4FD" />
                  <path d="M4.55 10.0572C4.55 10.4399 4.59287 10.6802 4.66437 10.8411C4.726 10.9798 4.82106 11.088 5.0107 11.1828C5.21988 11.2874 5.54228 11.3736 6.04604 11.4296C6.54482 11.485 7.18243 11.5071 7.99991 11.5071C8.81739 11.5071 9.455 11.485 9.95378 11.4296C10.4575 11.3736 10.7799 11.2874 10.9891 11.1828C11.1788 11.088 11.2738 10.9798 11.3355 10.8411C11.407 10.6802 11.4498 10.4399 11.4498 10.0572C11.4498 9.67446 11.407 9.43412 11.3355 9.27326C11.2738 9.13459 11.1788 9.02634 10.9891 8.93152C10.7799 8.82693 10.4575 8.74072 9.95378 8.68474C9.455 8.62932 8.81739 8.60722 7.99991 8.60722C7.18243 8.60722 6.54482 8.62932 6.04604 8.68474C5.54228 8.74072 5.21988 8.82693 5.0107 8.93152C4.82106 9.02634 4.726 9.13459 4.66437 9.27326C4.59287 9.43412 4.55 9.67446 4.55 10.0572Z" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.54984 5.39058C6.54984 6.19137 7.19901 6.84054 7.9998 6.84054C8.80059 6.84054 9.44976 6.19137 9.44976 5.39058C9.44976 4.58979 8.80059 3.94063 7.9998 3.94063C7.19901 3.94063 6.54984 4.58979 6.54984 5.39058Z" stroke="#E4F4FD" strokeWidth="1.1" />
               </svg>}
               type="button"
               onClick={() => setProfileModal(true)}
            />
         </div>
         {
            profileModal &&
            <ProfileModal setProfileModal={setProfileModal} />
         }
      </Container>
   )
}

export default Simpleuser