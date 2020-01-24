async function addCrew(body, callback){
    return await fetch(`/crew`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type' : 'application/json'
        }),
        body: JSON.stringify(body)
    })
    .then((data) => {
        console.log(data);
        callback();
    });
}

async function getCrew(id){
    return await fetch(`/crew/post/${id}`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: null
    })
    .then(response => response.json());
}


module.exports = {
    addCrew,
    getCrew,
}