function changeMode (size=Number, weight=String, transform=String, background=String, color=String) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    const spooky = changeMode (9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode (12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode (12, 'normal', 'lowercase', 'white', 'black');

    const newParagraph = document.createElement ('p');
    newParagraph.textContent = 'Welcome Holberton!';
    document.body.appendChild (newParagraph);

    const spookyButton = document.createElement ('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener ('click', spooky);
    document.body.appendChild (spookyButton);

    const darkModeButton = document.createElement ('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.addEventListener ('click', darkMode);
    document.body.appendChild (darkModeButton);

    const screamModeButton = document.createElement ('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.addEventListener ('click', screamMode);
    document.body.appendChild (screamModeButton);
}

main ();