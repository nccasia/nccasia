import { getQueryParams } from './queryparams.js';
import { jobItem } from './templates/jobItem.js';

let listjobs = [];
function fetchDataAndRender() {
  var apiUrl = 'https://career.ncc.asia/wp-json/wp/v2/posts';
  fetch(apiUrl).then(response => {
    return response.json();
  }).then(data => {
    listjobs = data;
    renderJobItems();
  }).catch(err => {
    console.error('Error fetching data:', err);
  });
}
fetchDataAndRender();

function filterjobs(jobs, params) {
  return jobs.filter(job => {
    const titleRendered = job.meta.name_job.toLowerCase();
    const matchesName = !params.s || titleRendered.includes(params.s.toLowerCase());
    const matchesAddress = !params.address || job.location && job.location.toLowerCase().includes(params.address.toLowerCase());
    const matchesCategory = !params.category || job.meta.name_job && job.meta.name_job.toLowerCase().includes(params.category.toLowerCase());
    const matchesLevel = !params.level || job.meta.name_job && job.meta.name_job.toLowerCase().includes(params.level.toLowerCase());

    return matchesName && matchesAddress && matchesCategory && matchesLevel;
  });
}

function renderJobItems() {
  if (listjobs && listjobs.length > 0) {
    const params = getQueryParams();
    const { s, address, category, level } = params;
    const jobsContent = document.querySelector('.jobs-content');
    const noJobFound = document.querySelector('.container-no-job-found');
    const sortedJobs = listjobs.slice().sort((a, b) => b.highlight - a.highlight);

    // Filter jobs based on params
    const filteredJobs = filterjobs(sortedJobs, { s, address, category, level });

    if (filteredJobs.length > 0) {
      let jobHTML = '';
      filteredJobs.forEach(job => {
        jobHTML += jobItem(job);
      });
      jobsContent.innerHTML = jobHTML;
      noJobFound.style.display = 'none';
    } else {
      jobsContent.innerHTML = '';
      noJobFound.style.display = 'block';
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const addressSelect = document.getElementById('address');
  const categorySelect = document.getElementById('category');
  const levelSelect = document.getElementById('level');
  const nameInput = document.getElementById('name');
  function updateAndRender() {
    updateSearchParams();
    renderJobItems();
  }
  // Event listeners
  addressSelect.addEventListener('change', updateAndRender);
  categorySelect.addEventListener('change', updateAndRender);
  levelSelect.addEventListener('change', updateAndRender);
  nameInput.addEventListener('blur', updateAndRender);
});

function updateSearchParams() {
  const nameValue = document.getElementById('name').value;
  const addressValue = document.getElementById('address').value;
  const categoryValue = document.getElementById('category').value;
  const levelValue = document.getElementById('level').value;

  // Update URL search parameters
  const urlSearchParams = new URLSearchParams(window.location.search);
  urlSearchParams.set('s', nameValue);
  urlSearchParams.set('address', addressValue);
  urlSearchParams.set('category', categoryValue);
  urlSearchParams.set('level', levelValue);

// Replace current URL with updated parameters (optional step)
  history.replaceState(null, null, `?${urlSearchParams.toString()}`);
}




