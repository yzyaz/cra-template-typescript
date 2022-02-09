# cra-template-typescript

This is the official TypeScript template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template typescript` when creating a new app.

For example:

```sh
npx create-react-app my-app --scripts-version @yzyaz/react-scripts --template @yzyaz/typescript

# or

yarn create react-app my-app --scripts-version @yzyaz/react-scripts --template @yzyaz/typescript
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

## 自定义包含内容

### css配置:
可使用less。
且默认开启postcss.config.js配置方便配置(若需要关闭只使用默认的配置可设置环境变量YZY_DEFAULT_POSTCSS_CONFIG=true)

### css架构itcss:
在assets>style中的css架构
+ base: 基本样式的调整,如 a p
+ object: 全局的一些样式类名 和一些 一个属性的一个类, 如fz4, fz16
+ theme: 主题相关变量和公共变量等
+ tools: 一些less的方法 函数等(这里通过less-loader的配置会自动引入项目, 无需手动引入)


### 请求axios:
+ 在api>createCancel.ts中配置了取消连续请求并引入配置(增加接口时把[config]的params: { cancle: true }打开即可开启), 
+ 在api>createError.ts中配置了自定义错误(未引入, 根据自己项目的需要配置引入)


### 全局管理rematch:
默认采用rematch全局管理, 见models目录, 使用见pages>Account>index.tsx

### wdry
默认加入了@welldone-software/why-did-you-render来进行页面多余渲染的检测

### GitHub Actions
在.github>node.yml中配置了部署至GitHub Pages和自己服务器的脚本, 打开注释即可, 具体配置见文档: https://yzyaz.yuque.com/docs/share/ed27925f-1396-490b-9106-2ebea37be9df?# 《GitHub actions与部署至GitHub pages和部署至》

### 路由
使用react-router-config进行路由管理

### 提交规范
使用husky, 对提交时进行规范检查, 包含: 
+ commitlint: 检查提交规范, 不规范则退出, 规范如下:

  ```text
   <type>(<scope>): <subject>
    │       │             │
    │       │             └─⫸ 描述：指的是对代码变更的简短总结
    │       │
    │       └─⫸ 作用域: animations|bazel|benchpress|common|compiler|...
    │
    └─⫸ 提交类型：build|ci|docs|feat|fix|perf|refactor|test...（必须, 类型见.czrc文件）
  ```

  可手敲, 也可使用这两个命令进行规范提交

  ```sh
  yarn commit
  #or
  npm run commit
  ```
  
+ eslint: 检查错误, 超过0个提示则退出
+ stylelint: 检查错误, 有报错则退出
+ prettier: 使用prettier进行格式化

### commit记录生成
```sh
yarn release
#or
npm run release
```
