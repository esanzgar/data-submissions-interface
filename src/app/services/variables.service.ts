import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class VariablesService {
  host: string = environment.apiHost;
  authenticationHost: string = environment.authenticationHost;

  constructor() { }
}
