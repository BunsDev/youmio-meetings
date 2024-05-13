import Image from 'next/image';

const Loader2 = () => {
  return (
    <div className="flex-center h-[56px] w-full">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader2;
