Array.prototype.customForEach =  function(callback){
    for(let i = 0; i < this.length; i++ ){
        callback(this[i],i,this)
    }
}

function callback(element,index,array) {
    console.log(`from the Array :${array} which is having index :${index} is element:${element}`); //insert logic
  }

const array = [1,2,3,4];

const ans =array.customForEach(callback);
//console.log(ans)