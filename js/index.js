/**----------------------------------------------------------------------------------------------
 * All data: https://openapi.programming-hero.com/api/ai/tools

    Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

    Single data Example: https://openapi.programming-hero.com/api/ai/tool/01
 */
// ----------------------------------------------------------------------------------------------


const dataLoad = async (dataofAI) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools/${dataofAI}`)
  const data = await res.json()
  const aiData = data.data
  console.log(aiData)
//   cardLoadAccordingData(aiData);
};

const cardLoadAccordingData = (aiData) => {
  const aiHubCardSection = document.getElementById("ai-hub-card-section");
  aiData.forEach((element) => {
    console.log(aiData)
    aiHubCardSection.innerHTML = `
        <figure>
            <img
              src="${element.image}"
              alt="${element.name}" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Features</h2>
            <ol type="1">
              <li>${element.features[0]}</li>
              <li>${element.features[1]}</li>
              <li>${element.features[2]}</li>
            </ol>
          </div>
          <hr />
          <div class="mx-8 my-4 flex justify-between">
            <div class="space-y-2">
              <h3 class="card-title">${element.name}</h3>
              <div class="flex space-x-2">
                <img src="images/calandericon.png" alt="" />
                <p>${element["published_in"]}</p>
              </div>
            </div>
            <div>
              <button>
                <img src="images/arrowImage.png" alt="" srcset="" />
              </button>
            </div>
          </div>
        `;
  });
};

dataLoad();
