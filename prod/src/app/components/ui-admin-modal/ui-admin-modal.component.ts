import { Component, Input, OnInit } from '@angular/core';
import { HttpWorkerService } from 'src/app/services/http-worker.service';
import { TrackingService } from 'src/app/services/tracking.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'ui-admin-modal',
  templateUrl: './ui-admin-modal.component.html',
  styleUrls: ['./ui-admin-modal.component.scss']
})
export class UiAdminModalComponent implements OnInit {

  @Input() public adminModalActive!: boolean
  @Input() public toggle!: string
  @Input() public adminModalHeader!: string
  @Input() public data: any

  public textContentData = {
    name: '',
    header: '',
    body: '',
  }
  public imgContentData!: File

  constructor(
    private admin: AdminComponent,
    private httpWorker: HttpWorkerService,
    private track: TrackingService
  ) { }

  ngOnInit(): void {
  }

  public close() {
    this.admin.closeAdminModal()
  }

  public outClick(e: any) {
    e.target === document.querySelector('.modal-wrapper') ?
    this.close() : e.stopPropagation()
  }

  public changeProgress(param: string, id: number) {
    const fd = new FormData()
    fd.append('parameter', param)
    fd.append('id', String(id))

    this.httpWorker.postProgress(fd)
    .subscribe(() => {
      for (let key in this.data) 
        if (key === param) 
        this.data[key] = true
    })
  }

  public postContent(dataImg: any) {

    if (dataImg.files[0] === undefined) {
      this.httpWorker.postTextContent(this.textContentData)
      .subscribe(() => {})
    } else {
      const fd = new FormData()
      fd.append('multipartFile', this.imgContentData = dataImg.files[0])
      fd.append('name', this.textContentData.name)
      fd.append('header', this.textContentData.header)
      fd.append('body', this.textContentData.body)

      this.httpWorker.postImages(fd)
      .subscribe(() => {})
    }

  }
}
