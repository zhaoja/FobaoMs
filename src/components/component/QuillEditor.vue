<template>
	<div>
		<!-- 富文本编辑 -->
		<quill-editor ref="myTextEditor"
              v-model="content"
              :config="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)">
		</quill-editor>
		<!-- 富文本编辑 -->
	</div>
</template>

<script> 
  
	import { quillEditor ,Quill} from 'vue-quill-editor'	 
	
	import {ImageDrop} from 'quill-image-drop-module'
	import ImageResize from 'quill-image-resize-module'

	Quill.register('modules/imageResize', ImageResize)
	Quill.register('modules/imageDrop', ImageDrop)

	export default {
		components: {
			quillEditor
		  },
		data() {
      return {
		imageDrop: true,
		imageResize: {},
        name: 'register-modules-example',
        content: `<p><img src="/vue-quill-editor/static/images/surmon-6.jpg" width="500"></p>
                  <br>
                  <p><strong><em>Or drag/paste an image here.</em></strong></p>`,
        editorOption: {
          modules: {
            toolbar: [
               ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            history: {
              delay: 1000,
              maxStack: 50,
              userOnly: false
            },
            imageDrop: true,
            imageResize: {
              displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
              modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
            }
          }
        }
      }
    },
    mounted() {
      this.content = `<p><strong><em>Click on the Image Below to resize!</em></strong></p><br>` + this.content
    },
    computed: {
       
    },
    methods: {
      onEditorBlur(editor) {
        // console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        // console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        // console.log('editor ready!', editor)
      }
    }
	}
</script>

<style>
   
</style>

 