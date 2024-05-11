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
        img="/icons/add-meeting.svg"
        title="Music & Podcast"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}
        className=" bg-[url('/images/mic.png')] bg-cover  border-b-4"
      />
      <CategoryCard
        img="/images/music-lady.png"
        title="Audio Rooms"
        description="via invitation link"
        className="bg-blue-1 bg-[url('/images/radio.webp')] bg-cover   border-b-4"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <CategoryCard
        img="/icons/schedule.svg"
        title="Videos"
        description="Plan your meeting"
        className="bg-red-500 bg-[url('/images/messi.avif')] bg-cover   border-b-4"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <CategoryCard
        img="/icons/recordings.svg"
        title="Online Meeet"
        description="Meeting Recordings"
        className="bg-yellow-1  border-b-4 bg-[url('/images/meet.jpeg')] bg-cover  "
        handleClick={() => router.push('/recordings')}
      />
    </section>
  );
};

export default CategoryTypeList;
