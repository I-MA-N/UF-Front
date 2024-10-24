import ExtractedZipType from "../../../../../../../../../types/ExtractedZipType";

type ImageBiggerModalProps = {
    sectionNameFA: string,
    src: ExtractedZipType["image"],
    setShowImageBigger: React.Dispatch<React.SetStateAction<boolean>>
}

function ImageBiggerModal({ sectionNameFA, src, setShowImageBigger }: ImageBiggerModalProps) {
    return (
        <div className="modal">
            <div className="w-full max-w-5xl px-4">
                <div className="w-full relative flex justify-center mb-4 lg:mb-6">
                    <button
                        type="button"
                        className="size-11 lg:size-14 flex items-center justify-center bg-primary absolute right-4 top-1/2 -translate-y-1/2 text-yellow border border-yellow rounded-full"
                        onClick={() => setShowImageBigger(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="size-4 lg:size-5">
                            <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <span className="lg:text-xl">عکس {sectionNameFA}</span>
                </div>

                <div className="px-4 py-9 bg-primary rounded-[32px] border-2">
                    <img
                        src={src}
                        alt="sample image for this section"
                        className="max-h-[80vh] mx-auto rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageBiggerModal;