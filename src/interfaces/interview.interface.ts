import { WebSocketStatus } from "../enums";

export interface Topic {
    id: number;
    documentId: string;
    Name: string;
    questions: Question[];
  }
  
  export interface Section {
    id: number;
    documentId: string;
    Name: string;
    topics: Topic[];
  }
  
  export interface Industry {
    id: number;
    documentId: string;
    Name: string;
    sections: Section[];
  }
  
  export interface Answer {
    id: number;
    content: string;
  }

  export interface Question {
    id: number;
    Content: string;
    answers: Answer[];
    question_level: string;
    readStatus:boolean;
    statusId:string
    }
  
   export interface HomeProps {
    initialIndustries: Industry[];
      // metaDetails: {
      //   metaTitle: string;
      //   metaDescription: string;
      //   metaImage: string;
      // };      
  }
  
  export interface SectionContentProps {
    selectedSection: number;
    filteredQaList: Question[];
    topicName:string ;
  }

  export interface WebSocketData {
    message: string; // Type of the progress message
    status: WebSocketStatus
  }

  export interface IQuestionReadStatus {
    ReadStatus: boolean;
    UserEmail: string;
    QuestionId: number; // Adjust to "bigint" if needed, though many APIs will send it as a number or string
  }


 export interface HomeProps {
    metaDetails: {
      metaTitle: string;
      metaDescription: string;
      metaImage: string;
    };
  }
