import { Component, Input, OnInit } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'ui-admin-modal',
  templateUrl: './ui-admin-modal.component.html',
  styleUrls: ['./ui-admin-modal.component.scss']
})
export class UiAdminModalComponent implements OnInit {

  @Input() adminModalActive!: boolean
  @Input() toggle!: string
  @Input() adminModalHeader!: string
  @Input() progressUser: any
  @Input() briefUser: any


  constructor(private admin: AdminComponent) { }

  ngOnInit(): void {
  }

  public close() {
    this.admin.closeAdminModal()
  }

}
