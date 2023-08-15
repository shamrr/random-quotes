const quotes = {
    quote1: {
        quote: 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь',
        author: 'Наполеон Хилл',
    },
    quote2: {
        quote: 'Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.',
        author: 'Флоренс Найтингейл',
    },
    quote3: {
        quote: 'Сложнее всего начать действовать, все остальное зависит только от упорства.',
        author: 'Амелия Эрхарт',
    },
    quote4: {
        quote: 'Надо любить жизнь больше, чем смысл жизни.',
        author: 'Федор Достоевский',
    },
    quote5: {
        quote: 'Жизнь - это то, что с тобой происходит, пока ты строишь планы.',
        author: 'Джон Леннон',
    },
    quote6: {
        quote: 'Начинать всегда стоит с того, что сеет сомнения.',
        author: 'Борис Стругацкий',
    },
    quote7: {
        quote: 'Настоящая ответственность бывает только личной.',
        author: 'Фазиль Искандер',
    },
    quote8: {
        quote: 'Неосмысленная жизнь не стоит того, чтобы жить.',
        author: 'Сократ',
    },
    quote9: {
        quote: '80% успеха - это появиться в нужном месте в нужное время.',
        author: 'Вуди Аллен',
    },
    quote10: {
        quote: 'Ваше время ограничено, не тратьте его, живя чужой жизнью',
        author: 'Стив Джобс',
    },
    quote11: {
        quote: 'Победа - это еще не все, все - это постоянное желание побеждать.',
        author: 'Винс Ломбарди',
    },
    quote12: {
        quote: 'В моем словаре нет слова «невозможно.',
        author: 'Наполеон Бонапарт',
    },
}

const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let keys = Object.keys(quotes);
    const randomNumber = Math.floor(Math.random() * keys.length);
    const obj = keys[randomNumber];

    quote.innerText = quotes[obj].quote;
    author.innerText = quotes[obj].author;
})