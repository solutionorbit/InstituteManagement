import { AdmissionDetails } from '../interfaces/AdmissionDetails';
 
export interface BatchDetails {
  batchID: string,
  batchName: string,
  startDate: Date,
  endDate: Date,
  studentList?: Array<AdmissionDetails>
}
