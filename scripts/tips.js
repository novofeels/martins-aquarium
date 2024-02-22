import { getQuotes } from "./database.js";

export const renderQuoteList = () => {
    // Retrieve the quotes from the database
    const quotes = getQuotes();

    // Start building a string filled with HTML syntax
    let htmlString = '<div class="quotes-section"><ul>';

    // Create HTML representations of each quote
    for (const quote of quotes) {
        htmlString += `<li><em>"${quote.text}"</em> - ${quote.author}</li>`;
    }

    htmlString += '</ul></div>';

    return htmlString;
};
