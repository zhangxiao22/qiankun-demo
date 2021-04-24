
# 项目说明 qiankun-vue-demo
用qiankun来实现vue技术栈的前端微服务

# main-app是主项目，b-child、c-child是hash是history模式路由的子项目

# qiankun的开发和打包和正常模式一模一样，它使用一个全局变量__POWERED_BY_QIANKUN__来区分微前端模式和正常模式，不需要额外的配置和代码。


# 运行和打包
在根目录下：

先安装依赖： npm install，再执行npm run install-all为所有项目安装依赖，最后执行npm run start-all即可启动所有的项目。

npm run build-all可以打包所有vue项目。