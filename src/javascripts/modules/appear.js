appear({
  init: function init(){
    console.log('dom is ready');
  },
  elements: function elements(){
    return document.getElementsByClassName('card');
  },
  appear: function appear(el){
    el.classList.add('card--appeared')
  },
  bounds: -100,
  reappear: false
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
  bounds: -200,
  reappear: false
});