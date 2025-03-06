const selectElement = document.getElementById('theme');
const theme = document.getElementById('main');
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(isDark);
if (isDark) {
    console.log("in dark mode");
    theme.classList.remove('bg-white','black');
    theme.classList.add('bg-black','white');
}
else{
    theme.classList.remove('bg-black','white');
    theme.classList.add('bg-white','black');
    console.log("Light mode enabled");
}

selectElement.addEventListener('change',function(){
    if (selectElement.value=='default') {
        if (isDark==true) {
            theme.classList.remove('black','white','green','yellow');
            theme.classList.add('white');
        }
        else{
            theme.classList.remove('black','white','green','yellow');
            theme.classList.add('black');
        }
    }
    else{
        theme.classList.remove('black','white','green','yellow');
        theme.classList.add(selectElement.value);
    }
});


const coords = { x:0, y:0};
const circles = document.querySelectorAll(".circle");

circles.forEach(function(circle){
    circle.x=0;
    circle.y=0;
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
    
});

function animateCircles(){
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle,index){
        circle.style.left = x -12 + "px";
        circle.style.top = y -12 + "px";

        circle.style.scale=(circles.length-index)/circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index+1] || circles[0];
        x+=(nextCircle.x-x)*0.5;
        y+=(nextCircle.y-y)*0.5;
    });
    requestAnimationFrame(animateCircles);
}

animateCircles();



