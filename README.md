# Chrome Extension

## 简介
Chrome 根据扩展程序的 `manifest.json` 来运行，所以需要将项目 public 目录下的 manifest.json 修改为 Chrome 能识别的字段。\
修改完后在终端执行 npm run build 构建项目，此时会生成一个 build 文件夹。\
打开 Chrome 设置，点击扩展，开启开发者模式，点击Load unpacked，选择刚生成的 build 文件夹，即可看到扩展程度加载成功了。

**在编写扩展相关功能时，可执行 `npm i -D @types/chrome` 安装 chrome 包来优化开发。**

## 配置
确保已安装 Node.js 和 npm。\
实现完功能后，需要将代码文件打包并在 `manifest.json` 中进行配置。由于 `create-react-app` 会将 TS 文件打包成 `[name].[hash].chunk.js` 的形式，所以可以使用 `CRACO` 来优化修改配置。
1. 执行 `npm i -D @craco/craco` 安装 `CRACO`
2. 在项目根目录下创建 `craco.config.js`
3. 修改 `package.json`，将 `scripts` 部分的 `react-scripts` 修改为 `craco`
4. 修改 `manifest.json`，增加 `background` 和 `content_scripts` 分别对应前面的 service workers 和 content scripts 编译出来的 JS 脚本
5. 修改完成后，运行 `npm run build` 重新打包后再刷新或者重新加载插件

不实用 craco 的配置：
给 build 命令设置 `INLINE_RUNTIME_CHUNK=false`，所有的JS都会构建成独立的文件，然后引入HTML中加载使用。
```json
{
	"scripts": {
		"start": "react-scripts start",
		"build": "INLINE_RUNTIME_CHUNK=false react-scripts build",
		"test": "react-scripts test",
		"eject": "react-scripts eject"
	}
}
```

## 本地启动运行
### 1. `npm install`
安装所需要的依赖包。

### 2. `npm run build`
将文件打包到 `/build` 路径下。

### 3. 加载插件到 Chrome
打开 Chrome 设置，点击扩展，开启开发者模式，点击Load unpacked，选择刚生成的 build 文件夹，即可看到扩展程度加载成功了。

### 其他： `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### 借鉴：
https://qileq.com/article/202303190001/
