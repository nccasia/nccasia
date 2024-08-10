function fetchDataAndRender() {
  var apiUrl = 'https://career.ncc.asia/wp-json/wp/v2/posts';
    fetch(apiUrl).then(response => {
      return response.json();
    }).then(data => {
      renderJobItems(data);

    }).catch(err => {
      console.error('Error fetching data:', err);
    });
}
fetchDataAndRender();

function getJobDescription(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const ulElements = doc.querySelectorAll('ul');
  
  if (ulElements.length >= 2 && ulElements[1].querySelectorAll('li').length > 0) {
    return ulElements[1].querySelector('li').textContent;
  }
  
  return 'No description available';
}

function getJobLevel(title) {
  const match = title.match(/\(([^)]+)\)/);
  return match ? match[1] : 'All Levels';
}

function getJobType(title) {
  const devKeywords = ['project manager', 'developer', 'frontend', 'backend', 'golang', 'devops', 'react native', 'php', 'nodejs', 'java', 'net', 'python', 'ai', 'ruby'];
  const testerKeywords = ['tester', 'process quality assurance', 'pqa', 'qa', 'ba'];
  const titleLower = title.toLowerCase();
  if (devKeywords.some(keyword => titleLower.includes(keyword))) {
    return 'dev';
  }
  if (testerKeywords.some(keyword => titleLower.includes(keyword))) {
    return 'tester';
  }
  return 'backoffice';
}

function renderJobItems(data) {
  if (data && data.length > 0) {
    const container = document.querySelector('.swiper-wrapper');
    container.innerHTML = ''; 

    data.forEach((job) => {
      const jobItem = document.createElement('div');
      jobItem.classList.add('job-item', 'swiper-slide');
      const description = getJobDescription(job.content.rendered);
      const level = getJobLevel(job.title.rendered);
      const jobType = getJobType(job.title.rendered);
      jobItem.innerHTML = `
        <div class="job-content">
          <div class="job-location">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
            <a>All Offices</a>
          </div>
          <a href="/jobdetails.html?id=${job.id}" class="job-icon">
            <img src="/assets/images/listjob/${jobType}.png" alt="${job.title.rendered}" />
          </a>
          <div class="short-description">
            <h5 class="title">
              <a href="/jobdetails.html?id=${job.id}">
                ${job.title.rendered}
              </a>
            </h5>
            <div class="description">
              ${description}
            </div>
          </div>
          <div class="job-label">
            <p class="job-type">${jobType || 'Unknown'}</p>
            <p class="job-level">${level}</p>
          </div>
        </div>
        <div class="job-apply-button" onclick="addActivate(event)">
          <a class="recruitment-apply-btn apply-button" data-title-attribute="${job.title.rendered}" data-location-attribute="All Offices" rel="nofollow">
            Apply now
          </a>
        </div>
      `;
      container.appendChild(jobItem);
    });
  }
}

fetchDataAndRender();

