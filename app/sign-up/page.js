"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
import Footer from '@/components/Footer';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação
    console.log({ username, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <main className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <FaGithub className='text-white' size={60} />
        </div>

        {/* Texto de Sign In */}
        <h2 className="text-center text-2xl text-white">
          Sign in to GitHub
        </h2>

        {/* Caixa de Sign In */}
        <div className="bg-emDark-bgTop p-6 rounded-md border-gray-600 border text-white">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div className='space-y-2'>
              <label htmlFor="username" className="block text-sm font-bold ">
                Username or email address
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-3 py-1 rounded border border-gray-600 bg-[#0D1117] text-white placeholder-gray-400 focus:outline-none focus:bg-[#3F4249] w-full"
                placeholder="Enter your username or email"
                required
              />
            </div>

            {/* Password */}
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <label htmlFor="password" className="block text-sm font-bold">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-1 rounded border border-gray-600 bg-[#0D1117] text-white placeholder-gray-400 focus:outline-none focus:bg-[#3F4249] w-full"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Caixa para Novo Usuário */}
        <div className="bg-emDark-bgTop p-6 rounded-md border-gray-600 border text-white font-bold flex justify-between">
          <p className="text-sm">
            New to GitHub?{" "}
          </p>
          <Link href="/sign-up" className="text-blue-500 hover:underline">
              Create an account
            </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}