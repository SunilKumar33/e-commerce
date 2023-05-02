import React from "react";
import logo from "../../Assests/images/logo.jpg";

const Footer = () => {
  return (
    <section id={"contactus"}>
      <div className="product_details_section">
        <div className="container-fluid spacing_container">
          <div className="footer">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="footerLogo">
                  <a href="/" title="Cendrol">
                    <img
                      className="lazy"
                      src={logo}
                      alt="Cendrol"
                      title="Cendrol"
                      loading="lazy"
                    />
                  </a>
                </div>
                <ul className="socialIcons">
                  <li style={{ listStyleImage: "unset" }}>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      title="facebook"
                      rel="noreferrer"
                    >
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="FacebookIcon"
                      >
                        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                      </svg>
                    </a>
                  </li>
                  <li style={{ listStyleImage: "unset" }}>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      title="twitter"
                      rel="noreferrer"
                    >
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="TwitterIcon"
                      >
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                      </svg>
                    </a>
                  </li>
                  <li style={{ listStyleImage: "unset" }}>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      title="linkedin"
                      rel="noreferrer"
                    >
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="LinkedInIcon"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                      </svg>
                    </a>
                  </li>
                  <li style={{ listStyleImage: "unset" }}>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      title="Instagram"
                      rel="noreferrer"
                    >
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="InstagramIcon"
                      >
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </a>
                  </li>
                  <li style={{ listStyleImage: "unset" }}>
                    <a
                      href="https://www.pinterest.com"
                      target="_blank"
                      title="Pinterest"
                      rel="noreferrer"
                    >
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PinterestIcon"
                      >
                        <path d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2 10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41.86 0 1.26.63 1.26 1.44 0 .86-.57 2.09-.86 3.27-.17.98.52 1.84 1.52 1.84 1.78 0 3.16-1.9 3.16-4.58 0-2.4-1.72-4.04-4.19-4.04-2.82 0-4.48 2.1-4.48 4.31 0 .86.28 1.73.74 2.3.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11-1.28-.56-2.02-2.38-2.02-3.85 0-3.16 2.24-6.03 6.56-6.03 3.44 0 6.12 2.47 6.12 5.75 0 3.44-2.13 6.2-5.18 6.2-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03z"></path>
                      </svg>
                    </a>
                  </li>
                  <li style={{ listStyleImage: "unset" }}>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      title="Youtube"
                      rel="noreferrer"
                    >
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="YouTubeIcon"
                      >
                        <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h4 className="contact_info">Contact Info</h4>
                <ul className="listContactInfo m-0">
                  <li className="m-0">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="land_li_icons"
                    >
                      <path
                        d="M16.3525 10.0887C15.8538 9.95745 15.2675 9.88745 14.5675 9.88745C13.5962 9.88745 13.2375 10.1237 12.7388 10.5C12.7125 10.5175 12.6862 10.5437 12.66 10.57L11.8288 11.4537C11.1375 12.1975 9.86875 12.1975 9.16875 11.4537L8.3375 10.5787C8.31125 10.5437 8.285 10.5175 8.25875 10.5C7.75125 10.1237 7.3925 9.88745 6.43 9.88745C5.73 9.88745 5.14375 9.9487 4.645 10.0887C2.5625 10.6487 2.5625 12.3025 2.5625 13.755V14.5687C2.5625 16.765 2.5625 19.25 7.24375 19.25H13.7537C16.86 19.25 18.435 17.675 18.435 14.5687V13.755C18.435 12.3025 18.435 10.6487 16.3525 10.0887Z"
                        fill="#FDC315"
                      ></path>
                      <path
                        d="M12.9414 1.75H8.05891C4.19141 1.75 4.19141 3.80625 4.19141 5.6175V10.6838C4.19141 10.8763 4.27891 11.0513 4.42766 11.165C4.57641 11.2788 4.77766 11.3225 4.96141 11.27C5.35516 11.165 5.84516 11.1125 6.43141 11.1125C7.01766 11.1125 7.14016 11.1825 7.49016 11.445L8.28641 12.285C8.85516 12.8975 9.66891 13.2475 10.5089 13.2475C11.3489 13.2475 12.1539 12.8975 12.7314 12.285L13.5277 11.445C13.8777 11.1825 14.0002 11.1125 14.5864 11.1125C15.1727 11.1125 15.6627 11.165 16.0564 11.27C16.2402 11.3225 16.4327 11.2788 16.5902 11.165C16.7389 11.0513 16.8264 10.8675 16.8264 10.6838V5.6175C16.8089 3.80625 16.8089 1.75 12.9414 1.75Z"
                        fill="#0A0A0A"
                      ></path>
                      <path
                        d="M11.8563 8.67129H9.14375C8.8025 8.67129 8.53125 8.40004 8.53125 8.05879C8.53125 7.71754 8.8025 7.44629 9.14375 7.44629H11.8563C12.1975 7.44629 12.4688 7.71754 12.4688 8.05879C12.4688 8.39129 12.1888 8.67129 11.8563 8.67129Z"
                        fill="white"
                      ></path>
                      <path
                        d="M12.5377 6.22988H8.46016C8.11891 6.22988 7.84766 5.95863 7.84766 5.61738C7.84766 5.27613 8.11891 5.00488 8.46016 5.00488H12.5289C12.8702 5.00488 13.1414 5.27613 13.1414 5.61738C13.1414 5.94988 12.8702 6.22988 12.5377 6.22988Z"
                        fill="white"
                      ></path>
                    </svg>
                    <a href="https://mail.google.com/" title="Mail Box">
                      hr@sk.com
                    </a>
                  </li>
                  <li>
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="land_li_icons"
                    >
                      <path
                        d="M12.615 4.80378C12.1985 4.72684 11.8159 4.99265 11.7366 5.39925C11.6573 5.80585 11.924 6.20282 12.3292 6.28239C13.5492 6.52023 14.4912 7.46458 14.7299 8.68874V8.68961C14.7979 9.042 15.1081 9.2982 15.4654 9.2982C15.5133 9.2982 15.5613 9.29383 15.6101 9.28508C16.0153 9.20376 16.2819 8.80766 16.2026 8.40019C15.8462 6.57182 14.4389 5.15966 12.615 4.80378"
                        fill="#FDC315"
                      ></path>
                      <path
                        d="M12.5609 1.75694C12.3657 1.72896 12.1696 1.78667 12.0136 1.91083C11.8533 2.03675 11.7531 2.21862 11.7313 2.42236C11.6851 2.8342 11.9823 3.20669 12.3936 3.25304C15.23 3.56957 17.4347 5.77918 17.7536 8.62447C17.7963 9.00571 18.1161 9.29339 18.4978 9.29339C18.5266 9.29339 18.5545 9.29164 18.5832 9.28814C18.7828 9.26628 18.9605 9.16748 19.086 9.01008C19.2106 8.85269 19.2673 8.65683 19.2446 8.45659C18.8473 4.90653 16.0997 2.15129 12.5609 1.75694"
                        fill="#FDC315"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.65277 11.3508C13.1432 14.8403 13.9351 10.8034 16.1574 13.0242C18.3 15.1662 19.5314 15.5953 16.8168 18.3091C16.4768 18.5824 14.3164 21.87 6.72403 14.2797C-0.869294 6.6885 2.41639 4.52589 2.68972 4.18596C5.41088 1.46462 5.83263 2.70321 7.97518 4.84516C10.1976 7.06693 6.16233 7.86136 9.65277 11.3508Z"
                        fill="#0A0A0A"
                      ></path>
                    </svg>
                    <a href="tel:9900487973" title="990-048-7973">
                      P: 990-048-7973
                    </a>
                  </li>
                  <li>
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="land_li_icons"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.0625 9.02804C3.0625 5.00315 6.4259 1.75 10.4943 1.75C14.5741 1.75 17.9375 5.00315 17.9375 9.02804C17.9375 11.0562 17.1999 12.9392 15.9858 14.5351C14.6465 16.2956 12.9956 17.8294 11.1375 19.0334C10.7122 19.3116 10.3284 19.3326 9.86164 19.0334C7.99289 17.8294 6.34208 16.2956 5.01419 14.5351C3.79924 12.9392 3.0625 11.0562 3.0625 9.02804ZM8.04443 9.25474C8.04443 10.6031 9.14468 11.6635 10.4937 11.6635C11.8437 11.6635 12.9545 10.6031 12.9545 9.25474C12.9545 7.9169 11.8437 6.80481 10.4937 6.80481C9.14468 6.80481 8.04443 7.9169 8.04443 9.25474Z"
                        fill="#130F26"
                      ></path>
                    </svg>
                    <a
                      href="https://www.google.com/maps"
                      title=""
                      target="_blank"
                      rel="noreferrer"
                    >
                      SK PVT LTD
                      <br />
                      Near Gangotari Circle
                      <br />
                      BTM Layout, 1st Stage,
                      <br />
                      Bangalore 560076, Karnataka.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="boxCopyright">
        <div className="container">
          <p className="mb-0">© 2023 by SK All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
