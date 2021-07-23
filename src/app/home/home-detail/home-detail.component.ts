import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  nbr: String | undefined = '123456';
  test: String = 'Test! Work!'
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nbr = this.route.snapshot.paramMap.get('nbr')!;
  }

}
