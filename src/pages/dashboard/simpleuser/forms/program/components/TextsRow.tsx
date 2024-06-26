import Exercise from "../../../../../../types/Exercise";

type TextsRowProps = {
   row: Omit<Exercise, "images">
}

function TextsRow({ row }: TextsRowProps) {
   return (
      <tr key={row.id}>
         <td>{row.name}</td>
         <td>{row.repeat}</td>
         <td>{row.set}</td>
         <td></td>
         <td>{row.beat}</td>
         <td>{row.rest}</td>
         <td></td>
         <td>
            <a href={`#${row.name}`}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24" fill="none" className='w-5 mx-auto text-white'>
                  <path d="M16.9165 20.0122L1.03705 10.8442C1.55296 10.1399 2.16727 9.51112 2.86255 8.97762C3.82338 8.24034 4.92002 7.69954 6.08986 7.38608C7.25969 7.07263 8.47981 6.99266 9.68055 7.15074C10.8813 7.30882 12.0391 7.70185 13.088 8.30741C14.1368 8.91296 15.0561 9.71916 15.7934 10.68C16.5307 11.6408 17.0715 12.7375 17.3849 13.9073C17.6984 15.0771 17.7784 16.2973 17.6203 17.498C17.5059 18.3669 17.2685 19.2133 16.9165 20.0122Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M10.9017 1.08301L20.3554 6.54112C20.1023 6.83867 19.8179 7.10939 19.5065 7.34832C18.9284 7.79193 18.2686 8.11732 17.5647 8.30592C16.8609 8.49452 16.1267 8.54264 15.4043 8.44752C14.6818 8.35241 13.9851 8.11593 13.3541 7.75158C12.723 7.38723 12.1699 6.90215 11.7263 6.32403C11.2827 5.74591 10.9573 5.08608 10.7687 4.38221C10.5801 3.67834 10.5319 2.94422 10.6271 2.22175C10.6783 1.83261 10.7705 1.45096 10.9017 1.08301ZM10.8218 1.037C10.8218 1.03699 10.822 1.03705 10.8223 1.03722L10.8218 1.037Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 23L8.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </a>
         </td>
      </tr>
   )
};

export default TextsRow;