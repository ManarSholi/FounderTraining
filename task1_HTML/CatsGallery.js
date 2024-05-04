var i = 0;
for (var j = 100; j < 180; j += 5) {
    var div_box = document.getElementById('cat-body');
    var divElement = document.createElement('div');
    divElement.setAttribute('class', 'cat-box');

    //var cat_image = document.getElementById('cat-img');
    var image_path = 'https://placekitten.com/' + j + '/' + j;
    var imageC = document.createElement('img');
    if ((j === 100) || (j === 105) || (j === 110) || (j === 115)) {
        imageC.setAttribute('class', 'img-prop0');
    } else if ((j === 120) || (j === 125) || (j === 130) || (j === 135)) {
        imageC.setAttribute('class', 'img-prop1');
    } else if ((j === 140) || (j === 145) || (j === 150) || (j === 155)) {
        imageC.setAttribute('class', 'img-prop2');
    } else if ((j === 160) || (j === 165) || (j === 170) || (j === 175)) {
        imageC.setAttribute('class', 'img-prop3');
    }
    imageC.setAttribute('src', image_path);
    //cat_image.appendChild(imageC);

    //var div_caption = document.getElementById('cat-caption');
    var captionElement = document.createElement('figcaption');
    captionElement.setAttribute('class', 'cap');
    captionElement.innerHTML += 'The Aegean cat in its homeland is not considered to be elite and special, although it is a national pride, since only in Greece one can, under natural conditions, admire the true grace of an animal and observe its habits.';

    divElement.appendChild(imageC);
    divElement.appendChild(captionElement);
    div_box.appendChild(divElement);
}