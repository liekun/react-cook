# react-template
这是一个基于 webpack + typescript + react 的基础项目模板。

## 组成部分
- webpack 产品构建配置
- webpack-dev-server 热更新开发环境配置
- TypeScript 编译环境
- SCSS 编译环境
- HTML 模板配置、解析、静态资源路径自解析
- 提取公共模块插件、分离 React 第三方模块
- 代码质量检测 tslint 及推荐风格配置

## 安装方法

```
git clone https://github.com/aosnow/react-template.git [项目名称]
```
根据所设置的`项目名称`来创建文件夹，并将该项目的所有内容都克隆到本地该文件夹中。

## 开发调试

```
cd [项目名称]
npm start
```
在命令行模式下，进入到项目根目录，然后运行启动指令。

## 构建打包

```
cd [项目名称]
npm run build
```
在命令行模式下，进入到项目根目录，然后运行构建指令。