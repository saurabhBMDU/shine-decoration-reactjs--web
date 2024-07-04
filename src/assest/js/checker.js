
export const checkUser = () => {
    const user = localStorage.getItem('token');
    console.log(user, 'from checker');
    return !user; // Convert to boolean
  };

