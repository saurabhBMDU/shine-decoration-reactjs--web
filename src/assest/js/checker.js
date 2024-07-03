

export const checkUser = () => {
    const user = localStorage.getItem('token');
    if(user !== null){
        console.log(user, 'from checker');
        return true
    }else {
        return false;
    }
};

