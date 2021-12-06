
const book2 = {
    name: 'Twilight Series',
    author: 'Stephenie Meyer',
    year: '2005'
};
const book1 = {
    name:'Fifty Shades Of Grey',
    author: 'E. L. James',
    year:'2011'
};
const bookUtils = {
    getFirstPublished(book1, book2){
        if (book1 > book2){
            return book2
        }
        else {
            return book1
        }
    },
    setNewEdition(bookEdition, editionYear){
        bookUtils.latestEdition = (editionYear > bookEdition ? bookUtils.latestEdition = editionYear : bookUtils.latestEdition = bookEdition)
    },
    setLanguage(bookLanguage, lang){
        bookUtils.language = (bookLanguage == lang ? bookUtils.language = bookLanguage : bookUtils.language = lang )
    },
    setTranslation(book, language, translator){
        bookUtils.translation = {
            translator: 1,
            language: 2,
        }
    },
    setPublisher(bookName, bookLocation){
        bookUtils.publisher = {
            publish: (`${bookName}`),
            whereLocated: (`${bookLocation}`)
        }
    },
    isSamePublisher(book3, book4) {
        (Object.values(bookUtils.publisher[book3]) = Object.values(bookUtils.publisher[book4])) ? 
            console.log(`${book3} and ${book4} have the same publisher`) : console.log(`${book3} and ${book4} dont have the same publisher`) 
    }
}



console.log(bookUtils.setPublisher("Harry Potter", "England"))
