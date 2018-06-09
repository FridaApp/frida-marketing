appear({
  init: function init(){
    console.log('dom is ready');
  },
  elements: function elements(){
    // work with all elements with the class "track"
    return document.getElementsByClassName('card');
  },
  appear: function appear(el){
    el.classList.add('card--appeared')
  },
  disappear: function disappear(el){
    el.classList.remove('card--appeared')
  },
  bounds: -100,
  reappear: true
});

appear({
  init: function init(){
    console.log('dom is ready');
  },
  elements: function elements(){
    // work with all elements with the class "track"
    return document.getElementsByClassName('card--workflow');
  },
  appear: function appear(el){
    el.classList.add('card-workflow--appeared')
  },
  disappear: function disappear(el){
    el.classList.remove('card-workflow--appeared')
  },
  bounds: -200,
  reappear: true
});