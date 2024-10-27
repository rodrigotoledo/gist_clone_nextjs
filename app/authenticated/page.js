// app/dashboard/page.js ou pages/dashboard.js
"use client"; // Marque o componente como um Client Component, já que usaremos hooks

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAxios } from '@/contexts/AxiosContext';


export default function Authenticated() {
  const router = useRouter();
  const axios = useAxios();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    setToken(authToken);
    if (!authToken) {
      router.push('/sign-in');
    }
  }, [router]);

  const handleSignOut = async () => {
    const authToken = localStorage.getItem('authToken');
    try {
      await axios.delete('/sign-out', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      localStorage.removeItem('authToken');
      setToken(null);
      router.push('/sign-in');
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <>
      {token && (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Authenticated Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  );
}
