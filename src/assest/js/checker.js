
export const checkUser = () => {
    const user = localStorage.getItem('token');
    return !!user; // Convert to boolean
  };

