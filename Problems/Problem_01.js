// ? Question:- Create a custom sort Function without using inbuild sort method to sort the array of object by given by and also provide by which order we have to sort either ascending or descending.
// We have to pass object, key name, by which we want to sort, and type or sorting.

const usersObj = [
  {
    name: "John",
    age: 25,
    email: "john@gmail.com",
  },
  {
    name: "William",
    age: 18,
    email: "william@gmail.com",
  },
  {
    name: "Tom",
    age: 21,
    email: "tom@gmail.com",
  },
  {
    name: "Billi",
    age: 11,
    email: "billi@gmail.com",
  },
];

const sortArrayOfObject = (obj, key, type = "asce") => {
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < obj.length - i - 1; j++) {
      if (
        (type === "asce" && obj[j][key] > obj[j + 1][key]) ||
        (type === "desc" && obj[j][key] < obj[j + 1][key])
      ) {
        let temp = obj[j];
        obj[j] = obj[j + 1];
        obj[j + 1] = temp;
      }
    }
  }
  return obj;
};

const sortAgeByAsce = sortArrayOfObject(usersObj, "age", "asce");
console.log("Age Sorted by Ascending", sortAgeByAsce);

const sortNameByDesc = sortArrayOfObject(usersObj, "name", "desc");
console.log("Name Sorted by Descending", sortNameByDesc);
