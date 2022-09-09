export interface Movies {
  rows: string[]
  cols: number[]
  reserved: Reserved[]
  price: number
  titleMovie: string
  roomNumber: string
}

export interface Reserved {
  user: User
  seatNumber: string
  price: number
}

export interface User {
  name: string
  email: string
}