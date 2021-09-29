const sentence = {
  beginning: ['They ', 'You ', 'People '],
  middle: ['are ', 'should be ', 'are not '],
  end: ['smart!', 'dumb!', 'fast!'],
  construct: function () {
    let rand1 = Math.floor(Math.random() * 3);
    let rand2 = Math.floor(Math.random() * 3);
    let rand3 = Math.floor(Math.random() * 3);
    console.log(this.beginning[rand1] + this.middle[rand2] + this.end[rand3]);
  },
};

sentence.construct();