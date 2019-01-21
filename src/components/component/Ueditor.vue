<template>
	<div>
	    <script :id="id" type="text/plain" ></script>
	</div>
</template>

<script> 

import '@/../static/ueditor/ueditor.config.js'
import '@/../static/ueditor/ueditor.all.js'
import '@/../static/ueditor/lang/zh-cn/zh-cn.js'
 
export default {
    name: "UE",
    props: {
      id: {
          type: String
      },
      config: {
          type: Object
      },
			defaultMsg: {
        type: String
      },
    },
    data() {
      return {
        editor: null
      }
    },
    mounted() {
      //初始化UE
			setTimeout(() => {
				const _this = this;
				UE.delEditor(this.id);
				this.editor = UE.getEditor(this.id,this.config);
				this.editor.addListener("ready", function () {
					_this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
				});
			},500)
    },
    destoryed() {
			this.editor.destory();
    },
    methods:{
      getUEContent: function(){
				let aa = this.editor.getContent()
        return aa;
      }
    }
  }
</script>

<style>
   
</style>

 