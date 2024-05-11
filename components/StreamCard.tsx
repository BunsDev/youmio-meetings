'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const StreamCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[180px] rounded-[14px] cursor-pointer',
        className,
      )}
      onClick={handleClick}
    >
      <div className="flex-center  size-16 hidden  rounded-[10px]">
        {/* <Image src={img} alt="meeting" width={30} height={30} /> */}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-md font-semibold">{title}</h1>
        <div className="text-sm flex flex-row items-center space-x-2">
          <span className="border rounded-full px-2"> Details</span>
          <span className="border border-green-300 rounded-full px-2">
            {' '}
            Playback
          </span>
        </div>
        {/* <p className="text-sm font-normal">{description}</p> */}
      </div>
    </section>
  );
};

export default StreamCard;
