
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const useTokenValidation = () => {
  const router = useRouter();

  useEffect(() => {
    const validateToken = async () => {
      try {
        const check = await axios.post('/api/auth', {
          action: 'check'
        });

        console.log(check);

        if (!check.data) {
          router.push('/');
          return;
        }

      } catch (error) {
        console.error('Error during token validation:', error);
        router.push('/');
      }
    };
   
    // Check token every 10 seconds
    const intervalId = setInterval(validateToken, 10000);

    // Perform initial check
    validateToken();

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [router]);
};

export default useTokenValidation;
