function getQueryParams() {
    const params = {};
    const queryString = window.location.search.slice(1);
    const pairs = queryString.split('&');
    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return params;
}

document.addEventListener('DOMContentLoaded', () => {
    const params = getQueryParams();
    const { s, address, category, level } = params;
    document.getElementById('name').value = s || '';
    document.getElementById('address').value = address || '';
    document.getElementById('category').value = category || '';
    document.getElementById('level').value = level || '';
});

// filter job listings based on search parameters
function filterJobs(searchParams) {
    const title = (searchParams.get('s') || '').toLowerCase();

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




