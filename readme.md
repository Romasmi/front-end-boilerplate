
# Front-End boilerplate

That's out company base boilerplate for internal projects.

## JS Plugins
### lazyLoadScript
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
