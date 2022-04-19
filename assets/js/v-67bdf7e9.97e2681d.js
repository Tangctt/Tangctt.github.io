"use strict";(self.webpackChunkaurora_template=self.webpackChunkaurora_template||[]).push([[246],{5077:(a,s,n)=>{n.r(s),n.d(s,{data:()=>e});const e={key:"v-67bdf7e9",path:"/Other/ABAQUS/ABAQUS%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84Mask%E6%8E%A9%E7%A0%81%E6%96%B9%E5%BC%8F%E7%B4%A2%E5%BC%95.html",title:"ABAQUS二次开发中的Mask掩码方式索引",lang:"zh-CN",frontmatter:{date:"2022/4/4 20:08",coverUrl:"/pic/9.jpg",stick:!1,keyword:"ABAQUS,二次开发,Mask掩码，索引",description:"ABAQUS二次开发中的Mask掩码方式索引",title:"ABAQUS二次开发中的Mask掩码方式索引",tag:["ABAQUS","二次开发","Mask掩码，索引"],categories:["ABAQUS","二次开发","Mask掩码，索引"]},excerpt:"",headers:[{level:2,title:"✨ABAQUS二次开发中的Mask掩码方式索引✨",slug:"✨abaqus二次开发中的mask掩码方式索引✨",children:[{level:3,title:"Mask掩码方式索引介绍：",slug:"mask掩码方式索引介绍",children:[]},{level:3,title:"三种索引方式",slug:"三种索引方式",children:[]},{level:3,title:"索引号切换方式",slug:"索引号切换方式",children:[]},{level:3,title:"注意",slug:"注意",children:[]}]}],git:{updatedTime:null,contributors:[]}}},4646:(a,s,n)=>{n.r(s),n.d(s,{default:()=>p});const e=(0,n(6252).uE)('<h2 id="✨abaqus二次开发中的mask掩码方式索引✨" tabindex="-1"><a class="header-anchor" href="#✨abaqus二次开发中的mask掩码方式索引✨" aria-hidden="true">#</a> ✨ABAQUS二次开发中的Mask掩码方式索引✨</h2><h3 id="mask掩码方式索引介绍" tabindex="-1"><a class="header-anchor" href="#mask掩码方式索引介绍" aria-hidden="true">#</a> Mask掩码方式索引介绍：</h3><p>在做ABAQUS二次开发时，借助rpy文件进行参考，是一个很好的开发方式，但在使用中会发现对一个线、面、体等几何特征索引时，出现的表现方式总是用#号开头的字母数字表示的。 比如：</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    f1 <span class="token operator">=</span> a<span class="token punctuation">.</span>instances<span class="token punctuation">[</span><span class="token string">&#39;Part-rigid-1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>faces\n    faces1 <span class="token operator">=</span> f1<span class="token punctuation">.</span>getSequenceFromMask<span class="token punctuation">(</span>mask<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;[#20]&#39;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>其中，getSequenceFromMask方法就是获取Abaqus Cae中选取的线、面、体等几何特征。里面给出的是掩码编码，是为了数据安全的一种掩码，一般不具备通用性，在参数化建模时应尽量避免使用它。</p><h3 id="三种索引方式" tabindex="-1"><a class="header-anchor" href="#三种索引方式" aria-hidden="true">#</a> 三种索引方式</h3><p>其实ABAQUS提供了三种对单个对象或者多个对象的索引方式：</p><ol><li>getSequenceFromMask的方式（默认的方式） 提供掩码数据</li><li>findAt()+坐标值的方式 提供精确的坐标数据</li><li>元素实际索引号的方式 提供精确的单元索引号</li></ol><h3 id="索引号切换方式" tabindex="-1"><a class="header-anchor" href="#索引号切换方式" aria-hidden="true">#</a> 索引号切换方式</h3><ol><li>在命令交互行（Abaqus/CAE最下方）输入以下指令：</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>session<span class="token punctuation">.</span>journalOptions<span class="token punctuation">.</span>setValues<span class="token punctuation">(</span>replayGeometry<span class="token operator">=</span>COORDINATE<span class="token punctuation">,</span>recoverGeometry<span class="token operator">=</span> COORDINATE<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这种方式在rpy文件中输出的索引格式为findAt()+坐标值，即第二种方式。</p><ol start="2"><li>在命令交互行（Abaqus/CAE最下方）输入以下指令 ：</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>session<span class="token punctuation">.</span>journalOptions<span class="token punctuation">.</span>setValues<span class="token punctuation">(</span>replayGeometry<span class="token operator">=</span>INDEX<span class="token punctuation">,</span>recoverGeometry<span class="token operator">=</span>INDEX\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>该方式会以元素的实际索引号作为对象的索引方式，即第三种方式。</p><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ul><li>在二次开发参数化建模的脚本过程中，如果模型简单且使用Mask建模不出错的情况下，就可以使用默认的Mask掩码方式（因为使用的Mask掩码没有那么精确，刚好和新的模型选中相同的几何特征）</li><li>如果使用了Mask掩码方式，需要注意是否会选择错误的几何特性，可能会导致建模错误</li><li>建议使用第二种findAt()+坐标值的方式来进行索引和参数化建模</li><li>在做二次开发的时候可以切换一下索引方式，看起来会更方便，索引更准确</li></ul>',17),t={},p=(0,n(3744).Z)(t,[["render",function(a,s){return e}]])}}]);