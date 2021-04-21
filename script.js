const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com',
    'catsHome.com',
    'loveCats.com'
]

 const googleSearch = (searchInput, db) => {
    const matches = db.filter(web => {
        return web.includes(searchInput)
    })

    return matches.length > 3 ? matches.slice(0,3) : matches
}
/* real db
 const googleSearch = (searchInput, db) => {
    const matches = db.filter(web => {
        return web.includes(searchInput)
    })

    return matches.length > 3 ? matches.slice(0,3) : matches
}
*/
// console.log(googleSearch('cats', googleDatabase)); 

module.exports = googleSearch