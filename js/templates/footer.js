const locations = [
    { name: "HA NOI 1", url: "https://maps.app.goo.gl/4b1yWzyB8E2AQVpVA", address: "2nd Floor, CT3 The Pride, To Huu Street, Ha Dong, Ha Noi" },
    { name: "NGHE AN", url: "https://goo.gl/maps/tjkFGN3iDCEpG4fU7", address: "4th Floor, 138 Ha Huy Tap Street, Vinh Phu, Nghe An" },
    { name: "HO CHI MINH CITY", url: "https://maps.app.goo.gl/RZ6F4VG3mw8J4fPh9", address: "8th Floor, ST. MORITZ Tower, 1014 Pham Van Dong Street, Hiep Binh, Ho Chi Minh City" },
    { name: "HA NOI 2", url: "https://goo.gl/maps/4qtJTTHFhKQ7bcmN9", address: "7th Floor, VinFast My Dinh Building, 8 Pham Hung Street, Tu Liem, Ha Noi" },
    { name: "GIA LAI", url: "https://goo.gl/maps/NGYZFbZ1kAG2mF2B7", address: "3rd Floor, Hibecco Building, 307 Nguyen Thi Minh Khai Street, Quy Nhon Nam, Gia Lai" },
    { name: "NCC Japan", url: "https://www.nccsoft.jp/", address: "2-35-5 Higashiyukigaya, Ota City, Tokyo, Japan 145-0065" },
    { name: "HA NOI 3", url: "https://goo.gl/maps/VykV996Pra8XCUYo8", address: "5th Floor, Hong Ha Tower, 89 Thinh Liet Street, Thinh Liet, Ha Noi" },
    { name: "DA NANG", url: "https://goo.gl/maps/euZRpDDAFZsXb4tX6", address: "3rd Floor, TP Building, 268 30/4 Street, Hoa Cuong, Da Nang" }
]

function footerItem(location) {
    return `
            <a href="${location.url}" target="_blank">
                <div class="header_footer">
                <i  class="fa-sharp fa-solid fa-location-dot fa-locations"></i>
                    <div class="link-footer ">
                        <p><span class="text-footer">${location.name} |</span>${location.address}</p>
                    </div>
                </div>
            </a>
    `;
}

function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return; 

    const footerItemsHTML = locations.map(location => footerItem(location))
    const firstThreeItems = footerItemsHTML.slice(0, 3).join('');
    const nextThreeItems = footerItemsHTML.slice(3, 6).join('');
    const remainingItems = footerItemsHTML.slice(6).join('');

    footerContainer.innerHTML = `
            <div class="footer">
                <div class="footer_head">
                    <div class="grid footer_head-category">
                        <div class="footer_head-collection ">
                        <div class="footer_head-item--infomation">
                            <div class="logo_image"><img loading="lazy" src="./assets/images/logo.png" width="120"
                                    height="120" alt=""></div>
                            <div class="footer_head_item_bottom">
                                <p class="footer_head-item-phone-text">(+84) 2466874606</p>
                                <p class="footer_head-item-email-text">info@ncc.asia
                            </div>
                        </div>
                        </div>
                        <div class="footer_head-collection footer_head-collection-address">
                        <div class="footer_head-list-first ">
                            ${firstThreeItems}
                        </div>
                        </div>
                        <div class="footer_head-collection footer_head-collection-address">
                        <div class="footer_head-list-main ">
                            ${nextThreeItems}
                        </div>
                        </div>
                        <div class="footer_head-collection footer_head-collection-address">
                        <div class="footer_head-list-main ">
                            ${remainingItems}
                        </div>
                        </div>
                    </div>
                    <div class="grid nav_footer">
                        <div class="nav_footer-head">
                            <p class="footer_head-item-phone-text">(+84) 2466874606</p>
                            <p class="footer_head-item-email-text">info@ncc.asia</p>
                        </div>
                        <div class="nav_footer-adreess">
                             ${footerItemsHTML.join('')}
                        </div>
                    </div>
                </div>

                <div class="footer_bottom">
                <div class=" grid footer_bottom-container">
                    <div class="footer_social">
                        <div class="footer_social-image"><a href="https://twitter.com/nccsoft" aria-label="twitter"
                                target="_blank"><img loading="lazy" src="./assets/images/tweet.svg" width="40"
                                    height="40" alt=""></a></div>
                        <div class="footer_social-image"><a href="https://www.facebook.com/nccplusvietnam"
                                aria-label="facebook" target="_blank"><img loading="lazy"
                                    src="./assets/images/facebook.svg" width="40" height="40" alt=""></a></div>
                        <div class="footer_social-image"><a href="/" aria-label="google"><img loading="lazy"
                                    src="./assets/images/google.svg" width="40" height="40" alt=""></a></div>
                    </div>
                    <div class="footer_copyright">
                        <p>2023 &copy; NCC Vietnam. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

renderFooter();