let person = {
    name: "Tom",
    surname: "Soyer",
    birthday: {
        day: 20,
        month: 12,
        year: 1977
    },
    age: undefined
};

if ("age" in person) {
    console.log("Свойство age есть!");
} else {
    console.log("Свойства age нет!");
}

