import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'netch-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  private url = 'https://api.github.com/users'

  public load = true

  public imgWolodimir!: string
  public Neon_Samurai!: string

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getImgGithub()
  }

  public getImgGithub() {
    this.http.get(`${this.url}/Wolodimir`)
    .subscribe((res: any) => this.imgWolodimir = res.avatar_url,
    () => {false} ,() => setTimeout(() => this.load = false, 500))

    this.http.get(`${this.url}/samurai-2000`)
    .subscribe((res: any) => this.Neon_Samurai = res.avatar_url,
    () => {false} ,() => setTimeout(() => this.load = false, 500))
  }

  public openHref(href: string) {
    window.open(href, '_blank')
  }
}
