const bookProperty = {
    name: 'Harry Potter',
    author: 'J.K. Rowling',
    genre: 'fantasy',
    publisher: 'Bloomsbury Publishing',
    firstPublishYear: '1997'
}
myFunc = (book) =>{
return (`The book ${bookProperty.name} was written by ${bookProperty.author} in the year ${bookProperty.firstPublishYear}`)
    };
console.log(myFunc(bookProperty));

