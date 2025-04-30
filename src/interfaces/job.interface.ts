

export interface IJobApplication {
    id: number;
    totalApplied: number;
    jobPlatform: string;
    userEmail: string;
    resume: string;
    applicationCount: number;
    skills: string[];
    link: string;
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