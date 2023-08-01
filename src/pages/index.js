import React, { useState, useEffect } from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from 'primereact/checkbox';
import { SelectButton } from 'primereact/selectbutton';
import { Editor } from "primereact/editor";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { ColorPicker } from 'primereact/colorpicker';
import { Fieldset } from 'primereact/fieldset';

import Social from "./components/social";
import Skills from "./components/skills";

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

  const [heading, setHeading] = useState(`Markdown Preview`);
  const [subtitle, setSubtitle] = useState(`React component preview markdown text.`);
  const [banner, setBanner] = useState(`https://arturssmirnovs.github.io/github-profile-readme-generator/images/banner.png`);
  const [aboutMe, setAboutMe] = useState(`I made this project just for fun, it allows you to create nice and simple GitHub Readme files that you can copy/paste and use in your profile.`);
  const [additional1, setAdditional1] = useState('');
  const [additional2, setAdditional2] = useState('');
  const [additional3, setAdditional3] = useState('');
  const [additional4, setAdditional4] = useState('');
  const [additional5, setAdditional5] = useState('');
  const [additional6, setAdditional6] = useState('');
  const [additional7, setAdditional7] = useState('');
  const [additional8, setAdditional8] = useState('');

  // Social================================================================================
  const [items, setItems] = useState([{id: 0, icon: "Select an Icon", url: ""}]);
  const [website, setWebsite] = useState('');
  const [colorSocial, setColorSocial] = useState('#00A4DE');

  const handleAdd = () => {
    setItems([...items, {id: items.length, icon: "Select an Icon", url: "" }]);
  };

  const handleRemove = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleInputChange = (id, field, value) => {
    const updatedItems = items?.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };
  // Social================================================================================

  // Skill================================================================================
  const [skills, setSkills] = useState([{id: 0, icon: "Select an Icon"}]);
  const [colorSkill, setColorSkill] = useState('#1F305F');

  const handleAddSkill = () => {
    setSkills([...skills, {id: skills.length, icon: "Select an Icon"}]);
  };

  const handleRemoveSkill = (id) => {
    const updatedItems = skills.filter((item) => item.id !== id);
    setSkills(updatedItems);
  };

  const handleInputChangeSkill = (id, field, value) => {
    const updatedItems = skills?.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setSkills(updatedItems);
  };
  // Skill================================================================================

  // Other================================================================================
  const [username, setUsername] = useState('');
  const [profileViewsChecked, setProfileViewsChecked] = useState(false);
  const [githubStatisticChecked, setGithubStatisticChecked] = useState(false);
  const [githubActivityChecked, setGithubActivityChecked] = useState(false);
  const [languageChecked, setLanguageChecked] = useState(false);
  const [showTropiesChecked, setShowTropiesChecked] = useState(false);
  const [githubMetricsChecked, setGithubMetricsChecked] = useState(false);
  const [githubStreakChecked, setGithubStreakChecked] = useState(false);
  
  let initialSource = "";

  initialSource = `## Hi there 👋, `;
  if(heading){initialSource = `${initialSource}${heading}`}
  if(subtitle){initialSource = `${initialSource}\n#### ${subtitle}`}
  if(banner){initialSource = `${initialSource}\n![${subtitle}](${banner})`}
  if(aboutMe){initialSource = `${initialSource}\n> ${aboutMe}`}
  if(additional1){initialSource = `${initialSource}\n- 🔭 I’m currently working on ${additional1}`}
  if(additional2){initialSource = `${initialSource}\n- 🌱 I’m currently learning ${additional2}`}
  if(additional3){initialSource = `${initialSource}\n- 👯 I want to collaborate on ${additional3}`}
  if(additional4){initialSource = `${initialSource}\n- 🤔 I’m looking for help with ${additional4}`}
  if(additional5){initialSource = `${initialSource}\n- 💬 Ask me about ${additional5}`}
  if(additional6){initialSource = `${initialSource}\n- 📫 How to reach me: ${additional6}`}
  if(additional7){initialSource = `${initialSource}\n- 😄 Pronouns: ${additional7}`}
  if(additional8){initialSource = `${initialSource}\n- ⚡ Fun fact: ${additional8}`}

  if(website || items.length > 1 || items[0].icon !== 'Select an Icon'){
    {initialSource = `${initialSource}\n### Social \n`}
  }
  
  if(website){initialSource = `${initialSource} [![](https://img.shields.io/badge/-Website-informational?style=flat-square&logo=circle&logoColor=white&color=blue)](${website})`}
  
  items?.map((item) => {
    if(item.icon !== 'Select an Icon'){
      const lowercasedString = item.icon.toLowerCase();

      const stringWithoutSpaces = lowercasedString.replace(/\s/g, '');
      const hyphenatedString = item.icon.replace(/\s/g, '');
      initialSource = `${initialSource} [![](https://img.shields.io/badge/${hyphenatedString}-informational?style=flat-square&logo=${stringWithoutSpaces}&logoColor=white&color=${colorSocial})](${item.url})`
    }
  })

  if(skills.length > 1 || skills[0].icon !== 'Select an Icon'){
    initialSource = `${initialSource}\n ### Skills \n`;
  }

  skills?.map((item) => {
    if(item.icon !== 'Select an Icon'){
      const lowercasedString = item.icon.toLowerCase();

      const stringWithoutSpaces = lowercasedString.replace(/\s/g, '');
      const hyphenatedString = item.icon.replace(/\s/g, '');
      initialSource = `${initialSource} ![](https://img.shields.io/badge/${hyphenatedString}-informational?style=flat-square&logo=${stringWithoutSpaces}&logoColor=white&color=${colorSkill})`
    }
  })

  if (username) {
    initialSource = `${initialSource}\n`;
    if(profileViewsChecked){initialSource = `${initialSource}\n![](https://komarev.com/ghpvc/?username=${username}&style=flat-square)`}
    if(githubStatisticChecked){initialSource = `${initialSource}\n\n![](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true)`}
    if(githubActivityChecked){initialSource = `${initialSource}\n![](https://github-readme-activity-graph.vercel.app/graph?username=${username}&hide_border=true&theme=minimal)`}
    if(languageChecked){initialSource = `${initialSource}\n![](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact)`}
    if(showTropiesChecked){initialSource = `${initialSource}\n![](https://github-profile-trophy.vercel.app/?username=${username})`}
    if(githubMetricsChecked){initialSource = `${initialSource}\n![](https://metrics.lecoq.io/${username})`}
    if(githubStreakChecked){initialSource = `${initialSource}\n![](https://streak-stats.demolab.com/?user=${username})`}
  }

  const [source, setSource] = useState(initialSource);
  const [editorContent, setEditorContent] = useState(source);

  const codeChange = (e) => {
    const newSource = e.htmlValue
      .split('<p>')
      .map((line) => line.replace('</p>', ''))
      .join('\n');
    setSource(newSource);
    setEditorContent(e.htmlValue);
  };

  useEffect(() => {
    // Convert the source to HTML format
    const htmlContent = initialSource.replace(/\n/g, '<br />');
    setEditorContent(htmlContent);
    setSource(initialSource);
  }, [initialSource]);

  const changeTab = (e) => {
    setActiveIndex(e.value)
    setValue(e.value)
  }

    return (
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
              <div className="formgrid grid">
                <div className="field col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">🔭 I’m currently working on...</label>
                    <InputText id="heading" value={additional1} onChange={(e)=>setAdditional1(e.target.value)} />
                  </div>
                </div>
                <div className="field col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">🌱 I’m currently learning...</label>
                    <InputText id="heading" value={additional2} onChange={(e)=>setAdditional2(e.target.value)} />
                  </div>
                </div>
                <div className="field col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">👯 I want to collaborate on...</label>
                    <InputText id="heading" value={additional3} onChange={(e)=>setAdditional3(e.target.value)} />
                  </div>
                </div>
                <div className="field col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">🤔 I’m looking for help with...</label>
                    <InputText id="heading" value={additional4} onChange={(e)=>setAdditional4(e.target.value)} />
                  </div>
                </div>
                <div className="field col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">💬 Ask me about...</label>
                    <InputText id="heading" value={additional5} onChange={(e)=>setAdditional5(e.target.value)} />
                  </div>
                </div>
                <div className="field col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">📫 How to reach me:</label>
                    <InputText id="heading" value={additional6} onChange={(e)=>setAdditional6(e.target.value)} />
                  </div>
                </div>
                <div className="field col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">😄 Pronouns:</label>
                    <InputText id="heading" value={additional7} onChange={(e)=>setAdditional7(e.target.value)} />
                  </div>
                </div>
                <div className="field col-6">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">⚡ Fun fact:</label>
                    <InputText id="heading" value={additional8} onChange={(e)=>setAdditional8(e.target.value)} />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Social">
              <div className="formgrid grid">
                <div className="field col-12">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">Website</label>
                    <InputText id="heading" value={website} onChange={(e)=>setWebsite(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="formgrid grid">
                <div className="field col-12">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">Pick Social Color</label>
                    <ColorPicker value={colorSocial} onChange={(e) => setColorSocial(e.value)} />
                  </div>
                </div>
              </div>
              <Social 
                items={items}
                handleInputChange={handleInputChange}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
              />
            </TabPanel>
            <TabPanel header="Skill">
              <div className="formgrid grid">
                <div className="field col-12">
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">Pick Skill Color</label>
                    <ColorPicker value={colorSkill} onChange={(e) => setColorSkill(e.value)} />
                  </div>
                </div>
              </div>
              <Skills 
                skills={skills}
                handleInputChangeSkill={handleInputChangeSkill}
                handleAddSkill={handleAddSkill}
                handleRemoveSkill={handleRemoveSkill}
              />
            </TabPanel>
            <TabPanel header="Others">
              <div className="flex field flex-column gap-2">
                <label htmlFor="heading">Github Username</label>
                <InputText id="heading" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="flex flex-column gap-2">
                <label htmlFor="heading">STATISTICS</label>
                <div className="flex flex-wrap justify-content-left gap-3">
                  <div className="flex align-items-left field col-4">
                      <Checkbox inputId="ingredient1" onChange={e => setProfileViewsChecked(e.checked)} checked={profileViewsChecked} />
                      <label htmlFor="ingredient1" className="ml-2">Show profile views</label>
                  </div>
                  <div className="flex align-items-left field col-4">
                      <Checkbox inputId="ingredient2" onChange={e => setGithubStatisticChecked(e.checked)} checked={githubStatisticChecked} />
                      <label htmlFor="ingredient2" className="ml-2">Show GitHub statistics</label>
                  </div>
                  <div className="flex align-items-left field col-4">
                      <Checkbox inputId="ingredient3" onChange={e => setGithubActivityChecked(e.checked)} checked={githubActivityChecked} />
                      <label htmlFor="ingredient3" className="ml-2">Show GitHub Activity Graph</label>
                  </div>
                  <div className="flex align-items-left field col-4">
                      <Checkbox inputId="ingredient4" onChange={e => setLanguageChecked(e.checked)} checked={languageChecked} />
                      <label htmlFor="ingredient4" className="ml-2">Show most used languages</label>
                  </div>
                  <div className="flex align-items-left field col-4">
                      <Checkbox inputId="ingredient5" onChange={e => setShowTropiesChecked(e.checked)} checked={showTropiesChecked} />
                      <label htmlFor="ingredient5" className="ml-2">Show Github Trophies</label>
                  </div>
                  <div className="flex align-items-left field col-4">
                      <Checkbox inputId="ingredient6" onChange={e => setGithubMetricsChecked(e.checked)} checked={githubMetricsChecked} />
                      <label htmlFor="ingredient6" className="ml-2">Show GitHub metrics</label>
                  </div>
                  <div className="flex align-items-left field col-4">
                      <Checkbox inputId="ingredient7" onChange={e => setGithubStreakChecked(e.checked)} checked={githubStreakChecked} />
                      <label htmlFor="ingredient7" className="ml-2">Show GitHub Streak Stats</label>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Code">
              <div className="card">
                <Fieldset legend="Markdown Tips" toggleable>
                  <div class="md-tips mt-3"><ul><li data-i18n="markdownTips.bolden">To <b>bolden</b> the text, wrap it with two asterisks (*) (<code>**<b>word</b>**</code>)</li> <li data-i18n="markdownTips.italize">To <i>italisize</i> the text, wrap it with one asterisk (*) (<code>*<i>word</i>*</code>)</li> <li data-i18n="markdownTips.strikethrough">To <s>strikethrough</s> the text, wrap it with two tildes (~) (<code>~~<s>word</s>~~</code>)</li> <li data-i18n="markdownTips.link">To make a <a href="#">link</a>, place the link text in brackets and the url in parentheses
                      (<code>[<a href="http://example.com">link</a>](http://example.com)</code>)</li> <li data-i18n="markdownTips.icon">To make an image, place an !, the alt
                      text in brackets, and the url in parentheses (<code>![github](/images/icon.png)</code>)</li></ul> <p data-i18n="markdownTips.learnMore">
                  Learn more:
                  &nbsp;<a href="https://guides.github.com/features/mastering-markdown/" target="_blank">
                      https://guides.github.com/features/mastering-markdown/
                  </a></p></div>
                  <b style={{color:'red'}}>WARNING: Changing source manually could result in lost of data if you use generation fields again.</b>
                </Fieldset>
              </div>
              <br/>
              <Editor style={{ height: '80vh' }} value={editorContent} onTextChange={(e) => codeChange(e)} />
            </TabPanel>
          </TabView>
        </SplitterPanel>
        <SplitterPanel >
        <div data-color-mode="light">
          <MDPreview source={source} />
        </div>
    </SplitterPanel>
  </ Splitter>
  )

}
