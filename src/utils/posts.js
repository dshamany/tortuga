async function create(payload){
    await fetch('/posts', {
        method: 'POST',
        headers: new Headers({
            'Content-Type' : 'application/json'
        }),
        body: JSON.stringify(payload)
    });
}

module.exports = {
    create,
}