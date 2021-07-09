import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-documents-list',
	templateUrl: './documents-list.component.html',
	styleUrls: ['./documents-list.component.scss'],
})
export class DocumentsListComponent implements OnInit {
	public pdfDocuments: string[] = ['a'];
	constructor() {}

	ngOnInit(): void {}
}
