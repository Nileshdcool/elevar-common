

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
  