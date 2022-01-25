var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!!',
    items: [
      {column:'B', list:[], isActive_list:[false,false,false,false,false]},
      {column:'I', list:[], isActive_list:[false,false,false,false,false]},
      {column:'N', list:[], isActive_list:[false,false,false,false,false]},
      {column:'G', list:[], isActive_list:[false,false,false,false,false]},
      {column:'O', list:[], isActive_list:[false,false,false,false,false]}
    ],
    buttonState: false
  },
  methods:{
    changeState: function(i,j){
      this.items[j].isActive_list.splice(i, 1, true);
    }
  }
});

for (let i = 0; i < 5; i++){
  app.items[i].list = getRandomList(i*15+1,(i+1)*15,5);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomList(min, max, index){
  randoms = [];
  for(i = 0; i < index; i++){
    while(true){
      var random = getRandomInt(min, max);
      if(!randoms.includes(random)){
        randoms.push(random);
        break;
      }
    }
  }
  return randoms;
}