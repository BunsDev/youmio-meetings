/* eslint-disable camelcase */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import HomeCard from './HomeCard';
import MeetingModal from './MeetingModal';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';

import { useToast } from './ui/use-toast';
import CategoryCard from './CategoryCard';
import StreamCard from './StreamCard';
const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

const CategoryTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <CategoryCard
        img="/icons/music.svg"
        title="Music & Podcast"
        description="Enjoy music everywhere"
        handleClick={() => setMeetingState('isInstantMeeting')}
        className="  bg-cover bg-center border-b-4"
      />
      <CategoryCard
        img="/icons/microphone.svg"
        title="Join Audio Rooms"
        description="via invitation link"
        className="bg-blue-1  bg-cover bg-center  border-b-4"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <CategoryCard
        img="/icons/broadcast.svg"
        title="Streams"
        description="Watch Live streams"
        className="bg-red-500  bg-cover bg-center  border-b-4"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <CategoryCard
        img="/icons/video.svg"
        title="Online Meeet"
        description="Start an instant meeting"
        className="bg-yellow-1  border-b-4 bg-cover  "
        handleClick={() => router.push('/recordings')}
      />
    </section>
  );
};

export default CategoryTypeList;
