


export const getUsers = () => {

    return fetch("http://localhost:8090/users")
        .then(response => response.json())
    // .then(parsedResponse => {
    //     //     // do something with response here
    //     return parsedResponse;
    // })
}


let postCollection = [];

export const usePostCollection = () => {
    //Best practice: we don't want to alter the original state, so
    //make a copy of it and then return it
    //The spread operator makes this quick work
    return [...postCollection];
}

export const getPosts = () => {
    return fetch("http://localhost:8090/posts")
        .then(response => response.json())
        .then(parsedResponse => {
            postCollection = parsedResponse;
            return parsedResponse;
        })

}




export const createPost = postObj => {
    return fetch("http://localhost:8090/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)

    })
        .then(response => response.json())
}




export const deletePost = postId => {
    return fetch(`http://localhost:8090/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }

    })
        .then(response => response.json())
    //.then(getPosts)
}