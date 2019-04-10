import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
      MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'YOUR_KEY'
      })
  ],
  providers: [],
})
export class MapModule { }
