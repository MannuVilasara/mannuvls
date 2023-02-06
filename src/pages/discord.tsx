import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyPage() {
  const router = useRouter();

  // redirect to another website after the component has mounted
  useEffect(() => {
    router.push('https://discord.com/users/786926252811485186');
  }, []);

  return <div className='nsfw'>Redirecting...</div>;
}

export default MyPage;