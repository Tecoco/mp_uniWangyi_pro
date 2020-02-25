//1、引入koa和koa-router
const Koa = require('koa');
const KoaRouter = require('koa-router');

//2、生成应用和路由器对象
const app = new Koa();
const router = new KoaRouter();

//获取首页数据
let indexData = require('./datas');
// console.log('-------', indexData);
router.get('/getIndex', (ctx, next)=>{
    ctx.body = {
        code: 0,
        data: indexData
    };
});

//3、安装路由器，声明使用中间件
app.
    use(router.routes())
    .use(router.allowedMethods());

//3、监听
app.listen('4000', ()=>{
    console.log('服务器地址：http://localhost:4000');
});