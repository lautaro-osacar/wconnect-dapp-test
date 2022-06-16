/*! For license information please see main.43032b06.js.LICENSE.txt */
  display: flex;
  align-items: center;
  position: relative;
`,cl=Je.div`
  width: 275px;
  height: 45px;
  background: url(${nl}) no-repeat;
  background-size: cover;
  background-position: center;
`,ol=()=>(0,wf.jsx)(il,{children:(0,wf.jsx)(cl,{})}),fl=Je.img`
  width: ${e=>{let{size:t}=e;return`${t}px`}};
  height: ${e=>{let{size:t}=e;return`${t}px`}};
`,dl=e=>{const{src:t,fallback:a,size:r}=e;return(0,wf.jsx)(fl,{...e,src:t,size:r,onError:e=>{a&&(e.target.src=a)}})};dl.defaultProps={src:null,fallback:"",size:20};const sl=dl;const bl=__webpack_require__.p+"static/media/eth.de6424d099b55a8ed7f849df40e1c960.svg";const ul=__webpack_require__.p+"static/media/erc20.385d75abac6228dbde1fe0e697b1d2d2.svg",ll="99, 125, 234",hl="233, 1, 1",pl="130, 71, 229",Al="60, 203, 132",gl="44, 55, 75",xl={1:{name:"Ethereum",logo:ii+"eip155:1.png",rgb:ll},5:{logo:ii+"eip155:5.png",rgb:"189, 174, 155"},10:{name:"Optimism",logo:ii+"eip155:10.png",rgb:hl},42:{logo:ii+"eip155:42.png",rgb:ll},69:{logo:ii+"eip155:69.png",rgb:hl},100:{logo:ii+"eip155:100.png",rgb:"73, 169, 166"},137:{name:"Polygon",logo:ii+"eip155:137.png",rgb:pl},80001:{logo:ii+"eip155:80001.png",rgb:pl},42161:{name:"Arbitrum",logo:ii+"eip155:42161.png",rgb:gl},42220:{name:"Celo",logo:ii+"eip155:42220.png",rgb:Al},44787:{logo:ii+"eip155:44787.png",rgb:Al},421611:{logo:ii+"eip155:421611.png",rgb:gl}};const ml={"cosmoshub-4":{logo:ii+"cosmos:cosmoshub-4.png",rgb:"27, 31, 53"}};const yl={"91b171bb158e2d3848fa23a9f1c25182":{logo:ii+"polkadot:91b171bb158e2d3848fa23a9f1c25182.png",rgb:"230, 1, 122"}};function vl(e){const t=e.split(":")[0];switch(t){case"eip155":return function(e){const t=e.split(":")[1],a=xl[t];if("undefined"===typeof a)throw new Error(`No chain metadata found for chainId: ${e}`);return a}(e);case"cosmos":return function(e){const t=e.split(":")[1],a=ml[t];if("undefined"===typeof a)throw new Error(`No chain metadata found for chainId: ${e}`);return a}(e);case"polkadot":return function(e){const t=e.split(":")[1],a=yl[t];if("undefined"===typeof a)throw new Error(`No chain metadata found for chainId: ${e}`);return a}(e);case"solana":return function(e){const t=e.split(":")[1],a=Xf[t];if("undefined"===typeof a)throw new Error(`No chain metadata found for chainId: ${e}`);return a}(e);default:throw new Error(`No metadata handler for namespace ${t}`)}}const wl=vl("eip155:100").logo,Il=vl("eip155:137").logo,El=Je.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`,Bl=Je.div`
  display: flex;
`,_l=Je.div`
  display: flex;
  margin-left: 10px;
`,Cl=Je.div`
  display: flex;
`,kl=Je.div`
  display: flex;
`;function Sl(e){if(e.contractAddress){const t=`https://raw.githubusercontent.com/TrustWallet/tokens/master/tokens/${e.contractAddress.toLowerCase()}.png`;return(0,wf.jsx)(sl,{src:t,fallback:ul})}switch(e.symbol.toLowerCase()){case"eth":return(0,wf.jsx)(sl,{src:bl});case"xdai":return(0,wf.jsx)(sl,{src:wl});case"matic":return(0,wf.jsx)(sl,{src:Il});default:return(0,wf.jsx)(sl,{src:ul})}}const Ml=e=>{const{asset:t}=e;return(0,wf.jsxs)(El,{...e,children:[(0,wf.jsxs)(Bl,{children:[Sl(t),(0,wf.jsx)(_l,{children:t.name})]}),(0,wf.jsx)(Cl,{children:(0,wf.jsx)(kl,{children:`${hf(t.balance||"0")} ${t.symbol}`})})]})},Ql={white:"255, 255, 255",black:"0, 0, 0",dark:"12, 12, 13",grey:"169, 169, 188",darkGrey:"113, 119, 138",lightGrey:"212, 212, 212",blue:"101, 127, 230",lightBlue:"64, 153, 255",yellow:"250, 188, 45",orange:"246, 133, 27",green:"84, 209, 146",pink:"255, 51, 102",red:"214, 75, 71",purple:"110, 107, 233"},Pl={tiny:"10px",small:"14px",medium:"16px",large:"18px",h1:"60px",h2:"50px",h3:"40px",h4:"32px",h5:"24px",h6:"20px"},Nl={normal:400,medium:500,semibold:600,bold:700,extrabold:800},Dl="all 0.1s ease-in-out",Rl="all 0.2s ease-in-out",Tl="all 0.15s ease-in-out",Ol="0 4px 6px 0 rgba(50, 50, 93, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)",Ul="0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)",Ll=`\n\n  html, body, #root {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: ${{OpenSans:'"Open Sans", sans-serif'}.OpenSans};\n    font-style: normal;\n    font-stretch: normal;\n    font-weight: ${Nl.normal};\n    font-size: ${Pl.medium};\n    background-color: rgb(${Ql.white});\n    color: rgb(${Ql.dark});\n    overflow-y:auto;\n    text-rendering: optimizeLegibility;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  \t-webkit-text-size-adjust: 100%;\n    -webkit-overflow-scrolling: touch;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;  \n  }\n\n  button {\n    border-style: none;\n    line-height: 1em;\n    background-image: none;\n    outline: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n\n  [tabindex] {\n    outline: none;\n    width: 100%;\n    height: 100%;\n  }\n\n  a, p, h1, h2, h3, h4, h5, h6 {\n  \ttext-decoration: none;\n  \tmargin: 0;\n    padding: 0;\n    margin: 0.7em 0;\n  }\n\n  h1 {\n    font-size: ${Pl.h1}\n  }\n  h2 {\n    font-size: ${Pl.h2}\n  }\n  h3 {\n    font-size: ${Pl.h3}\n  }\n  h4 {\n    font-size: ${Pl.h4}\n  }\n  h5 {\n    font-size: ${Pl.h5}\n  }\n  h6 {\n    font-size: ${Pl.h6}\n  }\n\n  a {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;  \n    text-decoration: none;\n    color: inherit;\n    outline: none;\n  }\n\n  b,\n  strong {\n    font-weight: inherit;\n    font-weight: bolder;\n  }\n\n  ul, li {\n  \tlist-style: none;\n  \tmargin: 0;\n  \tpadding: 0;\n  }\n\n  * {\n    box-sizing: border-box !important;\n  }\n\n\n  input {\n    -webkit-appearance: none;\n  }\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  main,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block;\n  }\n  audio,\n  canvas,\n  progress,\n  video {\n    display: inline-block;\n  }\n\n  input[type="color"],\n  input[type="date"],\n  input[type="datetime"],\n  input[type="datetime-local"],\n  input[type="email"],\n  input[type="month"],\n  input[type="number"],\n  input[type="password"],\n  input[type="search"],\n  input[type="tel"],\n  input[type="text"],\n  input[type="time"],\n  input[type="url"],\n  input[type="week"],\n  select:focus,\n  textarea {\n    font-size: 16px;\n  }\n`,zl=Ke`
  0% {
    transform: scale(1.0);
  }
  5% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(0.8);
  }
  95% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.0);
  }
`,jl=Je.svg`
  width: ${e=>{let{size:t}=e;return`${t}px`}};
  height: ${e=>{let{size:t}=e;return`${t}px`}};
  animation: ${zl} 1s infinite cubic-bezier(0.25, 0, 0.75, 1);
  transform: translateZ(0);
`,Fl=e=>{const{size:t,color:a}=e,r=e.rgb||`rgb(${Ql[a]})`;return(0,wf.jsx)(jl,{viewBox:"0 0 186 187",size:t,children:(0,wf.jsxs)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[(0,wf.jsx)("path",{d:"M60,10.34375 C32.3857625,10.34375 10,32.7295125 10,60.34375 L10,126.34375 C10,153.957987 32.3857625,176.34375 60,176.34375 L126,176.34375 C153.614237,176.34375 176,153.957987 176,126.34375 L176,60.34375 C176,32.7295125 153.614237,10.34375 126,10.34375 L60,10.34375 Z M60,0.34375 L126,0.34375 C159.137085,0.34375 186,27.206665 186,60.34375 L186,126.34375 C186,159.480835 159.137085,186.34375 126,186.34375 L60,186.34375 C26.862915,186.34375 0,159.480835 0,126.34375 L0,60.34375 C0,27.206665 26.862915,0.34375 60,0.34375 Z",id:"Rectangle-Copy",fill:r,fillRule:"nonzero"}),(0,wf.jsx)("rect",{id:"Rectangle",fill:r,x:"44",y:"44.34375",width:"98",height:"98",rx:"35"})]})})};Fl.defaultProps={size:40,color:"lightBlue"};const Hl=Fl,Gl=Je.div`
  position: absolute;
  height: 15px;
  width: 15px;
  margin: 0 8px;
  top: calc((100% - 15px) / 2);
`,ql=Je.div`
  transition: ${Tl};
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(${Ql.white}, 0.1);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
`,Yl=Je.button`
  transition: ${Tl};
  position: relative;
  border: none;
  border-style: none;
  box-sizing: border-box;
  background-color: ${e=>{let{outline:t,color:a}=e;return t?"transparent":`rgb(${Ql[a]})`}};
  border: ${e=>{let{outline:t,color:a}=e;return t?`1px solid rgb(${Ql[a]})`:"none"}};
  color: ${e=>{let{outline:t,color:a}=e;return t?`rgb(${Ql[a]})`:`rgb(${Ql.white})`}};
  box-shadow: ${e=>{let{outline:t}=e;return t?"none":`${Ol}`}};
  border-radius: 8px;
  font-size: ${Pl.medium};
  font-weight: ${Nl.semibold};
  padding: ${e=>{let{icon:t,left:a}=e;return t?a?"7px 12px 8px 28px":"7px 28px 8px 12px":"8px 12px"}};
  cursor: ${e=>{let{disabled:t}=e;return t?"auto":"pointer"}};
  will-change: transform;

  &:disabled {
    opacity: 0.6;
    box-shadow: ${e=>{let{outline:t}=e;return t?"none":`${Ol}`}};
  }

  @media (hover: hover) {
    &:hover {
      transform: ${e=>{let{disabled:t}=e;return t?"none":"translateY(-1px)"}};
      box-shadow: ${e=>{let{disabled:t,outline:a}=e;return t?`${Ol}`:a?"none":`${Ul}`}};
    }

    &:hover ${ql} {
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    transform: ${e=>{let{disabled:t}=e;return t?"none":"translateY(1px)"}};
    box-shadow: ${e=>{let{outline:t}=e;return t?"none":`${Ol}`}};
    color: ${e=>{let{outline:t,color:a}=e;return t?`rgb(${Ql[a]})`:`rgba(${Ql.white}, 0.24)`}};

    & ${Gl} {
      opacity: 0.8;
    }
  }

  & ${Gl} {
    right: ${e=>{let{left:t}=e;return t?"auto":"0"}};
    left: ${e=>{let{left:t}=e;return t?"0":"auto"}};
    display: ${e=>{let{icon:t}=e;return t?"block":"none"}};
    mask: ${e=>{let{icon:t}=e;return t?`url(${t}) center no-repeat`:"none"}};
    background-color: ${e=>{let{outline:t,color:a}=e;return t?`rgb(${Ql[a]})`:`rgb(${Ql.white})`}};
    transition: 0.15s ease;
  }
`,Kl=e=>(0,wf.jsxs)(Yl,{...e,type:e.type,outline:e.outline,color:e.color,disabled:e.disabled,icon:e.icon,left:e.left,children:[(0,wf.jsx)(ql,{}),(0,wf.jsx)(Gl,{}),e.fetching?(0,wf.jsx)(Hl,{size:20,color:"white"}):e.children]});Kl.defaultProps={fetching:!1,outline:!1,type:"button",color:"lightBlue",disabled:!1,icon:null,left:!1};const Jl=Kl,Wl=Je.div`
  position: relative;
  width: 100%;
  height: ${e=>{let{spanHeight:t}=e;return t?"100%":"auto"}};
  max-width: ${e=>{let{maxWidth:t}=e;return`${t}px`}};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${e=>{let{center:t}=e;return t?"center":"flex-start"}};
`,Xl=e=>{const{children:t,spanHeight:a,maxWidth:r,center:n}=e;return(0,wf.jsx)(Wl,{...e,spanHeight:a,maxWidth:r,center:n,children:t})};Xl.defaultProps={spanHeight:!1,maxWidth:600,center:!1};const Vl=Xl,Zl=Je.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  padding: 8px;
  margin: 5px 0;
  border: ${e=>{let{rgb:t}=e;return`2px solid rgb(${t})`}};
  &.active {
    box-shadow: ${e=>{let{rgb:t}=e;return`0 0 8px rgb(${t})`}};
  }
