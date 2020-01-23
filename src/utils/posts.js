async function create(payload, callback){
    await fetch('/posts', {
        method: 'POST',
        headers: new Headers({
            'Content-Type' : 'application/json'
        }),
        body: JSON.stringify(payload)
    })
    .then(() => callback());
}


async function getAll(){
    return await fetch('/posts')
    .then(response => response.json());
}

async function getUserPosts(id){
    return await fetch(`/posts/user/${id}`)
    .then(response => response.json());
}

module.exports = {
    create,
    getAll,
    getUserPosts,
}