import{B as t}from"./button-IMJvZz-P.js";import"./jsx-runtime-u17CrQMm.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,p={title:"Example/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},variant:{control:{type:"select"},options:["primary","secondary","warn","danger"]}},args:{onClick:c()}},r={args:{variant:"primary",label:"Button"}},a={args:{variant:"secondary",label:"Button"}},e={args:{variant:"warn",label:"Warn Button"}},n={args:{variant:"danger",label:"Danger Button"}},s={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Button"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Button"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warn",
    label: "Warn Button"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    label: "Danger Button"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...o.parameters?.docs?.source}}};const u=["Primary","Secondary","Warn","Danger","Large","Small"];export{n as Danger,s as Large,r as Primary,a as Secondary,o as Small,e as Warn,u as __namedExportsOrder,p as default};
