import React, { useState } from 'react';
import Button from './Button';
import FilterMenu from './FilterMenu';

const templateData = [
  {
    id: 1,
    link: "7HUW_aukApo",
    title: "Useful Phrases for Beginners",
    category: "Languages",
  },
  {
    id: 2,
    link: "oE_QegYAvTc",
    title: "Numbers, Colors & More",
    category: "Languages",
  },
  {
    id: 3,
    link: "gfu0SwwqDt8",
    title: "Numbers, Colors & More - Rock 'N Learn",
    category: "Languages",
  },
  {
    id: 4,
    link: "pkjJsYsy5cA&t=145s",
    title: "Geography - Nature",
    category: "Nature"
  },
  {
    id: 5,
    link: "ONFkb-PxKts",
    title: "Planet Earth5",
    category: "Nature"
  },
  {
    id: 6,
    link: "zlnFk6d-8I4",
    title: "I Love My Planet",
    category: "Nature"
  },
  {
    id: 7,
    link: "jzSzLFskqrs",
    title: "Farm Animals Names & Sounds",
    category: "Animals Planet"
  },
  {
    id: 8,
    link: "CA6Mofzh7jo",
    title: "Wild animals for kids",
    category: "Animals Planet"
  },
  {
    id: 9,
    link: "Oxw6FoUNeT4",
    title: "Sea Animals",
    category: "Animals Planet"
  },
  {
    id: 10,
    link: "vxffHm4wy24&list=PLZS3MUjYqjUGZLdvCFH92mHPqNXxYEjaE",
    title: "Learning to count",
    category: "Math World"
  },
  {
    id: 11,
    link: "gf97tXwTDe0&list=PLZS3MUjYqjUGH9zIwlrUrTwjtqKmS3spv",
    title: "Learn to add with Dino",
    category: "Math World"
  },
  {
    id: 12,
    link: "https://www.youtube.com/watch?v=Yw8azUV_vW8&list=PLZS3MUjYqjUERkd_nldA9GTvb42wHb1HM",
    title: "Fractions for kids",
    category: "Math World"
  },
  {
    id: 12,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 13,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 14,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 15,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 16,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 17,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 18,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 19,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 20,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 21,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 22,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 23,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
  },
  {
    id: 24,
    link: "sixth",
    title: "Template 6",
    category: "Math World"
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