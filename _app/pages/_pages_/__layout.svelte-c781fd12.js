import{Q as i,S as u,i as l,s as c,F as g,G as _,H as f,I as p,q as b,o as d,R as m}from"../../chunks/vendor-f8e3583d.js";import{D as v}from"../../chunks/siteUtils-5f48f201.js";const $=()=>{const t=i("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}},h={subscribe(t){return $().page.subscribe(t)}};function S(t){let n;const o=t[1].default,s=g(o,t,t[0],null);return{c(){s&&s.c()},l(e){s&&s.l(e)},m(e,a){s&&s.m(e,a),n=!0},p(e,[a]){s&&s.p&&(!n||a&1)&&_(s,o,e,e[0],n?p(o,e[0],a,null):f(e[0]),null)},i(e){n||(b(s,e),n=!0)},o(e){d(s,e),n=!1},d(e){s&&s.d(e)}}}function j(t,n,o){let s;m(t,h,r=>o(2,s=r));let{$$slots:e={},$$scope:a}=n;return v(s.params.pages),t.$$set=r=>{"$$scope"in r&&o(0,a=r.$$scope)},[a,e]}class C extends u{constructor(n){super();l(this,n,j,S,c,{})}}export{C as default};
