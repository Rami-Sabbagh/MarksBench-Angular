import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-mdicon',
	templateUrl: './mdicon.component.html',
	styleUrls: ['./mdicon.component.scss'],
})
export class MdiconComponent implements OnInit {
	/**
	 * The path data that the user has to provide
	 * in order to render one of the Material Design Icons.
	 */
	@Input('path') pathData: string =
		'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';

	/**
	 * An optional custom class that the user can provide
	 * to the SVG Path element of the icon.
	 */
	@Input() customClass?: string;

	constructor() {}

	ngOnInit(): void {}
}
