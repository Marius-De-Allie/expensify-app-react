// Object destructuring

const book = {
  title: 'Ego is the enemy',
  Author: 'ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName); // default val Self-Published

// Array destructuring
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumPrice = '$0.00'] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);
