export default class Rating {
  id: string
  age: string
  logo: string

  constructor(props: Rating) {
    this.age = props.age
    this.id = props.id
    this.logo = props.logo
  }
}
