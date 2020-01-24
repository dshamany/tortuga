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

async function getOne(id){
    return await fetch(`/posts/${id}`)
    .then(response => response.json());
}

async function getUserPosts(id){
    return await fetch(`/posts/user/${id}`)
    .then(response => response.json());
}

async function updatePost(id, payload, callback){
    await fetch(`/posts/${id}`, {
        method: 'PUT',
        headers: new Headers({
            'Content-Type' : 'application/json'
        }),
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        callback();
    });
}

async function removePost(id, callback){
    return await fetch(`/posts/${id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type' : 'application/json'
        })
    })
    .then(() => callback());
}

module.exports = {
    create,
    getAll,
    getUserPosts,
    getOne,
    updatePost,
    removePost,
}