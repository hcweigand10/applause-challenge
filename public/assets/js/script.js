const baseUrl = "http://localhost:3001";
let deviceIds = [];
let countries = [];
const resultsEl = document.querySelector("#results")
const messageEl = document.querySelector("#message")
const formEl = document.querySelector("#search-form")
const timerEl = document.querySelector("#timer")
let interval;
let time = 0.0

const search = async (e) => {
  e.preventDefault()
  // start timer
  timer()
  // clear any previous search
  resultsEl.innerHTML = ""
  deviceIds = []
  countries = []
  // get search params
  getParams()
  if (countries.length === 0) {
    alert("Select at least one country")
    return
  }
  if (deviceIds.length === 0) {
    alert("Select at least one device")
    return
  }
  // build request string based on selected countries
  let requestUrl = baseUrl + "/testers/bycountry?";
  countries.forEach((country, index) => {
    requestUrl += `country=${country}`;
    if (index < countries.length - 1) {
      requestUrl += "&";
    }
  });
  // fetch testers who fit country criteria
  const response = await fetch(requestUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const testers = await response.json()
  // filter testers based on device criteria
  const filteredTesters = testers.filter((tester) => {
    //check if any of the selected devices match any of tester devices
    return deviceIds.some((deviceId) =>
    tester.Devices.map((device) => device.id).includes(deviceId)
    );
  });
  getBugCounts(filteredTesters);
};

const timer = () => {
  interval = setInterval(() => {
    time+= 0.01
  }, 10);
}

const getParams = () => {
  // countries
  if (document.querySelector("#country-us").checked) {
    countries.push("US")
  }
  if (document.querySelector("#country-gb").checked) {
    countries.push("GB")
  }
  if (document.querySelector("#country-jp").checked) {
    countries.push("JP")
  }
  // devices
  if (document.querySelector("#iphone3").checked) {
    deviceIds.push(10)
  }
  if (document.querySelector("#iphone4").checked) {
    deviceIds.push(1)
  }
  if (document.querySelector("#iphone4s").checked) {
    deviceIds.push(2)
  }
  if (document.querySelector("#iphone5").checked) {
    deviceIds.push(3)
  }
  if (document.querySelector("#galaxys3").checked) {
    deviceIds.push(4)
  }
  if (document.querySelector("#galaxys4").checked) {
    deviceIds.push(5)
  }
  if (document.querySelector("#nexus4").checked) {
    deviceIds.push(6)
  }
  if (document.querySelector("#droid-razor").checked) {
    deviceIds.push(7)
  }
  if (document.querySelector("#droid-dna").checked) {
    deviceIds.push(8)
  }
  if (document.querySelector("#htc-one").checked) {
    deviceIds.push(9)
  }
}

// check how many bugs each tester has filed for selected devices
const getBugCounts = async (testers) => {
  // create array of promises from fetching each testers bug count
  const promises = testers.map(async (tester) => {
    let requestUrl = baseUrl + `/bugs/bytester/${tester.id}/bydevice?`;
    deviceIds.forEach((deviceId, index) => {
      requestUrl += `deviceId=${deviceId}`;
      if (index < deviceIds.length - 1) {
        requestUrl += "&";
      }
    });
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const count = await response.json()
    return { ...tester, bugCount: count.bugCount };
  });
  // wait for all promises to resolve to form array testers including bug counts
  const buggedTesters = await Promise.all(promises)
  sortTesters(buggedTesters);
};

const sortTesters = (testers) => {
  const sorted = [...testers].sort((a, b) => b.bugCount - a.bugCount);;
  appendResults(sorted)
};

// append card to page with tester details
const appendResults = (sortedTesters) => {
  // stop timer and append time to the page
  timerEl.textContent = `(${time.toFixed(2)} seconds)`
  clearInterval(interval)
  sortedTesters.forEach(tester => {
    const card = document.createElement("div")
    card.setAttribute("class", "card my-2")
    card.innerHTML = `<div class="card-body">
    <h5 class="card-title">${tester.firstName} ${tester.lastName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Country: ${tester.country}</h6>
    <p class="card-text">Bugs filed for matching devices: <strong>${tester.bugCount}</strong></p>
  </div>`
    resultsEl.append(card)
  })
}

formEl.addEventListener("submit", search)
