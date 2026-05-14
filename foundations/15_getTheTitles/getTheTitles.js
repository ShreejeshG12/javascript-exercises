function getTheTitles(titles = []) {
    books = []
    for (let i = 0; i < titles.length; i++) {
        books.push(titles[i].title);
    }
    return books;
};

// Do not edit below this line
module.exports = getTheTitles;
