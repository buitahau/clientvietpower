import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

// IMPORT MATERIAL
import {MatToolbarModule} from '@angular/material';
import {MaterialModule} from './material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NgSelect2Module} from 'ng-select2';


import {AppComponent} from './app.component';
import {ListComponent} from './components/issue/list/list.component';
import {CreateComponent} from './components/issue/create/create.component';
import {EditComponent} from './components/issue/edit/edit.component';
import {HelpComponent} from './components/help/help.component';
import {StructureComponent} from './components/help/structure/structure.component';

import {CookieService} from 'ng-cookie';
import {IssueService} from './services/issues/issue.service';
import {ColourantService} from './services/colorant/colorant.service';
import {ProductService} from './services/product/product.service';
import {CollectionService} from './services/collection/collection.service';
import {FormulaService} from './services/formula/formula.service';
import {BaseService} from './services/base/base.service';
import {ProductBaseService} from './services/productbase/productbase.service';
import {MachineService} from './services/machine/machine.service';

import {ModalService} from './services/boostrap/modal.service';
import {JobStatusService} from './services/jobstatus/jobstatus.service';
// import direction

import {ModalComponent} from './directions/boostrap/modal/modal.component';

import {LoginComponent} from './components/login-page/login/login.component';
import {RegisterComponent} from './components/login-page/register/register.component';
import {ForgotpasswordComponent} from './components/login-page/forgotpassword/forgotpassword.component';

import {DashboardComponent} from './components/dashboard/dashboard.component';

import {HeaderComponent} from './components/layout/header/header.component';
import {NavigationComponent} from './components/layout/navigation/navigation.component';
import {BreadcrumbComponent} from './components/layout/breadcrumb/breadcrumb.component';
import {FooterComponent} from './components/layout/footer/footer.component';


import {BackgroundTaskComponent} from './components/backgroundtask/backgroundtask.component';

// setting
import {ColorantComponent} from './components/setting/colorant/colorant.component';
import {BaseComponent} from './components/setting/base/base.component';
import {CollectionComponent} from './components/setting/collection/collection.component';
import {ProductComponent} from './components/setting/product/product.component';

// formula
import {FormulaComponent} from './components/formula/listformula/formula.component';
import {ViewFormulaComponent} from './components/formula/viewformula/viewformula.component';

import {MaintenanceComponent} from './components/formula/maintenance/maintenance.component';

// help page !!
import {LanguageComponent} from './components/help/language/language.component';
import {QuestionComponent} from './components/help/question/question.component';
import {HttpModule} from './shared/http/http.module';
import {ViewDetailComponent} from './directions/product/viewdetail/viewdetail.component';
import {ViewDispenseTaskComponent} from './components/backgroundtask/viewdispensetask/viewdispensetask.component';

import {MachineSettingComponent} from './components/machine/machinesetting/machinesetting.component';


const routes: Routes = [
  {'path': '', redirectTo: 'login', pathMatch: 'full'},
  {'path': 'index', component: DashboardComponent},
  {'path': 'login', component: LoginComponent}, {'path': 'sign-in', component: LoginComponent},
  {'path': 'register', component: RegisterComponent}, {'path': 'sign-up', component: RegisterComponent},
  {'path': 'forgot-password', component: ForgotpasswordComponent},

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'formula', pathMatch: 'full'},
      {path: 'colorant', component: ColorantComponent},
      {path: 'base', component: BaseComponent},
      {path: 'collection', component: CollectionComponent},
      {path: 'product', component: ProductComponent},
      // {path: 'product/view-detail/:id', component: ViewDetailComponent},

      {path: 'formula', component: FormulaComponent},
      {path: 'view-formula/:id', component: ViewFormulaComponent},

      {path: 'job-status', component: BackgroundTaskComponent},
      {path: 'maintenance', component: MaintenanceComponent},

      {path: 'machine', component: MachineSettingComponent},


      {path: 'question', component: QuestionComponent},
      {path: 'help/overview', component: HelpComponent},
      {path: 'help/language', component: LanguageComponent},
      {path: 'help/boostrap', component: StructureComponent},

      {path: 'create', component: CreateComponent},
      {path: 'edit/:id', component: EditComponent},
      {path: 'list', component: ListComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,

    // import directions
    ModalComponent,

    // page !!
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,

    // dashboard after login
    DashboardComponent,

    // common layout
    HeaderComponent,
    NavigationComponent,
    BreadcrumbComponent,
    FooterComponent,

    BackgroundTaskComponent,
    ViewDispenseTaskComponent,

    // setting component
    ColorantComponent,
    BaseComponent,
    CollectionComponent,
    ProductComponent,
    ViewDetailComponent,

    // formula component
    FormulaComponent,
    ViewFormulaComponent,
    MaintenanceComponent,

    // machine component
    MachineSettingComponent,

    // test component
    ListComponent,
    CreateComponent,
    EditComponent,

    // help page
    QuestionComponent,
    HelpComponent,
    LanguageComponent,
    StructureComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    HttpModule.forRoot(),
    RouterModule.forRoot(routes),

    // IMPORT MATERIAL
    MatToolbarModule,
    MaterialModule,

    // import boostrap
    NgbModule,
    NgSelect2Module,

    FormsModule
  ],
  providers: [
    CookieService,
    JobStatusService,
    ModalService,

    IssueService,
    ColourantService,
    ProductService,
    CollectionService,
    FormulaService,
    BaseService,
    ProductBaseService,

    MachineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
