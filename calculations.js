function getLengths() {
    const scales = {
        "ukrainian dorian": ["1", "2", "b3", "#4", "5", "6", "b7", "8"],
        "major scale": ["1", "2", "3", "4", "5", "6", "7", "8"],
        "major chord": ["1", "3", "5", "8"],
        "minor chord": ["1,b3,5,8"],
        "natural minor scale": ["1", "2", "b3", "4", "5", "b6", "b7", "8"],
        "harmonic minor scale": ["1", "2", "b3", "4", "5", "b6", "7", "8"],
        "major pentatonic": ["1", "2", "3", "5", "6", "8"],
        "minor pentatonic": ["1", "b3", "4", "5", "b7", "8"],
        "chromatic": ["1", "b2", "2", "b3", "3", "4", "#4", "5", "b6", "6", "b7", "7", "8"]
    }

    const proportions = {
        "1": {
            proportion: 1,
            interval: "Unison"
        },
        "b2": {
            proportion: .9798,
            interval: "Minor 2nd"
        },
        "2": {
            proportion: .9428,
            interval: "Major 2nd"
        },
        "#2": {
            proportion: .9129,
            interval: "Augmented 2nd"
        },
        "b3": {
            proportion: .9129,
            interval: "Minor 3rd"
        },
        "3": {
            proportion: .8944,
            interval: "Major 3rd"
        },
        "4": {
            proportion: .8660,
            interval: "Perfect 4th"
        },
        "#4": {
            proportion: .8433,
            interval: "Augmented 4th"
        },
        "b5": {
            proportion: .8433,
            interval: "Dimished 5th"
        },
        "5": {
            proportion: .8165,
            interval: "Perfect 5th"
        },
        "#5": {
            proportion: .7906,
            interval: "Augmented 5th"
        },
        "b6": {
            proportion: .7906,
            interval: "Minor 6th"
        },
        "6": {
            proportion: .7746,
            interval: "Major 6th"
        },
        "º7": {
            proportion: .7746,
            interval: "Diminished 7th"
        },
        "b7": {
            proportion: .7454,
            interval: "Minor 7th"
        },
        "7": {
            proportion: .7303,
            interval: "Major 7th"
        },
        "8": {
            proportion: .7071,
            interval: "Octave"
        }
    }

    const length = Number(document.getElementById("length").elements[0].value);
    const tuning = scales[document.getElementById("tuning").elements[0].value];

    var text = `<table>
                    <tr>
                        <th>Interval</th>
                        <th>Length</th>
                    </tr>`;


    for (let i = 0; i < tuning.length; i++) {
        text +=
            `<tr><td>${proportions[tuning[i]].interval}</td><td>${String((length * proportions[tuning[i]].proportion).toFixed(4))}</td></tr>`;
    }
    text += "</table>";
    document.getElementById("demo").innerHTML = text;
}

var lengthInput = document.getElementById("length");
lengthInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        e.preventDefault();
        getLengths();
    }
});