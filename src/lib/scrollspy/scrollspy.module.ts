import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MccScrollspyService } from './scrollspy.service';
import { MccScrollspyGroupDirective, MccScrollspyItemDirective } from './scrollspy.directives';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [ CommonModule, ScrollingModule ],
  providers: [ MccScrollspyService, { provide: 'Window', useValue: window } ],
  declarations: [ MccScrollspyGroupDirective, MccScrollspyItemDirective ],
  exports: [ MccScrollspyGroupDirective, MccScrollspyItemDirective ],
})
export class MccScrollspyModule {
}
