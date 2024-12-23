import { useState } from "react";
import Input from "../../../../../../common/Input";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import GenderInput from "../../../../../common/components/addForm/GenderInput";
import ToggleInputsBtn from "../../../../../common/components/addForm/ToggleInputsBtn";
import NameInputs from "../../../../../common/components/addForm/NameInputs";
import { FormFields } from "../../../../../../../types/AddSimpleuserFormFields";

type SimpleUserInputsProps = {
   register: UseFormRegister<FormFields>,
   errors: FieldErrors<FormFields>,
   setValue: UseFormSetValue<FormFields>,
}

function SimpleUserInputs({ register, errors, setValue }: SimpleUserInputsProps) {
   const [isInputsVisible, setIsInputsVisible] = useState(false);

   return (
      <div>
         <div className="space-y-4">
            <Input
               direction="ltr"
               name="email"
               text="ایمیل"
               placeholder="فرمت صحیح: ufit@example.com"
               register={register}
               registerOptions={{ required: true, pattern: /\w+[@]\w+[.]\w+/ }}
               render={() => (
                  <span className="text-[10px] text-yellow mr-5 mt-2">
                     {errors.email?.type === "required" && "پر کردن این فیلد الزامی است!"}
                     {errors.email?.type === "pattern" && "فرمت صحیح ایمیل رعایت نشده است!"}
                  </span>
               )}
            />
            <Input
               direction="ltr"
               name="password"
               text="رمز عبور"
               placeholder="ترجیحا کد ملی"
               register={register}
               registerOptions={{ required: true, minLength: 6 }}
               render={() => (
                  <span className="text-[10px] text-yellow mr-5 mt-2">
                     {errors.password?.type === "required" && "پر کردن این فیلد الزامی است!"}
                     {errors.password?.type === "minLength" && 'رمز عبور حداقل باید حاوی 6 کاراکتر باشد!'}
                  </span>
               )}
            />

            <div className="mt-7">
               <label htmlFor="gender" className="mr-5 text-sm lg:text-base">جنسیت</label>
               <GenderInput<FormFields>
                  register={register}
                  errors={errors}
                  defaultValue="male"
                  setValue={setValue}
               />
            </div>
         </div>

         <ToggleInputsBtn
            isInputsVisible={isInputsVisible}
            setIsInputsVisible={setIsInputsVisible}
         />

         <div className={`${isInputsVisible ? "block" : "hidden"} transition-all space-y-4`}>
            <NameInputs<FormFields>
               register={register}
            />

            <Input
               direction="ltr"
               name="phone"
               text="شماره موبایل"
               placeholder="مثال: 09123456789"
               register={register}
               registerOptions={{ pattern: /^09\d{9}$/ }}
               render={() => (
                  <span className="text-[10px] lg:text-xs text-yellow mr-5 mt-2">
                     {errors.phone?.type === "pattern" && "شماره موبایل باید با صفر شروع، بدون اسپیس و 11 عدد باشد."}
                  </span>
               )}
               isNumberType={true}
            />
         </div>

      </div>
   );
};

export default SimpleUserInputs;