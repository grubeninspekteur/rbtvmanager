import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChannelContentComponent } from './components/channel-content/channel-content.component';
import { ChannelSelectorComponent } from './components/channel-selector/channel-selector.component';
import { SmackOverviewComponent } from './components/smack-overview/smack-overview.component';
import { SmackRoutingModule } from './smack-routing.module';
import { MarkdownPipe } from './pipes/markdown.pipe';

@NgModule({
  declarations: [SmackOverviewComponent, ChannelSelectorComponent, ChannelContentComponent, MarkdownPipe],
  imports: [
    CommonModule,
    SharedModule,
    SmackRoutingModule,
  ],
})
export class SmackModule { }
