import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import {CommonsModule} from '../common/commons.module';
import {AdminRouteModule} from './admin-route.module';
import {AdminComponent} from './admin.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminRentListComponent } from './admin-rent-list/admin-rent-list.component';
import { AdminRentAddComponent } from './admin-rent-add/admin-rent-add.component';
import { AdminHouseListComponent } from './admin-house-list/admin-house-list.component';
import {AdminHouseAddComponent, UploadDialogComponent} from './admin-house-add/admin-house-add.component';
import {FormsModule} from '@angular/forms';
import {UtilModule} from '../util/util.module';
import {ShareService} from '../service/share.service';
import {AdminHouseAddDialogComponent} from './admin-house-add/admin-house-add-dialog.component';
import {AdminRentAddDialogComponent} from './admin-rent-add/admin-rent-add-dialog.component';
import {UserService} from '../service/user.service';
import {HouseService} from '../service/house.service';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFootComponent } from './admin-foot/admin-foot.component';
import {LoginGuard} from '../guard/login.guard';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    AdminRouteModule,
    FormsModule,
    UtilModule
  ],
  declarations: [
    AdminMenuComponent,
    AdminComponent,
    AdminUserListComponent,
    AdminHouseListComponent,
    AdminHouseAddComponent,
    AdminRentAddComponent,
    AdminRentListComponent,
    UploadDialogComponent,
    AdminHouseAddDialogComponent,
    AdminRentAddDialogComponent,
    AdminHeaderComponent,
    AdminFootComponent
  ],
  entryComponents: [
    UploadDialogComponent,
    AdminHouseAddDialogComponent,
    AdminRentAddDialogComponent
  ],
  providers: [
    {provide: 'share', useClass: ShareService},
    {provide: 'user', useClass: UserService},
    {provide: 'house', useClass: HouseService},
    LoginGuard
  ],
})
export class AdminModule { }
