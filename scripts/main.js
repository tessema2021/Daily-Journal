import { getPosts, getUsers, createPost, deletePost } from "./JournalDataManager.js";
import { PostEntry } from "./feed/postEntry.js";
import { PostList } from "./feed/postList.js";

const allUsers = getUsers()
    .then(apiUsers => {
        // console.log("allUsers", apiUsers)
    })



const showPostList = () => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector(".post");
    getPosts().then((allPosts) => {

        postElement.innerHTML = PostList(allPosts);
    })
}



const showPostEntry = () => {
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".journal_list");
    entryElement.innerHTML = PostEntry();
}

const applicationElement = document.querySelector(".journal");

const journalclick = (event) => {
    // console.log("what was clicked", event.target)
    if (event.target.id === ".newPost") {
        //console.log("are you sure you want logout?")
    }
}


applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {
        //clear the input fields
    }
})



applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
        //collect the input values into an object to post to the DB
        const title = document.querySelector("input[name='postTitle']").value
        const description = document.querySelector("textarea[name='postDescription']").value
        const mood = document.querySelector("#jornalMood").value
        //we have not created a user yet - for now, we will hard code `1`.
        //we can add the current time as well
        const postObject = {
            title: title,
            description: description,
            mood: mood,
            userId: 1,
            timestamp: Date.now()
        }

        // be sure to import from the DataManager
        createPost(postObject)
            .then(dbResopnse => {
                showPostList();
            })
    }
})





applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("delete")) {
        const postId = event.target.id.split("__")[1];
        deletePost(postId)
            .then(response => {
                showPostList();
            })
    }
})




applicationElement.addEventListener("click", journalclick)




const startJournal = () => {
    showPostList();
    showPostEntry();

}

startJournal();











// const btn = document.querySelector(".main_container")
// btn.addEventListener("click", event => {
//     if (event.target.id === "btn-record") {

//     }
// })


