import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from 'primereact/checkbox';

export default function Home() {
  return (
    <div className="grid">
      <div className="col">
        <div className="card">
          <TabView>
            <TabPanel header="About ME">
              <div className="flex flex-column gap-2">
                <label htmlFor="heading">Heading</label>
                <InputText id="heading" />
              </div>
              <div className="flex flex-column gap-2">
                <label htmlFor="subtitle">Subtitle</label>
                <InputText id="subtitle" />
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
          </TabView>
        </div>
      </div>
      <div className="col">
        <div className="text-center p-3 border-round-sm bg-primary font-bold ">right</div>
      </div>
    </div>
  )
}
