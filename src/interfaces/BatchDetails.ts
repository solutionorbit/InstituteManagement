import { AdmissionDetails } from '../interfaces/AdmissionDetails';
 
export interface BatchDetails {
  batchID: string,
  batchName: string,
  startDate: Date,
  endDate: Date,
  studentCount?:number,
  studentList?: Array<AdmissionDetails>
}
