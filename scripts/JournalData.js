

export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}





const journal = [
    {
        id: 1,
        date: "08/09/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },

    {
        id: 2,
        date: "08/30/2021",
        concept: "JavaScript ",
        entry: "We work on some real world project fixing the code",
        mood: " It's ok feels like need more of similar work"
    }
]
]
