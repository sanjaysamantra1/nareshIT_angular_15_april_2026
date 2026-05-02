var newUser = {
    id: 1,
    name: "Sanjay Kumar",
    email: "sanjay@gmail.com",
    greet: function () {
        return "Good Morning ".concat(this.name);
    }
};
console.log(newUser);
console.log(newUser.greet());
