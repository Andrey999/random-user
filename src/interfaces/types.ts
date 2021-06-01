export interface Contacts {
    nat: string
    location: Location
    name: Name
    phone: string
    login: Login
    email: string
    dob: Dob
    picture: Picture
    gender: string
}

type Location = {
    country: string
    city: string
    street: Street
}

type Street = {
    number: number
    name: string
}

type Name = {
    first: string
    last: string
    title: string
}

type Login = {
    uuid: string
}

type Dob = {
    date: string
    age: number
}

type Picture = {
    thumbnail: string
    large: string
    medium: string
}