import { Component, OnInit } from '@angular/core';
import { mdiCardsHeart } from '@mdi/js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	/* Material Design Icons */
	mdiCardsHeart: string = mdiCardsHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
