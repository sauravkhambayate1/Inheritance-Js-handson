// 1.solutions

const parent = {
    firstName: `saurav`,
    lastName: `khambayate`,
    fullname() {
      return (`${this.firstName} ${this.lastName}`)
    }
  
  }
  
  const child = {
    __proto__: parent
  }
  console.log(child.fullname());
  // 2.solutions
  
  function ABC() {
    this.firstName = "saurav"
    this.lastName = "khambayate"
  
    ABC.prototype.age = "23"
    ABC.prototype.hobby = "cricket,tracking"
  
  }
  const newPerson = new ABC();
  console.log(newPerson.firstName);
  console.log(newPerson.lastName);
  console.log(newPerson.age);
  console.log(newPerson.hobby);
  
  //3.solution
  const arr = [1, 2, 3, 4, 5, 6]
  const arr1 = [8, 7, 9, 4, 3, 2]
  const arr2 = [2, 3, 4, 9, 7, 8]
  const sumOfArray = {
    addAll: function (arr) { // create a method inside an object to any multiple array
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
      }
      console.log(sum);
    }
  }
  
  Array.__proto__ = sumOfArray;
  sumOfArray.addAll(arr)
  sumOfArray.addAll(arr1)
  sumOfArray.addAll(arr2)
  
  //4.solution
  var obj = {
    name: "saurav",
    course: `full-stack`,
    collge: `GIT`
  
  }
  
  const result = Object.keys(obj)
  console.log(result);