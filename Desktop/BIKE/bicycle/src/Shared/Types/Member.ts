export interface User {
  id: string;//UUID
  userName: string;//
  email: string;//
  password: string;//
  firstName: string;//
  lastName: string;//
  phone: string;//
  address: string;//
  role: string; //ENUM: 'admin' | 'customer' | 'guest'
  status: string;//ENUM: 'active' | 'inactive' | 'banned'
}

