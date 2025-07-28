// Helper function to determine the base URL for API requests
export const getApiBaseUrl = () => {
  // In development, use the local server
  if (import.meta.env.DEV) {
    return 'http://localhost:3001/api';
  }
  
  // In production, use relative paths that will be redirected by Netlify
  return '/api';
};

// Function to make API requests with the correct base URL
export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  
  return response.json();
};
