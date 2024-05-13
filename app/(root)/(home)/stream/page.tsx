'use client';
import { useState, useEffect } from 'react';
import CategoryCard from '@/components/CategoryCard';
import StreamCard from '@/components/StreamCard';
import { Livepeer } from 'livepeer';
import MeetingModal from '@/components/MeetingModal';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const livepeer = new Livepeer({
  apiKey: '08f2ec48-6584-456f-a074-8b9442be892b',
});
// "4987hjtyfi49jm4j"
// "4987-nb22-p90m-xmta"

const PreviousPage = () => {
  const [loading, setLoading] = useState(false);
  const [streamName, setStreamName] = useState(undefined);
  const [streams, setStreams] = useState([]) as any;
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setStreamName(e.target.value);
  };
  const createStream = async () => {
    try {
      if (streamName == undefined) {
        setLoading(true);
      }
      let res = await livepeer.stream.create({
        name: streamName,
      });
      console.log('Stream created:', res);
      const newStream = {
        id: res.stream.id,
        name: res.stream.name,
        playbackId: res.stream.playbackId,
        streamKey: res.stream.streamKey,
      };

      const existingStreams = JSON.parse(
        localStorage.getItem('streams') || '[]',
      );
      existingStreams.push(newStream);
      localStorage.setItem('streams', JSON.stringify(existingStreams));
      setStreams(existingStreams);
      toast({ title: 'Stream Created' });
      setLoading(false);
      setStreamName(undefined);
    } catch (error) {
      console.error('Failed to create stream:', error);
    }
  };

  useEffect(() => {
    // Load streams from local storage on component mount
    const loadedStreams = JSON.parse(localStorage.getItem('streams') || '[]');
    setStreams(loadedStreams);
  }, []);

  console.log(streams);
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="flex flex-row space-x-2">
        <h1 className="text-3xl font-bold">Streams</h1>
        <button
          onClick={createStream}
          className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
        >
          Create Stream
        </button>
      </div>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {/* <StreamCard
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
        /> */}
        {streams?.map((stream) => (
          <StreamCard
            key={stream.id}
            img="/icons/schedule.svg"
            title={`Stream Key: ${stream.streamKey}`}
            description={`Playback ID: ${stream.playbackId}`}
            className="bg-gray-900 bg-cover border-b-4"
          />
        ))}
        {/* <StreamCard
          img="/icons/schedule.svg"
          title="Stream ID: 34f..43f"
          description="Plan your meeting"
          className="bg-gray-900  bg-cover   border-b-4"
        /> */}
      </section>
      <MeetingModal
        isOpen={loading}
        onClose={() => setLoading(false)}
        title="Create Stream"
        buttonText="Create Stream"
        handleClick={createStream}
      >
        <div className="flex flex-col gap-2.5">
          <label className="text-base font-normal leading-[22.4px] text-sky-2">
            Enter Stream Name
          </label>
          <Input
            className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange={handleInputChange}
          />
        </div>
      </MeetingModal>
    </section>
  );
};

export default PreviousPage;
