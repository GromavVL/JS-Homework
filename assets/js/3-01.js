// -----------JS Класовий синтаксис--------

class Post {
    constructor(id, nazva, autor, text, dateAdded, numberOfLikes, listHashtags) {
        this.id = id;
        this.nazva = nazva;
        this.autor = autor;
        this.text = text;
        this.dateAdded = dateAdded;
        this.numberOfLikes = numberOfLikes;
        this.listHashtags = listHashtags;
    }
    // render для отримання розмітки для посту (*в методі деструктуризувати інформацію з this).
    render() {
        const { id, nazva, autor, text, DateAdded, numbeRofLikes, ListHashtags } = this;
        return `
    <h2 style="border-top: 1px solid red">${nazva}</h2>
    <p>${autor}</p>
    <p>${text}</p>
    <p>${DateAdded}</p>
    <p>${numbeRofLikes}</p>
    <p>${ListHashtags}</p>`;
    };
    // сеттер з валідацією для кількості вподобайок та відповідний ґеттер,
    // Для перевірки, чи належить кількість вподобайок певному діапазону
    set likes(value) {
        if (value < 0 || value > 1000000) {
            throw new ErrorEvent('Некоректне значення лайків');
        }
        this.numbeRofLikes = value;
    }
    get likes() {
        return this.numbeRofLikes;
    }

    // *додавання хештеґу. Хештеґів у поста може бути максимум 6
    addHashtag(...arg) {
        if (this.listHashtags.length + arg.length > 6) {
            throw new RangeError("Максимальна кількість хештеґів — 6");
        } else {
            this.listHashtags.push(...arg);
        }
    }

    // змінити текст поста на інший
    getText(newText) {
        this.text = newText;
    }

    // збільшити кількість вподобайок на 1
    addLikes() {
        this.numbeRofLikes += 1;
    }
}

const post1 = new Post(
    1,
    'User1',
    'Autor1',
    'Today’s weather is sunny and warm, with clear skies and a gentle breeze perfect outdoors!',
    19,
    17,
    ['#instagood', '#fashion', '#happy', '#programming'],
);

const post2 = new Post(
    2,
    'User2',
    'Autor2',
    'The car is stunning, sleek, fast, and shines with elegance',
    25,
    55,
    ['#summer', '#art', '#coffee'],
);

const post3 = new Post(
    3,
    'User3',
    'Autor3',
    'The mountain is majestic, tall, peaceful, and covered in soft mist',
    16,
    8,
    ['#coffeetime', '#coding', '#travelgram', '#photoshop', '#espresso'],
);

// змінити текст поста на інший
post1.getText('newPost: The Easter bread is golden, sweet, soft, and beautifully decorated with icing');

// try {
//     const like = post1.Likes = -4;
//     console.log(like);
// } catch (err) {
//     console.log(err);
// }

post1.addLikes();
post1.addHashtag('#espresso');
console.log(post1);

const mas = [post2, post3];

document.writeln(`<body>${mas.map(post => post.render())}</body>`);
document.writeln(`<body>${post1.render()}</body>`);


// 2

class RangeValidator {
    constructor (from, to) {
        this._from = from;
        this._to = to;
    }
    // from
    set from(value) {
        if(value > this._to) {
            throw RangeError('from не може бути більшим за to');
        }
        this._from = value;
    }
    get from() {
        return this._from;
    }
    
    // to
    set to(value) {
        if(value < this._from) {
            throw RangeError('to не може бути меншим за from');
        }
        this._to = value
    }
    get to() {
        return this._to;
    }

    get range() {
        return [this._from, this._to];
    }
    isValid(value) {
        return value >= this._from && value <= this._to;
    }
}

// Конструктор (+сеттери)
const range1 = new RangeValidator(1, 5.5);

// Робота сетерів
range1.from = 5;
range1.to = 80;

// Робота гетерів
console.log(range1.from);
console.log(range1.to);

// // Робота геттера range
console.log(range1.range);

// Робота validate
console.log(range1.isValid(10));