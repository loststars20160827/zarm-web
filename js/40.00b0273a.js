(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{114:function(n,e,t){"use strict";t.r(e);var o=t(22),r=t.n(o),a=t(18),i=t.n(a),s=t(19),l=t.n(s),c=t(20),u=t.n(c),d=t(21),p=t.n(d),m=t(172),h=(t(170),t(178),t(230),t(355),t(188),function(n){function e(){return i()(this,e),u()(this,(e.__proto__||r()(e)).apply(this,arguments))}return p()(e,n),l()(e,[{key:"document",value:function(){return t(357)}}]),e}(m.a));e.default=h},170:function(n,e,t){"use strict";t(65)},172:function(n,e,t){"use strict";var o=t(173),r=t.n(o),a=t(177),i=t.n(a),s=t(179),l=t.n(s),c=t(180),u=t.n(c),d=t(22),p=t.n(d),m=t(18),h=t.n(m),f=t(19),v=t.n(f),y=t(20),g=t.n(y),k=t(21),b=t.n(k),E=t(0),C=t.n(E),_=t(43),U=t.n(_),w=t(171),B=t.n(w),M=t(181),D=t.n(M),N=t(176),S=t.n(N),I=t(23),x=t.n(I),T=t(182),j=t(1),L=t.n(j),O=t(175),R=t.n(O),A=(t(183),t(184),t(185),t(186),t(187),function(n){function e(){return h()(this,e),g()(this,(e.__proto__||p()(e)).apply(this,arguments))}return b()(e,n),v()(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props,t=e.onChange,o=e.value;this.cm=R()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(o),this.cm.on("changes",function(e){t&&(clearTimeout(n.timeout),n.timeout=setTimeout(function(){t(e.getValue())},300))})}},{key:"render",value:function(){var n=this;return C.a.createElement("div",{className:"editor",ref:function(e){n.editor=e}})}}]),e}(E.Component)),H=A;A.propTypes={onChange:L.a.func,value:L.a.string},A.defaultProps={onChange:function(){},value:""};var F=function(n){function e(n){h()(this,e);var t=g()(this,(e.__proto__||p()(e)).call(this,n));return t.playerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.description=B()(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={showBlock:!1},t.blockControl=t.blockControl.bind(t),t}return b()(e,n),v()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&U.a.unmountComponentAtNode(this.containerElem)}},{key:"blockControl",value:function(){this.setState({showBlock:!this.state.showBlock})}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(44),t.e(42)]).then(t.bind(null,368)).then(function(n){var t=["context","React","ReactDOM"],o=[e,C.a,U.a];return x()(n).forEach(function(e){t.push(e),o.push(n[e])}),{args:t,argv:o}}).then(function(t){var o=t.args,r=t.argv,a=Object(T.transform)("\n        class Demo extends React.Component {\n          "+n+"\n        }\n\n        ReactDOM.render(<Demo {...context.props} />, document.getElementById('"+e.playerId+"'))\n      ",{presets:["es2015","react"]}).code;o.push(a),(new(Function.prototype.bind.apply(Function,[null].concat(S()(o))))).apply(void 0,S()(r)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return C.a.createElement("div",{className:"demo-block demo-box demo-"+this.props.name},C.a.createElement("div",{className:"source",id:this.playerId,ref:function(e){n.containerElem=e}}),this.state.showBlock&&C.a.createElement("div",{className:"meta"},this.description&&C.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:this.description}}),C.a.createElement(H,{value:this.source[2],onChange:function(e){return n.renderSource(e)}})),C.a.createElement("div",{className:"demo-block-control",onClick:this.blockControl},this.state.showBlock?C.a.createElement("span",null,C.a.createElement("i",{className:"el-icon-caret-top"}),"隐藏"):C.a.createElement("span",null,C.a.createElement("i",{className:"el-icon-caret-bottom"}),"展开")))}}]),e}(C.a.Component),J=function(n){function e(n){h()(this,e);var t=g()(this,(e.__proto__||p()(e)).call(this,n));return t.nodeList=[],t.components=new u.a,t.renderer=new B.a.Renderer,t.renderer.table=function(n,e){return'<table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table>"},t}return b()(e,n),v()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){U.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,r=i()(this.components);!(n=(o=r.next()).done);n=!0){var a=o.value,s=l()(a,2),c=s[0],u=s[1],d=document.getElementById(c);this.nodeList.push(d),d instanceof HTMLElement&&U.a.render(u,d)}}catch(n){e=!0,t=n}finally{try{!n&&r.return&&r.return()}finally{if(e)throw t}}D.a.highlightAll()}},{key:"render",value:function(){var n=this,e=this.document();if("string"==typeof e){this.components.clear();var t=B()(e.replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var a=o.toString(36);return n.components.set(a,C.a.createElement(F,r()({name:n.constructor.name.toLowerCase()},n.props),t)),"<div id="+a+"></div>"}),{renderer:this.renderer});return C.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}return C.a.createElement("span",null)}}]),e}(C.a.Component);e.a=J},178:function(n,e,t){"use strict";t(170),t(189)},188:function(n,e,t){"use strict";t(170),t(178),t(190)},230:function(n,e,t){"use strict";t(170),t(231)},231:function(n,e,t){},355:function(n,e,t){},357:function(n,e){n.exports='## Upload 上传\n文件上传组件。\n\n### 基础用法\n点击上传。\n\n:::demo 默认自动上传。\n\n```js\n  render() {\n    return (\n      <div>\n        <Upload\n          style={{marginBottom: 10}}\n          multiple\n          fileExt=".gif, .jpg, .png"\n          url="/upload"\n          data={{\n            attachmentType: 2,\n            policyCategory: 1,\n            objectId: \'20040006\',\n            remark: null\n          }}\n          onSelect={ file => {\n            console.log(file)\n          }}\n          onComplete={(file, res) => {\n            console.log(res);\n          }}>\n          <Button radius>选择文件并上传</Button>\n        </Upload>\n      </div>\n    )\n  }\n```\n:::\n\n### 自定义上传操作\n\n:::demo 设置`autoUpload`为false，通过`startUpload`属性控制上传时间点\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      startUpload: false\n    };\n  }\n  render() {\n    const { startUpload } = this.state;\n    return (\n      <div>\n        <Upload\n          style={{marginBottom: 10}}\n          multiple\n          autoUpload={false}\n          startUpload={startUpload}\n          fileExt=".gif, .jpg, .png"\n          url="/upload"\n          data={{\n            attachmentType: 2,\n            policyCategory: 1,\n            objectId: \'20040006\',\n            remark: null\n          }}\n          onSelect={ file => {\n            console.log(file)\n          }}\n          onComplete={(file, res) => {\n            console.log(res);\n          }}>\n          <Button radius>选择文件</Button>\n          <Button radius onClick={() => {\n            this.setState({\n              startUpload: true\n            });\n          }}>上传</Button>\n        </Upload>\n      </div>\n    )\n  }\n```\n:::\n\n### Attributes\n| 参数      | 说明    | 类型      | 可选值       | 默认值   |\n|---------- |-------- |---------- |-------------  |-------- |\n| url   | 上传接口url | string |   -  |    -  |\n| fileName   | 上传文件字段名 |string |   -  |    files  |\n| startUpload   | 开始上传 | boolean |   -  |    false  |\n| autoUpload   | 是否自动上传 | boolean |   -  |    true  |\n| startUpload   | 开始上传 | boolean |   -  |    false  |\n\n\n\n### Tab.Group Events\n| 事件名称 | 说明 | 回调参数 |\n|---------- |-------- |---------- |\n| onSelect | 选择文件后触发的事件 |  files |\n| onComplete | 上传完成后触发的事件 |  (files, response) |\n| onError | 上传失败后触发的事件 |  - |\n\n'}}]);