const divA = document.getElementById('a');
const aZindex = document.getElementById('a-z');

const aLinkSlider = document.getElementById('alink-vert');
const aLink = document.getElementById('alink');
const aLinkZindex = document.getElementById('alink-z');

const bSlider = document.getElementById('B-left');
const divB = document.getElementById('b');
const bZindex = document.getElementById('B-z');

const b1Slider = document.getElementById('b1-left');
const divB1 = document.getElementById('b1');
const b1Zindex = document.getElementById('b1-z');

const cSlider = document.getElementById('c-left');
const divC = document.getElementById('c');
const cZindex = document.getElementById('c-z');

aZindex.addEventListener('keyup', function(){
  var z = aZindex.value.toString();
  divA.style.zIndex = z});

aLinkSlider.addEventListener('mouseup', function(){
  var space = aLinkSlider.value.toString() + 'px'
  aLink.style.top = space});
aLinkZindex.addEventListener('keyup', function(){
  var z = aLinkZindex.value.toString();
  aLink.style.zIndex = z});

bSlider.addEventListener('mouseup', function(){
  var space = bSlider.value.toString() + 'px'
  divB.style.marginLeft = space});

bSlider.addEventListener('keyup', function(){
  var space = bSlider.value.toString() + 'px'
  divB.style.marginLeft = space});

b1Zindex.addEventListener('keyup', function(){
  var z = bZindex.value.toString();
  divB.style.zIndex = z});

b1Slider.addEventListener('mouseup', function(){
  var space = b1Slider.value.toString() + 'px'
  divB1.style.marginLeft = space});

b1Slider.addEventListener('keyup', function(){
  var space = b1Slider.value.toString() + 'px'
  divB1.style.marginLeft = space});

b1Zindex.addEventListener('keyup', function(){
  var z = b1Zindex.value.toString();
  divB1.style.zIndex = z});

cSlider.addEventListener('mouseup', function(){
  var space = cSlider.value.toString() + 'px'
  divC.style.marginLeft = space});

cZindex.addEventListener('keyup', function(){
  var z = cZindex.value.toString();
  divC.style.zIndex = z});


