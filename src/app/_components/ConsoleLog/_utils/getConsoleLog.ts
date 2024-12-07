export const getConsoleLog = () => {
    const r = 20;
    const p = r / 2;
    const q = p / 5;
    let string = "\n\n";
    for (let y = -p; ++y < p; ) {
        for (let x = -r; ++x < r; ) {
            let d = c(y, r * 2, p);
            let e = c(y + q, r / 5, q);
            let f = e - p;
            let g = e + p;
            let h = c(y, r * 1.3, r / 3);
            string +=
                x >= d ||
                x <= -d ||
                (x > -g && x < f) ||
                (x < g && x > -f) ||
                (y > q && x > -h && x < h)
                    ? " "
                    : 0;
        }
        string += "\n";
    }
    string += "\n\nHello! Welcome to my portfolio site, thanks for visiting!\n";
    string +=
        "\nIf you're trying to find the code behind my site, you can check it out by visiting the Experience page and clicking the link to the GitHub repo.\n";
    string += "\nIf you're just here to see my portfolio, then enjoy!\n";
    string += "\nHave a great day!\n";
    string += "\n❤️ Jacob";
    string +=
        "\n\nPS- Shoutout to the author of this link for the smiley face: https://codegolf.stackexchange.com/a/16857";

    return string;
};

const c = (y: number, w: number, h: number) => {
    return ((w / 2) * Math.sqrt(1 - (y * y) / (h * h)) + 0.5) | 0;
};
