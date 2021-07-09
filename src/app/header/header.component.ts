import { Component, OnInit } from '@angular/core';
import { mdiGithub } from '@mdi/js';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	/**
	 * The available data formats that the application can handle.
	 */
	public dataFormats: string[] = ['JSON (arrays)', 'JSON (objects)', 'CSV'];

	/**
	 * The selected data format for the PDF documents.
	 */
	public selectedDataFormat: string = 'CSV';

	/* -- Icons that are bound to the template -- */
	public mdiGithub: string = mdiGithub;

	constructor() {}

	ngOnInit(): void {}

	/**
	 * Changes the selected data format type
	 * to the user's choice.
	 *
	 * @param dataFormat The new data format that the user selects.
	 */
	changeSelectedFormat(dataFormat: string): void {
		this.selectedDataFormat = dataFormat;
	}
}
