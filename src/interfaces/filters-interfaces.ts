
export interface Filter {
  id: number;
  title: string;
  cssId: string;
  value: ValueLable[];
  controltype: string;
  paramname: string | null;
  paramtype: string | null;
}

export interface ValueLable {
  label: string;
  value: string;
  paramvalue: string;
}

export interface UserFilter {
  controlid: string;
  selectedValue: string[];
}

export interface UserProfileFilter {
  documentId: string,
  id: number;
  UserId: number;
  UserEmail: string;
  Filters: UserFilter[];
  ProfileName: string;
  JobMatchScore: number;
  IsautoApply: boolean;
  user_upload: IUserUploadDetails;
}

export interface IUserUploadDetails {
  id: number;
  documentId: string;
  UserId: string;
  createdAt: string; 
  updatedAt: string; 
  publishedAt: string; 
  UserEmail: string;
  IsActive: boolean;
  FileId: string;
}

export interface SelectedFilters {
  [key: string]: string | number | boolean | string[] | number[];
}

export interface FilterValue {
  value: string; 
}


export interface IJobData {
  id: number;
  documentId: string;
  User: string;
  JobId: string;
  JobUrl: string;
  JobStatus: string;
  ApplicationDetails: string;
  locale: string | null;
  SessionId: string;
  JobTitle: string;
  Company: string;
}

export type ControlItem = {
  id: number;
  cssId: string;
  controltype: string;
};

export interface ILoggedInUser {
  email: string;
  documentId: string;
}