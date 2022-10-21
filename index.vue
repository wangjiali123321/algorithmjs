<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      value-format="timestamp"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
    <el-button @click="show">data</el-button>   
    <el-button @click="doPrint">printQrCode</el-button>   
  </div>

</template>

<script>
import playcom from './playcom.vue';
  export default {
  components: { playcom },
    data() {
      return {
        value1:[]
      };
    },
    mounted(){
      const startTime = 1665590400000
      this.value1 = [startTime,1668355200000]
    },
    methods: {
      show(){
        console.log('valie1',this.value1)
      },
      printQrCode () {
        const imgUrlStr = 'https://weiliicimg9.pstatp.com/weili/l/905526294583705654.jpg';
        let iframe = document.createElement('IFRAME'),
            doc = null,
            img = new Image();
      
        img.src = imgUrlStr;
        iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;');
        document.body.appendChild(iframe);
        doc = iframe.contentWindow.document;
        doc.write('<h2>Print Pictures and Words</h2>');
        console.log('doc')
        doc.body.append(img);
        doc.close();
        iframe.onload = function() { //解决图片显示不了的问题
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
          document.body.removeChild(iframe);
        };
      },
    }
  }
</script>
