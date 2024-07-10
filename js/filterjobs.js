import { getQueryParams } from './queryparams.js';

document.addEventListener('DOMContentLoaded', () => {
    const params = getQueryParams();
    const { s, address, category, level } = params;
    document.getElementById('name').value = s?.replace(/\+/g, ' ') || '';
    document.getElementById('address').value = address || '';
    document.getElementById('category').value = category || '';
    document.getElementById('level').value = level || '';
});




