// "use strict"

// Collapsible Accordians

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Animations //      alternatives:       //   // if (entry.intersectionRatio >= 0.75) {  

//Skills animations
const skillsHiddenElements = document.querySelectorAll('.hidden');
const skillsObservingOptions = {
  root: null, // not necessary, same as default which set to viewport
  threshold: .6,
  rootMargin: "-50px"
}

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target)
    if (entry.isIntersecting) {
      entry.target.classList.toggle('reveal', entry.isIntersecting);
    }
  })
}, skillsObservingOptions);


skillsHiddenElements.forEach((el) =>  skillsObserver.observe(el));


// bike 1 animation

const bikeElement1 = document.querySelector('bike1');
const bikeObservingOptions = {
  root: null, // not necessary, same as default which set to viewport
  threshold: .6,
  rootMargin: "-50px"
}

const bikeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target)
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-bike', entry.isIntersecting)
      setTimeout(function () {
        entry.target.classList.add('cruise-right', entry.isIntersecting)
      }, 1000);
      setTimeout(function () {
        entry.target.classList.remove('reveal-bike', entry.isIntersecting)
      }, 2800);
      setTimeout(function () {
        entry.target.classList.add('bike-gone', entry.isIntersecting)
      }, 6000);
      
    
    }
  })
}, bikeObservingOptions);

bikeObserver.observe(bike1);


// bike2 animation

const bikeElement2 = document.querySelector('bike2');


const bikeObserver2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target)
    if (entry.isIntersecting) {
      setTimeout(function () {
        entry.target.classList.add('reveal-bike', entry.isIntersecting)
      }, 2500);
      setTimeout(function () {
        entry.target.classList.toggle('cruise-left', entry.isIntersecting)
      }, 3200);
      setTimeout(function () {
        entry.target.classList.remove('reveal-bike', entry.isIntersecting)
      }, 4500);
      setTimeout(function () {
        entry.target.classList.add('bike-gone', entry.isIntersecting)
      }, 7500);
      
    
    }
  })
}, bikeObservingOptions);

bikeObserver2.observe(bike2);









// entry.target.classList.add('reveal');
// }
// else {
//   entry.target.classlist.remove('reveal')
// }