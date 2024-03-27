import React, {useState} from 'react';

const POI_ID = "poiId";
const POI_NAME = "poiName";
const SEARCH_NUMBER = "searchNumber";

function SearchModal() {
  const [poiId, setPoiId] = useState<string>();
  const [poiName, setPoiName] = useState<string>();
  const [searchNumber, setSearchNumber] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) =>{
    console.log("event.target.value: ", event.target.value);
    type === POI_ID && setPoiId(event.target.value);
    type === POI_NAME && setPoiName(event.target.value);
    type === SEARCH_NUMBER && setSearchNumber(event.target.value);
  }

  const handleClick = () => {
    chrome.runtime.sendMessage({ poiId: poiId, poiName: poiName, searchNumber: searchNumber }, function (response) {
      alert("response: " + response);
      alert("response.poiId: " + response.poiId);
    })
  }

  return (
    <div>
      <div className="inputContainer">
        <label htmlFor={POI_ID}></label>
        <input id={POI_ID} placeholder="输入 poi id" type="text" onChange={(event) => handleChange(event, POI_ID)}/>
      </div>
      <div className="inputContainer">
        <label htmlFor={POI_NAME}></label>
        <input id={POI_NAME} placeholder="输入 poi name" type="text" onChange={(event) => handleChange(event, POI_NAME)}/>
      </div>
      <div className="inputContainer">
        <label htmlFor={SEARCH_NUMBER}></label>
        <input id={SEARCH_NUMBER} placeholder="输入 想要搜索的数量" type="text" onChange={(event) => handleChange(event, SEARCH_NUMBER)}/>
      </div>
      <button className="btn" onClick={() => handleClick()}>搜索并抓取</button>
    </div>
  )
};

export default SearchModal;
