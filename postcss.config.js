module.exports = {
  plugins: {
    // 把px转vw vh
    'postcss-px-to-viewport': {
      unitToConvert: 'px', //需要转换的单位，默认为"px"
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度
      propList: ['*'], // 能转化为vw的属性列表，*表示所有都需要转换
    },
  },
};