"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useFlashMessage } from '@/contexts/FlashMessageContext';


export default function Authenticated() {
  const router = useRouter();
  const { authToken, logout } = useAuth();
  const { showFlashMessage } = useFlashMessage();

  useEffect(() => {
    if (!authToken) {
      showFlashMessage("You do not have permission to access this page.");
      setTimeout(() => {
        router.push('/sign-in');
      }, 2000);
    }
  }, [authToken, router, showFlashMessage]);

  const handleSignOut = async () => {
    try {
      await logout();
      router.push('/sign-in');
    } catch (error) {
      showFlashMessage('Error during sign-out:');
    }
  };

  if (!authToken) return null;

  return (
    <>
      {authToken && (
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
