'use client';
import MeetingTypeList from '@/components/MeetingTypeList';
import Image from 'next/image';
import React from 'react';
import { WobbleCard } from '@/components/ui/wobble-card';
import { Vortex } from '@/components/ui/vortex';
import { IconBroadcast } from '@tabler/icons-react';
import CategoryTypeList from '@/components/CategoryTypeList';
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
        <p>A tab to add list of vidoes etc </p>
        {/* <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
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
        </WobbleCard> */}
      </div>
      <CategoryTypeList />
    </section>
  );
};

export default Home;
