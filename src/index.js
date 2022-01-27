var app = new Vue({
  el: '#app',
  data: {
    items: [
      //list:ビンゴシートの数字の配列，isActiveList:有効なマスの判定
      {column:'B', list:[], isActiveList:[false,false,false,false,false]},
      {column:'I', list:[], isActiveList:[false,false,false,false,false]},
      {column:'N', list:[], isActiveList:[false,false,true,false,false]},
      {column:'G', list:[], isActiveList:[false,false,false,false,false]},
      {column:'O', list:[], isActiveList:[false,false,false,false,false]}
    ],
    isReach : false,//リーチの判定
    isBingo : false,//ビンゴの判定
    CheckCount : [[0, 0, 1, 0, 0],[0, 0, 1, 0, 0],[1, 1, -1, -1, -1]]//縦，横，斜めのどの列に何個有効なマスがあるかのカウント
  },
  methods:{
    //マスが押されたときに実行される関数
    changeState: function(i,j){
      if(i!=j || i !=2){
        this.items[j].isActiveList.splice(i, 1, !this.items[j].isActiveList[i]);
        this.CheckCount = CheckReach(i,j,this.CheckCount, this.items[j].isActiveList[i]);
        this.isReach = false;
        this.isBingo = false;
        for (let h = 0; h < 3; h++){
          for (let k = 0; k < this.CheckCount[h].length;k++){
            var count = this.CheckCount[h][k];
            if(count == 5){
              this.isReach = false;
              this.isBingo = true;
              break;
            }else if(count == 4){
              this.isReach = true;
              break;
            }
          }
          if(this.isBingo){
            break;
          }
        }
      }
    }
  }
});

//初めにビンゴシートの数字を生成する
for (let i = 0; i < 5; i++){
  app.items[i].list = getRandomList(i*15+1,(i+1)*15,5);
  app.items[2].list[2] = 'free'
}

//min,maxの間の数字をランダムに生成
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//min,maxの間の数字をindex個ランダムに配列を生成
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

//縦，横，斜めのマスの個数をカウントする
function CheckReach(i,j,CheckCount,isActive){
  if(isActive){
    num = 1;
  }else{
    num = -1;
  }
  //縦の列の確認
  CheckCount[0][j] += num;
  // 横の列の確認
  CheckCount[1][i]+= num;
  // 斜めの列の確認
  if(i == j){
    CheckCount[2][0]+= num;
  }
  if(i == (4-j)){
    CheckCount[2][1]+= num;
  }
  return CheckCount;
}