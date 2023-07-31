
import React from "react";
import { iconDropdown } from '../../resources/dataIconDropdown';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

export default function Social(props) {
  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.title}</div>
        </div>
      );
    }

    return <span>{props.value}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.title}</div>
      </div>
    );
  };

  return(
    <>
      {props.items?.map((item, index) => (
        <div className="formgrid grid" key={`social-${index}`}>
          <div className="field col-5">
            <div className="flex flex-column gap-2">
              <label htmlFor="heading">Icons</label>
              <Dropdown value={item.icon} onChange={(e) => props.handleInputChange(item.id, 'icon', e.value.title)} options={iconDropdown} optionLabel="title" placeholder="Select an Icon" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full" />
            </div>
          </div>
          <div className="field col-5">
            <div className="flex flex-column gap-2">
              <label htmlFor="heading">Url</label>
              <InputText id="heading" value={item.url} onChange={(e)=>props.handleInputChange(item.id, 'url', e.target.value)} />
            </div>
          </div>
          <div className="field col-1">
            <div className="flex flex-column gap-2">
              <label htmlFor="heading">&nbsp;</label>
              <Button label="+" onClick={() => props.handleAdd()}/>
            </div>
          </div>
          {props.items.length > 1 && item.id > 0?
            <div className="field col-1">
              <div className="flex flex-column gap-2">
                <label htmlFor="heading">&nbsp;</label>
                <Button label="-" onClick={() => props.handleRemove(item.id)}/>
              </div>
            </div>
            :''
          }
        </div>
      ))}
    </>
  )
}