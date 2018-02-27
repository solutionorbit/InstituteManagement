export interface AdmissionDetails {
  // enquiry about
  course: string,
  centerOfChoice: string,

  // enquiry details
  firstname: string,
  middlename: string,
  lastname: string,
  gender: string,
  phone: string,
  email: string,
  address1: string,
  address2: string,
  city: string,
  state: string,
  zip: string,

  // Heard us by
  heardUsBy: string,
  message: string,

  admissiondate: Date,
  isSelected?: boolean
}

