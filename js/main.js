/* NepalIpsum, (c) 2016 Dinesh - http://github.com/dineshkhadka/nepalipsum
 * @license MIT */
var crime = ['यता', 'जिल्ला', 'प्रहरी', 'कार्यालय', 'कपिलवस्तुका', 'प्रहरी', 'उपरीक्षक', 'विष्णुकुमार', 'केसीले', 'चाडपर्वको', 'मौका', 'छोपी', 'जिल्लामा', 'हुने', 'विभिन्न', 'किसिमका', 'अपराधिक', 'घटना', 'चोरी', 'डकैतीमा', 'कमी', 'ल्याउन', 'सुरक्षा', 'व्यवस्था', 'कडा', 'बनाएको', 'जानकारी', 'दिए']
var $el = $('#here');


// for (var i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }


var helpers = {
  getRandom: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

}

var NepalIpsum = {


  generate: function (words, amount) {
    var lastIndex;
    var word;
    var sentence = [];

    for (var i = 0; i < amount; i++) {
      word = words[helpers.getRandom(0,words.length - 1)];

      // Add Punctuation to the word
      // 1 out of 70 chance of a full stop
      if (helpers.getRandom(0, 70) == 1 && i != (amount - 1)){
        word  = word + ' । ';
      }

      // Add a full stop to the last sentence
      else if (i == (amount - 1)) {
        word  = word + ' ।';
      }

      // Push the word to the `sentence` array
      sentence[lastIndex - 1] != word ? lastIndex = sentence.push(word): '' ;
    }

    // Join the array to create a readable sentence
    return sentence.join(' ');



}
}
console.log(NepalIpsum.generate(crime, 50))
$el.html(NepalIpsum.generate(crime, 50))
