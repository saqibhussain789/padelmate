export const API_URL = import.meta.env.VITE_API_URL;



export const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      // console.error("Error logging in:", error);
      throw error;
    }
  };