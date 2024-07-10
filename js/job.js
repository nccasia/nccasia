import { getQueryParams } from './queryparams.js';
import { jobItem } from './templates/jobitem.js';

let listjobs = [];
function fetchDataAndRender() {
  fetch('./js/data/jobdata.json')
    .then((response) => response.json())
    .then((data) => {
      listjobs = data.LIST_JOB;
      renderJobItems();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}
fetchDataAndRender();

function filterjobs(jobs, params) {
  return jobs.filter(job => {
    // Check if each parameter matches the job
    const matchesName = !params.s || job.title.toLowerCase().includes(params.s.toLowerCase());
    const matchesAddress = !params.address || job.location.toLowerCase().includes(params.address.toLowerCase());
    const matchesCategory = !params.category || job.type.toLowerCase().includes(params.category.toLowerCase());
    const matchesLevel = !params.level || job.level.toLowerCase().includes(params.level.toLowerCase());

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

    if (filterjobs.length > 0) {
      let jobHTML = '';
      filteredJobs.forEach(job => {
        jobHTML += jobItem(job);
      });
      jobsContent.innerHTML = jobHTML;
      noJobFound.style.display = 'none';
    }
    if (filteredJobs.length === 0) {
      jobsContent.innerHTML = '';
      noJobFound.style.display = 'block';
    }
  }
}

renderJobItems();

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




