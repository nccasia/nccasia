export function jobItem(job) {
  const title = job.title?.rendered || '';
  const location = 'All Offices';
  const description = getJobDescription(job.content?.rendered || '');
  const type = getJobType(title);
  const level = getJobLevel(title);

  return `
    <div class="job-lists-item" id="${job.id}">
      <div class="job-box">
        <a class="job-icon" href="/jobdetails.html?id=${job.id}" data-file="jobdetails.html">
          <img src="/assets/images/listjob/${type}.png" alt="${title}" />
        </a>
        <div class="job-content">
          <div class="job-info">
            <div class="job-location">
              <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
              <a href="" target="_blank">${location}</a>
            </div>
            <div class="short-description">
              <h5 class="title">
                <a href="/jobdetails.html?id=${job.id}">${title}</a>
              </h5>
              <div class="description">${description}</div>
            </div>
            <div class="job-label">
              <p class="job-type">${type}</p>
              <p class="job-level">${level}</p>
            </div>
          </div>
          <div class="job-apply-button" onclick="addActivate(event)">
            <a class="recruitment-apply-btn apply-button"
               data-title-attribute="${title}"
               data-location-attribute="${location}"
               rel="nofollow">
              Apply now
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getJobDescription(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const ulElements = doc.querySelectorAll('ul');
  if (ulElements.length >= 2 && ulElements[1].querySelectorAll('li').length > 0) {
    return ulElements[1].querySelectorAll('li')[0].textContent.trim();
  }
  return 'No description available';
}

function getJobType(title) {
  const devKeywords = ["project manager", "developer", "frontend", "backend", "golang", "devops", "react native", "php", "nodejs", "java", "net", "python", "ai"];
  const testerKeywords = ["tester", "process quality assurance", "pqa", "qa", "ba"];

  const lowerTitle = title.toLowerCase();
  if (devKeywords.some(keyword => lowerTitle.includes(keyword))) {
    return 'dev';
  } else if (testerKeywords.some(keyword => lowerTitle.includes(keyword))) {
    return 'tester';
  }
  return 'backoffice';
}

function getJobLevel(title) {
  const match = title.match(/\(([^)]+)\)/);
  return match ? match[1] : 'All Levels';
}
