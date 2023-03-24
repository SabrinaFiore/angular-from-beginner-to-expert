// Transform JSON in interface https://transform.tools/json-to-typescript

export interface User {
  id?: number
  name?: string
  age?: number
  username?: string
  email?: string
  address?: Address
  phone?: string
  website?: string
  company?: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
