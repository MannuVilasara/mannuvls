import { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { data } = useSWR('/api/subscribers', fetcher);
  const subscriberCount = data?.count;
  
  const { data: issueData } = useSWR('/api/issues', fetcher);
  const issues = issueData?.issues;

  const subscribeMe = async (event) => {
    event.preventDefault();
    console.log(email);
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: email }),
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
    });

    const { error, message } = await res.json();
    setError(error);
    setSuccess(message);
  };

  const changeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  }

  return (
    <>  
     </>
  );
};

export default Subscribe;