"use strict";(self.webpackChunkaurora_template=self.webpackChunkaurora_template||[]).push([[92],{575:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-a796ac14",path:"/Vue/Vue%E7%BB%84%E4%BB%B6%E9%97%B4%E5%B8%B8%E7%94%A8%E4%BC%A0%E5%8F%82%E6%96%B9%E5%BC%8F.html",title:"Vue组件间常用传参方式",lang:"zh-CN",frontmatter:{date:"2022/5/2 14:10",coverUrl:"/pic/7.jpg",stick:!1,keyword:"Vue,组件,传参",description:"Vue组件间常用传参方式",title:"Vue组件间常用传参方式",tag:["Vue","组件","传参"],categories:["Vue","组件","传参"]},excerpt:"",headers:[{level:2,title:"✨Vue组件间常用传参方式✨",slug:"✨vue组件间常用传参方式✨",children:[{level:3,title:"1. props、emit（最常用的父子通讯方式）",slug:"_1-props、emit-最常用的父子通讯方式",children:[]},{level:3,title:"2. 事件总线EventBus（常用任意两个组件之间的通讯）",slug:"_2-事件总线eventbus-常用任意两个组件之间的通讯",children:[]},{level:3,title:"3.Vuex状态管理（vue的核心插件，用于任意组件的任意通讯，需注意刷新后有可能vuex数据会丢失）",slug:"_3-vuex状态管理-vue的核心插件-用于任意组件的任意通讯-需注意刷新后有可能vuex数据会丢失",children:[]}]}],git:{updatedTime:null,contributors:[]}}},1312:(n,s,a)=>{a.r(s),a.d(s,{default:()=>f});var p=a(6252);const e=(0,p.uE)('<h2 id="✨vue组件间常用传参方式✨" tabindex="-1"><a class="header-anchor" href="#✨vue组件间常用传参方式✨" aria-hidden="true">#</a> ✨Vue组件间常用传参方式✨</h2><h3 id="_1-props、emit-最常用的父子通讯方式" tabindex="-1"><a class="header-anchor" href="#_1-props、emit-最常用的父子通讯方式" aria-hidden="true">#</a> 1. props、emit（最常用的父子通讯方式）</h3><h4 id="父传子" tabindex="-1"><a class="header-anchor" href="#父传子" aria-hidden="true">#</a> 父传子</h4><blockquote><p>父组件传入属性，子组件通过<code>props</code>接收，就可以在内部<code>this.XXX</code>的方式使用</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 父组件</span>\n<span class="token operator">&lt;</span>hello<span class="token operator">-</span>world msg<span class="token operator">=</span><span class="token string">&quot;hello world!&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>hello<span class="token operator">-</span>world<span class="token operator">&gt;</span>\n\n<span class="token comment">// 子组件</span>\n<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n\nprops：<span class="token punctuation">[</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="子传父" tabindex="-1"><a class="header-anchor" href="#子传父" aria-hidden="true">#</a> 子传父</h4><blockquote><p>子组件<code>$emit</code>（事件名，传递的参数）向外弹出一个自定义事件，在父组件中监听子组件的自定义事件，同时也能获取子组件传出来的参数</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\t子组件</span>\n<span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;username&quot;</span> @change<span class="token operator">=</span><span class="token string">&quot;setUser&quot;</span><span class="token operator">&gt;</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&#39;tct&#39;</span>\n<span class="token punctuation">}</span>\n\nmethods：<span class="token punctuation">{</span>\n  \t<span class="token function">setUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  \t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;transferUser&#39;</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span>\n  \t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//\t父组件</span>\n<span class="token operator">&lt;</span>hello<span class="token operator">-</span>world @transferUser<span class="token operator">=</span><span class="token string">&quot;getUser&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>hello<span class="token operator">-</span>world<span class="token operator">&gt;</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">user</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>\n<span class="token punctuation">}</span>\n\n\nmethods：<span class="token punctuation">{</span>\n  \t<span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  \t\t<span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> msg\n  \t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_2-事件总线eventbus-常用任意两个组件之间的通讯" tabindex="-1"><a class="header-anchor" href="#_2-事件总线eventbus-常用任意两个组件之间的通讯" aria-hidden="true">#</a> 2. 事件总线<code>EventBus</code>（常用任意两个组件之间的通讯）</h3><blockquote><p>原理：注册的事件存起来，等触发事件时再调用。定义一个类去处理事件，并挂载到Vue实例的this上即可注册和触发事件，也可拓展一些事件管理</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Bus</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>callbackList <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">$on</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 注册事件</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>callbackList<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>callbackList<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>callbackList<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>callback<span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">$emit</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 触发事件</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>callbackList<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>callbackList<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 任意两个组件中</span>\n<span class="token comment">// 组件一：在组件的 mounted() 去注册事件</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span> handleConfirm<span class="token punctuation">)</span>\n\n<span class="token comment">// 组件二：触发事件(如：点击事件后执行触发事件即可)</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;confirm&#39;</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_3-vuex状态管理-vue的核心插件-用于任意组件的任意通讯-需注意刷新后有可能vuex数据会丢失" tabindex="-1"><a class="header-anchor" href="#_3-vuex状态管理-vue的核心插件-用于任意组件的任意通讯-需注意刷新后有可能vuex数据会丢失" aria-hidden="true">#</a> 3.Vuex状态管理（vue的核心插件，用于任意组件的任意通讯，需注意刷新后有可能vuex数据会丢失）</h3>',12),t=(0,p.Uk)("创建全局唯一的状态管理仓库"),o=(0,p._)("code",null,"store",-1),c=(0,p.Uk)(",有同步"),l=(0,p._)("code",null,"mutations",-1),u=(0,p.Uk)("、异步"),r=(0,p._)("code",null,"actions",-1),i=(0,p.Uk)("的方式去管理数据，有缓存数据"),k=(0,p._)("code",null,"getters",-1),b=(0,p.Uk)("，还能分成各个模块"),m=(0,p._)("code",null,"modules",-1),d=(0,p.Uk)("易于维护，详细使用见"),h={href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},g=(0,p.Uk)("Vuex官方文档"),v={},f=(0,a(3744).Z)(v,[["render",function(n,s){const a=(0,p.up)("ExternalLinkIcon");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,(0,p._)("ul",null,[(0,p._)("li",null,[t,o,c,l,u,r,i,k,b,m,d,(0,p._)("a",h,[g,(0,p.Wm)(a)])])])],64)}]])}}]);