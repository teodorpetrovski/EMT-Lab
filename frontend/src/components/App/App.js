
import './App.css';
import {Component} from "react";
import {BrowserRouter as Router, Navigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Header from "../Header/header";
import ELibraryRepository from "../../repository/elibraryRepository";
import Books from "../Book/BookList/books";
import BookAdd from "../Book/BookAdd/bookAdd";
import BookEdit from "../Book/BookEdit/bookEdit";
import Categories from "../Category/CategoryList/categories";
import Countries from "../Country/CountryList/countries";
import CountryAdd from "../Country/CountryAdd/countryAdd";
import Authors from "../Author/AuthorList/authors";
import AuthorAdd from "../Author/AuthorAdd/authorAdd";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        books: [],
        categories: [],
        authors: [],
        countries:[],
        selectedBook:{}
    }
  }

  render() {
    return (
        <Router>
          <Header/>
          <main>
            <div className={"container"}>

              <Routes>
                  <Route path={"/books/edit/:id"} exact
                         element={<BookEdit categories={this.state.categories} authors={this.state.authors} book={this.state.selectedBook} onBookEdit={this.editBook}/>}/>
                  <Route path={"/books/add"} exact
                         element={<BookAdd categories={this.state.categories} authors={this.state.authors} onBookAdd={this.addBook} />}/>

                  <Route path={"/country/add"} exact element={<CountryAdd onCountryAdd={this.addCountry} />}/>

                  <Route path={"/authors/add"} exact element={<AuthorAdd countries={this.state.countries} onAuthorAdd={this.addAuthor} />}/>

                  <Route path={"/books"} exact
                         element={<Books books={this.state.books} onDelete={this.deleteBook} onEdit={this.getBook} markAsTaken={this.markAsTaken}/>}/>
                  <Route path={"/country"} exact element={<Countries countries={this.state.countries}/>}/>
                  <Route path={"/authors"} exact element={<Authors authors={this.state.authors}/>}/>
                  <Route path={"/categories"} exact element={<Categories categories={this.state.categories}/>}/>

                  <Route path="/" element={<Navigate to="/books" replace={true} />}/>
              </Routes>

            </div>
          </main>
        </Router>

    );
  }


  loadBooks = () => {
    ELibraryRepository.fetchBooks()
        .then((data) => {
              this.setState({
                books: data.data
              })
            }
        )
  }
  loadCategories = () => {
    ELibraryRepository.fetchCategories()
        .then((data) => {
              this.setState({
                categories: data.data
              })
            }
        )
  }
  loadAuthors = () => {
    ELibraryRepository.fetchAuthors()
        .then((data) => {
              this.setState({
                authors: data.data
              })
            }
        )
  }
  loadCountries = () => {
    ELibraryRepository.fetchCountries()
        .then((data) => {
              this.setState({
                countries: data.data
              })
            }
        )
  }

    deleteBook = (id) =>
    {
        ELibraryRepository.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    addBook = (name,category,author,availableCopies) =>
    {
        ELibraryRepository.addBook(name,category,author,availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    editBook = (id,name,category,author,availableCopies) =>
    {
        ELibraryRepository.editBook(id,name,category,author,availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    getBook = (id) =>
    {
        ELibraryRepository.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook:data.data
                })
            })
    }

    markAsTaken = (id) =>
    {
        ELibraryRepository.markAsTaken(id)
            .then(() =>
                {
                    this.loadBooks();
                }
            )
    }

    addCountry= (name,continent) =>
    {
        ELibraryRepository.addCountry(name,continent)
            .then(() =>
            {
                this.loadCountries();
            })
    }

    addAuthor=(name,surname,country) =>
    {
        ELibraryRepository.addAuthor(name,surname,country)
            .then( () => {
                this.loadAuthors();
            })
    }


  componentDidMount() {
    this.loadBooks();
    this.loadAuthors();
    this.loadCategories();
    this.loadCountries();

  }
}

export default App;