<template>
  <ul class="alphabet">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    alphabetList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    letters () {
      const letters = []
      for (const i in this.alphabetList) {
        letters.push(this.alphabetList[i])
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 获取 A 元素到顶部的距离
    this.startY = this.$refs.A[0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    // 实现滑动字母数据滑动
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 节流操作，在 10 毫秒内重新触发该事件会重新执行代码
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 89 是顶部绿色区域的高度 20 是字幕高度
          // 推荐使用 js 自带方法求高度, 因为当前是移动端适配用的是 rem
          // 这里是为了图方便
          const touchY = e.touches[0].clientY - 89
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="less" scoped>
.alphabet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.78rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  .item {
    line-height: .4rem;
    text-align: center;
    color: @over-bg-color;
  }
}
</style>
