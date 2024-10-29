"use client";
import { useState } from 'react';

export default function GistForm() {
  const [name, setName] = useState('');
  const [filename, setFilename] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, filename, content });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Gist Title
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter gist title"
        />
      </div>
      <div>
        <label htmlFor="filename" className="block text-sm font-medium text-gray-700">
          Filename
        </label>
        <input
          type="text"
          id="filename"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="Enter filename"
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Gist Content
        </label>
        <textarea
          id="content"
          rows="5"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter gist content"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
      >
        Create secret gist
      </button>
    </form>
  );
}