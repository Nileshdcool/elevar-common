

export interface IJobApplication {
    id: number;
    totalApplied: number;
    jobPlatform: string;
    userEmail: string;
    resume: string;
    applicationCount: number;
    skills: string[];
    link: string;
    sessionId:string;
  }
  
  export interface IJob {
    company: string;
    title: string;
    resume: string;
    date: string;
    link: string;
  }

  export interface IJobPlatform {
    platform: string;
    totalJobs: number;
    link: string;
    sessionId:string;
  }
  
  export interface IJobApplicationSummary {
    id: number;
    totalApplied: number;
    jobPlatform: string;
    userEmail: string;
    resume: string;
    applicationCount: number;
    skills: string[];
    link: string;
  }
  
  export interface IJobListing {
    company: string;
    title: string;
    resume: string;
    date: string; // ISO date string
    link: string;
  }

  export interface Job {
    JobTitle: string;
    Company: string;
    createdAt: string;  
    portal?: {
      name?: string;
      url?: string;
    };
    // Other job fields
  }

  export interface PopulatedUpload {
    id: string | number;  
    FileId?: string;
    UserEmail?: string;
    user_resume_profile?: {
        skills: Skill[];  
      };
    jobs?: {
      portal?: {
        name?: string;
        url?: string;
      };
    JobTitle: string;
    Company: string;
    createdAt: string;  // Assuming it's a Date string
    JobUrl:string;
    }[];
  }

  export interface Skill {
    skill: string;
    years: string;
  }


  export interface IUserUpload {
    UserId: number;
    UserEmail: string | null | undefined;
    FileId: number;
    IsActive: boolean;
    user_resume_profile: any;
    FileName:string;
  }
  
  export interface JobListingFilters {
    email:       string;
    CompanyName?:string;
    JobTitle?:   string;
    Resume?:     string;
    fromDate?:   string; // YYYY-MM-DD
    toDate?:     string; // YYYY-MM-DD
    sessionId?: string;
    portalname?: string;
  }
  
  export interface JobListing {
    company: string;
    title:   string;
    resume:  string;
    date:    string; // YYYY-MM-DD
    link:    string;
  }
  
  export interface JobApplicationSummary {
    id:               number;
    totalApplied:     number;
    jobPlatform:      string;
    userEmail:        string;
    resume:           string;
    applicationCount: number;
    skills:           string[];
    link:             string;
  }
  
 export interface FileUserUpload {
    FileName: string;
  }
  
  export interface IJobPlatform {
    platform: string;
    totalJobs: number;
    link: string;
    // sessionId:string;
  }
  export interface SessionSummary {
    sessionId:   string;
    id:               number;
    totalApplied:     number;
    jobPlatform:      string;
    userEmail:        string;
    resume:           string;
    applicationCount: number;
    skills:           string[];
    link:             string;
  }
  
  export interface SkillObj { skill: string }
  export interface PortalObj {name: string; }
  
export interface ILoggedInUserBasicDetails {
  email: string;
  documentId: string;
}

export interface FeedbackPayload {
  SessionId: string;
  FeebackExprience: string | null;
  FeebackText: string;
}