import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public version: any;
  isLoading: boolean = true;

  constructor(protected apiServce: ApiService) {}

  ngOnInit(): void {
    this.apiServce.getVersion().subscribe(
      (data: any) => {
        console.log(data);
        this.version = data.framework + data.version;
      },
      (err) => {},
      () => {
        this.isLoading = false;
      },
    );
    this.isLoading = false;
  }
}
