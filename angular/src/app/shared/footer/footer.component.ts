import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
/**
 * Layout-1,2 footer component
 */
export class FooterComponent implements OnInit {

  cur_year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
