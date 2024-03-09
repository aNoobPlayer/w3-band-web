//Change the slide automatically
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const heading = $(".text-heading")
const description = $(".text-description")
const slides = $("#slider")
const slider = {
    container: [
        {
            heading: 'Chicago',
            description: 'Thank you, Chicago - A night we won\'t forget.',
            path: '../img/slider/slider1.jpg',
        },
        {
            heading: 'Los Angeles',
            description: 'We had the best time playing at Venice Beach!',
            path: '../img/slider/slider2.jpg',
        },
        {
            heading: 'New York',
            description: 'The atmosphere in New York is lorem ipsum.',
            path: '../img/slider/slider3.jpg',
        },
    ],
    render: function(index){
        return `<div class="text-content">
        <h2 class="text-heading">${this.container[index].heading}</h2>
        <div class="text-description"> ${this.container[index].description}</div>
        </div> 
       `
    },
    start: function(){
        var myIndex = 0;
        function forRender(){
            slides.innerHTML = slider.render(myIndex);
            slides.style.background =`url(./assets/img/slider/slider${myIndex + 1}.jpg) top center / cover no-repeat`;
            ++myIndex;
            if(myIndex === 3)
                myIndex = 0;
        }
        forRender()
        setInterval(forRender,4000)
    }
}
