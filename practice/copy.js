const arr1 = ["7", "17", "37"]

const arr2 = ["1", "2", "3"]

const arr3 = [...arr1]

arr3.push(6)
console.log("arr1: ", arr1)
console.log("arr3: ", arr3)

const arr4 = [...arr1,...arr2]
console.log("arr4: ", arr4)

const userProfile = {
    name: "Bence",
    age: 25,
    country: "Hungary"
}

const userProfile2 = {...userProfile, gender: "male", name: "Jónás"};
console.log("userProfile: ", userProfile);
console.log("userProfile2: ", userProfile2);
