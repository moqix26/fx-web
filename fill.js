/* 填空题题库 — 老师模拟 3 题 + 同卷风格补充 4 题（共 7 题，均含配图/完整页面代码） */
const FILL_BANK = [
  {
    title: "学生信息表",
    desc: "按下图所示表格效果，完成代码填空,主要内容为添加表格标题，设置跨行、跨列属性。",
    img: "assets/01.png",
    code: `<html>
<head>
  <meta charset="utf-8"/>
  <title>学生信息表</title>
</head>
<body>
  <table border="1" width="300px" cellspacing="0">
    ______ <!-- 为表格添加标题 -->
    <tr>
      <th ______>学号</th>
      <th ______>个人信息</th>
    </tr>
    <tr>
      <th align="center">姓名</th>
      <th align="center">性别</th>
      <th align="center">年龄</th>
    </tr>
    <tr>
      <td>007</td>
      <td>李志玲</td>
      <td>女</td>
      <td>19</td>
    </tr>
    <tr>
      <td>008</td>
      <td>王先进</td>
      <td>男</td>
      <td>20</td>
    </tr>
  </table>
</body>
</html>`,
    blanks: [
      {a:"<caption>学生信息表</caption>", e:"caption 标签为表格添加标题"},
      {a:"rowspan=\"2\"", e:"学号列纵向合并两行"},
      {a:"colspan=\"3\"", e:"个人信息横向合并三列"}
    ]
  },
  {
    title: "CSS3 旋转动画",
    desc: "下面的页面利用 CSS3 变换和动画技术，设计一个旋转的图片，当鼠标放到图片上时，停止旋转，完成代码填空。",
    img: "assets/02.jpeg",
    code: `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <style>
    ______ { /*  创建动画 anim */
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    div {
      width: 300px;
      height: 300px;
      border: 1px dotted red;
      ______; /*设置圆角*/
      background-image: url('../../images/animation1.png');
      ______: anim 3s linear infinite; /*设置动画复合属性 */
    }
    div:hover {
      ______; /*暂停动画 */
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`,
    blanks: [
      {a:"@keyframes anim", e:"创建名为 anim 的关键帧动画"},
      {a:"border-radius: 50%", e:"/*设置圆角*/"},
      {a:"animation", e:"/*设置动画复合属性*/ 前的 animation 属性名"},
      {a:"animation-play-state: paused", e:"/*暂停动画*/"}
    ]
  },
  {
    title: "价格与数量计算",
    desc: "设计一个页面，在输入价格和数量之后，单击【确定】按钮，弹框显示计算的总价，按下图所示效果，完成代码填空。",
    img: "assets/03.jpeg",
    code: `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>calculate</title>
</head>
<body>
  <label for="price">价格：</label>
  <input type="text" name="价格" id="price" /><br />
  <label for="number">数量：</label>
  <input type="text" name="数量" id="number" />
  <button ______>确定</button>
  <script type="text/javascript">
    var btn = document.getElementById('calc')
    btn.onclick = ______ //绑定按钮单击事件处理函数 
    function compute() {
      var price = document.getElementById('price')
      var number = document.getElementById('number')
      var total = 0
      total = parseInt(price.value) * parseInt(number.value)
      ______ //弹框显示总价
    }
  </script>
</body>
</html>`,
    blanks: [
      {a:"id=\"calc\"", e:"按钮 id 与 getElementById('calc') 对应"},
      {a:"compute", e:"//绑定按钮单击事件处理函数"},
      {a:"alert(total)", e:"//弹框显示总价"}
    ]
  },
  {
    title: "古诗文赏析页面样式",
    desc: "按下图所示页面效果，完成代码填空。主要内容为设置标题背景、作者斜体、诗句行高及整体居中。",
    img: "assets/05.jpeg",
    code: `<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>古诗文赏析</title>
  <style>
    body {
      ______: center; /* 所有内容居中显示 */
      margin: 0;
    }
    h1 {
      background: ______; /* 标题背景色 skyblue */
      margin: 0;
      padding: 16px;
    }
    .author {
      font-style: ______; /* 作者文字斜体 */
    }
    .poem p {
      line-height: ______; /* 诗句行高 2rem */
    }
    img {
      width: 300px;
      height: 200px;
    }
  </style>
</head>
<body>
  <h1>古诗文赏析</h1>
  <h2>登鹳雀楼</h2>
  <p class="author">唐 · 王之涣</p>
  <div class="poem">
    <p>白日依山尽，黄河入海流。</p>
    <p>欲穷千里目，更上一层楼。</p>
  </div>
  <img src="images/poem.jpg" alt="登鹳雀楼">
</body>
</html>`,
    blanks: [
      {a:"text-align", e:"/* 所有内容居中显示 */ 属性名"},
      {a:"skyblue", e:"/* 标题背景色 skyblue */"},
      {a:"italic", e:"/* 作者文字斜体 */ font-style 取值"},
      {a:"2rem", e:"/* 诗句行高 2rem */"}
    ]
  },
  {
    title: "名牌大学导航链接",
    desc: "按下图所示导航效果，完成代码填空。主要内容为列表横向排列、超链接内边距及鼠标悬浮变色。",
    img: "assets/04.png",
    code: `<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>中国名牌大学推荐</title>
  <style>
    ul {
      list-style: none;
      padding: 0;
      display: ______; /* 列表项在一行内显示 */
      gap: 8px;
    }
    a {
      text-decoration: none;
      ______: 5px 10px; /* 上下 5px，左右 10px 内边距 */
    }
    a:hover {
      background: ______; /* 鼠标悬浮背景 lawngreen */
    }
  </style>
</head>
<body>
  <h2>中国名牌大学推荐</h2>
  <hr>
  <ul>
    <li><a href="http://www.fudan.edu.cn">复旦大学</a></li>
    <li><a href="http://www.whu.edu.cn/">武汉大学</a></li>
    <li><a href="http://www.xjtu.edu.cn">西安交通大学</a></li>
    <li><a href="http://www.zzuli.edu.cn/">郑州轻工业大学</a></li>
  </ul>
</body>
</html>`,
    blanks: [
      {a:"flex", e:"/* 列表项在一行内显示 */ display 取值"},
      {a:"padding", e:"/* 上下 5px，左右 10px 内边距 */ 属性名"},
      {a:"lawngreen", e:"/* 鼠标悬浮背景 lawngreen */"}
    ]
  },
  {
    title: "用户注册表单样式",
    desc: "按下图所示注册页面效果，完成代码填空。主要内容为标签右对齐、输入框圆角、提示信息与焦点阴影。",
    img: "assets/06.jpeg",
    code: `<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>用户注册</title>
  <style>
    label {
      text-align: ______; /* 表单项标题右对齐 */
      width: 90px;
      display: inline-block;
    }
    input, textarea {
      border-radius: ______; /* 圆角半径 3px */
    }
    input:focus, textarea:focus {
      outline: none;
      box-shadow: 0 0 6px ______; /* 获取焦点时红色阴影 */
    }
  </style>
</head>
<body>
  <form>
    <fieldset>
      <legend>用户注册</legend>
      <p>
        <label for="nick">昵称：</label>
        <input type="text" id="nick" ______="请输入昵称" ______ />
      </p>
      <p>
        <label for="pwd">密码：</label>
        <input type="password" id="pwd" ______ />
      </p>
      <p><button type="submit">立即注册</button></p>
    </fieldset>
  </form>
</body>
</html>`,
    blanks: [
      {a:"right", e:"/* 表单项标题右对齐 */"},
      {a:"3px", e:"/* 圆角半径 3px */"},
      {a:"red", e:"/* 获取焦点时红色阴影 */"},
      {a:"placeholder", e:"为昵称设置提示信息的属性名"},
      {a:"required", e:"昵称必填属性"},
      {a:"required", e:"密码必填属性"}
    ]
  },
  {
    img: "assets/08.jpeg",
    code: `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>greet</title>
</head>
<body>
  姓名：<input type="text" id="uname" /><br />
  <button ______>确定</button>
  <script type="text/javascript">
    var btn = document.getElementById('greetBtn')
    btn.onclick = ______ //绑定按钮单击事件处理函数 
    function showGreet() {
      var name = document.getElementById('uname').value
      ______ //弹框显示问候语
    }
  </script>
</body>
</html>`,
    blanks: [
      {a:"id=\"greetBtn\"", e:"按钮 id 与 getElementById('greetBtn') 对应"},
      {a:"showGreet", e:"//绑定按钮单击事件处理函数"},
      {a:"alert('你好，' + name)", e:"//弹框显示问候语"}
    ]
  },
  {
    title: "专业宣传页面样式",
    desc: "按下图所示专业宣传页面效果，完成代码填空。主要内容为标题颜色、公告栏边框色及页脚背景色。",
    img: "assets/07.jpeg",
    code: `<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>移动软件专业</title>
  <style>
    .title {
      font-size: 20px;
      color: ______; /* 标题颜色 #007b3b */
    }
    .notice {
      width: 360px;
      border: 5px solid ______; /* 边框颜色 #fcd598 */
      background: #f9eddd;
      padding: 12px;
    }
    footer {
      background: ______; /* 页脚背景 #c15706 */
      color: #fff;
      font-size: 12px;
      text-align: center;
      padding: 12px;
    }
  </style>
</head>
<body>
  <div class="title">欢迎报考郑州轻工业大学移动软件专业！</div>
  <aside class="notice">
    <h3>公告栏</h3>
    <p>放假通知……</p>
  </aside>
  <footer>Copyright © 移动软件专业工作室</footer>
</body>
</html>`,
    blanks: [
      {a:"#007b3b", e:"/* 标题颜色 #007b3b */"},
      {a:"#fcd598", e:"/* 边框颜色 #fcd598 */"},
      {a:"#c15706", e:"/* 页脚背景 #c15706 */"}
    ]
  }
];
