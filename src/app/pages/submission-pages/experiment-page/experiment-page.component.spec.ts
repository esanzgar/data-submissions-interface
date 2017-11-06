import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, TokenService } from 'angular-aap-auth';
import { JwtHelper } from 'angular2-jwt';

import { MockRouter } from '../../../testing/mockrouter.tests';
import { RouterLinkStubDirective } from '../../../testing/router.stubs';

import { ExperimentPageComponent } from './experiment-page.component';
import { EbiHeaderComponent } from '../../../components/ebi-header/ebi-header.component';

describe('ExperimentPageComponent', () => {
  let component: ExperimentPageComponent;
  let fixture: ComponentFixture<ExperimentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentPageComponent , EbiHeaderComponent, RouterLinkStubDirective ],
      providers: [
        {provide: Router, useClass: MockRouter},
        AuthService,
        TokenService,
        JwtHelper,
        {
          provide: 'AAP_CONFIG',
          useValue: {
            authURL: 'https://explore.api.aap.tsi.ebi.ac.uk'
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});