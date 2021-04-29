import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'netch-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  private url = 'https://api.github.com/users'

  public load = true
  
  public Wolodimir!: string
  public Neon_Samurai!: string
  public IvanZhivodvorov!: string
  public onlyVanechka!: string

  constructor(
    private http: HttpClient,
    private title: Title
  ) {
    this.title.setTitle('Наша команда')
  }

  ngOnInit(): void {
    this.getImgGithub()
  }

  public getImgGithub() {
    this.http.get(`${this.url}/Wolodimir`)
    .subscribe((res: any) => this.Wolodimir = res.avatar_url,
    () => {} ,() => setTimeout(() => this.load = false, 500))

    this.http.get(`${this.url}/samurai-2000`)
    .subscribe((res: any) => this.Neon_Samurai = res.avatar_url,
    () => {} ,() => setTimeout(() => this.load = false, 500))

    this.http.get(`${this.url}/Ivan-Zhivodvorov`)
    .subscribe((res: any) => this.IvanZhivodvorov = res.avatar_url,
    () => {} ,() => setTimeout(() => this.load = false, 500))

    this.http.get(`${this.url}/Only-vanechka`)
    .subscribe((res: any) => this.onlyVanechka = res.avatar_url,
    () => {} ,() => setTimeout(() => this.load = false, 500))
  }

  public openHref(href: string) {
    window.open(href, '_blank')
  }
}
