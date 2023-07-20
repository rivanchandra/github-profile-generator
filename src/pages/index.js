import React, { useState, useRef  } from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from 'primereact/checkbox';
import { SelectButton } from 'primereact/selectbutton';
import { Editor } from "primereact/editor";
import { Splitter, SplitterPanel } from 'primereact/splitter';

// import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import dynamic from "next/dynamic";

const MDPreview = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  const options = ['Options', '</>'];
  const [value, setValue] = useState(options[0]);
  const [activeIndex, setActiveIndex] = useState('Options');

  const [heading, setHeading] = useState('Markdown Preview');
  const [subtitle, setSubtitle] = useState('React component preview markdown text.');
  const [banner, setBanner] = useState('https://arturssmirnovs.github.io/github-profile-readme-generator/images/banner.png');
  const [aboutMe, setAboutMe] = useState('I made this project just for fun, it allows you to create nice and simple GitHub Readme files that you can copy/paste and use in your profile.');
  const [additional1, setAdditional1] = useState('');
  const [additional2, setAdditional2] = useState('');
  const [additional3, setAdditional3] = useState('');
  const [additional4, setAdditional4] = useState('');
  const [additional5, setAdditional5] = useState('');
  const [additional6, setAdditional6] = useState('');
  const [additional7, setAdditional7] = useState('');
  const [additional8, setAdditional8] = useState('');

  const [github, setGithub] = useState('');
  const [devTo, setDevTo] = useState('');
  const [hashnode, setHashnode] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [codepen, setCodepen] = useState('');
  const [codesandbox, setCodesandbox] = useState('');
  const [stackoverflow, setStackoverflow] = useState('');
  const [youtube, setYoutube] = useState('');
  const [reddit, setReddit] = useState('');
  const [website, setWebsite] = useState('');

  // const headingRef = useRef('Markdown Preview');
  // const subtitleRef = useRef('React component preview markdown text.');
  // const bannerRef = useRef('https://arturssmirnovs.github.io/github-profile-readme-generator/images/banner.png');
  // const aboutMeRef = useRef('I made this project just for fun, it allows you to create nice and simple GitHub Readme files that you can copy/paste and use in your profile.');

  const codeRef = useRef('');
  let source = "";

  // const headingChange = (event) => {
  //   headingRef.current = event.target.value;
  // };

  // const subtitleChange = (event) => {
  //   subtitleRef.current = event.target.value;
  // };

  // const bannerChange = (event) => {
  //   bannerRef.current = event.target.value;
  // };

  // const aboutMeChange = (event) => {
  //   aboutMeRef.current = event.target.value;
  // };

  const codeChange = (event) => {
    codeRef.current = event.htmlValue;
    source = event.htmlValue;
  };

  source = `## Hi there 👋, `;
  if(heading){source = source.concat(heading)}
  if(subtitle){source = source.concat(`\n #### ${subtitle}`)}
  if(banner){source = source.concat(`\n ![${subtitle}](${banner})`)}
  if(aboutMe){source = source.concat(`\n > ${aboutMe}`)}
  if(additional1){source = source.concat(`\n - 🔭 I’m currently working on ${additional1}`)}
  if(additional2){source = source.concat(`\n - 🌱 I’m currently learning ${additional2}`)}
  if(additional3){source = source.concat(`\n - 👯 I want to collaborate on ${additional3}`)}
  if(additional4){source = source.concat(`\n - 🤔 I’m looking for help with ${additional4}`)}
  if(additional5){source = source.concat(`\n - 💬 Ask me about ${additional5}`)}
  if(additional6){source = source.concat(`\n - 📫 How to reach me: ${additional6}`)}
  if(additional7){source = source.concat(`\n - 😄 Pronouns: ${additional7}`)}
  if(additional8){source = source.concat(`\n - ⚡ Fun fact: ${additional8}`)}

  if(github || devTo || hashnode || linkedin || facebook || instagram || twitter || codepen || codesandbox || stackoverflow || youtube || reddit || website){
    if(github){source = source.concat(`\n ### Social \n`)}
  }
  if(github){source = source.concat(` [![](https://img.shields.io/badge/-Github-informational?style=flat-square&logo=github&logoColor=white&color=blue)](${github})`)}
  if(devTo){source = source.concat(` [![](https://img.shields.io/badge/-Dev.To-informational?style=flat-square&logo=devdotto&logoColor=white&color=blue)](${devTo})`)}
  if(hashnode){source = source.concat(` [![](https://img.shields.io/badge/-Hashnode-informational?style=flat-square&logo=hashnode&logoColor=white&color=blue)](${hashnode})`)}
  if(linkedin){source = source.concat(` [![](https://img.shields.io/badge/-Linkedin-informational?style=flat-square&logo=linkedin&logoColor=white&color=blue)](${linkedin})`)}
  if(facebook){source = source.concat(` [![](https://img.shields.io/badge/-Facebook-informational?style=flat-square&logo=facebook&logoColor=white&color=blue)](${facebook})`)}
  if(instagram){source = source.concat(` [![](https://img.shields.io/badge/-Instagram-informational?style=flat-square&logo=instagram&logoColor=white&color=blue)](${instagram})`)}
  if(twitter){source = source.concat(` [![](https://img.shields.io/badge/-Twitter-informational?style=flat-square&logo=twitter&logoColor=white&color=blue)](${twitter})`)}
  if(codepen){source = source.concat(` [![](https://img.shields.io/badge/-Codepen-informational?style=flat-square&logo=codepen&logoColor=white&color=blue)](${codepen})`)}
  if(codesandbox){source = source.concat(` [![](https://img.shields.io/badge/-Codesandbox-informational?style=flat-square&logo=codesandbox&logoColor=white&color=blue)](${codesandbox})`)}
  if(stackoverflow){source = source.concat(` [![](https://img.shields.io/badge/-Stackoverflow-informational?style=flat-square&logo=stackoverflow&logoColor=white&color=blue)](${stackoverflow})`)}
  if(youtube){source = source.concat(` [![](https://img.shields.io/badge/-Youtube-informational?style=flat-square&logo=youtube&logoColor=white&color=blue)](${youtube})`)}
  if(reddit){source = source.concat(` [![](https://img.shields.io/badge/-Reddit-informational?style=flat-square&logo=reddit&logoColor=white&color=blue)](${reddit})`)}
  if(website){source = source.concat(` [![](https://img.shields.io/badge/-Website-informational?style=flat-square&logo=circle&logoColor=white&color=blue)](${website})`)}
  
  // source =  `## Hi there 👋, ${heading || ""}  
  // ${`#### ${subtitle}` || ""}  
  // ${`![${subtitle}](${banner})`|| ""}
  // ${`> ${aboutMe}` || ""}
  // ${additional1? `- 🔭 I’m currently working on ${additional1}` : ""}
  // ${additional2? `- 🌱 I’m currently learning ${additional2}` : ""}
  // ${additional3? `- 👯 I want to collaborate on ${additional3}` : ""}
  // ${additional4? `- 🤔 I’m looking for help with ${additional4}` : ""}
  // ${additional5? `- 💬 Ask me about ${additional5}` : ""}
  // ${additional6? `- 📫 How to reach me: ${additional6}` : ""}
  // ${additional7? `- 😄 Pronouns: ${additional7}` : ""}
  // ${additional8? `- ⚡ Fun fact: ${additional8}` : ""}`;


  codeRef.current = source;
  // const source = `## Markdown Preview


  // > todo: React component preview markdown text.
  // `;

  const changeTab = (e) => {
    console.log(e.value)
    setActiveIndex(e.value)
    setValue(e.value)
  }

  if(activeIndex === 'Options') {
    return (
      // <div className="grid">
      //   <div className="col">
      //     <div className="card">
          <Splitter >
            <SplitterPanel >
              <TabView>
                <TabPanel header="About Me">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">Heading</label>
                    <InputText id="heading" value={heading} onChange={(e)=>setHeading(e.target.value)} />
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="subtitle">Subtitle</label>
                    <InputText id="subtitle" value={subtitle} onChange={(e)=>setSubtitle(e.target.value)} />
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="Banner-URL">Banner URL</label>
                    <InputText id="Banner-URL" value={banner} onChange={(e)=>setBanner(e.target.value)} />
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="about-me">About me</label>
                    <InputTextarea autoResize  id="About-me" rows={5} value={aboutMe} onChange={(e)=>setAboutMe(e.target.value)} />
                  </div>
                </TabPanel>
                <TabPanel header="Additional">
                  <div class="formgrid grid">
                    <div class="field col-6">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">🔭 I’m currently working on...</label>
                        <InputText id="heading" value={additional1} onChange={(e)=>setAdditional1(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col-6">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">🌱 I’m currently learning...</label>
                        <InputText id="heading" value={additional2} onChange={(e)=>setAdditional2(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col-6">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">👯 I want to collaborate on...</label>
                        <InputText id="heading" value={additional3} onChange={(e)=>setAdditional3(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col-6">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">🤔 I’m looking for help with...</label>
                        <InputText id="heading" value={additional4} onChange={(e)=>setAdditional4(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col-6">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">💬 Ask me about...</label>
                        <InputText id="heading" value={additional5} onChange={(e)=>setAdditional5(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col-6">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">📫 How to reach me:</label>
                        <InputText id="heading" value={additional6} onChange={(e)=>setAdditional6(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col-6">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">😄 Pronouns:</label>
                        <InputText id="heading" value={additional7} onChange={(e)=>setAdditional7(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col-6">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">⚡ Fun fact:</label>
                        <InputText id="heading" value={additional8} onChange={(e)=>setAdditional8(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Social">
                  <div class="formgrid grid">
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Github</label>
                        <InputText id="heading" value={github} onChange={(e)=>setGithub(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">DEV.TO</label>
                        <InputText id="heading" value={devTo} onChange={(e)=>setDevTo(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Hashnode</label>
                        <InputText id="heading" value={hashnode} onChange={(e)=>setHashnode(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">LinkedIn</label>
                        <InputText id="heading" value={linkedin} onChange={(e)=>setLinkedin(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Facebook</label>
                        <InputText id="heading" value={facebook} onChange={(e)=>setFacebook(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Instagram</label>
                        <InputText id="heading" value={instagram} onChange={(e)=>setInstagram(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Twitter</label>
                        <InputText id="heading" value={twitter} onChange={(e)=>setTwitter(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Codepen</label>
                        <InputText id="heading" value={codepen} onChange={(e)=>setCodepen(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">CodeSandbox</label>
                        <InputText id="heading" value={codesandbox} onChange={(e)=>setCodesandbox(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Stack Overflow</label>
                        <InputText id="heading" value={stackoverflow} onChange={(e)=>setStackoverflow(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">YouTube</label>
                        <InputText id="heading" value={youtube} onChange={(e)=>setYoutube(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Reddit</label>
                        <InputText id="heading" value={reddit} onChange={(e)=>setReddit(e.target.value)} />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Website</label>
                        <InputText id="heading" value={website} onChange={(e)=>setWebsite(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Others">
                  <div className="flex field flex-column gap-2">
                    <label htmlFor="heading">Heading</label>
                    <InputText id="heading" />
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">Heading</label>
                    <div className="flex flex-wrap justify-content-left gap-3">
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient1" name="pizza" value="Cheese"  />
                          <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient2" name="pizza" value="Mushroom"  />
                          <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient3" name="pizza" value="Pepper"  />
                          <label htmlFor="ingredient3" className="ml-2">Pepper</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient4" name="pizza" value="Onion"  />
                          <label htmlFor="ingredient4" className="ml-2">Onion</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">Heading</label>
                    <div className="flex flex-wrap justify-content-left gap-3">
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient1" name="pizza" value="Cheese"  />
                          <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient2" name="pizza" value="Mushroom"  />
                          <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient3" name="pizza" value="Pepper"  />
                          <label htmlFor="ingredient3" className="ml-2">Pepper</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient4" name="pizza" value="Onion"  />
                          <label htmlFor="ingredient4" className="ml-2">Onion</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">Heading</label>
                    <div className="flex flex-wrap justify-content-left gap-3">
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient1" name="pizza" value="Cheese"  />
                          <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient2" name="pizza" value="Mushroom"  />
                          <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient3" name="pizza" value="Pepper"  />
                          <label htmlFor="ingredient3" className="ml-2">Pepper</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient4" name="pizza" value="Onion"  />
                          <label htmlFor="ingredient4" className="ml-2">Onion</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">Heading</label>
                    <div className="flex flex-wrap justify-content-left gap-3">
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient1" name="pizza" value="Cheese"  />
                          <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient2" name="pizza" value="Mushroom"  />
                          <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient3" name="pizza" value="Pepper"  />
                          <label htmlFor="ingredient3" className="ml-2">Pepper</label>
                      </div>
                      <div className="flex align-items-left">
                          <Checkbox inputId="ingredient4" name="pizza" value="Onion"  />
                          <label htmlFor="ingredient4" className="ml-2">Onion</label>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Code">
                  <Editor style={{ height: '80vh' }} value={codeRef} onTextChange={(e) => codeChange(e)}/>
                </TabPanel>
              </TabView>
            </SplitterPanel>
            <SplitterPanel >
          {/* </div>
        </div>
        <div className="col">
          <div className="card flex justify-content-end"> 
              <SelectButton value={value} onChange={(e) => changeTab(e)} options={options} />
          </div>
        </div>
      </div> */}
          <div className="card flex justify-content-end"> 
            <SelectButton value={value} onChange={(e) => changeTab(e)} options={options} />
          </div>
          <div data-color-mode="light">
            <MDPreview source={source} />
          </div>
        </SplitterPanel>
      </ Splitter>
    )
  }
  else
  {
    return (
      <p>test</p>
    )
  }
  
}
