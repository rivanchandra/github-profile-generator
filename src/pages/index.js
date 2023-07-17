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

  const headingRef = useRef('## Markdown Preview');
  const subtitleRef = useRef('> todo: React component preview markdown text.');
  const codeRef = useRef('');
  let source = "";

  const headingChange = (event) => {
    headingRef.current = event.target.value;
  };

  const subtitleChange = (event) => {
    subtitleRef.current = event.target.value;
  };

  const codeChange = (event) => {
    codeRef.current = event.htmlValue;
    source = event.htmlValue;
  };

  source = (headingRef.current ? headingRef.current : '') + (subtitleRef.current ? "\n" + subtitleRef.current : '');
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
                    <InputText id="heading" value={headingRef.current} onChange={headingChange} />
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="subtitle">Subtitle</label>
                    <InputText id="subtitle" value={subtitleRef.current} onChange={subtitleChange} />
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="Banner-URL">Banner URL</label>
                    <InputText id="Banner-URL" />
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="about-me">About me</label>
                    <InputTextarea  id="About-me" rows={5} />
                  </div>
                  <div className="flex flex-column gap-2">
                    <label htmlFor="heading">Heading</label>
                    <InputText id="heading" />
                  </div>
                </TabPanel>
                <TabPanel header="Additional">
                  <div class="formgrid grid">
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Social">
                  <div class="formgrid grid">
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
                      </div>
                    </div>
                    <div class="field col">
                      <div className="flex flex-column gap-2">
                        <label htmlFor="heading">Heading</label>
                        <InputText id="heading" />
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
          <div data-color-mode="dark">
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
