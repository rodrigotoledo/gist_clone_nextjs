"use client";
import React, { createContext, useContext } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const AxiosContext = createContext(axiosInstance);

export const AxiosProvider = ({ children }) => (
  <AxiosContext.Provider value={axiosInstance}>
    {children}
  </AxiosContext.Provider>
);

export const useAxios = () => {
  return useContext(AxiosContext);
};
