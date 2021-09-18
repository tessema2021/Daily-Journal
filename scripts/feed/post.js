
export const posts = (postObject) => {
  return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <p class="dateOf_entry">${postObject.dateOfEntry}</p>
        <p class="post__description">"${postObject.description}" </p>
        <p class="post__mood">"${postObject.mood}" </p>
        <div><button id="edit--${postObject.id}">Edit</button></div>
      </section>
    `
}