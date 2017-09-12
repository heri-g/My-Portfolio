import { Component, OnInit } from '@angular/core';

declare let $: any ;
declare let jQuery: any ;

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    function showImages(el) {
      const windowHeight = jQuery( window ).height();
      $(el).each(function(){
        const thisPos = $(this).offset().top;

        const topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
          $(this).addClass('fadeIn');
        }
      });
    }
    // if the image in the window of browser when the page is loaded, show that image
    $(document).ready(function(){
      showImages('.scrollAnimation');
    });
    // if the image in the window of browser when scrolling the page, show that image
    $(window).scroll(function() {
      showImages('.scrollAnimation');
    });
  }

}
