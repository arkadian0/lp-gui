import { Lesson, LessonDate, LessonDay } from './../models/UserModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpHeaders } from '@angular/common/http';
import { User, Courses, Chapters, Subject, OpinionUser, ReportUser, OpinionCourse} from '../models/UserModel';

@Injectable()
export class UserService {

  //  REST_URL: string  = 'http://192.168.0.220:8080';
  REST_URL: string  = 'http://localhost:8080/lp';

  constructor(private http: HttpClient) {}

  /** Pobieramy wszystkie posty */
  get<T>(arg0: string): any {
    throw new Error("Method not implemented.");
  }
  /** Pobieramy jeden post podając id */
  createLesson(lesson: Lesson): Observable<Boolean> {
    return this.http.post<Boolean>(this.REST_URL + '/lessons', lesson);
  }

  getUser(user: User): Observable<User> {
    return this.http.put<User>(this.REST_URL + '/users/authorization', user);
  }
  getUserByUserName(username: string):  Observable<User> {
    return this.http.get<User>(this.REST_URL + '/users/' + username);
  }
  getUsersForSearch(): Observable<User> {
    return this.http.get<User>(this.REST_URL  + '/users');
  }
  getUsersByRole(idRoli: number): Observable<User> {
    return this.http.get<User>(this.REST_URL  + '/users/role/' + idRoli);
  }
  getLessonForUser(idUser: number): Observable<Lesson> {
    return this.http.get<Lesson>(this.REST_URL  + '/lessons/user/' + idUser);
  }
  createUser(user: User): Observable<Boolean> {
    return this.http.post<Boolean>(this.REST_URL + '/users/registration', user);
  }
  getCourse(id): Observable<Courses> {
    return this.http.get<Courses>(this.REST_URL + '/courses/' + id);
  }
  getSubjects(): Observable<Subject> {
    return this.http.get<Subject>(this.REST_URL + '/subjects');
  }
  getCourseChapter(id): Observable<Chapters> {
    return this.http.get<Chapters>(this.REST_URL  + '/coursechapters/' + id);
  }

  addCourseToUser(user: User): Observable<User> {
    return this.http.put<User>(this.REST_URL  + '/users/username', user);
  }
  addOpinion(opinion: OpinionUser, username: string): Observable<OpinionUser> {
    return this.http.post<OpinionUser>(this.REST_URL  + '/users/' + username + '/opinions', opinion);
  }
  addOpinionToCourse(opinion: OpinionCourse, idCourse: number): Observable<OpinionCourse> {
    return this.http.post<OpinionCourse>(this.REST_URL  + '/courses/' + idCourse + '/opinions', opinion);
  }
  addReport(opinion: ReportUser, username: string): Observable<ReportUser> {
    return this.http.post<ReportUser>(this.REST_URL  + '/users/' + username + '/addReport', opinion);
  }
  joinStudentToCourse(username: string,course:Courses): Observable<number> {
     return this.http.post<number>(this.REST_URL + '/users/'+ username + '/joinCourse',course);
  }
  createCourse(course: Courses, username: string): Observable<Courses> {
    return this.http.post<Courses>(this.REST_URL  + '/users/' + username + '/addCourse' , course);
  }
  createSubject(subject: Subject): Observable<Boolean> {
    return this.http.post<Boolean>(this.REST_URL  + '/subjects', subject);
  }
  getUserByUserNameForSearch(username): Observable<User> {
    return this.http.get<User>(this.REST_URL  + '/users/' + username + '/find');
  }
  getCourseByNameForSearch(courseName): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.REST_URL  + '/courses/' + courseName + '/find');
  }
  getCourseOwnerByIdCourse(idCourse: number): Observable<User> {
    return this.http.get<User>(this.REST_URL  + '/courses/' + idCourse + '/owner');
  }
  getCourseRatingByIdCourse(idCourse: number): Observable<number> {
    return this.http.get<number>(this.REST_URL  + '/courses/' + idCourse + '/rating');
  }
  getOpinionForCourse(idCourse: number): Observable<OpinionCourse>
  {
    return this.http.get<OpinionCourse>(this.REST_URL  + '/courses/'+idCourse+'/opinions');
  }
  deleteUser(username: string): Observable<number>
  {
    return this.http.delete<number>(this.REST_URL  + '/users/' + username);
  }
  updateUser(username: string, user : User): Observable<User>
  {
    return this.http.post<User>(this.REST_URL  + '/users/' + username, user);
  }
  getLessonDetail(idLesson: number): Observable<LessonDate>
  {
    return this.http.get<LessonDate>(this.REST_URL  + '/lessonDates/lesson/' + idLesson);
  }
  getAllDays(): Observable<LessonDay>
  {
    return this.http.get<LessonDay>(this.REST_URL  + '/lessonDays');
  }
  addLessonDate(lessonDate: LessonDate): Observable<LessonDate>
  {
    return this.http.post<LessonDate>(this.REST_URL  + '/lessonDates', lessonDate);
  }
  findLessonByName(lessonName): Observable<Lesson>
  {
    return this.http.get<Lesson>(this.REST_URL  + '/lessons/find/' + lessonName );
  }
  getLessonById(idLesson): Observable<Lesson>
  {
    return this.http.get<Lesson>(this.REST_URL  + '/lessons/' + idLesson );
  }
  updateLessonDate(idLessonDate,lessonDate): Observable<boolean>
  {
    return this.http.post<boolean>(this.REST_URL  + '/lessonDates/' + idLessonDate, lessonDate);
  }
  getLessonForStudent(idStudent): Observable<LessonDate>
  {
    return this.http.get<LessonDate>(this.REST_URL  + '/lessonDates/lesson/student/' + idStudent);
  }

}
