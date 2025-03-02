const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver ( (entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
},
{
    threshold: 0.4,
});

// We create new object that is IntersectionObserver that expects a callback function in this case
// we use the intersection observer as a way to observe sections in our page that has the class hidden
// entries is like an array and entry is the content of the array and this is a default thing because intersection observer always return an array of the items that it was observing hence entries would be an array of entry
// threshold is like a visibility percentage of our element that should be considered when we are triggering the callback  

hiddenElements.forEach((el) => observer.observe(el));

