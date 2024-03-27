chrome.storage.local.set({
  searchParams: { poiId: "", poiName: "", searchNumber: "" },
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("======onMessage======");
  const poiId = request.poiId;
  const poiName = request.poiName;
  const searchNumber = request.searchNumber;
  if (poiId !== "" && poiName !== "" && searchNumber !== "") {
    chrome.storage.local.set({
      searchParams: {
        poiId: poiId,
        poiName: poiName,
        searchNumber: searchNumber,
      },
    });
    sendResponse({ poiId, poiName, searchNumber });
  }
  return true;
});

export {};
