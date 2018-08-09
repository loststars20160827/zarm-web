webpackJsonp([35],{136:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(65),a=o.n(t),c=o(66),h=o.n(c),s=o(67),u=o.n(s),r=o(68),l=o.n(r),b=o(69),i=o.n(b),d=o(269),C=(o(297),function(n){function e(){return h()(this,e),l()(this,(e.__proto__||a()(e)).apply(this,arguments))}return i()(e,n),u()(e,[{key:"document",value:function(){return o(452)}}]),e}(d.a));e.default=C},452:function(n,e){n.exports='## Checkbox 多选框\n多选框。\n\n### 基础用法\n\n单独使用，表示在两种状态之间切换。\n\n:::demo\n\n```js\n  onChange(e) {\n    console.log(e.target.checked);\n  }\n  render() {\n    return (\n      <div>\n        <Checkbox\n          onChange={(e) => this.onChange(e)}\n        >\n          选择\n        </Checkbox>\n      </div>\n    )\n  }\n```\n:::\n\n### 组合使用\n\n一组可选项中进行多项选择。\n\n:::demo 使用`Checkbox.Group`组件。\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      checkboxValue: []\n    }\n  }\n  render() {\n    return (\n      <div>\n        <div style={{marginBottom: 8}}>选择了：{this.state.checkboxValue.join(\',\')}</div>\n        <Checkbox.Group\n          value={this.state.checkboxValue}\n          onChange={(values) => {\n            this.setState({\n              checkboxValue: values\n            });\n          }}\n        >\n          <Checkbox value="a">A</Checkbox>\n          <Checkbox value="b">B</Checkbox>\n          <Checkbox value="c">C</Checkbox>\n          <Checkbox value="d">D</Checkbox>\n        </Checkbox.Group>\n      </div>\n    )\n  }\n```\n:::\n\n### 禁用状态\n\n不可勾选状态。\n\n:::demo 可以使用`disabled`属性来定义是否可用。\n\n```js\n  render() {\n    return (\n      <div>\n        <Checkbox\n          disabled\n          onChange={(e) => this.onChange(e)}\n        >\n          选择\n        </Checkbox>\n      </div>\n    )\n  }\n```\n:::\n\n\n### Checkbox Attributes\n| 参数      | 说明    | 类型      | 可选值       | 默认值   |\n|---------- |-------- |---------- |-------------  |-------- |\n| checked     | 是否选中  | boolean  |   -           |    false    |\n| defaultChecked    | 默认选中  | boolean   |   - |     false   |\n| disabled  | 是否禁用    | boolean   | true, false   | false   |\n| value  | 选择框对应的值    | string   | -  | -   |\n\n### Checkbox Events\n| 事件名称 | 说明 | 回调参数 |\n|---------- |-------- |---------- |\n| onChange | 勾选状态变化触发的事件 | event |\n\n### Checkbox.Group Attributes\n| 参数      | 说明    | 类型      | 可选值       | 默认值   |\n|---------- |-------- |---------- |-------------  |-------- |\n| value     | 选中的值  | []  |   -           |    false    |\n| defaultValue    | 默认选中的值  | []  |   - |     false   |\n\n### Checkbox.Group Events\n| 事件名称 | 说明 | 回调参数 |\n|---------- |-------- |---------- |\n| onChange | 勾选状态变化触发的事件 | values |'}});