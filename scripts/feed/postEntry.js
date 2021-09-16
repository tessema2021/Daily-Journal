

export const PostEntry = () => {
    return `
    <div class="main_container">
            <h2>Daily Journal</h2>
            <form action=" ">
                <fieldset class="date">
                    <label for="jornalDate"> Date of entry</label>
                    <input type="date" id="jornalDate">
                </fieldset>
                <fieldset class="concept">
                    <label for="concept">Concept covered </label>
                    <input type="text" id="jornalConcept">
                </fieldset>
                <fieldset class="entry">
                    <label for="jornalEntry"> Journal entry</label>
                    <input type="text" id="jornalEntry">
                </fieldset>
                <fieldset class="entry">
                    Mood for the day <select id="jornalMood">
                        <option>Ok</option>
                        <option>Happy</option>
                        <option>Sad</option>

                    </select>
                </fieldset>

        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
    </div>
    `
}