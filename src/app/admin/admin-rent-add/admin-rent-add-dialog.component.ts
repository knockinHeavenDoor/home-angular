/**
 * Created by Administrator on 2017/11/23.
 */
import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Constant} from '../../common/constant';
import {File} from '../../model/file';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {UploadDialogComponent} from '../admin-house-add/admin-house-add.component';
import {RentHouse} from '../../model/rentHouse';

@Component({
  selector: 'app-admin-rent-add-dialog',
  templateUrl: './admin-rent-add.component.html',
  styleUrls: ['./admin-rent-add.component.css']
})
export class AdminRentAddDialogComponent implements OnInit {
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(Constant.PHONE_REGX)]);

  secondFromControl = new FormControl('', [
    Validators.required,
    Validators.pattern(Constant.PHONE_REGX)]);

  status = [
    {viewValue: '已打电话', value: '0'},
    {viewValue: '交易中', value: '1'},
    {viewValue: '已付款', value: '2'},
    {viewValue: '已完成', value: '3'}
  ];

  house: RentHouse;
  files: File[] = [
    new File()
  ];
  private domain: string;
  private token: string;
  constructor(private render: Renderer2,
              @Inject('share')private share,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<AdminRentAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.share.getDomin().subscribe(res => this.domain = res);
    this.share.getQiniuToken().subscribe(res => this.token = res);
    this.house = data.house;
  }

  ngOnInit() {
  }

  uploadSuccess(file: File) {
    let oldFile = this.files.pop();
    this.files.push(file);
    this.files.push(new File());
    console.log(file);
  }

  deleteFile(file: File) {
    let index = this.files.indexOf(file);
    this.files.splice(index, 1);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '250px',
      data: { src: this.files[this.files.length - 2 ].value }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
