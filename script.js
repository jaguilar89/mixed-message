//Initialize a new Date object and store the current date in the currentDate variable.
//Date will be output along with the quote and advice.

const dateObj = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const currentDate = dateObj.toLocaleDateString('default', options)


//Create an object containing the quotes and advice that will be output in the terminal.
const obj = {
    quotes: [
        '"Perfection is not attainable, but if we chase perfection we can catch excellence" - Vince Lombardi',
        '"No act of kindness, no matter how small, is ever wasted." - Aesop',
        '"If opportunity doesn\'t knock, build a door" - Milton Berle',
        '"By forgetting the past and by throwing myself into other interests, I forget to worry." - Jack Dempsey',
        '"Your present circumstances don\'t determine where you can go; they merely determine where you start" - Nido Qubein',
        '"Try to be like the turtle - at ease in your own shell" - Bill Copeland'
    ],

    advice: [
        'Start that project you\'ve been putting off.',
        'Go for a nice, long walk to clear your head.',
        'Reach out to a friend you haven\'t spoken to in a while.',
        'Plan that much needed day off.',
        'Be kind to at least one stranger.',  
        'Be kinder to yourself.'
    ]
};

const generateRandomNum = (num) => Math.floor(Math.random() * num);

console.log('--------------------------')
console.log(`Today is ${currentDate}`)
console.log(`Todays quote is: ${obj.quotes[generateRandomNum(obj.quotes.length)]}`)
console.log(`Todays advice is: ${obj.advice[generateRandomNum(obj.advice.length)]}`)
console.log('--------------------------')