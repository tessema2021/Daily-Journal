

export const PostEntry = () => {
    return `
    <div class="journal_list">
            <h2>Daily Journal</h2>
            <form action=" ">
         <div>
            <input vale=""
              name="postDate"
              class="date__input"
               type="date"
               placeholder="Date" />
          </div>
          <div>
              <h3>Title covered</h3>
               <input value=""
                  name="postTitle"
                   class="concept__input"
                   type="text"
                   placeholder="text" />
          </div>
          <div>
          <h3>Description</h3>
          <textarea name="postDescription"
           class="newPost__input newPost__description"
           placeholder="text"></textarea>
        </div>
        <div>
          <h3>Mood for the day</h3>     
           <select id="jornalMood">
          <option value="ok">Ok</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>

      </select>
        </div>
                
                

        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
    </div>
    `
}