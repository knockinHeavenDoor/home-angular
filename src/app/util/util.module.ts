import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import {CommonsModule} from '../common/commons.module';
import {ShareService} from '../service/share.service';
import { TableComponent } from './table/table.component';
import { StatusPipe } from '../pipe/status.pipe';
import { UserListComponent } from './user-list/user-list.component';
import {TypePipe} from '../pipe/type.pipe';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule
  ],
  declarations: [
    UploadComponent,
    TableComponent,
	  StatusPipe,
	  UserListComponent,
    TypePipe
  ],
  exports: [
    UploadComponent,
    TableComponent,
    UserListComponent
  ],
  providers: [
    {provide: 'share', useClass: ShareService}
  ]
})
export class UtilModule { }
