import { useState } from 'react';
import { Select } from '@reactunity/material/select'
import { Slider } from '@reactunity/material/slider';
import { render } from '@reactunity/renderer';
import TodoPage from './todo';
import './index.scss';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSecondSidebar, setShowSecondSidebar] = useState(false);
  const [setSelectedShelf] = useState(null);
  const shelves = ['Shelf 1', 'Shelf 2', 'Shelf 3', 'Shelf 4', 'Shelf 5', 'Shelf 6', 'Shelf 7', 'Shelf 8'];


  const handleSearch = (e) => {
    console.log('handleSearch called');
    const term = e.target.value;
    setSelectedShelf(null);
    setSearchTerm(term);
    const shelfElems = document.querySelectorAll('.shelf');
    shelfElems.forEach((shelfElem) => shelfElem.ClassList.Remove('selected'));
    if (term) {
      const matchingShelf = Array.from(shelfElems).find((shelfElem) =>
        shelfElem.QuerySelector('h3').TextContent.toLowerCase().includes(term.toLowerCase())
      );
      if (matchingShelf) {
        setSelectedShelf(matchingShelf.QuerySelector('h3').TextContent);
        matchingShelf.ClassList.Add('selected');
        console.log('selected shelf:', matchingShelf);
      }
    }
  };
  const initialValue = ['val1', 'val2'];
  return (
    <>
      <div>
        <header>
          <h1>Smart Shelf Configurator</h1>
        </header>
        <button className="side-button" onClick={() => setShowSidebar(true)}>=</button>
        <button className="filter-sort" onClick={() => setShowSecondSidebar(true)}>Filter/Sort</button>
        <div className="search-bar">
          <input
            placeholder="Search items..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="shelf-container">
          {shelves.map((shelf) => (
            <div key={shelf} className="shelf" onClick={() => setSelectedShelf(shelf)}>
              <h3>{shelf}</h3>
            </div>
          ))}
        </div>
        {showSidebar && (
          <div className="sidebar">
            <button className="close-button" onClick={() => setShowSidebar(false)}>X</button>
            <h1>Smart Shelf Configurator</h1>
            <h1>WELCOME</h1>
            <Dropdowns />
            <button className="logout-btn">Logout</button>
          </div>
        )}
        {showSecondSidebar && (
          <div className="second-sidebar">
            <button className="close-button" onClick={() => setShowSecondSidebar(false)}>X</button>
            <div className="search-container">
              <input placeholder="Search..." />
              <button>Search</button>

              {/* <div className="slider-container">
              <label>Slider:</label>
              <div className="slider">
                <div className="slider-track"></div>
                <div className="slider-thumb"></div>
              </div>
              <label>10</label>
            </div> */}

              <Sliders />

            </div>
            {/* <button className="close-btn" onClick={() => setShowSecondSidebar(false)}>Done</button> */}
          </div>
        )}

      </div>

      <TodoPage />
    </>
  );
}

const initialValue = ['val1', 'val2'];

function Dropdowns() {
  return <section>
    <h2>Dropdowns</h2>

    <Select placeholder={'Regular select'} initialValue="val1">
      <Select.Option value="val1">Option 1</Select.Option>
      <Select.Option value="val2">Option 2</Select.Option>
      <Select.Option value="val3">Option 3</Select.Option>
      <Select.Option value="val4">Option 4</Select.Option>
      <Select.Option value="val5">Option 5</Select.Option>
      <Select.Option value="val6">Option 6</Select.Option>
      <Select.Option value="val7">Option 7</Select.Option>
      <Select.Option value="val8">Option 8</Select.Option>
      <Select.Option value="val9">Option 9</Select.Option>
      <Select.Option value="val10">Option 10</Select.Option>
      <Select.Option value="val11">Option 11</Select.Option>
      <Select.Option value="val12">Option 12</Select.Option>
      <Select.Option value="val13">Option 13</Select.Option>
    </Select>

    <Select multiple placeholder={'Multiple with initial value'}>
      <Select.Option value="val1">Option 1</Select.Option>
      <Select.Option value="val2">Option 2</Select.Option>
      <Select.Option value="val3">Option 3</Select.Option>
    </Select>

    <Select multiple chips initialValue={initialValue} placeholder={'Chips selection'}>
      <Select.Option value="val1">Option 1</Select.Option>
      <Select.Option value="val2">Option 2</Select.Option>
      <Select.Option value="val3">Option 3</Select.Option>
      <Select.Option value="val4">Option 4</Select.Option>
      <Select.Option value="val5">Option 5</Select.Option>
    </Select>
  </section>;
}

function Sliders() {
  const [sliderVal, setSliderVal] = useState(60);

  return <section>
    <h2>Sliders</h2>

    <Slider allowScroll direction="horizontal" mode="normal" max={100} step={20}>{(val) => val * val}</Slider>
    <Slider allowScroll direction="horizontal" mode="diff" defaultValue={20} max={100} step={20}>{(val) => val * val}</Slider>
    <Slider allowScroll direction="horizontal-reverse" mode="normal" defaultValue={40} max={100} step={20}>asdf</Slider>
    <Slider onChange={x => console.log(x)} allowScroll direction="horizontal-reverse" mode="diff" max={100} step={20}>asdf</Slider>

  </section>;
}
render(<App />);
