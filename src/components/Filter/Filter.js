import React, { useState } from 'react';
import Button from './Button';
import FilterMenu from './FilterMenu';

const templateData = [
  {
    id: 1,
    img: "first",
    title: "Template 1",
    category: "UI Design",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."

  },
  {
    id: 2,
    img: "second",
    title: "Template 2",
    category: "Webflow Design",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    
  },
  {
    id: 3,
    img: "third",
    title: "Template 3",
    category: "Figma Design",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    
  },
  {
    id: 4,
    img: "fourth",
    title: "Template 4",
    category: "UI Design",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    
  },
  {
    id: 5,
    img: "fifth",
    title: "Template 5",
    category: "Webflow Design",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    
  },
  {
    id: 6,
    img: "sixth",
    title: "Template 6",
    category: "Figma Design",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
    
  },
]

const allCategories = ["All", ...new Set(templateData.map(item => item.category))]
function Filter() {
  const [menuItem, setMenuItem] = useState(templateData)
  const [buttons, setButtons] = useState(allCategories);
  const filter = (button) => {
    if(button === "All"){
      setMenuItem(templateData)
      return;
    }
    const filteredData = templateData.filter(item => item.category ===  button)
    setMenuItem(filteredData)
  }
  return (
    <div className='container'>
      <div className='filter'>
        <Button button={buttons} filter={filter}/>
        <FilterMenu menuItem={menuItem}/>
      </div>
    </div>
  );
}

export default Filter;