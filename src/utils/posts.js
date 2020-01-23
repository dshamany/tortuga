async function create(payload){
    await fetch('/posts', {
        method: 'POST',
        headers: new Headers({
            'Content-Type' : 'application/json'
        }),
        body: JSON.stringify(payload)
    });
}


async function getAll(){
    return await fetch('/posts')
    .then(response => response.json());
}

async function getUserPosts(){

}

module.exports = {
    create,
    getAll,
    getUserPosts,
}