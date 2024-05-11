'use client';
import CategoryCard from '@/components/CategoryCard';
import StreamCard from '@/components/StreamCard';
import { Livepeer } from 'livepeer';

const livepeer = new Livepeer({
  apiKey: '08f2ec48-6584-456f-a074-8b9442be892b',
});
// "4987hjtyfi49jm4j"
// "4987-nb22-p90m-xmta"

const createStream = async () => {
  console.log('creating');

  let res = await livepeer.stream.create({
    name: 'test_stream',
  });

  console.log('created');
  console.log(res);
};

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Stream Information</h1>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StreamCard
          img="/icons/schedule.svg"
          title="Stream ID: 34f..43f"
          description="Plan your meeting"
          className="bg-gray-900  bg-cover   border-b-4"
        />
        <StreamCard
          img="/icons/schedule.svg"
          title="Stream ID: 34f..43f"
          description="Plan your meeting"
          className="bg-gray-900  bg-cover   border-b-4"
        />
        <StreamCard
          img="/icons/schedule.svg"
          title="Stream ID: 34f..43f"
          description="Plan your meeting"
          className="bg-gray-900  bg-cover   border-b-4"
        />
        <StreamCard
          img="/icons/schedule.svg"
          title="Stream ID: 34f..43f"
          description="Plan your meeting"
          className="bg-gray-900  bg-cover   border-b-4"
        />
      </section>
      <button
        onClick={createStream}
        className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
      >
        Create Stream
      </button>
      {/* <CallList type="ended" /> */}
    </section>
  );
};

export default PreviousPage;
