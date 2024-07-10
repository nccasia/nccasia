function fetchDataAndRender() {
  fetch('./js/data/jobData.json')
    .then((response) => response.json())
    .then((data) => {
      renderJobItems(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}
fetchDataAndRender();

function renderJobItems(data) {
  if (data && data.LIST_JOB.length > 0) {
    const container = document.querySelector('.swiper-wrapper');
    container.innerHTML = ''; 

    data.LIST_JOB.forEach((job) => {
      const jobItem = document.createElement('div');
      jobItem.classList.add('job-item', 'swiper-slide');

      jobItem.innerHTML = `
      <div class="job-content">
        <div class="job-location">
          <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          <a> ${job.location} </a>
        </div>
        <a href="/jobdetails.html?id=${job.id}" class="job-icon">
         <img src="/assets/images/listjob/${job.type}.png" alt="${job.title}" />
        </a>
        <div class="short-description">
          <h5 class="title">
            <a href="/jobdetails.html?id=${job.id}">
              ${job.title}
            </a>
          </h5>
          <div class="description">
            ${job.description}
          </div>
        </div>
        <div class="job-label">
          <p class="job-type">${job.type}</p>
          <p class="job-level">${job.level}</p>
        </div>
      </div>
      <div class="job-apply-button" onclick="addActivate(event)">
        <a class="recruitment-apply-btn apply-button" data-title-attribute="${job.title}" data-location-attribute="${job.location}" rel="nofollow">
          Apply now
        </a>
      </div>
    `;
      container.appendChild(jobItem);
    });
  }
}

fetchDataAndRender();

