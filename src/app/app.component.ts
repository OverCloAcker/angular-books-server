import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon'
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
// import { LogoutComponent } from './pages/logout/logout.component';
import { PipesModule } from './pipes/pipes.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-sidenav';
  showFiller = false;

  public isSidenavOpened: boolean = true;
  public isSideNavMaximized: boolean = true;
  public sidenavButtonText: string = 'Close';
  public sidenavSizeButtonText: string = 'Hide Text';

  constructor(
    private matIconRegistry: MatIconRegistry,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-sharp');
    if (window.screen.width <= 1240) {
      this.isSideNavMaximized = false;
    } else this.isSideNavMaximized = true;
    window.onresize = () =>
      (this.isSideNavMaximized = window.innerWidth > 1240);
    window.onmousemove = () =>
      (this.isSideNavMaximized = window.innerWidth > 1240);
  }

  public toggleSideNav() {
    this.isSidenavOpened = !this.isSidenavOpened;
    switch (this.isSidenavOpened) {
      case true:
        this.sidenavButtonText = 'Close';
        break;
      case false:
        this.sidenavButtonText = 'Open';
        break;
    }
  }

  public toggleSideNavSize() {
    this.isSideNavMaximized = !this.isSideNavMaximized;
    switch (this.isSideNavMaximized) {
      case true:
        this.sidenavSizeButtonText = 'Hide Text';
        break;
      case false:
        this.sidenavSizeButtonText = 'Show Text';
        break;
    }
  }
}
