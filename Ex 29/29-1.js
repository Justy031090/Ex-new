// Understanding the code
// We are faking an API request to a food recipe database.
// Here we are requesting for food recipe Ids.
// We get an array of Ids once consumed.
const getIDs = () =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve([532, 543, 753, 1, 5]);
    }, 1500);
    });

//!my func
async function getIds () {
    setTimeout(()=> {
        const ids = await fetch([532, 543, 753, 1, 5])
    }, 1500);
};

// Here we are fetching a recipe with a given Id.
// We are getting a recipe as an object once consumed.
const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
            };
                resolve(`${ID}: ${recipe.title}`);
            },
            1500,
            recipeID
        );
    });
};

// //!my func
// async function getRec (recID) {
//     setTimeout(
//         const rec = await fetch(ID)
//         newRec = {
//             title: rec.title,
//             publusher: rec.publisher  
//         };
//     )
// }


// Here we are consuming the promise.
// Getting the Ids, then getting a recipe with the id in the index 2.

getIDs()
    .then((IDs) => {
        console.log(IDs);
        return getRecipe(IDs[2]);
    })
        .then((recipe) => {
        console.log(recipe);
    })
        .catch((error) => {
    console.log("It is an error!");
});


// The Task
// Your task is to convert the consumed promise not to use .then and .catch but 
// to use the modern way using async and await.