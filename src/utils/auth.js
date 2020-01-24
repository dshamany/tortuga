export function getToken(){
    let token = localStorage.getItem('token');
    
    if (token){
        let userInfo = token.split('.')[1];
        const payload = JSON.parse(atob(userInfo));
        if (payload.exp < Date.now()/1000){
            localStorage.removeItem('token');
            token = null;
        }
    }
    return token;
}

export function getUserFromToken(token){
    if (!token) return null;
    let userInfo = token.split('.')[1];
    return JSON.parse(atob(userInfo));
}