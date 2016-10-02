/* NepalIpsum, (c) 2016 Dinesh - http://github.com/dineshkhadka/nepalipsum
 * @license MIT */
var words = ['यता', 'जिल्ला', 'प्रहरी', 'कार्यालय', 'कपिलवस्तुका', 'प्रहरी', 'उपरीक्षक', 'विष्णुकुमार', 'केसीले', 'चाडपर्वको', 'मौका', 'छोपी', 'जिल्लामा', 'हुने', 'विभिन्न', 'किसिमका', 'अपराधिक', 'घटना', 'चोरी', 'डकैतीमा', 'कमी', 'ल्याउन', 'सुरक्षा', 'व्यवस्था', 'कडा', 'बनाएको', 'जानकारी', 'दिए']
var $el = $('#here');
// for (var i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }


var helpers = {
  getRandom: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

var NepalIpsum = {


  generate: function (amt) {
    var sentence = [];
    var lastIndex;
    for (var i = 0; i < amt; i++) {
      var word = words[helpers.getRandom(0,words.length)];
      sentence[lastIndex - 1] != word ? lastIndex = sentence.push(word): '' ;
    }
    return sentence.join(' ');
  }
}
console.log(NepalIpsum.generate(24))
$el.html(NepalIpsum.generate(24))
