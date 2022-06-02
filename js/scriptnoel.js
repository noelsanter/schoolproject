// let stress = document.querySelector("#stress")
// console.log(stress)
// let sizes = stress.getBoundingClientRect()
// console.log(sizes)
// let num_clicks = 10
// let increase_size = sizes.width / num_clicks

// let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
// function buttonPressed() {
//     n++; /* ist dasselbe wie n=n+1*/
//     //console.log(document.getElementById("element"));
//     if (n <= num_clicks) {

//         document.getElementById("element").style.width = (n * increase_size) + "px";
//     }
// }

// let specialbutton = document.querySelector("button.specialbutton")
// console.log(specialbutton)


// let frame_count = 0
// window.requestAnimationFrame(animate)

// function animate() {
//     window.requestAnimationFrame(animate)

//     if (frame_count % 90 == 0) {
//         let x = Math.random() * window.innerWidth
//         let y = Math.random() * window.innerHeight
//         specialbutton.style.left = x + "px"
//         specialbutton.style.top = y + "px"
//     }

//     frame_count++

// }



// var modal = document.getElementById("myModal_1");




// var closebuttons = document.getElementsByClassName("close");

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// for (let n = 0; n < closebuttons.length; n++) {
//     closebuttons[n].onclick = function(e) {
//         let parentmodal = e.target.closest('.modal');
//         parentmodal.style.display = "none";

//     }
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";

//     }
// }

// Collect all the icons as variables

const icon_1 = document.querySelector("#myModal_1")
const icon_2 = document.querySelector("#myModal_2")
const icon_3 = document.querySelector("#myModal_3")
const icon_4 = document.querySelector("#myModal_4")
const icon_5 = document.querySelector("#myModal_5")

// const icon_2 = document.querySelector("#myModal_2")

// close buttons
const close_1 = document.querySelector("span#close1")
const close_2 = document.querySelector("span#close2")
const close_3 = document.querySelector("span#close3")
const close_4 = document.querySelector("span#close4")
const close_5 = document.querySelector("span#close5")

console.log(close_1);

//   ______   __    __  ______  __       __   ______  ________  ______   ______   __    __ 
//  /      \ |  \  |  \|      \|  \     /  \ /      \|        \|      \ /      \ |  \  |  \
// |  $$$$$$\| $$\ | $$ \$$$$$$| $$\   /  $$|  $$$$$$\\$$$$$$$$ \$$$$$$|  $$$$$$\| $$\ | $$
// | $$__| $$| $$$\| $$  | $$  | $$$\ /  $$$| $$__| $$  | $$     | $$  | $$  | $$| $$$\| $$
// | $$    $$| $$$$\ $$  | $$  | $$$$\  $$$$| $$    $$  | $$     | $$  | $$  | $$| $$$$\ $$
// | $$$$$$$$| $$\$$ $$  | $$  | $$\$$ $$ $$| $$$$$$$$  | $$     | $$  | $$  | $$| $$\$$ $$
// | $$  | $$| $$ \$$$$ _| $$_ | $$ \$$$| $$| $$  | $$  | $$    _| $$_ | $$__/ $$| $$ \$$$$
// | $$  | $$| $$  \$$$|   $$ \| $$  \$ | $$| $$  | $$  | $$   |   $$ \ \$$    $$| $$  \$$$
//  \$$   \$$ \$$   \$$ \$$$$$$ \$$      \$$ \$$   \$$   \$$    \$$$$$$  \$$$$$$  \$$   \$$

let frame_count = 0
window.requestAnimationFrame(animate)

function animate() {
    window.requestAnimationFrame(animate)

    if (frame_count % 90 == 0) {
        let x = Math.random() * window.innerWidth - 200
        let y = Math.random() * window.innerHeight - 200
        icon_1.style.left = x + "px"
        icon_1.style.top = y + "px"
        x = Math.random() * window.innerWidth - 200
        y = Math.random() * window.innerHeight - 200
        icon_2.style.left = x + "px"
        icon_2.style.top = y + "px"
        x = Math.random() * window.innerWidth - 200
        y = Math.random() * window.innerHeight - 200
        icon_3.style.left = x + "px"
        icon_3.style.top = y + "px"
        x = Math.random() * window.innerWidth - 200
        y = Math.random() * window.innerHeight - 200
        icon_4.style.left = x + "px"
        icon_4.style.top = y + "px"
        x = Math.random() * window.innerWidth - 200
        y = Math.random() * window.innerHeight - 200
        icon_5.style.left = x + "px"
        icon_5.style.top = y + "px"
    }

    frame_count++

}

// add close functionality
close_1.onclick = function() {
    console.log('close');
    icon_1.style.display = "none"
        // set icone to display block after 5 seconds

}

close_2.onclick = function() {
    console.log('close');
    icon_2.style.display = "none"
        // set icone to display block after 5 seconds

}

close_3.onclick = function() {
    console.log('close');
    icon_3.style.display = "none"
        // set icone to display block after 5 seconds
}

close_4.onclick = function() {
    console.log('close');
    icon_4.style.display = "none"
        // set icone to display block after 5 seconds
}

close_5.onclick = function() {
    console.log('close');
    icon_5.style.display = "none"
        // set icone to display block after 5 seconds
}

var btn = document.getElementById("myBtn");
btn.onclick = function() {
    icon_1.style.display = "block";
    icon_2.style.display = "block";
    icon_3.style.display = "block";
    icon_4.style.display = "block";
    icon_5.style.display = "block";

}