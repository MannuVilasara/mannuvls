import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyPage() {
  const router = useRouter();

  // redirect to another website after the component has mounted
  useEffect(() => {
    router.push('https://open.spotify.com/user/');
  }, [router]);

  return <div className='nsfw'></div>;
}

export default MyPage;
