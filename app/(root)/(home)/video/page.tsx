'use client';
import { useCreateAsset } from '@livepeer/react';
import { useMemo, useRef, useState } from 'react';
import Button from './Button';
import { IconEye } from '@tabler/icons-react';

export default function Home() {
  // State for the asset
  const [asset, setAsset] = useState(null);
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

  console.log(video);

  return (
    <div className="text-white">
      <input
        type="file"
        multiple={false}
        accept="video/*"
        onChange={(e) => {
          if (e.target.files) {
            setVideo(e.target.files[0]);
          }
        }}
      />
      <button
        disabled={status === 'loading' || !createAsset}
        onClick={() => {
          createAsset?.();
        }}
      >
        Create Asset
      </button>
      {assets?.map((asset) => (
        <div key={asset.id}>
          <div>
            <div>Asset Name: {asset?.name}</div>
            <div>Playback URL: {asset?.playbackUrl}</div>
            <div>IPFS CID: {asset?.storage?.ipfs?.cid ?? 'None'}</div>
          </div>
        </div>
      ))}

      {error && <div>{error.message}</div>}
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

        <div className="bg-[#000000] rounded-xl overflow-hidden">
          <div className="pt-[56.25%] relative w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://lvpr.tv?v=586bxsfnt7a5o0e1"
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
              <span className="w-9 h-9 bg-red-500 rounded-full bg-[url('/images/avatar-1.jpeg')] bg-cover bg-center"></span>
              <div>
                <p className="text-sm">Beaufiul Occena</p>
                <p className="text-xs">0x443...34f</p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-1">
              <IconEye height={16} width={16} />
              <span className="text-sm">4</span>
            </div>
          </div>
        </div>

        <div className="bg-[#000000] rounded-xl overflow-hidden">
          <div className="pt-[56.25%] relative w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://lvpr.tv?v=0c33xk55gwpivtc3"
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
              <span className="w-9 h-9 bg-red-500 rounded-full bg-[url('/images/avatar-4.png')] bg-cover bg-center"></span>
              <div>
                <p className="text-sm">Ville village Bessans</p>
                <p className="text-xs">0x9e3...3f</p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-1">
              <IconEye height={16} width={16} />
              <span className="text-sm">2</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import React from 'react';

// function page() {
//   return <div>page</div>;
// }

// export default page;
