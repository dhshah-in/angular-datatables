import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { SecurityContext, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { MarkdownModule, SANITIZE } from 'ngx-markdown';
import { NewServerSideComponent } from './new-server-side.component';
import { BaseDemoComponent } from '../../base-demo/base-demo.component';
import { AppRoutingModule } from '../../app.routing';

describe('NewServerSideComponent', () => {
  let component: NewServerSideComponent;
  let fixture: ComponentFixture<NewServerSideComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        BaseDemoComponent,
        NewServerSideComponent,
        DataTableDirective
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [AppRoutingModule,
        RouterTestingModule,
        DataTablesModule,
        MarkdownModule.forRoot({
          sanitize: {
            provide: SANITIZE,
            useValue: SecurityContext.NONE
          }
        })],
      providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())]
    }).createComponent(NewServerSideComponent);

    component = fixture.componentInstance;

    fixture.detectChanges(); // initial binding
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have title "Server-side processing"', waitForAsync(() => {
    const app = fixture.debugElement.componentInstance as NewServerSideComponent;
    expect(app.pageTitle).toBe('Server-side processing');
  }));
});
