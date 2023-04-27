import axios from '../custom-axios/axios';


const ELibraryRepository = {
    fetchBooks: () => {
        return axios.get("/books")
    },

    fetchAuthors:()=> {
        return axios.get("/author")
    },

    fetchCountries:()=>{
        return axios.get("/country")
    },

    fetchCategories:()=>{
        return axios.get("/books/categories")
    },

    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        })
    },
    editBook: (id, name, category, author, availableCopies) =>
    {
        return axios.put(`/books/edit/${id}`,{
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        })
    },
    getBook:(id)=>
    {
        return axios.get(`/books/${id}`);
    },
    markAsTaken:(id)=>
    {
        return axios.post(`/books/mark/${id}`);
    },
    addCountry:(name,continent)=>
    {
        return axios.post("/country/add",{
            "name":name,
            "continent":continent
    })
    },
    addAuthor:(name,surname,country)=>
    {
        return axios.post("/author/add",{
                "name":name,
                "surname":surname,
                "country":country
        })
    }



}

export default ELibraryRepository;