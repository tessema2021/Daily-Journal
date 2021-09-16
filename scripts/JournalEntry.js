

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
           <li>${entry.title}</li>
           <li>${entry.concept}</li>
           <li>${entry.entry}</li>
           <li>${entry.mood}</li>
        </section>
    `
}


