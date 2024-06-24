const person = {
    username: "Maciej",
    showName() {
        console.log(this.username);
    }
};

person.showName(); // Wyświetli: Maciej
