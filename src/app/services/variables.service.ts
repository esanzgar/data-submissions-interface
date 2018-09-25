import { HttpHeaders } from '@angular/common/http';

export class VariablesService {
  host: string = "https://submission-dev.ebi.ac.uk/api/";
  authenticationHost: string = "https://explore.api.aai.ebi.ac.uk/";

  constructor() { }

  buildHeader(token: String) {
    // Build initial header.
    let header = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/hal+json, application/json'
    });

    // Add authentication to header.
    if(token) {
      header.append("Authorization", "Bearer " + token);
    }

    return {headers: header};
  }
}
