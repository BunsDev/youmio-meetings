'use client';
import { useCreateAsset } from '@livepeer/react';
import { useMemo, useRef, useState } from 'react';
import Button from './Button';

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
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <iframe
          src="https://lvpr.tv?v=506417joszjctksv"
          frameborder="0"
          allowfullscreen
          allow="autoplay; encrypted-media; picture-in-picture"
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
        <iframe
          src="https://lvpr.tv?v=506417joszjctksv"
          frameborder="0"
          allowfullscreen
          allow="autoplay; encrypted-media; picture-in-picture"
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
        <iframe
          src="https://lvpr.tv?v=506417joszjctksv"
          frameborder="0"
          allowfullscreen
          allow="autoplay; encrypted-media; picture-in-picture"
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
      </section>
    </div>
  );
}

// import React from 'react';

// function page() {
//   return <div>page</div>;
// }

// export default page;
