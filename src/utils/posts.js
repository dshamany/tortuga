export async function createPost(payload, callback){
    await fetch('/posts', {
        method: 'POST',
        headers: new Headers({
            'Content-Type' : 'application/json'
        }),
        body: JSON.stringify(payload)
    })
    .then(() => callback());
}


export async function getAll(){
    return await fetch('/posts')
    .then(response => response.json());
}

export async function getOne(id){
    return await fetch(`/posts/${id}`)
    .then(response => response.json());
}

export async function getUserPosts(id){
    return await fetch(`/posts/user/${id}`)
    .then(response => response.json());
}

export async function updatePost(id, payload, callback){
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

export async function removePost(id, callback){
    return await fetch(`/posts/${id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type' : 'application/json'
        })
    })
    .then(() => callback());
}

// export default {
//     createPost,
//     getAll,
//     getUserPosts,
//     getOne,
//     updatePost,
//     removePost,
// }