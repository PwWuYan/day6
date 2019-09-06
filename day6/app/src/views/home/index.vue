<template>
  <div class="list">
      <dl v-for="(item,index) in list" :key="index">
          <dt>♥</dt>
          <dd>{{item.tit}}</dd>
      </dl>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    tit:'成单奖励'
                },{
                    tit:'成单奖励'
                },{
                    tit:'成单奖励'
                },{
                    tit:'成单奖励'
                },{
                    tit:'成单奖励'
                },{
                    tit:'成单奖励'
                },{
                    tit:'成单奖励'
                },{
                    tit:'成单奖励'
                }
            ]
        }
    },
}
</script>

<style lang='scss' scoped>
    .list{
        width: 100%;
        margin: 50px 0;
        display: flex;
         flex-wrap: wrap;
        dl{
            width: 25%; 
            display: flex;
            flex-direction: column;
           
            dt{
                text-align: center;
            }
            dd{
                text-align: center;
                font-size: 12px;
            }
        }
    }

</style>