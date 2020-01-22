const NavItems = {
    index: {
        name: 'Home',
        path: '/',
        key: 'index',
        state: null,  
    },
    profile: {
        name: 'Profile',
        path: '/profile',
        key: 'profile',
        state: null,
    },
    browse: {
        name: 'Browse',
        path: '/posts',
        key: 'browse',
        state: null,
    },
    signin: {
        name: 'Sign In',
        path: '/signin',
        key: 'signin',
        state: null,
    },
    signout: {
        name: 'Sign Out',
        path: '/signout',
        key: 'signout',
        state: null,
    }
};

function getItems(items){
    let nav = [];
    for (let item of items){
        nav.push(NavItems[item]);
    }
    return nav;
}

module.exports = {
    getItems,
    NavItems,
}