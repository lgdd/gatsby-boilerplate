(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),o=n(160),i=n.n(o),l=n(0),c=n.n(l),s=n(165),u=n(161),m=n(7),d=n.n(m),p=n(174),f=n.n(p),h=n(164),v=n(158),g=n(163),b=(n(191),function(e){function t(){return e.apply(this,arguments)||this}d()(t,e);var n=t.prototype;return n._compareVersions=function(e,t){return e.version<t.version?1:e.version>t.version?-1:0},n.render=function(){var e=this.props.data;return e.sort(this._compareVersions),c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"timeline timeline-center"},e.map(function(e,t){var n=e.version,a=e.major,r=e.features;return c.a.createElement("li",{key:t,className:"timeline-item"},r.map(function(e,t){return c.a.createElement("div",{key:t,className:"panel panel-secondary"},c.a.createElement("a",{"aria-expanded":"true",className:"panel-header panel-header-link","data-toggle":"collapse",href:e.url,id:"headingTimelineCenter0",role:"tab"},c.a.createElement("span",{className:"panel-title"},e.title),c.a.createElement("div",{className:"timeline-increment"},c.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-"+e.icon},c.a.createElement("use",{xlinkHref:"images/icons/icons.svg#"+e.icon}))),c.a.createElement("div",{className:"timeline-item-label"},t>0?"":a?c.a.createElement("h2",null," ",n," "):c.a.createElement("p",null,n))),c.a.createElement("div",{"aria-labelledby":"headingTimelineCenter0",className:"panel-collapse collapse show",role:"tabpanel"},c.a.createElement("div",{className:"panel-body"},e.description)))}))})))},t}(l.Component)),E=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=this.props.data.mdx,t=e.frontmatter,n=t.title,a=t.needsAuth,r=t.updates,o=e.excerpt,i=e.timeToRead;return c.a.createElement(g.a,{needsAuth:a},c.a.createElement("div",{className:"updates"},c.a.createElement(f.a,null,c.a.createElement("title",null,"Updates"),c.a.createElement("meta",{name:"description",content:o}),c.a.createElement("meta",{name:"og:description",content:o}),c.a.createElement("meta",{name:"twitter:description",content:o}),c.a.createElement("meta",{name:"og:title",content:n}),c.a.createElement("meta",{name:"og:type",content:"article"}),c.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),c.a.createElement("meta",{name:"twitter:data1",content:i+" min read"})),c.a.createElement("main",{className:"content"},c.a.createElement("header",{className:"header"},c.a.createElement(v.a,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"intro blog-intro text-center col"},c.a.createElement("div",{className:"container-fluid container-fluid-max-lg"},c.a.createElement("h1",{className:"h1"},"Updates"),c.a.createElement("h2",{className:"h3"},"Check out what's new")))))),c.a.createElement("div",{className:"clay-site-container container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b,{data:r}))))),c.a.createElement(h.a,null)))},t}(l.Component);n.d(t,"pageQuery",function(){return y});var y="1368650560";t.default=function(e){var t=e.children,n=i()(e,["children"]);return c.a.createElement(s.MDXScopeProvider,{__mdxScope:r()({},u.a)},c.a.createElement(E,n,t))}},153:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(151),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(155),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(33);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return m}),n.d(t,"d",function(){return d});n(34);var a=n(179),r=n.n(a),o=n(168),i=function(){return"undefined"!=typeof window},l=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},c=i()?r.a.auth("auth-boilerplate.wedeploy.io").auth("0bbea119-1d30-43ed-800b-1487ef52b316"):o.Nothing,s=function(e){var t=e.email,n=e.password;if(!m())return new Promise(function(e,a){c.signInWithEmailAndPassword(t,n).then(function(t){var n=t.data_,a=n.createdAt,r=n.email,o=n.id,i=n.token;l({createdAt:a,email:r,id:o,token:i}),e()}).catch(function(e){a(alert(e.error_description))})})},u=function(e){var t=e.email,n=e.password;if(!m())return new Promise(function(e,a){c.createUser({email:t,password:n}).then(function(t){e()}).catch(function(e){a(alert(e))})})},m=function(){return!!c.currentUser},d=function(){return l({}),c.signOut()}},155:function(e,t,n){var a;e.exports=(a=n(156))&&a.default||a},156:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),o=n(0),i=n.n(o),l=n(4),c=n.n(l),s=n(54),u=n(2),m=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,r()({location:t,pageResources:n},n.json))};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},158:function(e,t,n){"use strict";n(177);var a=n(53),r=n.n(a),o=n(7),i=n.n(o),l=n(178),c=n(0),s=n.n(c),u=n(153),m=n(169),d=n.n(m),p=n(154),f=function(e){function t(){var t;return(t=e.call(this)||this).expandToggler=function(){t.props.onNavbarToggleClick()},t._rootNode=l.window||l.document,t._addScroll=t._addScroll.bind(r()(t)),t}i()(t,e);var n=t.prototype;return n._getScrollTop=function(){return this._rootNode===l.window?this._rootNode.pageYOffset:this._rootNode===l.document?this._rootNode.defaultView.pageYOffset:void 0},n._addScroll=function(){this._getScrollTop()>=50?this.refs.navElement.classList.add("scroll"):this.refs.navElement.classList.remove("scroll")},n._handleLogout=function(){var e=this;Object(p.d)().then(function(){e.forceUpdate()}).catch(function(e){alert(e),l.window.location.reload()})},n.componentDidMount=function(){this.props.static||this._rootNode.addEventListener("scroll",this._addScroll,!1)},n.componentWillUnmount=function(){this.props.static||this._rootNode.removeEventListener("scroll",this._addScroll,!1)},n.render=function(){var e=this.props,t=e.fixed,n=void 0===t||t,a=e.opaque,r=void 0!==a&&a,o=e.effect,i=void 0!==o&&o,l=e.sidebarHamburguerIcon,c=void 0!==l&&l,m=d()("navbar navbar-clay-site navbar-expand-lg navbar-dark",{"fixed-top":n,scroll:i,"bg-primary":r});return s.a.createElement("nav",{ref:"navElement",className:m},s.a.createElement("div",{className:"container-fluid"},s.a.createElement(u.Link,{to:"/",className:"navbar-brand"},s.a.createElement("img",{className:"logo mr-2",src:Object(u.withPrefix)("images/home/liferay_logo.svg"),alt:"Liferay Logo"}),s.a.createElement("span",{className:"title align-middle"},"Gatsby Boilerplate")),c&&s.a.createElement("button",{onClick:this.expandToggler,className:"navbar-toggler p-2 order-md-1",type:"button","data-toggle":"collapse","data-target":"#claySidebar","aria-controls":"claySidebar","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-bars"},s.a.createElement("use",{xlinkHref:"images/icons/icons.svg#bars"}))),s.a.createElement("ul",{className:"navbar-nav ml-md-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.Link,{className:"nav-link ml-lg-3",to:"/docs/"},"Docs")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.Link,{className:"nav-link ml-lg-3",to:"/blog/"},"Blog")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.Link,{className:"nav-link ml-lg-3",to:"/onboarding/"},"Onboarding")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.Link,{className:"nav-link ml-lg-3",to:"/updates/"},"Updates")),Object(p.c)()?s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.Link,{className:"nav-link ml-lg-3",to:"#",onClick:this._handleLogout.bind(this)},"Logout")):"",s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"mx-3 mr-lg-0",href:"https://github.com/diegonvs/gatsby-boilerplate",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"images/home/GitHub-Mark-64px.svg",alt:""}))))))},t}(c.Component);t.a=f},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(173);t.a={React:r.a,MDXTag:o.MDXTag}},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(154),c=(n(180),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={email:"",password:""},t.handleUpdate=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t._handleSignUp=function(e){e.preventDefault(),Object(l.b)(t.state).then(function(){t.props.changeLoginState(!0)}).catch(function(){t.props.changeLoginState(!1)})},t._handleSubmit=function(e){e.preventDefault(),Object(l.a)(t.state).then(function(){t.props.changeLoginState(!0)}).catch(function(){t.props.changeLoginState(!1)})},t}return r()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"login"},i.a.createElement("div",{className:"clay-site-container container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"sheet"},i.a.createElement("div",{className:"sheet-header"},i.a.createElement("h2",{className:"sheet-title"},"Login")),i.a.createElement("form",{method:"post",onSubmit:function(t){e._handleSubmit(t)}},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"basicInputTypeEmail"},"Email"),i.a.createElement("input",{className:"form-control",autoComplete:"email",type:"email",name:"email",onChange:this.handleUpdate,id:"basicInputTypeEmail"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"basicInputTypePassword"},"Password"),i.a.createElement("input",{className:"form-control",autoComplete:"current-password",id:"basicInputTypePassword",onChange:this.handleUpdate,placeholder:"Enter password",name:"password",type:"password"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"btn-group"},i.a.createElement("div",{className:"btn-group-item"},i.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")),i.a.createElement("div",{className:"btn-group-item"},i.a.createElement("a",{className:"btn btn-secondary",onClick:function(t){e._handleSignUp(t)},href:"#no"},"Sign Up")))))))))))},t}(o.Component)),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={login:!1},n}r()(t,e);var n=t.prototype;return n.changeLoginState=function(e){this.setState(function(){return{login:e}})},n.componentDidMount=function(){this.setState({login:!!Object(l.c)()})},n.render=function(){return this.props.needsAuth&&!this.state.login?i.a.createElement(c,{changeLoginState:this.changeLoginState.bind(this)}):this.props.children},t}(o.Component);t.a=s},164:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(153),i=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container-fluid container-fluid-max-lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg text-center text-lg-left mb-4 mb-lg-0"},r.a.createElement("img",{className:"logo",alt:"liferay logo",src:Object(o.withPrefix)("images/liferayLogo.png")}),r.a.createElement("div",{className:"clearfix d-lg-none"}),"Brought to you by ",r.a.createElement("a",{href:"http://www.liferay.com",className:"font-weight-bold",target:"_blank",rel:"noopener noreferrer"},"Liferay, Inc.")),r.a.createElement("div",{className:"col-lg text-center text-lg-right"},r.a.createElement("div",null,"Powered by ",r.a.createElement("a",{href:"https://wedeploy.com/",className:"font-weight-bold",target:"_blank",rel:"noopener noreferrer"},"WeDeploy™"))))))};t.a=i},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var i=(0,o(n(56)).default)({}),l=i.Provider,c=i.Consumer;t.withMDXScope=function(e){return function(t){var n=t.scope,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scope"]);return r.default.createElement(c,null,function(t){return r.default.createElement(e,a({scope:n||t},o))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,n=e.children;return r.default.createElement(l,{value:t},n)}},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(0),i=(a=o)&&a.__esModule?a:{default:a};var l=i.default.createContext({}),c=l.Provider,s=l.Consumer;t.withMDXComponents=function(e){return function(t){return i.default.createElement(s,null,function(n){return i.default.createElement(e,r({},t,{components:t.components||n}))})}};t.default=function(e){return i.default.createElement(c,{value:e.components},e.children)}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(183);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(166);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},180:function(e,t,n){var a=n(26).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(18)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),l=(a=i)&&a.__esModule?a:{default:a},c=n(166);var s={inlineCode:"code",wrapper:"div"},u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,i=e.children,c=e.components,u=void 0===c?{}:c,m=e.Layout,d=e.layoutProps,p=u[n+"."+t]||u[t]||s[t]||t;return m?l.default.createElement(m,r({components:u},d),l.default.createElement(p,o,i)):l.default.createElement(p,o,i)}}]),t}();t.default=(0,c.withMDXComponents)(u)},191:function(e,t,n){"use strict";var a=n(12),r=n(27),o=n(28),i=n(17),l=[].sort,c=[1,2,3];a(a.P+a.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!n(192)(l)),"Array",{sort:function(e){return void 0===e?l.call(o(this)):l.call(o(this),r(e))}})},192:function(e,t,n){"use strict";var a=n(17);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-7-f-460-dbd-7-a-0-f-473-a-46333229-aa-804-d-72-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-fbb66130e9e890174f77.js.map