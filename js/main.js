function initRecaptcha(){
    var recaptchaScript = document.createElement('script');
                recaptchaScript.type = 'text/javascript';
                recaptchaScript.src = 'https://www.google.com/recaptcha/api.js?render=' + YOUR_SITE_KEY + '&#038;ver=3.0';
                recaptchaScript.id = 'google-recaptcha-js';
                document.body.appendChild(recaptchaScript);
    }
    window.addEventListener('scroll', function (){
        initRecaptcha();
    }, {once:true});