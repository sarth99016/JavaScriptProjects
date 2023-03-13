// Variables

let btn = document.querySelector('#new-quote') 
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

    // created an object to pick random values
    const quotes = [  
        {    quote: `"The best way to find yourself is to lose yourself in the service of others."`,    person: 'Mahatma Gandhi'  },  
        {    quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,    person: 'Abraham Lincoln'  },  
        {    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,    person: 'Oprah Winfrey'  },  
        {    quote: `"Life is like riding a bicycle. To keep your balance, you must keep moving."`,    person: 'Albert Einstein'  },  
        {    quote: `"Believe you can and you're halfway there."`,    person: 'Theodore Roosevelt'  },  
        {    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,    person: 'Winston Churchill'  },  
        {    quote: `"The only way to do great work is to love what you do."`,    person: 'Steve Jobs'  },  
        {    quote: `"Happiness is not something ready made. It comes from your own actions."`,    person: 'Dalai Lama'  },  
        {    quote: `"It does not matter how slowly you go as long as you do not stop."`,    person: 'Confucius'  },  
        {    quote: `"The only person you are destined to become is the person you decide to be."`,    person: 'Ralph Waldo Emerson'  }];

// EventListener called to perform action on event invoke
btn.addEventListener('click',function(){

    // generated an random value
    let random = Math.floor(Math.random() * quotes.length);

    // assign value of the object to the inner text
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})