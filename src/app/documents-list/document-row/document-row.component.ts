import { Component, OnInit } from '@angular/core';
import { mdiDownload } from '@mdi/js';

@Component({
	selector: 'app-document-row',
	templateUrl: './document-row.component.html',
	styleUrls: ['./document-row.component.scss'],
})
export class DocumentRowComponent implements OnInit {
	/* Material Design Icons */
	public mdiDownload: string = mdiDownload;
	
	constructor() {}

	ngOnInit(): void {}
}
