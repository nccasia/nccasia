// filter job listings based on search parameters
function filterJobs(searchParams) {
    const title = searchParams.get('s').toLowerCase();

    const jobItems = document.querySelectorAll('.job-lists-item');


    jobItems.forEach(function(jobItem) {
      const jobTitle = jobItem.querySelector('.title a').innerText.toLowerCase();
      
    
      if (jobTitle.includes(title)) {
          jobItem.style.display = 'block'; 
      } else {
          jobItem.style.display = 'none'; 
      }
    });
}
const urlSearchParams = new URLSearchParams(window.location.search);

filterJobs(urlSearchParams);




