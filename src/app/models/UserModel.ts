import { OpinionUser, OpinionCourse } from './UserModel';
export interface User {
  id:number
  firstName: string;
  lastName?: string;
  email?: string;
  username?: string;
  password?: string;
  role?: Roles;
  courses:Courses;
  studentCourses:Courses[];
  opinions : OpinionCourse
  isPremium? : boolean;
  blocked? : boolean;
  userReports? : ReportUser;
 }

 export interface Roles {
  id: number;
  name: string;
 }

 export interface Courses {
   id: number;
   name: string;
   chapters: Chapters;
   subject: Subject;
   description:string;
  }

  export interface Chapters {
    content: string;
    id: number;
    name: string;
   }

   export interface Subject {
    id: number;
    name: string;
   }
   export interface OpinionUser{
    content: string;
    value: number;
    raterUser: User;
   }
   export interface ReportUser {
    description: string;
    reportingUser: User;
   }
   export interface OpinionCourse{
    content: string;
    value: number;
    raterUser: User;
   }
   export interface Lesson {
    id: number;
    name: string;
    cost: number;
    user: User;
    note: number;
    city: string;
    description: string;
   }
   export interface LessonDate {
    id: number;
    hourFrom: string;
    hourTo: string;
    isFree: string;
    isConfirmed: string;
    day: LessonDay;
    lesson: Lesson
    user: User;
    city: string;
   }
   export interface LessonDay {
    id: number;
    name: string
   }
