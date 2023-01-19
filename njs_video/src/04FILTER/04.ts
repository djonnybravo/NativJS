const ages = [10,20,30,40,50,60,70,80,90,100,110]

const predicate = (age:number) => {
    return age > 90
}

const oldAges = [100,110] // > 90

type CourseType = {
    title: string,
    price: number
}

const coursers = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150},
]

const chipPrecate = (course: CourseType) => {
    return course.price < 160
}

const chipCourses = [
    {title: "CSS", price: 110},
    {title: "REACT", price: 150},
]


export {}