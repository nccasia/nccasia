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
  const titleLower = title.toLowerCase();
  switch (true) {
    case titleLower.includes('mid/sen'):
      return 'Middle/Senior';
    case titleLower.includes('middle') || titleLower.includes('mid'):
      return 'Middle';
    case titleLower.includes('senior') || titleLower.includes('sen'):
      return 'Senior';
    case titleLower.includes('junior') || titleLower.includes('jun'):
      return 'Junior';
    case titleLower.includes('internship') || titleLower.includes('intern'):
      return 'Intern';
    case titleLower.includes('fresher'):
      return 'Fresher';
    default:
      return 'All Levels';
  }
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
    const container = document.querySelector(".swiper-wrapper");
    container.innerHTML = "";

    if (data.length > 4) {
      container?.classList?.remove("justify-content-center");
    } else {
      container?.classList?.add("justify-content-center");
    }

    data.forEach((job) => {
      const jobItem = document.createElement("div");
      jobItem.classList.add("job-item", "swiper-slide");
      const description = getJobDescription(job.content.rendered);
      const level = getJobLevel(job.meta.name_job);
      const jobType = getJobType(job.meta.name_job);
      jobItem.innerHTML = `
        <div class="job-content">
          <div class="job-location">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
            <a>${job.meta.address ? "job.meta.address" : "All Offices"}</a>
          </div>
          <a href="/jobdetails.html?id=${job.id}" class="job-icon">
            <img src="/assets/images/listjob/${jobType}.png" alt="${
        job.meta.name_job
      }" />
          </a>
          <div class="short-description">
            <h5 class="title">
              <a href="/jobdetails.html?id=${job.id}">
                ${job.meta.name_job}
              </a>
            </h5>
            <div class="description">
              ${
                job.meta.short_description
                  ? job.meta.short_description
                  : description
              }
            </div>
          </div>
          <div class="job-label">
          <!-- <p class="job-type">${jobType || "Unknown"}</p> -->
            <p class="job-level">${level}</p>
          </div>
        </div>
        <div class="job-apply-button" onclick="addActivate(event)">
          <a class="recruitment-apply-btn apply-button" data-title-attribute="${
            job.meta.name_job
          }" data-location-attribute="All Offices" rel="nofollow">
            Apply now
          </a>
        </div>
      `;
      container.appendChild(jobItem);
    });
  }
}

fetchDataAndRender();

