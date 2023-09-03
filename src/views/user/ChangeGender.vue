<template>
  <div>
    <Head>修改性别</Head>
    <table>
      <tr>
        <td>
          <input type="radio" name="gender" id="man" value="男" checked />
          <label for="man" class="dot-label">男</label>
        </td>
      </tr>
      <tr>
        <td>
          <input type="radio" name="gender" id="woman" value="女" />
          <label for="woman" class="dot-label">女</label>
        </td>
      </tr>
      <tr>
        <td>
          <input type="radio" name="gender" id="unknown" value="未知" />
          <label for="unknown" class="dot-label">未知</label>
        </td>
      </tr>
    </table>
  </div>
</template>
  
  <style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 11.5px;
  background-color: white;
}

td {
  padding: 10px;
}

.dot-label {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  line-height: 24px;
  color: #292929;
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
}

/* 隐藏原始的单选按钮 */
input[type='radio'] {
  display: none;
}

/* 自定义选项前小圆点的样式 */
.dot-label::before {
  content: '\25CB'; /* 使用 Unicode 符号表示空心圆 */
  margin-right: 5px; /* 空心圆和文字之间的间距 */
  font-size: 30px;
  color: #a7a7a7; /* 空心圆的边框颜色 */
  border-radius: 50%; /* 将方形边框转换为圆形 */
  width: 14px; /* 控制小圆点的宽度 */
  height: 14px; /* 控制小圆点的高度 */
  background-color: white; /* 空心圆的背景颜色 */
  text-align: center;
  line-height: px; /* 垂直居中文字 */
}

/* 自定义选中状态下的打勾样式 */
input[type='radio']:checked + .dot-label::before {
  content: '\2713'; /* 使用 Unicode 符号来表示打勾 */
  font-size: 14px; /* 打勾的大小 */
  color: white; /* 打勾的颜色 */
  margin-right: 5px; /* 小圆点和文字之间的间距 */
  color: white; /* 小圆点的颜色 */
  background: #11d075;
  border-radius: 9999px;
}
</style>
  