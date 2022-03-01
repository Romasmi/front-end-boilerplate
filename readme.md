# Front-End boilerplate

That's our company base boilerplate for an internal projects.

## Getting started

Install dependencies
````
bower i
npm i
````
Run
````
gulp
````
## JS Plugins
### Script lazy loading
lazyLoadScript - used for lazy loading any js sources in some time. Default time is 2000 ms.

Usage example:
````
<div data-script="{link}" data-time="{time}"></div>
````
### Image lazy loading
````
<img class="lazy" src="{link}" data-srcset="{link}"
    srcset="assets/template/image/1x1.png" alt="">

<div class="lazy" data-background-image="{link}">
````
### YouTube or (and) picture gallery
````
<div class="gallery">
  <div class="gallery-item" data-src="{youtubeLink}">
    <img class="gallery-image preview lazy" 
         src="{previewLink}" data-srcset="{previewLink}"
         srcset="assets/template/image/1x1.png" alt=""/>
  </div>
  <div class="gallery-item" data-src="{link}">
    <img class="gallery-image lazy" 
         src="{link}" data-srcset="{link}"
         srcset="assets/template/image/1x1.png" alt=""/>
  </div>
</div>
````
### Smooth scroll
````
<a class="smooth-scroll" href="#anchor"/>
````
### InputMask
#### Phone mask
````
<input type="tel" class="phone-mask" value=""/>
````
