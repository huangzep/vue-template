import Vue from 'vue'

const stataicurl = ''

Vue.mixin({
	methods: {
    pimg(name) {
      return stataicurl + '/static/img/' + name
    }
  }
})