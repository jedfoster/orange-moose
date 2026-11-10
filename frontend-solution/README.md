# Code Exercise

We will build a simple ToDo list app. 

There is a [mockup PNG](./mock-up.png) in the file list to your left. You may find it useful to open that image in a new window. Design specs are listed below, as well as in `src/ToDo.css`.


## Desired functionality

* Able to add new items
* Able toggle the completed state of items by clicking on them


## Pay attention to

* Semantic markup
* Form behaviors


## Code notes

Your `ToDo` component receives initial data in a prop, `data`. 

An individual item is an object in the form of:

```javascript
  {
    "completed": Boolean,
    "text": String
  }
```

See [`src/data.json`](./src/data.json) for more.


## Design specs
  
* Border gray: `#979797`
* Fill gray: `#D5D5D5`
* Completed text gray: `#AAAAAA`
* Yellow: `rgba(248, 210, 9, 60)`
* Placeholder/Button text color: `rgba(74, 74, 74, 60)`
* Input/Button border-radius: `0.5em`
