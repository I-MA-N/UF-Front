import img from "/images/reportsImages/dynamic/walking.png";

function walkingJsx(data: { [k: string]: string }) {
   return (
      <div>
         <h2 className="mb-2 text-center text-sm lg:text-lg ">ارزیابی عملکردی در راه رفتن</h2>
         <table className="w-full text-center border border-white" cellPadding="6px">
            <tr>
               <th>حرکت جبرانی</th>
               <th>نتیجه</th>
               <th rowSpan={Object.keys(data).length + 1} className="w-[160px] bg-[#fff]">
                  <img src={img} className="w-full" alt="report-img" />
               </th>
            </tr>
            {
               Object.entries(data).map((row, index) => (
                  <tr key={index}>
                     <td>{row[0]}</td>
                     <td>{row[1]}</td>
                  </tr>
               ))
            }
         </table>
      </div>
   )
}

export default walkingJsx