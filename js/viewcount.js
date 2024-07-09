document.addEventListener('DOMContentLoaded', () => {
    const apiEndpoint = 'https://examplehango.matomo.cloud/index.php';
    const token = '9de9ba88456e4340a7362eb564a6fa28';
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id'); 
    
    const params = new URLSearchParams({
        module: 'API',
        method: 'Live.getLastVisitsDetails',
        idSite: jobId,
        period: 'year',
        date: '2024-07-10',
        format: 'json',
        token_auth: token,
        segment: `pageUrl==http://127.0.0.1:5500/jobdetails.html?id=${jobId}`,
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
    };

    fetch(apiEndpoint, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error call API: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const totalPageviews = data[0].actions ?? 'Undefined';
            document.getElementById('viewCount').innerText = totalPageviews;
        })
        .catch(error => {
            console.error('Error API:', error);
        });
});