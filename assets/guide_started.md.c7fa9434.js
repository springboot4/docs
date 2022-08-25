import{_ as s,c as a,o as n,a as p}from"./app.45f56cee.js";const m=JSON.parse('{"title":"Count of DB:","description":"","frontmatter":{},"headers":[],"relativePath":"guide/started.md"}'),l={name:"guide/started.md"},e=p(`<ul><li>\u4F9D\u6B21\u6267\u884Csql\u6587\u4EF6\u5373\u53EF\u521B\u5EFA\u51FA\u6240\u9700\u6570\u636E\u5E93\u4EE5\u53CA\u57FA\u7840\u6570\u636E\u3002</li></ul><p><img src="https://minio.pigx.vip/oss/2022/07/z4Qd1P.png" alt=""></p><ul><li><p>\u542F\u52A8nacos\uFF0C\u6CE8\u610F\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u4E2D\u4F60\u7684\u6570\u636E\u5E93\u5BC6\u7801\u3002</p><p><img src="https://minio.pigx.vip/oss/2022/07/Tbhv3U.png" alt=""></p></li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">spring.datasource.platform=mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">### Count of DB:</span></span>
<span class="line"><span style="color:#A6ACCD;">db.num=1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">### Connect URL of DB:</span></span>
<span class="line"><span style="color:#A6ACCD;">db.url.0=jdbc:mysql://fxz-mysql:3306/fxz_cloud_nacos?characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useUnicode=true&amp;useSSL=false&amp;serverTimezone=UTC</span></span>
<span class="line"><span style="color:#A6ACCD;">db.user.0=root</span></span>
<span class="line"><span style="color:#A6ACCD;">db.password.0=root #\u4FEE\u6539\u4E3A\u4F60\u7684\u6570\u636E\u5E93\u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u914D\u7F6Ehost\u6587\u4EF6,\u6CE8\u610F\u5C06127.0.0.1\u4FEE\u6539\u4E3A\u4F60\u76F8\u5E94\u4E2D\u95F4\u4EF6\u7684\u5730\u5740\u5373\u53EF\u3002es\u3001mq\u53EF\u9009\u3002</li></ul><div class="language-tex"><button class="copy"></button><span class="lang">tex</span><pre><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1 fxz-mysql #\u4FEE\u6539\u4E3A\u4F60\u76F8\u5E94\u4E2D\u95F4\u4EF6\u7684\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 fxz-rabbitmq #\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 fxz-redis  #\u4FEE\u6539\u4E3A\u4F60\u76F8\u5E94\u4E2D\u95F4\u4EF6\u7684\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 fxz-oss   #\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 fxz-elasticsearch #\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 fxz-gateway</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 fxz-nacos</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 fxz-seata #\u4FEE\u6539\u4E3A\u4F60\u76F8\u5E94\u4E2D\u95F4\u4EF6\u7684\u5730\u5740</span></span>
<span class="line"></span></code></pre></div>`,6),o=[e];function t(c,r,i,C,A,d){return n(),a("div",null,o)}const _=s(l,[["render",t]]);export{m as __pageData,_ as default};
