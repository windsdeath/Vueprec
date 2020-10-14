<template>
  <div>
      <div id="screen" @click="onClickScreen" :class="state">{{message}}</div>
      <div>평균시간 : {{speed}}</div>
      <button @click="onReset">리셋</button>
      <ul>
          <li v-for="(r,i) in result" :key="i">{{r}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            result:[],
            state:'waiting',
            message:'클릭해서 시작하세요',
            time:new Date(),
            speed:''
        }
    },
    methods:{
        onReset(){
            return this.state = 'waiting';
            this.message = '클릭해서 시작하세요';
        }
        ,
        onClickScreen(){
            if(this.state === 'waiting'){
                this.message = '화면이 바뀌면 클릭하세요!';
                setTimeout(()=>this.state = 'ready',3000);
            } else if (this.state === 'ready'){
                this.addTime();
                this.state = 'now';
                this.message = '리셋버튼을 눌러 재도전하세요!';
            } else if (this.state === 'now'){
            }
            
        },
        addTime(){
                this.time = (new Date())-this.time;
                return this.result.push('반응속도 : '+this.time/1000+'초');
                this.speed =result.reduce((v,i)=>(i+v))/result.length;
            }
    }
}
</script>

<style>
#screen{
    border-radius: 30% 5% 30% 5%;
    border:yellow 5px solid;
    width: 300px;
    height: 400px;
    user-select: none;
    text-align: center;
    line-height: 400px;
}
#screen.waiting{
    background-color: green;
    color: white;
}
#screen.ready{
    background-color: aqua;
}
#screen.now{
    background-color: red;
}
</style>