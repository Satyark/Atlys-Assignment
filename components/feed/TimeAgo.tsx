import { useState, useEffect } from 'react';

interface TimeAgoProps {
  postDate: string; // ISO string format
}

const TimeAgo: React.FC<TimeAgoProps> = ({ postDate }) => {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date();
      const postTime = new Date(postDate);
      const differenceInMilliseconds = now.getTime() - postTime.getTime();
      const differenceInMinutes = Math.floor(differenceInMilliseconds / 60000);

      if (differenceInMinutes < 1) {
        setTimeAgo('Just now');
      } 
      else if(differenceInMinutes>1140){
        setTimeAgo('1 day ago')
      }
      else {
        setTimeAgo(`${differenceInMinutes} minute${differenceInMinutes > 1 ? 's' : ''} ago`);
      }
    };

    calculateTimeAgo();
    const intervalId = setInterval(calculateTimeAgo, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [postDate]);

  return <p className='text-[12px] text-[#7F8084]'>{timeAgo}</p>;
};

export default TimeAgo;
