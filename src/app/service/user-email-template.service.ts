import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {EmailTemplate, TemplateAsOption} from "../model/email";
import {Observable} from "rxjs";
import {Template} from "@angular/compiler/src/render3/r3_ast";

@Injectable({providedIn: 'root'})
export class UserEmailTemplateService {

  constructor(private http: HttpClient) {
  }

  addTemplateLol(): void {

    const time: Date = new Date()

    const template: EmailTemplate = {
      name: "Name_" + time.getHours() + +time.getMinutes(),
      subject: "Subject_" + time.getHours() + +time.getMinutes(),
      body: "Body_" + time.getHours() + +time.getMinutes()
    } as EmailTemplate
    this.http
      .post<HttpResponse<any>>(`/api/v1/usertemplates`, template).subscribe();
  }

  saveTemplate(template: EmailTemplate): Observable<EmailTemplate> {
    return this.http.post<EmailTemplate>(`/api/v1/usertemplates`, template);
  }


  getTemplatesLol(): void {
    this.http
      .get<EmailTemplate[]>(`/api/v1/usertemplates`).subscribe({
      next: (res) => res.forEach((e) => console.log(e))
    });
  }

  getAllAsOptions() {
    return this.http.get<TemplateAsOption[]>('/api/v1/usertemplates/options');
  }

  getBodyAndSubjectById(id: number){
    return this.http.get<Template>(`/api/v1/usertemplates/${id}/dto`);
  }

  getTemplateBySharingId(sharingId: string): Observable<EmailTemplate> {
    return this.http.get<EmailTemplate>(`/api/v1/usertemplates/shared/${sharingId}`);
  }

  saveTemplateBySharingId(sharingId: string): Observable<any> {
    return this.http.post<any>(`/api/v1/usertemplates/shared/`, sharingId);
  }

  saveSharedTemplate(template: EmailTemplate): Observable<any> {
    return this.http.post(`/api/v1/usertemplates/shared/`, template);
  }

  getTemplateById(id: number): Observable<EmailTemplate> {
    return this.http.get<EmailTemplate>(`/api/v1/usertemplates/${id}`);
  }

  deleteEmailTemplateById(id: number) {
    return this.http.delete(`/api/v1/usertemplates/${id}`);
  }

  deleteEmailTemplatesByIds(ids: number[]) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        ids
      }
    };
    return this.http.delete('/api/v1/usertemplates', options);
  }

  getTotalNumberOfRows(): Observable<number> {
    return this.http.get<number>('/api/v1/usertemplates/total');
  }

  getPaginatedTemplates(page: number, rows: number, sortField: string, sortOrder: number) {
    const templatesPagination = new HttpParams()
      .set('page', page).set('rows', rows)
      .set('sortField', sortField).set('sortOrder', sortOrder)
    return this.http.get<EmailTemplate[]>("/api/v1/usertemplates", {params: templatesPagination});
  }
}
