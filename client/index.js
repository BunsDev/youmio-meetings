import { createReactClient, studioProvider } from '@livepeer/react';

const LivepeerClient = createReactClient({
  provider: studioProvider({ apiKey: '08f2ec48-6584-456f-a074-8b9442be892b' }),
});

export default LivepeerClient;
