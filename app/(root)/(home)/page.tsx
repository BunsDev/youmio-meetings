'use client';
import { useState } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';
import Image from 'next/image';
import React from 'react';
import { WobbleCard } from '@/components/ui/wobble-card';
import { Vortex } from '@/components/ui/vortex';
import { IconBroadcast, IconEye, IconThumbUp } from '@tabler/icons-react';
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
  const [likes, setlikes] = useState(3);
  const Likes = (num) => {
    setlikes(num + 1);
  };
  return (
    <section className="flex size-full flex-col gap-4 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 max-h-[400px] lg:max-h-[390px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Watch Livestreams everywhere
              <IconBroadcast className="h-20 w-20" />
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With over 1,000 mothly active users , Youmio is the most popular
              web3 streaming and meeting platform.
            </p>
          </div>
          <Image
            src="/images/music-lady.png"
            width={350}
            height={350}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[5%] grayscale filter -bottom-20 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 max-h-[335px] bg-purple-900">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Top Creators
          </h2>
          <div className="py-2">
            <div className="flex  flex-row items-center  space-x-3 py-2">
              <span className="w-11 h-11 rounded-full bg-[url('/images/m4.avif')] bg-cover bg-center"></span>
              <div>
                <p className="text-md">Noah</p>
                <p className="text-xs">62 Followers</p>
              </div>
            </div>
            <div className="flex  flex-row items-center  space-x-3 py-2">
              <span className="w-11 h-11 rounded-full bg-[url('/images/avatar-1.jpeg')] bg-cover bg-center"></span>
              <div>
                <p className="text-md">Mateo</p>
                <p className="text-xs">43 Followers</p>
              </div>
            </div>
            <div className="flex  flex-row items-center  space-x-3 py-2">
              <span className="w-11 h-11 rounded-full bg-[url('/images/avatar-2.jpeg')] bg-cover bg-center"></span>
              <div>
                <p className="text-md">Henry</p>
                <p className="text-xs">98 Followers</p>
              </div>
            </div>
            <div className="flex flex-row items-center  space-x-3 py-2">
              <span className="w-11 h-11 rounded-full bg-[url('/images/avatar-4.png')] bg-cover bg-center"></span>
              <div>
                <p className="text-md">William</p>
                <p className="text-xs">184 Followers</p>
              </div>
            </div>
          </div>
        </WobbleCard>
      </div>
      <section className="grid grid-cols-1 gap-4  md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto w-full">
        <div className="bg-[#000000] rounded-xl overflow-hidden">
          <div className="pt-[56.25%] relative w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://lvpr.tv?v=3717tj2pfxgjybw3"
              allow="autoplay; encrypted-media;"
              sandbox="allow-same-origin allow-scripts"
              style={{
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }} // Make sure to match the border-radius with the container
            ></iframe>
          </div>
          <div className="flex flex-row justify-between items-center p-3">
            <div className="flex flex-row items-center  space-x-3 py-2">
              <span className="w-9 h-9 bg-red-500 rounded-full bg-[url('/images/m1.webp')] bg-cover bg-center"></span>
              <div>
                <p className="text-sm">School</p>
                <p className="text-xs">Daneil</p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-1">
              <IconEye height={16} width={16} />
              <span className="text-sm">76</span>
            </div>
          </div>
        </div>
        <div className="bg-[#000000] rounded-xl overflow-hidden">
          <div className="pt-[56.25%] relative w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://lvpr.tv?v=c8aeys8h270frp93"
              allow="autoplay; encrypted-media;"
              sandbox="allow-same-origin allow-scripts"
              style={{
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }} // Make sure to match the border-radius with the container
            ></iframe>
          </div>
          <div className="flex flex-row justify-between items-center p-3">
            <div className="flex flex-row items-center  space-x-3 py-2">
              <span className="w-9 h-9 bg-red-500 rounded-full bg-[url('/images/m2.avif')] bg-cover bg-center"></span>
              <div>
                <p className="text-sm">Cutie Cat playing</p>
                <p className="text-xs">Elvis</p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-1">
              <IconEye height={16} width={16} />
              <span className="text-sm">52</span>
            </div>
          </div>
        </div>
        <div className="bg-[#000000] rounded-xl overflow-hidden">
          <div className="pt-[56.25%] relative w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://lvpr.tv?v=d57aajic9th61d0m"
              allow="autoplay; encrypted-media;"
              sandbox="allow-same-origin allow-scripts"
              style={{
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }} // Make sure to match the border-radius with the container
            ></iframe>
          </div>
          <div className="flex flex-row justify-between items-center p-3">
            <div className="flex flex-row items-center  space-x-3 py-2">
              <span className="w-9 h-9 bg-red-500 rounded-full bg-[url('/images/m3.webp')] bg-cover bg-center"></span>
              <div>
                <p className="text-sm">Bird Tweeting</p>
                <p className="text-xs">Judith</p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-1">
              <IconEye height={16} width={16} />
              <span className="text-sm">21</span>
            </div>
          </div>
        </div>
      </section>
      <CategoryTypeList />
    </section>
  );
};

export default Home;
