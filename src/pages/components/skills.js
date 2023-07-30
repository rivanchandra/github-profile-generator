
import React from "react";
import { iconDropdown } from '../../resources/dataIconDropdown';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

export const Skills = (props) => {
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
      {props.skills.map((item, index) => (
        <div className="formgrid grid" key={`social-${index}`}>
          <div className="field col-10">
            <div className="flex flex-column gap-2">
              <label htmlFor="heading">Icons</label>
              <Dropdown value={item.icon} onChange={(e) => props.handleInputChangeSkill(item.id, 'icon', e.value.title)} options={iconDropdown} optionLabel="title" placeholder="Select an Icon" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full" />
            </div>
          </div>
          <div className="field col-1">
            <div className="flex flex-column gap-2">
              <label htmlFor="heading">&nbsp;</label>
              <Button label="+" onClick={() => props.handleAddSkill()}/>
            </div>
          </div>
          {props.skills.length > 1 && item.id > 0?
            <div className="field col-1">
              <div className="flex flex-column gap-2">
                <label htmlFor="heading">&nbsp;</label>
                <Button label="-" onClick={() => props.handleRemoveSkill(item.id)}/>
              </div>
            </div>
            :''
          }
        </div>
      ))}
    </>
  )
}