`,$l=Je.div`
  width: 100%;
  display: flex;
  align-items: center;
  & p {
    font-weight: 600;
  }
  & img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
`,eh=Je.div`
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
`,th=Je.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`,ah=Je(Jl)`
  border-radius: 8px;
  font-size: ${Pl.medium};
  height: 44px;
  width: 100%;
  margin: 12px 0;
  background-color: ${e=>{let{rgb:t}=e;return`rgb(${t})`}};
`,rh=Je(th)`
  flex-direction: column;
`;const nh=e=>{const{chainData:t,fetching:a,chainId:r,address:n,onClick:i,active:c,balances:o,actions:f}=e;if(!Object.keys(t).length)return null;const d=function(e,t){const[a,r]=e.split(":");let n;try{n=vl(e)}catch(c){return}const i=t[a][r];if("undefined"!==typeof i)return{data:i,meta:n}}(r,t);if("undefined"===typeof d)return null;const s=d.meta.name||d.data.name,b="undefined"!==typeof n?`${r}:${n}`:void 0,u="undefined"!==typeof b&&"undefined"!==typeof o?o[b]:[];return(0,wf.jsx)(l.Fragment,{children:(0,wf.jsxs)(Zl,{rgb:d.meta.rgb,onClick:()=>i&&i(e.chainId),className:c?"active":"",children:[(0,wf.jsxs)($l,{children:[(0,wf.jsx)("img",{src:d.meta.logo,alt:s}),(0,wf.jsx)("p",{children:s})]}),!!n&&(0,wf.jsx)("p",{children:bf(n)}),(0,wf.jsx)(rh,{children:a?(0,wf.jsx)(Vl,{center:!0,children:(0,wf.jsx)(eh,{children:(0,wf.jsx)(Hl,{rgb:`rgb(${d.meta.rgb})`})})}):(0,wf.jsxs)(wf.Fragment,{children:[u&&u.length?(0,wf.jsxs)(th,{children:[(0,wf.jsx)("h6",{children:"Balances"}),(0,wf.jsx)(Vl,{center:!0,children:u.map((e=>(0,wf.jsx)(Ml,{asset:e},e.symbol)))})]}):null,n&&f&&f.length?(0,wf.jsxs)(th,{children:[(0,wf.jsx)("h6",{children:"Methods"}),f.map((e=>(0,wf.jsx)(ah,{left:!0,rgb:d.meta.rgb,onClick:()=>e.callback(r,n),children:e.method},e.method)))]}):null]})})]})})},ih=Je.div`
  margin-top: -1px;
  margin-bottom: 1px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  @media screen and (${"max-width: 640px"}) {
    font-size: ${Pl.small};
  }
`,ch=Je.div`
  display: flex;
  & > button:first-child {
    margin-right: 10px !important;
  }
`,oh=Je(Je.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
`)`
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  & p {
    font-size: 0.8em;
    margin: 0;
    padding: 0;
  }
  & p:nth-child(n + 2) {
    font-weight: bold;
  }
`,fh=e=>{const{ping:t,disconnect:a,session:r}=e;return(0,wf.jsx)(ih,{...e,children:r?(0,wf.jsxs)(wf.Fragment,{children:[(0,wf.jsxs)(oh,{children:[(0,wf.jsx)("p",{children:"Connected to"}),(0,wf.jsx)("p",{children:r.peer.metadata.name})]}),(0,wf.jsxs)(ch,{children:[(0,wf.jsx)(Jl,{outline:!0,color:"black",onClick:t,children:"Ping"}),(0,wf.jsx)(Jl,{outline:!0,color:"red",onClick:a,children:"Disconnect"})]})]}):null})},dh=Je.div`
  transition: opacity 0.1s ease-in-out;
  text-align: center;
  position: absolute;
  width: 100vw;
  height: 100%;
  margin-left: -50vw;
  top: ${e=>{let{offset:t}=e;return t?`-${t}px`:0}};
  left: 50%;
  z-index: 2;
  will-change: opacity;
  background-color: ${e=>{let{opacity:t}=e,a=.4;return"number"===typeof t&&(a=t),`rgba(0, 0, 0, ${a})`}};
  opacity: ${e=>{let{show:t}=e;return t?1:0}};
  visibility: ${e=>{let{show:t}=e;return t?"visible":"hidden"}};
  pointer-events: ${e=>{let{show:t}=e;return t?"auto":"none"}};
  display: flex;
  justify-content: center;
  align-items: center;
`,sh=Je.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`,bh=Je.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`,uh=Je.div`
  transition: ${Dl};
  position: absolute;
  width: ${e=>{let{size:t}=e;return`${t}px`}};
  height: ${e=>{let{size:t}=e;return`${t}px`}};
  right: ${e=>{let{size:t}=e;return t/1.6667+"px"}};
  top: ${e=>{let{size:t}=e;return t/1.6667+"px"}};
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: ${e=>{let{size:t}=e;return`${t}px`}};
    width: 2px;
    background: ${e=>{let{color:t}=e;return`rgb(${Ql[t]})`}};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`,lh=Je.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 25px;
  background-color: rgb(${Ql.white});
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,hh=Je.div`
  position: relative;
  width: 100%;
  position: relative;
  word-wrap: break-word;
`;function ph(e){let{children:t,show:a,opacity:r,closeModal:n}=e;const[i,c]=(0,l.useState)(0),o=(0,l.useRef)(null);return(0,l.useEffect)((()=>{if(o.current){const e=o.current.getBoundingClientRect(),t=e.top>0?e.top:0;0!==t&&t!==i&&c(t)}}),[i]),(0,wf.jsx)(dh,{show:a,offset:i,opacity:r,ref:o,children:(0,wf.jsxs)(sh,{children:[(0,wf.jsx)(bh,{onClick:n}),(0,wf.jsxs)(lh,{children:[(0,wf.jsx)(uh,{size:25,color:"dark",onClick:n}),(0,wf.jsx)(hh,{children:t})]})]})})}const Ah=Je.div`
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: ${Rl};
  & div {
    transition: ${Rl};
    appearance: none;
    transition: all 0.3s ease;
    box-shadow: ${e=>{let{active:t,color:a}=e;return t?`inset 0px 0px 0px 20px rgb(${Ql[a]})`:`inset 0px 0px 0px 1px rgb(${Ql.grey})`}};
    border-radius: 1rem;
    background-color: rgb(${Ql.white});
    padding: 1px;
    display: inline-block;
    width: 46px;
    height: 26px;
    position: relative;
    cursor: pointer;
    margin: 0px;
    vertical-align: bottom;
    outline: none;
    border: none;
  }
  & div:after {
    transition: ${Rl};
    box-shadow: inset 0 1px 0 rgb(${Ql.grey}), 0px 2px 2px 1px rgba(${Ql.black}, 0.2);
    border-radius: 1rem;
    left: ${e=>{let{active:t}=e;return t?"20px":"0"}};
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-color: rgb(${Ql.white});
  }
`,gh=e=>(0,wf.jsx)(Ah,{color:e.color,active:e.active,onClick:e.onClick,children:(0,wf.jsx)("div",{})});gh.defaultProps={active:!1,color:"green"};const xh=gh,mh=Je.div`
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
`,yh=Je(mh)`
  flex-direction: column;
  text-align: left;
`,vh=Je.div`
  width: 100%;
  display: flex;
  margin: 6px 0;
`,wh=Je.div`
  width: 30%;
  font-weight: 700;
`,Ih=Je.div`
  width: 70%;
  font-family: monospace;
`,Eh=Je.div`
  width: 100%;
  position: relative;
  word-wrap: break-word;
`,Bh=Je.div`
  margin: 1em 0;
  font-size: 20px;
  font-weight: 700;
`,_h=Je.p`
  margin-top: 30px;
`,Ch=e=>{const{pending:t,result:a}=e;return console.log("RESULT",a),(0,wf.jsx)(wf.Fragment,{children:t?(0,wf.jsxs)(Eh,{children:[(0,wf.jsx)(Bh,{children:"Pending JSON-RPC Request"}),(0,wf.jsxs)(mh,{children:[(0,wf.jsx)(Hl,{}),(0,wf.jsx)(_h,{children:"Approve or reject request using your wallet"})]})]}):a?(0,wf.jsxs)(Eh,{children:[(0,wf.jsx)(Bh,{children:a.valid?"JSON-RPC Request Approved":"JSON-RPC Request Failed"}),(0,wf.jsx)(yh,{children:Object.keys(a).map((e=>a[e]&&(0,wf.jsxs)(vh,{children:[(0,wf.jsx)(wh,{children:e}),(0,wf.jsx)(Ih,{children:a[e].toString()})]},e)))})]}):(0,wf.jsx)(Eh,{children:(0,wf.jsx)(Bh,{children:"JSON-RPC Request Rejected"})})})},kh=Je.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid rgb(${Ql.darkGrey});
  padding: 5px;

  & img {
    width: 40px;
    height: 40px;
  }
  & > div {
    margin-left: 10px;
  }
`,Sh=Je.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid rgb(${Ql.darkGrey});
  padding: 5px;
  & > div {
    margin: 4px auto;
  }
`,Mh=Je.img`
  width: 100px;
  margin: 0 auto;
`,Qh=Je.div`
  text-align: center;
`,Ph=Je(Qh)`
  font-size: ${Pl.small};
  opacity: 0.8;
`,Nh=Je(Qh)`
  font-weight: bold;
`,Dh=e=>e.oneLiner?(0,wf.jsxs)(kh,{children:[(0,wf.jsx)("img",{src:e.metadata.icons[0],alt:e.metadata.name}),(0,wf.jsx)("div",{children:e.metadata.name})]}):(0,wf.jsxs)(Sh,{children:[(0,wf.jsx)(Mh,{src:e.metadata.icons[0],alt:e.metadata.name}),(0,wf.jsx)(Nh,{children:e.metadata.name}),(0,wf.jsx)(Qh,{children:e.metadata.description}),(0,wf.jsx)(Ph,{children:e.metadata.url})]}),Rh=Je.div`
  width: 100%;
  cursor: pointer;
`,Th=e=>{const{peerMetadata:t}=e.pairing;return(0,wf.jsx)(Rh,{onClick:e.onClick,children:(0,wf.jsx)("div",{children:"undefined"!==typeof t?(0,wf.jsx)(Dh,{oneLiner:!0,metadata:t}):(0,wf.jsx)("div",{children:"Unknown Wallet"})})})},Oh=e=>{const{pairings:t,connect:a}=e;return(0,wf.jsxs)(Eh,{children:[(0,wf.jsx)(Bh,{children:"Select available pairing or create new one"}),(0,wf.jsx)(yh,{children:t.map((e=>(0,wf.jsx)(Th,{pairing:e,onClick:()=>a({topic:e.topic})},e.topic)))}),(0,wf.jsx)(Jl,{onClick:()=>a(),children:"New Pairing"})]})},Uh=e=>{const{pending:t,result:a}=e;return(0,wf.jsx)(wf.Fragment,{children:t?(0,wf.jsxs)(Eh,{children:[(0,wf.jsx)(Bh,{children:"Pending Session Ping"}),(0,wf.jsx)(mh,{children:(0,wf.jsx)(Hl,{})})]}):a?(0,wf.jsx)(Eh,{children:(0,wf.jsx)(Bh,{children:a.valid?"Successful Session Ping":"Failed Session Ping"})}):(0,wf.jsx)(Eh,{children:(0,wf.jsx)(Bh,{children:"Unknown Error with Session Ping"})})})},Lh=Ke`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,zh=Je.div`
  will-change: transform, opacity;
  animation: ${Lh} 0.7s ease 0s normal 1;
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${e=>{let{center:t}=e;return t?"center":"flex-start"}};
`,jh=e=>{const{children:t,center:a}=e;return(0,wf.jsx)(zh,{...e,center:a,children:t})};jh.defaultProps={center:!1};const Fh=jh,Hh=Je.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  text-align: center;
`,Gh=Je(Fh)`
  width: 100%;
  height: 100%;
  padding: 0 16px;
`,qh=Je(Vl)`
  /* height: 600px; */
`,Yh=Je(Vl)`
  width: 250px;
  margin: 50px 0;
`,Kh=Je(Jl)`
  border-radius: 8px;
  font-size: ${Pl.medium};
  height: 44px;
  width: 100%;
  margin: 12px 0;
`,Jh=Je(qh)`
  height: 100%;
  padding-bottom: 30px;
  & h3 {
    padding-top: 30px;
  }
`,Wh=Je.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  & > p {
    margin-right: 10px;
  }
`,Xh=Je(Je.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`)`
  justify-content: space-between;
  & > div {
    margin: 12px 0;
    flex: 1 0 100%;
    @media (min-width: 648px) {
      flex: 0 1 48%;
    }
  }
`;function Vh(){const[e,t]=(0,l.useState)(""),a=()=>t(""),r=()=>t("request"),{client:n,session:i,connect:c,disconnect:o,chains:f,accounts:d,balances:s,isFetchingBalances:b,isInitializing:u,setChains:h}=Bf(),{ping:p,ethereumRpc:A,cosmosRpc:g,solanaRpc:x,polkadotRcp:m,isRpcRequestPending:y,rpcResult:v,isTestnet:w,setIsTestnet:I}=function(){const e=(0,l.useContext)(tl);if(void 0===e)throw new Error("useJsonRpc must be used within a JsonRpcContextProvider");return e}(),{chainData:E}=$f();(0,l.useEffect)((()=>{i&&"pairing"===e&&a()}),[i,e]);const B=()=>{if("undefined"===typeof n)throw new Error("WalletConnect is not initialized");n.pairing.values.length?t("pairing"):c()},_=e=>{const[t]=e.split(":");switch(t){case"eip155":return[{method:Vn.ETH_SEND_TRANSACTION,callback:async(e,t)=>{r(),await A.testSendTransaction(e,t)}},{method:Vn.ETH_SIGN_TRANSACTION,callback:async(e,t)=>{r(),await A.testSignTransaction(e,t)}},{method:Vn.PERSONAL_SIGN,callback:async(e,t)=>{r(),await A.testSignPersonalMessage(e,t)}},{method:Vn.ETH_SIGN+" (standard)",callback:async(e,t)=>{r(),await A.testEthSign(e,t)}},{method:Vn.ETH_SIGN_TYPED_DATA,callback:async(e,t)=>{r(),await A.testSignTypedData(e,t)}}];case"cosmos":return[{method:$n.COSMOS_SIGN_DIRECT,callback:async(e,t)=>{r(),await g.testSignDirect(e,t)}},{method:$n.COSMOS_SIGN_AMINO,callback:async(e,t)=>{r(),await g.testSignAmino(e,t)}}];case"solana":return[{method:ti.SOL_SIGN_TRANSACTION,callback:async(e,t)=>{r(),await x.testSignTransaction(e,t)}},{method:ti.SOL_SIGN_MESSAGE,callback:async(e,t)=>{r(),await x.testSignMessage(e,t)}}];case"polkadot":return[{method:ri.POLKADOT_SIGN_MESSAGE,callback:async(e,t)=>{console.log("chainID",e),r(),await m.testSignMessage(e,t)}}]}},C=()=>{const e=!w;I(e),Af(e)},k=e=>{f.includes(e)?h(f.filter((t=>t!==e))):h([...f,e])};return(0,wf.jsxs)(Hh,{children:[(0,wf.jsxs)(Vl,{maxWidth:1e3,spanHeight:!0,children:[(0,wf.jsx)(fh,{ping:async()=>{t("ping"),await p()},disconnect:o,session:i}),(0,wf.jsx)(Gh,{children:u?"Loading...":(()=>{const e=w?Jn:Kn;return d.length||Object.keys(s).length?(0,wf.jsxs)(Jh,{children:[(0,wf.jsx)("h3",{children:"Accounts"}),(0,wf.jsx)(Xh,{children:d.map((e=>{const[t,a,r]=e.split(":"),n=`${t}:${a}`;return(0,wf.jsx)(nh,{active:!0,chainData:E,fetching:b,address:r,chainId:n,balances:s,actions:_(n)},e)}))})]}):(0,wf.jsxs)(qh,{center:!0,children:[(0,wf.jsx)(ol,{}),(0,wf.jsx)("h6",{children:`Using v${rl.i8||"2.0.0-beta"}`}),(0,wf.jsxs)(Yh,{children:[(0,wf.jsx)("h6",{children:"Select chains:"}),(0,wf.jsxs)(Wh,{children:[(0,wf.jsx)("p",{children:"Testnets Only?"}),(0,wf.jsx)(xh,{active:w,onClick:C})]}),e.map((e=>(0,wf.jsx)(nh,{chainId:e,chainData:E,onClick:k,active:f.includes(e)},e))),(0,wf.jsx)(Kh,{left:!0,onClick:B,disabled:!f.length,children:"Connect"})]})]})})()})]}),(0,wf.jsx)(ph,{show:!!e,closeModal:a,children:(()=>{switch(e){case"pairing":if("undefined"===typeof n)throw new Error("WalletConnect is not initialized");return(0,wf.jsx)(Oh,{pairings:n.pairing.values,connect:c});case"request":return(0,wf.jsx)(Ch,{pending:y,result:v});case"ping":return(0,wf.jsx)(Uh,{pending:y,result:v});default:return null}})()})]})}const Zh=(function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=Qe.apply(void 0,[e].concat(a)),i="sc-global-"+Te(JSON.stringify(n)),c=new Ye(n,i);function o(e){var t=me(),a=ye(),r=(0,l.useContext)(Fe),n=(0,l.useRef)(t.allocateGSInstance(i)).current;return t.server&&f(n,e,t,r,a),(0,l.useLayoutEffect)((function(){if(!t.server)return f(n,e,t,r,a),function(){return c.removeStyles(n,t)}}),[n,e,t,r,a]),null}function f(e,t,a,r,n){if(c.isStatic)c.renderStyles(e,O,a,n);else{var i=_({},t,{theme:Pe(t,r,o.defaultProps)});c.renderStyles(e,i,a,n)}}return l.memo(o)})`
  ${Ll}
`;h.render((0,wf.jsxs)(wf.Fragment,{children:[(0,wf.jsx)(Zh,{}),(0,wf.jsx)(Zf,{children:(0,wf.jsx)(Ef,{children:(0,wf.jsx)(al,{children:(0,wf.jsx)(Vh,{})})})})]}),document.getElementById("root"))})()})();
//# sourceMappingURL=main.43032b06.js.map