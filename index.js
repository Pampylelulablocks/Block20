const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    let header = document.getElementById("root");
    let myHeading = document.createElement("h1");
    myHeading.textContent = "FREELANCERS";
    header.appendChild(myHeading);

    let userNames = document.createElement("ul");

    users.forEach((element) => {
        let names = document.createElement("li");
        userNames.appendChild(names);
        names.textContent = element.name;

        names.style.color = "black";
    }
    )
    header.appendChild(userNames);
};

main();