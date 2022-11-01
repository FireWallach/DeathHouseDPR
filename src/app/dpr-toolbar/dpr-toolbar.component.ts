import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { GITHUB_ICON } from 'src/assets/SVGs/githubIcon';
import { D20MORCLASS } from 'src/assets/SVGs/d20Icon';


@Component({
  selector: 'app-dpr-toolbar',
  templateUrl: './dpr-toolbar.component.html',
  styleUrls: ['./dpr-toolbar.component.scss'],
})
export class DprToolbarComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'github-icon',
      sanitizer.bypassSecurityTrustHtml(GITHUB_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'd20morclass',
      sanitizer.bypassSecurityTrustHtml(D20MORCLASS)
    );
  }

  ngOnInit(): void {}

  redirectToGithub(): void {
    window.location.href = 'https://github.com/FireWallach/DeathHouseDPR';
  }
}
