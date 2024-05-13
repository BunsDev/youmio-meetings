'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCreateAsset } from '@livepeer/react';
import { SignedIn, UserButton } from '@clerk/nextjs';
import {
  IconBell,
  IconBroadcast,
  IconFileUpload,
  IconMicrophone,
  IconUpload,
} from '@tabler/icons-react';
import MobileNav from './MobileNav';
import { BellIcon } from 'lucide-react';
import MeetingModal from './MeetingModal';
import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import Loader2 from './Loader';

const Navbar = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [video, setVideo] = useState<File | undefined>(undefined);

  // Ref for the file input
  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset(
    // we use a `const` assertion here to provide better Typescript types
    // for the returned data
    video
      ? {
          sources: [
            {
              name: video.name,
              file: video,
              storage: {
                ipfs: true,
                metadata: {
                  name: 'interesting video',
                  description: 'a great description of the video',
                },
              },
            },
          ] as const,
        }
      : null,
  );
  const createVideo = async () => {
    createAsset?.();
    if (status == 'success') {
      alert('Your video is pending Approval. ');
    } else if (status == 'error') {
      alert(
        'Sorry! We had an issue processing the video, Try again another time',
      );
    }
  };
  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderSearchForm = () => {
    return (
      <form
        action=""
        method="POST"
        className="flex items-center space-x-2 text-slate-200"
      >
        <div className="bg-[#0f0f0f] w-96 ring-1 ring-opacity-10 ring-white shadow-xl text-white flex items-center space-x-1 py-2 px-4 rounded-full h-full">
          {renderMagnifyingGlassIcon()}
          <input
            type="search"
            placeholder="Type and press enter."
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm "
          />
        </div>
        <div className=" p-2 flex cursor-pointer items-center justify-center bg-black rounded-full">
          <IconMicrophone height={20} width={20} />
        </div>
        <div className=" p-2 flex cursor-pointer items-center justify-center bg-black rounded-full">
          <Link href={'/stream'}>
            <IconBroadcast height={20} width={20} />
          </Link>
        </div>
        <div
          onClick={() => {
            setIsUpload(true);
          }}
          className=" p-2 flex cursor-pointer items-center justify-center bg-black rounded-full"
        >
          {/* <Link href={'/video'}> */}
          <IconUpload height={20} width={20} />
          {/* </Link> */}
        </div>
        <div className="px-4 py-0.5 text-white text-md font-medium border flex cursor-pointer items-center justify-center  rounded-lg">
          88.99 YMI
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  return (
    <nav className="flex-between items-center fixed z-50 w-full bg-[#0f0f0f] shadow-xl px-6 py-4 lg:px-5">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-medium text-white max-sm:hidden">
          Youmio
        </p>
      </Link>
      <div>
        <div className=" ">{renderSearchForm()}</div>
      </div>
      <MeetingModal
        isOpen={isUpload}
        onClose={() => setIsUpload(false)}
        title="Upload a video"
        className="text-center"
        buttonText="Upload"
        handleClick={createVideo}
      >
        {status === 'loading' ? (
          <>
            <Loader2 />
          </>
        ) : (
          <>
            <Input
              type="file"
              multiple={false}
              accept="video/*"
              onChange={(e) => {
                if (e.target.files) {
                  setVideo(e.target.files[0]);
                }
              }}
              // onChange={(e) => setValues({ ...values, link: e.target.value })}
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Input
              placeholder="Meeting link"
              // onChange={(e) => setValues({ ...values, link: e.target.value })}
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            />

            <Textarea
              placeholder="Description"
              // onChange={(e) => setValues({ ...values, link: e.target.value })}
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </>
        )}
      </MeetingModal>
      <div className="flex-between w-14 ">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
