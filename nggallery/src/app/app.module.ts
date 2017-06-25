import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageService} from './services/image.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image.component';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {routes} from './app.routes';

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
	routes,
    BrowserModule
  ],
  /*Here we say to NgModule that a service named ImageService is running. We can now use this service from every component we want*/
  providers: [ImageService],
  /*Equivalent to main function, it is the first component that NgModule must load*/
  bootstrap: [AppComponent]
})
export class AppModule { }
