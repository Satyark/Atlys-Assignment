import { useState, useEffect } from 'react';

interface TimeAgoProps {
  postDate: string; // ISO string format
}

const TimeAgo= ( postDate: string ): string => {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date();
      const postTime = new Date(postDate);
      const differenceInMilliseconds = now.getTime() - postTime.getTime();
      const differenceInMinutes = Math.floor(differenceInMilliseconds / 60000);

      if (differenceInMinutes < 1) {
        setTimeAgo('Just now');
      } else {
        setTimeAgo(`${differenceInMinutes} minute${differenceInMinutes > 1 ? 's' : ''} ago`);
      }
    };

    calculateTimeAgo();
    const intervalId = setInterval(calculateTimeAgo, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [postDate]);

  return timeAgo; 
//   <span>{timeAgo}</span>;
};

export default TimeAgo;
