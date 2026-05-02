interface User {
  // Defines the structure of each user object
  id: number;
  name: string;
  email: string;
  age?: number;
  greet(): string;
}

let newUser: User = {
  id: 1,
  name: "Sanjay Kumar",
  email: "sanjay@gmail.com",
  greet() {
    return `Good Morning ${this.name}`;
  }
};
console.log(newUser);
console.log(newUser.greet())
