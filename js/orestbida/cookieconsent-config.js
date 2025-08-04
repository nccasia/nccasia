if (typeof CookieConsent !== "undefined") {
   CookieConsent.run({
      guiOptions: {
         consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false,
         },
         preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: false,
            flipButtons: true,
         },
      },
      categories: {
         necessary: {
            readOnly: true,
         },
         analytics: {},
         marketing: {},
      },
      onConsent: ({ cookie }) => {
         const consentState = {
            analytics_storage: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
         };

         if (cookie.categories.includes("analytics")) {
            consentState.analytics_storage = "granted";
         }

         if (cookie.categories.includes("marketing")) {
            consentState.ad_storage = "granted";
            consentState.ad_user_data = "granted";
            consentState.ad_personalization = "granted";
         }
         gtag("consent", "update", consentState);
      },
      language: {
         default: "en",
         autoDetect: "browser",
         translations: {
            en: {
               consentModal: {
                  title: "Cookie",
                  description:
                     "We use cookies to provide a better experience. Click Accept all to agree to the storing of all cookies, or to manage your preferences. If you choose Reject all, we will only use necessary cookies. To learn more, please read our Cookie Policy.",
                  acceptAllBtn: "Accept all",
                  acceptNecessaryBtn: "Reject all",
                  showPreferencesBtn: "Manage preferences",
                  //  footer: '<a href="#">Privacy Policy</a>\n<a href="#">Terms and conditions</a>',
               },
               preferencesModal: {
                  title: "Consent Preferences Center",
                  acceptAllBtn: "Accept all",
                  acceptNecessaryBtn: "Reject all",
                  savePreferencesBtn: "Save preferences",
                  closeIconLabel: "Close modal",
                  serviceCounterLabel: "Service|Services",
                  sections: [
                     {
                        title: "Cookie Usage",
                        description:
                           "Please choose your settings for this site below. You can allow or deny non essential cookies.",
                     },
                     {
                        title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                        description:
                           "Please see the list of essential cookies in our Cookie Policy",
                        linkedCategory: "necessary",
                     },
                     {
                        title: "Analytics Cookies",
                        description:
                           "Please see the list of analytics cookies in our Cookie Policy",
                        linkedCategory: "analytics",
                     },
                     {
                        title: "Marketing Cookies",
                        description:
                           "Please see the list of marketing cookies in our Cookie Policy",
                        linkedCategory: "marketing",
                     },
                     {
                        title: "More information",
                        description:
                           'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="mailto:hello@securox.io">contact me</a>.',
                     },
                  ],
               },
            },
         },
      },
   });
}
