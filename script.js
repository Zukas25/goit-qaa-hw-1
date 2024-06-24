// Obiekt reprezentujący osobę
const person = {
    username: "Maciej",
    showName() {
        // Metoda showName wyświetla username używając słowa kluczowego this
        console.log(this.username);
    }
};

// Testowanie metody showName()
console.log("Imię osoby:");
person.showName(); // Wyświetli: Maciej

// Obiekt reprezentujący półkę na książki
const bookshelf = {
    authors: [],
    getAuthors() {
        // Metoda getAuthors zwraca tablicę autorów używając słowa kluczowego this
        return this.authors;
    },
    addAuthor(authorName) {
        // Metoda addAuthor dodaje autora do tablicy autorów używając słowa kluczowego this
        this.authors.push(authorName);
    }
};

// Dodawanie autorów do półki na książki i pobieranie listy autorów
bookshelf.addAuthor("Stephen King");
bookshelf.addAuthor("J.K. Rowling");
bookshelf.addAuthor("Haruki Murakami");

console.log("Lista autorów na półce:");
console.log(bookshelf.getAuthors()); // Wyświetli: ["Stephen King", "J.K. Rowling", "Haruki Murakami"]
