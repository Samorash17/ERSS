const API_URL = 'http://localhost:5000/api';

const api = {
  get: async (endpoint) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for cookies
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error(`API GET ${endpoint} failed:`, error);
      throw error;
    }
  },
  post: async (endpoint, data) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error(`API POST ${endpoint} failed:`, error);
      throw error;
    }
  },
  put: async (endpoint, data) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error(`API PUT ${endpoint} failed:`, error);
      throw error;
    }
  },
  delete: async (endpoint) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error(`API DELETE ${endpoint} failed:`, error);
      throw error;
    }
  },
};

export default api;
