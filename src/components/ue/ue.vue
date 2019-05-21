<template>
	<div>
		<script id="editor" type="text/plain"></script>
	</div>
</template>
<script>
export default {
  name: 'UE',
  data() {
    return {
      editor: null
    }
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    defaultMsg: {
      type: String,
      default: ''
    },
		richMsg: {
      type: String
    },
    config: {
      type: Object,
      default: function () {
        return {
          initialFrameHeight: 400,
          zIndex: 2100,
          elementPathEnabled: false,
          wordCount: false,
          toolbars: [
            [
              'source', 'customstyle', 'paragraph', 'fontsize', 
              'bold', 'italic', 'underline', 'fontborder', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist',
              'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify',
              'link', 'simpleupload', 'insertimage', 'insertvideo', 'attachment'
            ]
          ]
        }
      }
    }
  },
  mounted() {
    const _this = this
    _this.editor = UE.getEditor('editor', _this.config) // 初始化UE
    _this.editor.addListener('ready', function() {
      _this.editor.setContent(_this.defaultMsg) // 确保UE加载完成后，放入内容。
      _this.editor.addListener('contentChange', function(){
        _this.$emit('contentChange', _this.editor.getContent())
      })
    })
  },
  methods: {
    getUEContent() {
      // 获取内容方法
      return this.editor.getContent()
    },
    setUEContent(val) {
			this.editor.setContent(val)
    }
  },
  destroyed() {
    this.editor.destroy()
  }
}
</script>
