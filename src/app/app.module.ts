import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

// IMPORT MATERIAL
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
import {DispenseTaskService} from './services/dispensetask/dispensetask.service';
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
import {ProductbaseComponent} from './components/setting/productbase/productbase.component';
import {DashboardService} from './services/dashboard/dashboard.service';
import {StoreService} from './services/store/store.service';
import {EditFormulaComponent} from './components/formula/editformula/edit-formula/edit-formula.component';
import {TableColourantsComponent} from './directions/product/tablecolourant/table-colourants.component';
import {BaseCanComponent} from './directions/product/base-can/base-can.component';
import {CustomerComponent} from './components/setting/customer/customer.component';
import {UserComponent} from './components/user/user.component';


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
      // {path: '', redirectTo: 'formula', pathMatch: 'full'},
      {path: 'colorant', component: ColorantComponent},
      {path: 'base', component: BaseComponent},
      {path: 'collection', component: CollectionComponent},
      {path: 'product', component: ProductComponent},
      {path: 'customer', component: CustomerComponent},
      // {path: 'product/view-detail/:id', component: ViewDetailComponent},

      {path: 'formula', component: FormulaComponent},
      // {path: 'formula', loadChildren: './components/formula/'},
      {path: 'view-formula/:id', component: ViewFormulaComponent},
      {path: 'formula/add', component: EditFormulaComponent},
      {path: 'formula/edit/:id', component: EditFormulaComponent},

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
    TableColourantsComponent,
    BaseCanComponent,

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
    UserComponent,
    ColorantComponent,
    BaseComponent,
    CollectionComponent,
    ProductComponent,
    CustomerComponent,
    ProductbaseComponent,
    ViewDetailComponent,

    // formula component
    FormulaComponent,
    ViewFormulaComponent,
    EditFormulaComponent,
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
    BrowserAnimationsModule,
    AppRoutingModule,

    HttpClientModule,
    HttpModule.forRoot(),
    RouterModule.forRoot(routes),

    FormsModule,

    // import boostrap
    NgbModule,
    NgSelect2Module,

    // IMPORT MATERIAL
    MaterialModule
  ],
  providers: [
    CookieService,
    StoreService,
    DispenseTaskService,
    ModalService,

    DashboardService,

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
