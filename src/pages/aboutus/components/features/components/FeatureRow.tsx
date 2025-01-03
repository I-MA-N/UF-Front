type FeatureRowProps = {
   text: string
}

function FeatureRow({ text }: FeatureRowProps) {
   return (
      <div className='flex items-center gap-2'>
         <svg className='size-4.5 lg:size-6 flex-shrink-0 text-secondary'
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
         >
            <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12ZM16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711L11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L7.79289 12.2071C7.40237 11.8166 7.40237 11.1834 7.79289 10.7929C8.18342 10.4024 8.81658 10.4024 9.20711 10.7929L11 12.5858L15.2929 8.29289C15.6834 7.90237 16.3166 7.90237 16.7071 8.29289Z" fill="currentColor" />
         </svg>

         {text}
      </div>
   );
};

export default FeatureRow;