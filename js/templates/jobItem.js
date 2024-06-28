export function jobItem(job) {
    const { id, title, location, description, type, level } = job || {}
    return `
        <div class="job-lists-item" id="${id}">
          <div class="job-box">
            <a class="job-icon" href="/jobdetails.html?id=${id}" data-file="jobdetails.html">
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
                    <a href="/jobdetails.html?id=${id}">${title}</a>
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
