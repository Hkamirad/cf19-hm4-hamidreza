const text = "name,read,author,yearofpublish,country,/To Kill a Mockingbird,true,Harper Lee,1960,United States,/1984,false,George Orwell,1949,United Kingdom,/The Great Gatsby,true,F. Scott Fitzgerald,1925,United States,"
const books = []
const book = text.split('/')
const keys = book[0].split(',')
for(i = 1; i < book.length; i+=1){
  let  values = book[i].split(',')
  const eachbook = {}
  for(j = 0; j < keys.length - 1; j++){
eachbook[keys[j]] = values[j]
  }
books.push(eachbook)
}
//console.log(book)
//console.log(keys)
console.log(books)
