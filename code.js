/* 老师模拟题 · 编程题（共 4 题）— 来源：题库/web前端技术试卷模板.docx · 仅复习展示 */
const CODE_BANK = [
  {
    title: "古诗文赏析页面",
    img: "assets/05.jpeg",
    req: `编写程序设计一个古诗文赏析的页面，页面效果如下图所示，具体要求如下：
1. 「古诗文赏析」为一级标题，背景颜色为 skyblue；
2. 古诗名为二级标题；
3. 作者文字为斜体；
4. 诗句行高为 2rem；
5. 图片宽度为 300px，高度 200px；
6. 所有内容居中显示。`,
    points: "标题层级与 skyblue 背景(2分)；作者斜体与行高(2分)；图片尺寸(2分)；整体居中(2分)；结构完整(2分)",
    code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>古诗文赏析</title>
  <style>
    body { text-align: center; margin: 0; font-family: "Microsoft YaHei", sans-serif; }
    h1 { background: skyblue; margin: 0; padding: 16px; }
    h2 { margin: 20px 0 8px; }
    .author { font-style: italic; margin-bottom: 16px; }
    .poem p { line-height: 2rem; margin: 4px 0; }
    img { width: 300px; height: 200px; object-fit: cover; margin-top: 16px; }
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
</html>`
  },
  {
    title: "名牌大学导航页面",
    img: "assets/04.png",
    req: `如下图所示，设计一个中国名牌大学的导航页面，点击链接可以链接到指定大学的主页。
复旦大学（http://www.fudan.edu.cn）；武汉大学（http://www.whu.edu.cn/）；西安交通大学（http://www.xjtu.edu.cn）；郑州轻工业大学（http://www.zzuli.edu.cn/）。
页面具体要求如下：
1. 标题为二级标题；
2. 超链接放在列表项标签 &lt;li&gt;&lt;/li&gt; 里；
3. 列表项在一行内显示；
4. 设置超链接左右内边距为 10px，上下内边距为 5px；
5. 鼠标悬浮在超链接上时，背景颜色为 lawngreen。`,
    points: "h2 标题(2分)；ul/li 结构与外链(3分)；一行显示(2分)；内边距(2分)；:hover 背景色(1分)",
    code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>中国名牌大学推荐</title>
  <style>
    ul { list-style: none; padding: 0; margin: 20px 0; display: flex; gap: 8px; }
    li { display: inline; }
    a {
      text-decoration: none; color: #551a8b;
      padding: 5px 10px;
    }
    a:hover { background: lawngreen; }
  </style>
</head>
<body>
  <h2>中国名牌大学推荐</h2>
  <hr>
  <ul>
    <li><a href="http://www.fudan.edu.cn" target="_blank">复旦大学</a></li>
    <li><a href="http://www.whu.edu.cn/" target="_blank">武汉大学</a></li>
    <li><a href="http://www.xjtu.edu.cn" target="_blank">西安交通大学</a></li>
    <li><a href="http://www.zzuli.edu.cn/" target="_blank">郑州轻工业大学</a></li>
  </ul>
</body>
</html>`
  },
  {
    title: "用户注册页面",
    img: "assets/06.jpeg",
    req: `编写程序设计一个用户注册页面，实现如下图所示页面效果。具体格式要求如下：
1. 所有表单项标题右对齐；
2. 所有输入项设置圆角半径 3px；
3. 为昵称设置提示信息；
4. 把昵称和密码框设置为必填项；
5. 当输入框获取焦点时，设置红色的阴影。`,
    points: "表单结构完整(2分)；label 右对齐(2分)；圆角与 placeholder(2分)；required(2分)；:focus 红色阴影(2分)",
    code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>用户注册</title>
  <style>
    fieldset { width: 420px; margin: 40px auto; }
    .row { margin: 10px 0; display: flex; align-items: center; }
    label { width: 90px; text-align: right; margin-right: 10px; }
    input, textarea, select { border-radius: 3px; padding: 4px 8px; }
    input:focus, textarea:focus { outline: none; box-shadow: 0 0 6px red; }
  </style>
</head>
<body>
  <form>
    <fieldset>
      <legend>用户注册</legend>
      <div class="row">
        <label for="nick">昵称：</label>
        <input type="text" id="nick" name="nick" placeholder="请输入昵称" required>
      </div>
      <div class="row">
        <label for="email">注册邮箱：</label>
        <input type="email" id="email" name="email">
      </div>
      <div class="row">
        <label for="pwd">密码：</label>
        <input type="password" id="pwd" name="pwd" required>
      </div>
      <div class="row">
        <label>性别：</label>
        <label><input type="radio" name="gender" value="男" checked> 男</label>
        <label><input type="radio" name="gender" value="女"> 女</label>
      </div>
      <div class="row">
        <label>兴趣爱好：</label>
        <label><input type="checkbox" name="hobby" value="游泳"> 游泳</label>
        <label><input type="checkbox" name="hobby" value="唱歌"> 唱歌</label>
        <label><input type="checkbox" name="hobby" value="跑步"> 跑步</label>
      </div>
      <div class="row">
        <label for="intro">自我介绍：</label>
        <textarea id="intro" name="intro" rows="4" cols="30"></textarea>
      </div>
      <div class="row" style="justify-content:center;">
        <button type="submit">立即注册</button>
      </div>
    </fieldset>
  </form>
</body>
</html>`
  },
  {
    title: "专业宣传页面",
    img: "assets/07.jpeg",
    req: `编写程序实现一个专业宣传页面，页面效果如下图所示。页面具体要求如下：
1. 标题字体大小 20px，颜色为 #007b3b；
2. 头部盒子高度 200px，宽度 900px，背景图片路径为 images/header-bg.jpg，「顽强拼搏，超越自我」居中显示；
3. 中间区域的左侧内容为有序列表；
4. 中间区域右侧盒子宽度 360px，边框宽度 5px、颜色 #fcd598，背景颜色 #f9eddd；
5. 底部背景颜色 #c15706，文字大小 12px，颜色白色。`,
    points: "标题样式(2分)；头部背景与 slogan(3分)；左右分栏与 ol 列表(3分)；公告栏样式(1分)；页脚样式(1分)",
    code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>移动软件专业</title>
  <style>
    body { margin: 0; font-family: "Microsoft YaHei", sans-serif; }
    .title { font-size: 20px; color: #007b3b; padding: 16px; }
    .banner {
      width: 900px; height: 200px; margin: 0 auto;
      background: url("images/header-bg.jpg") center/cover no-repeat;
      display: flex; align-items: center; justify-content: center;
      color: #007b3b; font-size: 24px; font-weight: bold;
    }
    .main {
      width: 900px; margin: 20px auto; display: flex; gap: 20px;
    }
    .main-left { flex: 1; }
    .main-left h2 { color: #007b3b; font-size: 18px; }
    .notice {
      width: 360px; border: 5px solid #fcd598;
      background: #f9eddd; padding: 12px; box-sizing: border-box;
    }
    .notice h3 { color: #007b3b; margin-top: 0; }
    footer {
      background: #c15706; color: #fff; font-size: 12px;
      text-align: center; padding: 12px; margin-top: 24px;
    }
  </style>
</head>
<body>
  <div class="title">欢迎报考郑州轻工业大学移动软件专业！</div>
  <div class="banner">顽强拼搏，超越自我</div>
  <div class="main">
    <div class="main-left">
      <h2>报考移动软件专业的十大理由</h2>
      <ol>
        <li>这里有来自五湖四海的兄弟姐妹……</li>
        <li>移动软件专业同学团结一心、锐意进取……</li>
        <li>移动软件已经成为郑州轻工业大学的一张名片！</li>
      </ol>
    </div>
    <aside class="notice">
      <h3>公告栏</h3>
      <p><strong>放假通知</strong></p>
      <p>根据学校安排，暑假放假时间为7月2日至8月26日……</p>
    </aside>
  </div>
  <footer>Copyright © 2017-2018 移动软件专业工作室版权所有 All rights reserved.</footer>
</body>
</html>`
  }
];
