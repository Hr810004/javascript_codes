const course= {
     coursename : "js",
     price:"999",
     courseInstructor : "harsh"
}

// console.log(course.coursename);
const {courseInstructor : instructor} = course // from where you are extracting values from which object and also you can give alias name to the value(key)
console.log(instructor);


// json for APIs usually this is in json but sometimes it is in array also
const myobject = {
    name:"Harsh",
    age: 21,
    course : "js"
} 
const {name : myname} = myobject // here you are extracting value from object and giving alias name to the value
const {age : myage} = myobject // here you are extracting value from object and giving alias
const {course : mycourse} = myobject // here you are extracting value from object and giving alias name to the value
console.log(myname);
console.log(myage);
console.log(mycourse);
