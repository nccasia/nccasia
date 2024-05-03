const LIST_JOB = [
    {
      "id": 1,
      "title": "UX/UI Designer (Fre/Jun)",
      "location": "All Offices",
      "description": "Proficiency in design tools such as Adobe Creative Suite, Sketch, Figma, or similar.",
      "type": "designer",
      "level": "Fresher/ Junior",
      "highlight": 1
    },
    {
      "id": 2,
      "title": "UX/UI Designer (Mid/Sen)",
      "location": "All Offices",
      "description": "Proficiency in design tools such as Adobe Creative Suite, Sketch, Figma, or similar.",
      "type": "designer",
      "level": "Middle/ Senior",
      "highlight": 6
    },
    {
      "id": 3,
      "title": "FrontEnd Developer (Mid/Sen)",
      "location": "All Offices",
      "description": "Proficient in at least one and has experience with different frontend frameworks: Angular, React, Vue.",
      "type": "dev",
      "level": "Middle/ Senior",
      "highlight": 8
    },
    {
      "id": 4,
      "title": "NodeJS Developer (Mid/Sen)",
      "location": "All Offices",
      "description": "Proficient in building enterprise applications using JavaScript stacks and SQL/NoSQL databases.",
      "type": "dev",
      "level": "Middle/ Senior",
      "highlight": 3
    },
    {
      "id": 5,
      "title": "React Native Developer",
      "location": "All Offices",
      "description": "Have experienced with at least one of the following Redux, Rudux Saga, Redux Thunk",
      "type": "dev",
      "level": "Junior/ Middle",
      "highlight": 5
    },
    {
      "id": 6,
      "title": "IT Support",
      "location": "Ha Noi 1",
      "description": "Graduated from College/University in IT field.",
      "type": "dev",
      "level": "Junior",
      "highlight": 2
    },
    {
      "id": 7,
      "title": "Sale IT (US/UK/Japan Market)",
      "location": "All Offices",
      "description": "Having at least 2 years of experience in Sales IT.",
      "type": "backoffice",
      "level": "Middle/ Junior",
      "highlight": 4
    }
];

function JobItem(job) {
    const {id, title, location, description, type, level } = job || {}
    return `
      <div class="job-lists-item" id="${id}">
        <div class="job-box">
          <a class="job-icon" href="/jobDetails.html" data-file="jobdetails.html">
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
                  <a href="/jobDetails.html">${title}</a>
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
  
function renderJobItems() {
  const jobsContent = document.querySelector('.jobs-content');
  const sortedJobs = LIST_JOB.slice().sort((a, b) => b.highlight - a.highlight);
  
  let jobHTML = '';
  sortedJobs.forEach(job => {
    jobHTML += JobItem(job);
  });
  jobsContent.innerHTML = jobHTML;
}

renderJobItems();











