type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const hussein: User = {
  first: "Hussein",
  last: "Ismail",
  age: 22,
  email: "test@gmail.com",
  password: "strongpassword123",
};

console.log(
  `Name: (${hussein.first} ${hussein.last}) Age: (${hussein.age}) Email: (${hussein.email}) Password: (${hussein.password})`
);
