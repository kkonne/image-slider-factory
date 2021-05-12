// I'll try to explain my thought process and logistics of at least one function
// we need current image focus in the global scope so both swipeleft and swiperight
// can get current photo. Its not sensitive info so no need for private 
// variable or design pattern
// we dont need total marginleft but I kept it so you can watch how the slider works
// in the console
let currentFocus = 1;
let marginLeft = 0;

// margin size value used to reset gallery when going opposite direction
// and facing end of image array
let resetMarginSize = 0;

// dynamically calculating margin size for resetting
// input number of images is necessary though but I feel that doesnt need to be
// automated and it doesnt have sense to automate it, can be easily added though
for(let i = 1; i < 10; i++){
    resetMarginSize -= document.getElementById(`img-${i}`).clientWidth + 10;
}

let goRight = () => { // slide right function
    var $slider = $('#slider'); // reference for slider div for cleaner code
    var $slideContainer = $slider.find('.slides'); // same as above

    // here I get the width of the image + margin so I know how much to move the
    // gallery images so it can 'snap'
    const imgWidth = -(document.getElementById(`img-${currentFocus}`).clientWidth + 10);
    marginLeft += imgWidth; // for easier tracking of code

    // updating our focus image
    currentFocus++;

    // animating the images slide div to the left by the focused image width so we get
    // illusion of going right using the jQuery animate function during 0.5s
    $slideContainer.animate({'margin-left': '+='+imgWidth}, 500, () => {
        // if we get to the end of the images, return to the front
        // instantly, user doesnt notice the instant change
        if(currentFocus == 10){
            currentFocus = 1; // reset focused image
            marginLeft = 0; // reset margin-left variable to keep track
            $slideContainer.css('margin-left', 0); // reset the div margin
        }
    });
};

// slide left function
let goLeft = () => {
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');

    if(currentFocus == 1){
        currentFocus = 10;
        marginLeft = resetMarginSize;
        $slideContainer.css('margin-left', -2700);
    };

    const imgWidth = document.getElementById(`img-${currentFocus-1}`).clientWidth + 10;
    marginLeft += imgWidth;

    currentFocus--;

    $slideContainer.animate({'margin-left': '+='+imgWidth}, 500, () => {
        if(currentFocus == 1){
            currentFocus = 10;
            marginLeft = resetMarginSize;
            $slideContainer.css('margin-left', -2700);
        }
    });
};

// FOCUS ON ALIGN RIGHT
let currentFocus2 = 1;
let marginRight2 = 0;

let resetMarginSize2 = 0;

for(let i = 1; i < 10; i++){
    resetMarginSize2 -= document.getElementById(`img-left-${i}`).clientWidth + 10;
}

// slide right function
let goRight2 = () => {
    var $slider = $('#slider-left');
    var $slideContainer = $slider.find('.slides-left');

    if(currentFocus2 == 1){
        currentFocus2 = 10;
        marginRight2 = resetMarginSize2;
        $slideContainer.css('margin-right', -2700);
    };

    const imgWidth = document.getElementById(`img-left-${currentFocus2 - 1}`).clientWidth + 10;
    marginRight2 += imgWidth;

    currentFocus2--;

    $slideContainer.animate({'margin-right': '+='+imgWidth}, 500, () => {
        if(currentFocus2 == 1){
            currentFocus2 = 10;
            marginRight2 = resetMarginSize2;
            $slideContainer.css('margin-right', resetMarginSize2);
        }
    });
};

// slide left function
let goLeft2 = () => {
    var $slider = $('#slider-left');
    var $slideContainer = $slider.find('.slides-left');

    const imgWidth = -(document.getElementById(`img-left-${currentFocus2}`).clientWidth + 10);
    marginRight2 += imgWidth;

    currentFocus2++;

    $slideContainer.animate({'margin-right': '+=' + imgWidth}, 500, () => {
        if(currentFocus2 == 10){
            currentFocus2 = 1;
            marginRight2 = 0;
            $slideContainer.css('margin-right', 0);
        }
    });    
};

// FINAL SLIDER

// slide right function
let currentFocusUp = 1;
let marginRightUp = 0;
let resetMarginSizeUp = 0;

let currentFocusDown = 6;
let marginRightDown = 0;
let resetMarginSizeDown = 0;

for(let i = 1; i < 6; i++){
    resetMarginSizeUp -= document.getElementById(`img-left2-${i}`).clientWidth + 10;
}

for(let i = 6; i < 10; i++){
    resetMarginSizeDown -= document.getElementById(`img-left3-${i}`).clientWidth + 10;
}

let goRight3 = () => {    
    // Upper row slide right
    (() => {
        var $slider = $('#slider-left2');
        var $slideContainer = $slider.find('.slides-left2');

        if(currentFocusUp == 1){
            currentFocusUp = 6;
            marginRightUp = resetMarginSizeUp;
            $slideContainer.css('margin-right', resetMarginSizeUp);
        };

        const imgWidth = document.getElementById(`img-left2-${currentFocusUp - 1}`).clientWidth + 10;
        marginRightUp += imgWidth;

        currentFocusUp--;

        $slideContainer.animate({'margin-right': '+='+imgWidth}, 500, () => {
            if(currentFocusUp == 1){
                currentFocus2 = 5;
                marginRightUp = resetMarginSizeUp;
                $slideContainer.css('margin-right', resetMarginSizeUp);
            }
        });
    })();

    // Lower row slide right
    (() => {
        var $slider = $('#slider-left3');
        var $slideContainer = $slider.find('.slides-left3');

        if(currentFocusDown == 6){
            currentFocusDown = 10;
            marginRightDown = resetMarginSizeDown;
            $slideContainer.css('margin-right', resetMarginSizeDown);
        };

        const imgWidth = document.getElementById(`img-left3-${currentFocusDown - 1}`).clientWidth + 10;
        marginRightUp += imgWidth;

        currentFocusDown--;

        $slideContainer.animate({'margin-right': '+='+imgWidth}, 500, () => {
            if(currentFocusDown == 6){
                currentFocusDown = 10;
                marginRightDown = resetMarginSizeDown;
                $slideContainer.css('margin-right', resetMarginSizeDown);
            }
        });

    })();
    
};

// slide left function
let goLeft3 = () => {

    // Upper row slide left
    (() => {
        var $slider = $('#slider-left2');
        var $slideContainer = $slider.find('.slides-left2');

        const imgWidth = -(document.getElementById(`img-left2-${currentFocusUp}`).clientWidth + 10);
        marginRightUp += imgWidth;

        currentFocusUp++;

        $slideContainer.animate({'margin-right': '+=' + imgWidth}, 500, () => {
            if(currentFocusUp == 6){
                currentFocusUp = 1;
                marginRightUp = 0;
                $slideContainer.css('margin-right', 0);
            }
        });
    })();

    // Lower row slide left
    (() => {
        var $slider = $('#slider-left3');
        var $slideContainer = $slider.find('.slides-left3');

        const imgWidth = -(document.getElementById(`img-left3-${currentFocusDown}`).clientWidth + 10);
        marginRightDown += imgWidth;

        currentFocusDown++;

        $slideContainer.animate({'margin-right': '+=' + imgWidth}, 500, () => {
            if(currentFocusDown == 10){
                currentFocusDown = 6;
                marginRightDown = 0;
                $slideContainer.css('margin-right', 0);
            }
        });
    })();
     
};

// Josip Leko :)