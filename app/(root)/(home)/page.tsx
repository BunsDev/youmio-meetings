'use client';
import MeetingTypeList from '@/components/MeetingTypeList';
import Image from 'next/image';
import React from 'react';
import { WobbleCard } from '@/components/ui/wobble-card';
import { Vortex } from '@/components/ui/vortex';
import { IconBroadcast } from '@tabler/icons-react';
const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
    now,
  );

  return (
    <section className="flex size-full flex-col gap-4 text-white">
      {/* <Vortex backgroundColor="transparent" className="py-4 w-full h-full"> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 max-h-[400px] lg:max-h-[390px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Watch Livestreams and Listen to podcasts from your Friends
              <IconBroadcast className="h-20 w-20" />
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With over 1,000 mothly active bot users, Youmio is the most
              popular streaming and meeting platform for streamers.
            </p>
          </div>
          <Image
            src="/images/music-lady.png"
            width={350}
            height={350}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[5%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 max-h-[390px] bg-purple-900">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Top Creators
          </h2>
          <div className="py-2">
            <div className="flex ring-1 flex-row items-center  space-x-3 py-2">
              <span className="w-9 h-9 bg-red-500 rounded-full"></span>
              <div>
                <p className="text-sm">Mends Albert</p>
                <p className="text-xs">323 Followers</p>
              </div>
            </div>
            <div className="flex ring-1 flex-row items-center  space-x-3 py-2">
              <span className="w-9 h-9 bg-red-500 rounded-full"></span>
              <div>
                <p className="text-sm">Mends Albert</p>
                <p className="text-xs">323 Followers</p>
              </div>
            </div>
            <div className="flex ring-1 flex-row items-center  space-x-3 py-2">
              <span className="w-9 h-9 bg-red-500 rounded-full"></span>
              <div>
                <p className="text-sm">Mends Albert</p>
                <p className="text-xs">323 Followers</p>
              </div>
            </div>
            <div className="flex ring-1 flex-row items-center  space-x-3 py-2">
              <span className="w-9 h-9 bg-red-500 rounded-full"></span>
              <div>
                <p className="text-sm">Mends Albert</p>
                <p className="text-xs">323 Followers</p>
              </div>
            </div>
            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              View All
            </button>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
      {/* </Vortex> */}

      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded-xl py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
