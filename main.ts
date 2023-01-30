import _ from "lodash"

console.log(_.upperCase("hello world"))

interface User {
  name: string
  age: number
}

const user: User = {
  name: "lee",
  age: 26
}

console.log(user)