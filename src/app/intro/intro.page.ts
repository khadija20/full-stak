import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { AuthenticationService } from './../services/authentication.service';
@Component({
	selector: 'app-intro',
	templateUrl: './intro.page.html',
	styleUrls: ['./intro.page.scss']
})
export class IntroPage implements OnInit {
	@ViewChild(IonSlides) slides: IonSlides;

	constructor(private router: Router,private authService: AuthenticationService) {}

	ngOnInit() {}

	next() {
		this.slides.slideNext();
	}

	async start() {
		await Storage.set({ key: INTRO_KEY, value: 'true' });
		this.router.navigateByUrl('/post', { replaceUrl: true });
	}
	async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/login', { replaceUrl: true });
	}
}