import { IEducation } from "./education.interface";

export interface IAchievement {
    id: number;
    documentId: string;
    name: string;
    description: string;
    date: string; // Format: YYYY-MM-DD
  }
  
 export interface ICertification {
    id?: number | null;
    documentId: string;
    name?: string;
    issuer?: string;
    date?: string;
  }
  

  export interface PersonalDetails {
    id: number;
    documentId: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    city?: string;
    state?: string;
    email?: string;
    gender?: string;
    address?: string;
    phoneCountryCode?: string;
    country?: string;
    zipCode?: string;
    github?: string;
    linkedIn?: string;
    portfolio?: string;
    coverLetter?: string;
    totalExperience?: string; // Decimal
    veteranStatus?: string;
    disability?: string;
    willingToRelocate: boolean | null; // Updated to boolean
    raceEthnicity?: string;
    expectedSalary?: string; // Decimal
    salaryCurrency?: string;
    currentSalary?: string; // Decimal
    currentSalaryCurrency?: string;
    highestEducationLevel?: string;
    expectedDateOfJoining?: string; // Format: YYYY-MM-DD
    excludeCompanies?: string;
    sponsorshipRequired: boolean | null;
    securityClearance?: string;
    authorizedCountries?: string[];
    skills?: Skils[];
  }
  
  export interface Skils {
    skill: string; 
    years: string
  }
  
  export interface IWorkExperience {
  id: number;
  documentId: string;
  role: string;
  company: string;
  location: string;
  from: string;
  to: string;
  points: string[];
}

  export interface IUserResumeProfile {
    personalDetails?: PersonalDetails;
    workExperiences: IWorkExperience[]; // One-to-Many Relation
    educations: IEducation[]; // One-to-Many Relation
    achievements:IAchievement[];
    certifications:ICertification[];
  }

  export interface WorkExperienceFormError {
    role?: string;
    company?: string;
    location?: string;
    from?: string;
    to?: string;
    points?: string;
  }
  
  export interface AchievementFormErrors {
    name?: string;
    description?: string;
    date?: string;
  }
  
  export interface EducationErrors {
    degree?: string;
    school?: string;
    location?: string;
    from?: string;
    to?: string;
  }

  export interface PersonalDetailsErrors {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    zipCode?: string;
    github?: string;
    linkedIn?: string;
    portfolio?: string;
  }
  
  export interface MiscellaneousErrors {
    totalExperience?: string;
    willingToRelocate?: string;
    raceEthnicity?: string;
    expectedSalary?: string;
    salaryCurrency?: string;
    expectedDateOfJoining?: string;
    highestEducationLevel?: string;
  }

  export interface IResume {
    id:number;
    name: string;
    status: string;
    thumbnail: string;
    url: string;
    userProfile?: number; // Optional in case `user_resume_profile.id` is sometimes missing
  }
  
 export interface IJobPortal {
    id: number;
    name: string;
    url: string;
    description: string[];
    documentId:string;
  }
  

  export interface ICertificationErrors {
    name?: string;
    issuer?: string;
    date?: string;
  }
  
 export interface IFormErrors {
    selectedResume?: string;
  }
  
 export interface IOption {
    value: string;
    label: string;
  }

type FilterValues = string | string[] | boolean | number;

export interface ISelectedFilters {
  [key: string]: FilterValues;
}


export interface IResume {
  id: number;
  documentId: string;
  UserId: string;
  UserEmail: string;
  IsActive: boolean;
  FileId: string;
  user_resume_profile: IUserResumeProfileDetails;
  file: FileInfo;
}

interface IUserResumeProfileDetails {
  id: number;
}

// interface Skill {
//   skill: string;
//   years: string;
// }

interface FileInfo {
  id: number;
  documentId: string;
  url: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
}
