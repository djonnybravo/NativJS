const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
]

const getName = item => item.name
const getScores = item => item.scores

const getStudentNames = (array) => {
    const result = []

    const getName = item => item.name

    for (let i = 0; i < array.length; i++) {
        result[i] = getName(array[i])
    }
    return result;
}

const getStScores = (array) => {
    const result = []
    const getScores = item => item.scores
    for (let i = 0; i < array.length; i++) {
        result[i] = getScores((array[i]))
    }
    return result
}


const getNewArray = (array, func) => {  // Функция похожая на map
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func((array[i]))
    }
    return result
}


const addProp = item => {
    item.isStudent = true
    return item
}

// const addProp_1 = item => {
//     const newCopy = {...item}
//     newCopy.isStudent = true
//     return newCopy
// }
//
// const addProp_2 = item = ({...item, isStudent: true})

console.log(getStudentNames(students))
console.log(getStScores(students))
console.log(getNewArray(students, getName))
console.log(getNewArray(students, getScores))
console.log(students.map(item => item.name))

// filter

const itPush = (array, el) => {  // тоже самое что push
    array[array.length] = el
    return array.length
}

const itFilter = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            itPush(array, array[i])
        }
    }
    return result
}


const itIncludes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }
    return false
}


const itUnShift = (array, el) => {
    let temp = undefined
    for (let i = array.length - 1; i >= 0; i--) {
       array[i + 1] = array[i]
    }
    array[0] = el
    return array
}

const itShift = (array) => {
    const removedItem = array[0]
    for (let i = 0; i < array.length ; i++) {
        array[i] = array[i+1]
    }
    delete array[array.length -1]
    return removedItem
}

