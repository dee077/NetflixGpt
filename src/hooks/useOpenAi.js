import { useState } from 'react';
import { AUTH_DOMAIN } from '../utils/constants';

// Custom hook to handle GPT query
const useOpneAi = () => {

  // Function to make the GPT API call
  const fetchGPTResult = async (prompt) => {

    try {
      const response = await fetch(`${AUTH_DOMAIN}/api/prompt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      return data
    } catch (err) {
      console.error('Error fetching GPT result:', err);
      return null
    }
  };

  return { fetchGPTResult };
};

export default useOpneAi;
