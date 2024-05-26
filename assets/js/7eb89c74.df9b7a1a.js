"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1382],{37050:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=i(85893),t=i(11151);const o={sidebar_label:"gemini",title:"oai.gemini"},r=void 0,a={id:"reference/oai/gemini",title:"oai.gemini",description:"Create a OpenAI-compatible client for Gemini features.",source:"@site/docs/reference/oai/gemini.md",sourceDirName:"reference/oai",slug:"/reference/oai/gemini",permalink:"/autogen/docs/reference/oai/gemini",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/oai/gemini.md",tags:[],version:"current",frontMatter:{sidebar_label:"gemini",title:"oai.gemini"},sidebar:"referenceSideBar",previous:{title:"completion",permalink:"/autogen/docs/reference/oai/completion"},next:{title:"openai_utils",permalink:"/autogen/docs/reference/oai/openai_utils"}},l={},c=[{value:"GeminiClient",id:"geminiclient",level:2},{value:"message_retrieval",id:"message_retrieval",level:3},{value:"get_usage",id:"get_usage",level:3},{value:"oai_content_to_gemini_content",id:"oai_content_to_gemini_content",level:3},{value:"concat_parts",id:"concat_parts",level:3},{value:"oai_messages_to_gemini_messages",id:"oai_messages_to_gemini_messages",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Create a OpenAI-compatible client for Gemini features."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"llm_config={"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"config_list"'})," - [{"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"api_type"'}),' - "google",']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"model"'}),' - "gemini-pro",']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"api_key"'}),' - os.environ.get("GOOGLE_API_KEY"),']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"safety_settings"'})," - ["]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'{"category"'}),' - "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_ONLY_HIGH"},']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'{"category"'}),' - "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_ONLY_HIGH"},']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'{"category"'}),' - "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_ONLY_HIGH"},']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'{"category"'}),' - "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_ONLY_HIGH"}\n],\n"top_p":0.5,']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"max_tokens"'})," - 2048,"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"temperature"'})," - 1.0,"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"top_k"'})," - 5\n}\n]}"]}),"\n",(0,s.jsx)(n.p,{children:'agent = autogen.AssistantAgent("my_agent", llm_config=llm_config)'}),"\n",(0,s.jsx)(n.p,{children:"Resources:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://ai.google.dev/docs",children:"https://ai.google.dev/docs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/docs/generative-ai/migrate-from-azure",children:"https://cloud.google.com/vertex-ai/docs/generative-ai/migrate-from-azure"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://blog.google/technology/ai/google-gemini-pro-imagen-duet-ai-update/",children:"https://blog.google/technology/ai/google-gemini-pro-imagen-duet-ai-update/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://ai.google.dev/api/python/google/generativeai/ChatSession",children:"https://ai.google.dev/api/python/google/generativeai/ChatSession"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"geminiclient",children:"GeminiClient"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class GeminiClient()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Client for Google's Gemini API."}),"\n",(0,s.jsxs)(n.p,{children:["Please visit this ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/issues/2387",children:"page"})," for the roadmap of Gemini integration\nof AutoGen."]}),"\n",(0,s.jsx)(n.h3,{id:"message_retrieval",children:"message_retrieval"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def message_retrieval(response) -> List\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve and return a list of strings or a list of Choice.Message from the response."}),"\n",(0,s.jsx)(n.p,{children:"NOTE: if a list of Choice.Message is returned, it currently needs to contain the fields of OpenAI's ChatCompletion Message object,\nsince that is expected for function or tool calling in the rest of the codebase at the moment, unless a custom agent is being used."}),"\n",(0,s.jsx)(n.h3,{id:"get_usage",children:"get_usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@staticmethod\ndef get_usage(response) -> Dict\n"})}),"\n",(0,s.jsx)(n.p,{children:"Return usage summary of the response using RESPONSE_USAGE_KEYS."}),"\n",(0,s.jsx)(n.h3,{id:"oai_content_to_gemini_content",children:"oai_content_to_gemini_content"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def oai_content_to_gemini_content(content: Union[str, List]) -> List\n"})}),"\n",(0,s.jsx)(n.p,{children:"Convert content from OAI format to Gemini format"}),"\n",(0,s.jsx)(n.h3,{id:"concat_parts",children:"concat_parts"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def concat_parts(parts: List[Part]) -> List\n"})}),"\n",(0,s.jsx)(n.p,{children:'Concatenate parts with the same type.\nIf two adjacent parts both have the "text" attribute, then it will be joined into one part.'}),"\n",(0,s.jsx)(n.h3,{id:"oai_messages_to_gemini_messages",children:"oai_messages_to_gemini_messages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def oai_messages_to_gemini_messages(\n        messages: list[Dict[str, Any]]) -> list[dict[str, Any]]\n"})}),"\n",(0,s.jsx)(n.p,{children:'Convert messages from OAI format to Gemini format.\nMake sure the "user" role and "model" role are interleaved.\nAlso, make sure the last item is from the "user" role.'})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var s=i(67294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);