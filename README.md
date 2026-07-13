# fx-web · Web 前端技术期末复习
> 郑州轻工业大学 · 移动软件专业 · Web 前端技术课程期末复习网页
[![在线访问](https://img.shields.io/badge/在线访问-GitHub%20Pages-2563eb?style=flat-square)](https://moqix26.github.io/fx-web/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
面向 **郑州轻工业大学移动软件专业**《Web 前端技术》课程的期末复习工具。整合老师模拟卷题型与补充练习，支持在线刷题、自动评分与知识点大纲查阅，无需安装任何依赖，打开浏览器即可使用。
## 在线访问
**https://moqix26.github.io/fx-web/**
| 页面 | 说明 |
|------|------|
| [index.html](index.html) | 题库随机测试 · 刷题与评分 |
| [next.html](next.html) | 期末复习大纲 · 知识点速查 |
## 功能特性
- **四类题型全覆盖**：选择题、判断题、填空题、编程题
- **灵活组卷**：滑动条自定义各题型题量，支持单题型专项练习
- **随机抽题**：从题库中随机抽取，每次练习内容不同
- **答题体验**：计时器、答题卡、进度条、题目导航
- **自动评分**：交卷后即时出分，选择题/判断题自动判分，填空题支持按空给分
- **详细解析**：每题附带参考答案与记忆提示
- **复习大纲**：`next.html` 按章节整理 HTML / CSS / JavaScript 考点，含老师模拟卷高频题型
- **响应式布局**：适配电脑与手机浏览器
## 题库概览
| 题型 | 文件 | 题量 | 说明 |
|------|------|------|------|
| 选择题 | `choice.js` | 150 题 | 老师模拟 30 题 + 补充练习 120 题 |
| 判断题 | `judge.js` | 80 题 | 老师模拟 10 题 + 补充练习 70 题 |
| 填空题 | `fill.js` | 7 题 | 含配图与完整代码填空，覆盖表格、动画、JS 事件等 |
| 编程题 | `code.js` | 4 题 | 老师模拟卷主观题，附评分要点与参考代码 |
复习重点以 **HTML + CSS** 为主，**JavaScript** 覆盖考试常见基础；重点章节包括表格、表单、列表、Flex 弹性布局等。
## 项目结构
fx-web/ ├── index.html # 主页面 · 题库练习 ├── next.html # 复习大纲 ├── choice.js # 选择题题库 ├── judge.js # 判断题题库 ├── fill.js # 填空题题库 ├── code.js # 编程题题库 ├── assets/ # 题目配图 └── .github/workflows/ └── static.yml # GitHub Pages 自动部署

## 本地运行
本项目为纯静态网页，无需 Node.js 或构建工具。
**方式一：直接打开**
双击 `index.html` 即可在浏览器中打开（部分浏览器对 `file://` 协议有限制，推荐方式二）。
**方式二：本地静态服务器**
```bash
# 克隆仓库
git clone https://github.com/moqix26/fx-web.git
cd fx-web
# Python 3
python -m http.server 8080
# 或 Node.js（需安装 npx）
npx serve .
浏览器访问 http://localhost:8080 即可。
```
## 部署说明

仓库已配置 GitHub Actions（`.github/workflows/static.yml`），推送到 `main` 分支后会自动部署到 GitHub Pages。

## 使用建议

1. **先读大纲**：阅读 [复习大纲](next.html)，通读表格、表单、列表、Flex 等重点章节。
2. **专项练习**：在首页按题型调整题量，进行针对性刷题。
3. **对照解析**：交卷后查看解析与评分要点，重点记忆标有「记忆」提示的内容。
4. **编程题自评**：编程题为主观题，请对照参考答案与评分要点自行评分。

## 技术栈

- HTML5 / CSS3 / 原生 JavaScript
- 无框架、无构建步骤、零依赖

## 作者

**MoQix26**

- GitHub：[@moqix26](https://github.com/moqix26)

## 声明

本项目仅供课程复习与交流学习使用，题库内容来源于课堂资料与老师模拟卷，请勿用于商业用途。

---

如有问题或建议，欢迎提交 [Issue](https://github.com/moqix26/fx-web/issues)。
