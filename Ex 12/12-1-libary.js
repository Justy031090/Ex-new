var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
]

isReadable = (arr, stat) => {
    return arr.filter(book =>{ 
    if (book[stat] = true) return book ;
}); 
}
isReadable(library, 'readingStatus')


authorName = (arr, name) => {
    return arr.filter(book =>{ 
        if (book.author.toLowerCase().includes(`${name}`))
        return book;
    }); 
}
// (authorName(library, 'suzanne'))

bookName = (arr, name) => {
    return arr.filter(book =>{ 
        if (book.title.toLowerCase().includes(`${name}`))
        return book;
    });
}
// console.log(authorName(library, 'suzanne'))
