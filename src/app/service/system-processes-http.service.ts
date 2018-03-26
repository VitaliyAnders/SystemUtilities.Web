import { environment } from '../..//environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ProcessViewModel } from '../model/process-vm';

@Injectable()
export class SystemProcessesHttpService {

  private _webapiurl = environment.webapibase + '/api/SystemProcess';

  constructor(private _http: HttpClient) { }

  public getSystemProcesses (): Observable<ProcessViewModel> {
    return this._http.get(this._webapiurl)
      .map(data => _.values(data));
  }

  public stopProcess(id: number) {
    return this._http.delete(this._webapiurl + '/' + id);
  }
}
