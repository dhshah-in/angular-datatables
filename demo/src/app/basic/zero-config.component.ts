import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-zero-config',
    templateUrl: 'zero-config.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ZeroConfigComponent {

  pageTitle = 'Zero configuration';
  mdIntro = 'assets/docs/basic/zero-config/intro.md';
  mdHTML = 'assets/docs/basic/zero-config/source-html.md';
  mdTSV1 = 'assets/docs/basic/zero-config/source-ts.md';


}
