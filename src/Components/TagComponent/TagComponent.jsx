import React, { useState } from 'react';
import styles from './TagComponent.module.css';
import cross from '../../assets/icons/cross.png';
import { useDispatch } from 'react-redux';
import { setCategories, setSkills , setLocation } from '../../state/filter/filter-slice'

function TagComponent({data}) {
  
  const [selectedTags, setSelectedTags] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const availableTags = data.list;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowDropdown(true);
  };

  const handleInputClick = () => {
    setShowDropdown(true);
  };

  const handleTagSelection = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }

    switch (data.heading) {
      case 'Category':
        dispatch(setCategories([...selectedTags, tag]));
        break;
      case 'Skills':
        dispatch(setSkills([...selectedTags, tag]));
        break;
      case 'Location':
        dispatch(setLocation([...selectedTags, tag]));
        break;
      default:
        break;
    }
    setInputValue('');
    setShowDropdown(false);
  };

  const handleTagRemoval = (tag) => {
    const updatedTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
    setSelectedTags(updatedTags);

    switch (data.heading) {
      case 'Category':
        dispatch(setCategories(updatedTags));
        break;
      case 'Skills':
        dispatch(setSkills(updatedTags));
        break;
      case 'Location':
        dispatch(setLocation(updatedTags));
        break;
      default:
        break;
    }
  };

  const filteredTags = availableTags.filter((tag) =>
    tag.toLowerCase().includes(inputValue.toLowerCase())
  );

  const isDropdownScrollable = selectedTags.length >= 4;

  return (
    <div className={styles.InputTagsContainer}>
      <div className={styles.heading}>{data.heading}</div>
      <div className={styles.tagContainer}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          className={styles.InputContainer}
          placeholder="Select tags"
        />
        {showDropdown && (
          <div
            className={`${styles.dropdown} ${isDropdownScrollable ? styles.scrollable : ''}`}
          >
            {filteredTags.map((tag) => (
              <div
                className={styles.dropdownItem}
                key={tag}
                onClick={() => handleTagSelection(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
        <div className={styles.otherTags}>
         {selectedTags.map((tag) => (
           <div className={styles.tag} key={tag}>
            <img
              className={styles.crossIcon}
              src={cross}
              alt="Remove"
              onClick={() => handleTagRemoval(tag)}
              />
            {tag}
          </div>
        ))}
        </div>
    </div>
  );
}

export default TagComponent;
