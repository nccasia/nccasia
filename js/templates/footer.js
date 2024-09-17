const locations=[{name:"HA NOI 1",url:"https://maps.app.goo.gl/4b1yWzyB8E2AQVpVA",address:"2nd Floor, CT3 The Pride, To Huu st, Ha Dong Dist"},{name:"VINH",url:"https://goo.gl/maps/tjkFGN3iDCEpG4fU7",address:"4th Floor, 138 Ha Huy Tap St., Vinh City"},{name:"SAI GON",url:"https://maps.app.goo.gl/RZ6F4VG3mw8J4fPh9",address:"8th Floor, ST. MORITZ Tower, 1014 Pham Van Dong St., Thu Duc City , Ho Chi Minh City"},{name:"HA NOI 2",url:"https://goo.gl/maps/4qtJTTHFhKQ7bcmN9",address:"7th Floor, Vinfast My Dinh Building, 8 Pham Hung St., Cau Giay Dist."},{name:"QUY NHON",url:"https://goo.gl/maps/NGYZFbZ1kAG2mF2B7",address:"3rd Floor, Hibecco Building, 307 Nguyen Thi Minh Khai St. Quy Nhon City"},{name:"NCC Japan",url:"https://www.nccsoft.jp/",address:"2-35-5 Higashiyukigaya, Ota City, Tokyo, Japan 145-0065"},{name:"HA NOI 3",url:"https://goo.gl/maps/VykV996Pra8XCUYo8",address:"5th Floor, Hong Ha Tower, 89 Thinh Liet St., Hoang Mai Dist."},{name:"DA NANG",url:"https://goo.gl/maps/euZRpDDAFZsXb4tX6",address:"3rd Floor, TP Building, 268 30/4 St., Hoa Cuong Bac Ward, Hai Chau Dist."}];function footerItem(o){return`\n            <a href="${o.url}" target="_blank">\n                <div class="header_footer">\n                <i  class="fa-sharp fa-solid fa-location-dot fa-locations"></i>\n                    <div class="link-footer ">\n                        <p><span class="text-footer">${o.name} |</span>${o.address}</p>\n                    </div>\n                </div>\n            </a>\n    `}function renderFooter(){const o=document.getElementById("footer-container");if(!o)return;const a=locations.map((o=>footerItem(o))),t=a.slice(0,3).join(""),i=a.slice(3,6).join(""),e=a.slice(6).join("");o.innerHTML=`\n            <div class="footer">\n                <div class="footer_head">\n                    <div class="grid footer_head-category">\n                        <div class="footer_head-collection ">\n                        <div class="footer_head-item--infomation">\n                            <div class="logo_image"><img loading="lazy" src="./assets/images/logo.png" width="120"\n                                    height="120" alt=""></div>\n                            <div class="footer_head_item_bottom">\n                                <p class="footer_head-item-phone-text">(+84) 2466874606</p>\n                                <p class="footer_head-item-email-text">info@ncc.asia\n                            </div>\n                        </div>\n                        </div>\n                        <div class="footer_head-collection footer_head-collection-address">\n                        <div class="footer_head-list-first ">\n                            ${t}\n                        </div>\n                        </div>\n                        <div class="footer_head-collection footer_head-collection-address">\n                        <div class="footer_head-list-main ">\n                            ${i}\n                        </div>\n                        </div>\n                        <div class="footer_head-collection footer_head-collection-address">\n                        <div class="footer_head-list-main ">\n                            ${e}\n                        </div>\n                        </div>\n                    </div>\n                    <div class="grid nav_footer">\n                        <div class="nav_footer-head">\n                            <p class="footer_head-item-phone-text">(+84) 2466874606</p>\n                            <p class="footer_head-item-email-text">info@ncc.asia</p>\n                        </div>\n                        <div class="nav_footer-adreess">\n                             ${a.join("")}\n                        </div>\n                    </div>\n                </div>\n\n                <div class="footer_bottom">\n                <div class=" grid footer_bottom-container">\n                    <div class="footer_social">\n                        <div class="footer_social-image"><a href="https://twitter.com/nccsoft" aria-label="twitter"\n                                target="_blank"><img loading="lazy" src="./assets/images/tweet.svg" width="40"\n                                    height="40" alt=""></a></div>\n                        <div class="footer_social-image"><a href="https://www.facebook.com/nccsoft.com.vn"\n                                aria-label="facebook" target="_blank"><img loading="lazy"\n                                    src="./assets/images/facebook.svg" width="40" height="40" alt=""></a></div>\n                        <div class="footer_social-image"><a href="/" aria-label="google"><img loading="lazy"\n                                    src="./assets/images/google.svg" width="40" height="40" alt=""></a></div>\n                    </div>\n                    <div class="footer_copyright">\n                        <p>2023 &copy; NCC Vietnam. All rights reserved.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    `}renderFooter();