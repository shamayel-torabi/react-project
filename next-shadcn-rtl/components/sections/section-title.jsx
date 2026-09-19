export default function SectionTitle({ title, subtitle }) {
    return (
        <div className='flex flex-col items-center justify-center m-4'>
            <h3 className='text-center text-[48px] font-semibold bg-linear-to-r from-[#0601fa] to-[#05e2f1] text-transparent bg-clip-text'>{title}</h3>
            <p className='mt-3 max-w-xs text-center text-gray-500 md:max-w-lg'>{subtitle}</p>
        </div>
    );
}
