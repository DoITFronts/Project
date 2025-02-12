'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Participants() {
  const { id } = useParams();
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetch(`/api/events/${id}/participants`)
      .then((res) => res.json())
      .then((data) => setParticipants(data));
  }, [id]);

  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <h3 className="text-lg font-bold">참가자 목록</h3>
      <div className="mt-3 flex space-x-2">
        {participants.map((avatar) => (
          <img
            key={avatar}
            src={avatar}
            alt="참가자"
            className="size-8 rounded-full border-2 border-white"
          />
        ))}
      </div>
    </div>
  );
}
