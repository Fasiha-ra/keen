
  import React from 'react'
  const Header = () => {
  return (
  <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
    {/*begin::Page*/}
    <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
      {/*begin::Header*/}
      <div id="kt_app_header" className="app-header">
        {/*begin::Header container*/}
        <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
          {/*begin::sidebar mobile toggle*/}
          <div className="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show sidebar menu">
            <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
              {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
              <span className="svg-icon svg-icon-1">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                  <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
          </div>
          {/*end::sidebar mobile toggle*/}
          {/*begin::Mobile logo*/}
          <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
            <a href="../../demo1/dist/index.html" className="d-lg-none">
              <img alt="Logo" src="assets/media/logos/default-small.svg" className="theme-light-show h-30px" />
              <img alt="Logo" src="assets/media/logos/default-small-dark.svg" className="theme-dark-show h-30px" />
            </a>
          </div>
          {/*end::Mobile logo*/}
          {/*begin::Header wrapper*/}
          <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
            {/*begin::Menu wrapper*/}
            <div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
              {/*begin::Menu*/}
              <div className="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-title">Dashboards</span>
                    <span className="menu-arrow d-lg-none" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-600px">
                    {/*begin:Dashboards menu*/}
                    <div className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible py-6" data-kt-menu-dismiss="true">
                      {/*begin:Row*/}
                      <div className="row px-5">
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/index.html" className="menu-link active">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                <span className="svg-icon svg-icon-primary svg-icon-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                                    <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                                    <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">Default</span>
                                <span className="fs-7 fw-semibold text-muted">Reports &amp; statistics</span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/dashboards/projects.html" className="menu-link">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs045.svg*/}
                                <span className="svg-icon svg-icon-info svg-icon-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 11.7127L10 14.1127L22 11.7127L14 9.31274L2 11.7127Z" fill="currentColor" />
                                    <path opacity="0.3" d="M20.9 7.91274L2 11.7127V6.81275C2 6.11275 2.50001 5.61274 3.10001 5.51274L20.6 2.01274C21.3 1.91274 22 2.41273 22 3.11273V6.61273C22 7.21273 21.5 7.81274 20.9 7.91274ZM22 16.6127V11.7127L3.10001 15.5127C2.50001 15.6127 2 16.2127 2 16.8127V20.3127C2 21.0127 2.69999 21.6128 3.39999 21.4128L20.9 17.9128C21.5 17.8128 22 17.2127 22 16.6127Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">Projects</span>
                                <span className="fs-7 fw-semibold text-muted">Tasts, graphs &amp; charts</span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/dashboards/ecommerce.html" className="menu-link">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                <span className="svg-icon svg-icon-danger svg-icon-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x={2} y={2} width={9} height={9} rx={2} fill="currentColor" />
                                    <rect opacity="0.3" x={13} y={2} width={9} height={9} rx={2} fill="currentColor" />
                                    <rect opacity="0.3" x={13} y={13} width={9} height={9} rx={2} fill="currentColor" />
                                    <rect opacity="0.3" x={2} y={13} width={9} height={9} rx={2} fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">eCommerce</span>
                                <span className="fs-7 fw-semibold text-muted">Sales reports</span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/dashboards/marketing.html" className="menu-link">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                {/*begin::Svg Icon | path: icons/duotune/graphs/gra001.svg*/}
                                <span className="svg-icon svg-icon-dark svg-icon-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z" fill="currentColor" />
                                    <path d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">Marketing</span>
                                <span className="fs-7 fw-semibold text-muted">Campaings &amp; conversions</span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/dashboards/social.html" className="menu-link">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                {/*begin::Svg Icon | path: icons/duotune/communication/com001.svg*/}
                                <span className="svg-icon svg-icon-success svg-icon-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
                                    <path d="M19 10.4C19 10.3 19 10.2 19 10C19 8.9 18.1 8 17 8H16.9C15.6 6.2 14.6 4.29995 13.9 2.19995C13.3 2.09995 12.6 2 12 2C11.9 2 11.8 2 11.7 2C12.4 4.6 13.5 7.10005 15.1 9.30005C15 9.50005 15 9.7 15 10C15 11.1 15.9 12 17 12C17.1 12 17.3 12 17.4 11.9C18.6 13 19.9 14 21.4 14.8C21.4 14.8 21.5 14.8 21.5 14.9C21.7 14.2 21.8 13.5 21.9 12.7C20.9 12.1 19.9 11.3 19 10.4Z" fill="currentColor" />
                                    <path d="M12 15C11 13.1 10.2 11.2 9.60001 9.19995C9.90001 8.89995 10 8.4 10 8C10 7.1 9.40001 6.39998 8.70001 6.09998C8.40001 4.99998 8.20001 3.90005 8.00001 2.80005C7.30001 3.10005 6.70001 3.40002 6.20001 3.90002C6.40001 4.80002 6.50001 5.6 6.80001 6.5C6.40001 6.9 6.10001 7.4 6.10001 8C6.10001 9 6.80001 9.8 7.80001 10C8.30001 11.6 9.00001 13.2 9.70001 14.7C7.10001 13.2 4.70001 11.5 2.40001 9.5C2.20001 10.3 2.10001 11.1 2.10001 11.9C4.60001 13.9 7.30001 15.7 10.1 17.2C10.2 18.2 11 19 12 19C12.6 20 13.2 20.9 13.9 21.8C14.6 21.7 15.3 21.5 15.9 21.2C15.4 20.5 14.9 19.8 14.4 19.1C15.5 19.5 16.5 19.9 17.6 20.2C18.3 19.8 18.9 19.2 19.4 18.6C17.6 18.1 15.7 17.5 14 16.7C13.9 15.8 13.1 15 12 15Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">Social</span>
                                <span className="fs-7 fw-semibold text-muted">Feeds &amp; Activities</span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/dashboards/bidding.html" className="menu-link">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                <span className="svg-icon svg-icon-warning svg-icon-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">Bidding</span>
                                <span className="fs-7 fw-semibold text-muted">Deals &amp; stock exchange</span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/dashboards/online-courses.html" className="menu-link">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                {/*begin::Svg Icon | path: icons/duotune/art/art002.svg*/}
                                <span className="svg-icon svg-icon-success svg-icon-1">
                                  <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z" fill="currentColor" />
                                    <path d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">Online Courses</span>
                                <span className="fs-7 fw-semibold text-muted">Student progress</span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/dashboards/logistics.html" className="menu-link">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm006.svg*/}
                                <span className="svg-icon svg-icon-info svg-icon-1">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 8H16C15.4 8 15 8.4 15 9V16H10V17C10 17.6 10.4 18 11 18H16C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18H21C21.6 18 22 17.6 22 17V13L20 8Z" fill="currentColor" />
                                    <path opacity="0.3" d="M20 18C20 19.1 19.1 20 18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18ZM15 4C15 3.4 14.6 3 14 3H3C2.4 3 2 3.4 2 4V13C2 13.6 2.4 14 3 14H15V4ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">Logistics</span>
                                <span className="fs-7 fw-semibold text-muted">Shipments and delivery</span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                    </div>
                    {/*end:Dashboards menu*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-title">Pages</span>
                    <span className="menu-arrow d-lg-none" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                    {/*begin:Pages menu*/}
                    <div className="menu-active-bg px-4 px-lg-0">
                      {/*begin:Tabs nav*/}
                      <div className="d-flex w-100 overflow-auto">
                        <ul className="nav nav-stretch nav-line-tabs fw-semibold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                          {/*begin:Nav item*/}
                          <li className="nav-item mx-lg-1">
                            <a className="nav-link py-3 py-lg-6 active text-active-primary" href="/" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_pages">General</a>
                          </li>
                          {/*end:Nav item*/}
                          {/*begin:Nav item*/}
                          <li className="nav-item mx-lg-1">
                            <a className="nav-link py-3 py-lg-6 text-active-primary" href="/" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_account">Account</a>
                          </li>
                          {/*end:Nav item*/}
                          {/*begin:Nav item*/}
                          <li className="nav-item mx-lg-1">
                            <a className="nav-link py-3 py-lg-6 text-active-primary" href="/" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_authentication">Authentication</a>
                          </li>
                          {/*end:Nav item*/}
                          {/*begin:Nav item*/}
                          <li className="nav-item mx-lg-1">
                            <a className="nav-link py-3 py-lg-6 text-active-primary" href="/" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_utilities">Utilities</a>
                          </li>
                          {/*end:Nav item*/}
                        </ul>
                      </div>
                      {/*end:Tabs nav*/}
                      {/*begin:Tab content*/}
                      <div className="tab-content py-4 py-lg-8 px-lg-7">
                        {/*begin:Tab pane*/}
                        <div className="tab-pane active w-lg-1000px" id="kt_app_header_menu_pages_pages">
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-8">
                              {/*begin:Row*/}
                              <div className="row">
                                {/*begin:Col*/}
                                <div className="col-lg-3 mb-6 mb-lg-0">
                                  {/*begin:Menu heading*/}
                                  <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                    User Profile
                                  </h4>
                                  {/*end:Menu heading*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/pages/user-profile/overview.html" className="menu-link">
                                      <span className="menu-title">Overview</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/pages/user-profile/projects.html" className="menu-link">
                                      <span className="menu-title">Projects</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/pages/user-profile/campaigns.html" className="menu-link">
                                      <span className="menu-title">Campaigns</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/pages/user-profile/documents.html" className="menu-link">
                                      <span className="menu-title">Documents</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/pages/user-profile/followers.html" className="menu-link">
                                      <span className="menu-title">Followers</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/pages/user-profile/activity.html" className="menu-link">
                                      <span className="menu-title">Activity</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-3 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-6">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Corporate
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/about.html" className="menu-link">
                                        <span className="menu-title">About</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/team.html" className="menu-link">
                                        <span className="menu-title">Our Team</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/faq.html" className="menu-link">
                                        <span className="menu-title">FAQ</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/contact.html" className="menu-link">
                                        <span className="menu-title">Contact Us</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/pricing.html" className="menu-link">
                                        <span className="menu-title">Pricing</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/licenses.html" className="menu-link">
                                        <span className="menu-title">Licenses</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/sitemap.html" className="menu-link">
                                        <span className="menu-title">Sitemap</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-3 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-6">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Blog
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/blog/home.html" className="menu-link">
                                        <span className="menu-title">Blog Home</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/blog/post.html" className="menu-link">
                                        <span className="menu-title">Blog Post</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                  {/*begin:Menu section*/}
                                  <div className="mb-0">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Careers
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/careers/list.html" className="menu-link">
                                        <span className="menu-title">Careers List</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/careers/apply.html" className="menu-link">
                                        <span className="menu-title">Careers Apply</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-3 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-0">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Social
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/social/feeds.html" className="menu-link">
                                        <span className="menu-title">Feeds</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/social/activity.html" className="menu-link">
                                        <span className="menu-title">Activty</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/social/followers.html" className="menu-link">
                                        <span className="menu-title">Followers</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/pages/social/settings.html" className="menu-link">
                                        <span className="menu-title">Settings</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                              </div>
                              {/*end:Row*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-4">
                              <img src="assets/media/stock/600x600/img-82.jpg" className="rounded mw-100" alt="imgas" />
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}
                        </div>
                        {/*end:Tab pane*/}
                        {/*begin:Tab pane*/}
                        <div className="tab-pane w-lg-600px" id="kt_app_header_menu_pages_account">
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-5 mb-6 mb-lg-0">
                              {/*begin:Row*/}
                              <div className="row">
                                {/*begin:Col*/}
                                <div className="col-lg-6">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/account/overview.html" className="menu-link">
                                      <span className="menu-title">Overview</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/account/settings.html" className="menu-link">
                                      <span className="menu-title">Settings</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/account/security.html" className="menu-link">
                                      <span className="menu-title">Security</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/account/activity.html" className="menu-link">
                                      <span className="menu-title">Activity</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/account/billing.html" className="menu-link">
                                      <span className="menu-title">Billing</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-6">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/account/statements.html" className="menu-link">
                                      <span className="menu-title">Statements</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/account/referrals.html" className="menu-link">
                                      <span className="menu-title">Referrals</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/account/api-keys.html" className="menu-link">
                                      <span className="menu-title">API Keys</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a href="../../demo1/dist/account/logs.html" className="menu-link">
                                      <span className="menu-title">Logs</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Col*/}
                              </div>
                              {/*end:Row*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-7">
                              <img src="assets/media/stock/900x600/46.jpg" className="rounded mw-100" alt="imgas" />
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}
                        </div>
                        {/*end:Tab pane*/}
                        {/*begin:Tab pane*/}
                        <div className="tab-pane w-lg-600px" id="kt_app_header_menu_pages_authentication">
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-6">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                  Corporate
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/layouts/corporate/sign-in.html" className="menu-link">
                                    <span className="menu-title">Sign-in</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/layouts/corporate/sign-up.html" className="menu-link">
                                    <span className="menu-title">Sign-up</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/layouts/corporate/two-steps.html" className="menu-link">
                                    <span className="menu-title">Two-steps</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/layouts/corporate/reset-password.html" className="menu-link">
                                    <span className="menu-title">Reset Password</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/layouts/corporate/new-password.html" className="menu-link">
                                    <span className="menu-title">New Password</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/extended/multi-steps-sign-up.html" className="menu-link">
                                    <span className="menu-title">Multi-steps Sign-up</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/extended/two-factor-auth.html" className="menu-link">
                                    <span className="menu-title">Two Factor Auth</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-0">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                  General
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/general/welcome.html" className="menu-link">
                                    <span className="menu-title">Welcome Message</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/general/verify-email.html" className="menu-link">
                                    <span className="menu-title">Verify Email</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/general/coming-soon.html" className="menu-link">
                                    <span className="menu-title">Coming Soon</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/general/password-confirmation.html" className="menu-link">
                                    <span className="menu-title">Password Confirmation</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/general/account-deactivated.html" className="menu-link">
                                    <span className="menu-title">Account Deactivation</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/general/error-404.html" className="menu-link">
                                    <span className="menu-title">Error 404</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/general/error-500.html" className="menu-link">
                                    <span className="menu-title">Error 500</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/general/maintenance.html" className="menu-link">
                                    <span className="menu-title">Maintenance</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-0">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                  Email Templates
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/email/welcome-message.html" className="menu-link">
                                    <span className="menu-title">Welcome Message</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/email/reset-password.html" className="menu-link">
                                    <span className="menu-title">Reset Password</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/email/subscription-confirmed.html" className="menu-link">
                                    <span className="menu-title">Subscription Confirmed</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/email/card-declined.html" className="menu-link">
                                    <span className="menu-title">Credit Card Declined</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/email/promo-1.html" className="menu-link">
                                    <span className="menu-title">Promo 1</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/email/promo-2.html" className="menu-link">
                                    <span className="menu-title">Promo 2</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a href="../../demo1/dist/authentication/email/promo-3.html" className="menu-link">
                                    <span className="menu-title">Promo 3</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}
                        </div>
                        {/*end:Tab pane*/}
                        {/*begin:Tab pane*/}
                        <div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities">
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-7">
                              {/*begin:Row*/}
                              <div className="row">
                                {/*begin:Col*/}
                                <div className="col-lg-4 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-0">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      General Modals
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/general/invite-friends.html" className="menu-link">
                                        <span className="menu-title">Invite Friends</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/general/view-users.html" className="menu-link">
                                        <span className="menu-title">View Users</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/general/select-users.html" className="menu-link">
                                        <span className="menu-title">Select Users</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/general/upgrade-plan.html" className="menu-link">
                                        <span className="menu-title">Upgrade Plan</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/general/share-earn.html" className="menu-link">
                                        <span className="menu-title">Share &amp; Earn</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/forms/new-target.html" className="menu-link">
                                        <span className="menu-title">New Target</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/forms/new-card.html" className="menu-link">
                                        <span className="menu-title">New Card</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/forms/new-address.html" className="menu-link">
                                        <span className="menu-title">New Address</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/forms/create-api-key.html" className="menu-link">
                                        <span className="menu-title">Create API Key</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/forms/bidding.html" className="menu-link">
                                        <span className="menu-title">Bidding</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-4 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-6">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Advanced Modals
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/wizards/create-app.html" className="menu-link">
                                        <span className="menu-title">Create App</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/wizards/create-campaign.html" className="menu-link">
                                        <span className="menu-title">Create Campaign</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/wizards/create-account.html" className="menu-link">
                                        <span className="menu-title">Create Business Acc</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/wizards/create-project.html" className="menu-link">
                                        <span className="menu-title">Create Project</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/wizards/top-up-wallet.html" className="menu-link">
                                        <span className="menu-title">Top Up Wallet</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/wizards/offer-a-deal.html" className="menu-link">
                                        <span className="menu-title">Offer a Deal</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/wizards/two-factor-authentication.html" className="menu-link">
                                        <span className="menu-title">Two Factor Auth</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                  {/*begin:Menu section*/}
                                  <div className="mb-0">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Search
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/search/horizontal.html" className="menu-link">
                                        <span className="menu-title">Horizontal</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/search/vertical.html" className="menu-link">
                                        <span className="menu-title">Vertical</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/search/users.html" className="menu-link">
                                        <span className="menu-title">Users</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/search/select-location.html" className="menu-link">
                                        <span className="menu-title">Select Location</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-4 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-0">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Wizards
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/wizards/horizontal.html" className="menu-link">
                                        <span className="menu-title">Horizontal</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/wizards/vertical.html" className="menu-link">
                                        <span className="menu-title">Vertical</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/wizards/two-factor-authentication.html" className="menu-link">
                                        <span className="menu-title">Two Factor Auth</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/wizards/create-app.html" className="menu-link">
                                        <span className="menu-title">Create App</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/wizards/create-campaign.html" className="menu-link">
                                        <span className="menu-title">Create Campaign</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/wizards/create-account.html" className="menu-link">
                                        <span className="menu-title">Create Account</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/wizards/create-project.html" className="menu-link">
                                        <span className="menu-title">Create Project</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/modals/wizards/top-up-wallet.html" className="menu-link">
                                        <span className="menu-title">Top Up Wallet</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a href="../../demo1/dist/utilities/wizards/offer-a-deal.html" className="menu-link">
                                        <span className="menu-title">Offer a Deal</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                              </div>
                              {/*end:Row*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-5 pe-lg-5">
                              <img src="assets/media/stock/600x600/img-84.jpg" className="rounded mw-100" alt="imgas" />
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}
                        </div>
                        {/*end:Tab pane*/}
                      </div>
                      {/*end:Tab content*/}
                    </div>
                    {/*end:Pages menu*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-title">Apps</span>
                    <span className="menu-arrow d-lg-none" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="currentColor" />
                              <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Projects</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/projects/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">My Projects</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/projects/project.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">View Project</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/projects/targets.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Targets</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/projects/budget.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Budget</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/projects/users.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Users</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/projects/files.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Files</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/projects/activity.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Activity</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/projects/settings.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Settings</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm001.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M18.041 22.041C18.5932 22.041 19.041 21.5932 19.041 21.041C19.041 20.4887 18.5932 20.041 18.041 20.041C17.4887 20.041 17.041 20.4887 17.041 21.041C17.041 21.5932 17.4887 22.041 18.041 22.041Z" fill="currentColor" />
                              <path opacity="0.3" d="M6.04095 22.041C6.59324 22.041 7.04095 21.5932 7.04095 21.041C7.04095 20.4887 6.59324 20.041 6.04095 20.041C5.48867 20.041 5.04095 20.4887 5.04095 21.041C5.04095 21.5932 5.48867 22.041 6.04095 22.041Z" fill="currentColor" />
                              <path opacity="0.3" d="M7.04095 16.041L19.1409 15.1409C19.7409 15.1409 20.141 14.7409 20.341 14.1409L21.7409 8.34094C21.9409 7.64094 21.4409 7.04095 20.7409 7.04095H5.44095L7.04095 16.041Z" fill="currentColor" />
                              <path d="M19.041 20.041H5.04096C4.74096 20.041 4.34095 19.841 4.14095 19.541C3.94095 19.241 3.94095 18.841 4.14095 18.541L6.04096 14.841L4.14095 4.64095L2.54096 3.84096C2.04096 3.64096 1.84095 3.04097 2.14095 2.54097C2.34095 2.04097 2.94096 1.84095 3.44096 2.14095L5.44096 3.14095C5.74096 3.24095 5.94096 3.54096 5.94096 3.84096L7.94096 14.841C7.94096 15.041 7.94095 15.241 7.84095 15.441L6.54096 18.041H19.041C19.641 18.041 20.041 18.441 20.041 19.041C20.041 19.641 19.641 20.041 19.041 20.041Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">eCommerce</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Catalog</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/products.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Products</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/categories.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Categories</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-product.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Add Product</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Edit Product</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-category.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Add Category</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-category.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Edit Category</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Sales</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/listing.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Orders Listing</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/details.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Order Details</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/add-order.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Add Order</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/edit-order.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Edit Order</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Customers</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/customers/listing.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Customers Listing</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/customers/details.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Customers Details</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Reports</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/view.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Products Viewed</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/sales.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Sales</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/returns.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Returns</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/customer-orders.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Customer Orders</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/shipping.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Shipping</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/settings.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Settings</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="currentColor" />
                              <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Support Center</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/support-center/overview.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Overview</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Tickets</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/support-center/tickets/list.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Ticket List</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/support-center/tickets/view.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Ticket View</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Tutorials</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/support-center/tutorials/list.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Tutorials List</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/support-center/tutorials/post.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Tutorials Post</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/support-center/faq.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">FAQ</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/support-center/licenses.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Licenses</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/support-center/contact.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Contact Us</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/general/gen051.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                              <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">User Management</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Users</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/user-management/users/list.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Users List</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/user-management/users/view.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">View User</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Roles</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/user-management/roles/list.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Roles List</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/user-management/roles/view.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">View Roles</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/user-management/permissions.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Permissions</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/electronics/elc002.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V20H6V21Z" fill="currentColor" />
                              <path opacity="0.3" d="M17 2H7C6.4 2 6 2.4 6 3V20H18V3C18 2.4 17.6 2 17 2Z" fill="currentColor" />
                              <path d="M12 4C11.4 4 11 3.6 11 3V2H13V3C13 3.6 12.6 4 12 4Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Contacts</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/contacts/getting-started.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Getting Started</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/contacts/add-contact.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add Contact</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/contacts/edit-contact.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Edit Contact</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/contacts/view-contact.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">View Contact</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                              <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                              <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Subscriptions</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/subscriptions/getting-started.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Getting Started</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/subscriptions/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Subscription List</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/subscriptions/add.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add Subscription</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/subscriptions/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">View Subscription</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor" />
                              <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Customers</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/customers/getting-started.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Getting Started</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/customers/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Customer Listing</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/customers/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Customer Details</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                              <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Invoice Management</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Profile</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-1.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Invoice 1</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-2.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Invoice 2</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-3.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Invoice 3</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/invoices/create.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Create Invoice</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/files/fil025.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor" />
                              <path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor" />
                              <path d="M10.3629 14.0084L8.92108 12.6429C8.57518 12.3153 8.03352 12.3153 7.68761 12.6429C7.31405 12.9967 7.31405 13.5915 7.68761 13.9453L10.2254 16.3488C10.6111 16.714 11.215 16.714 11.6007 16.3488L16.3124 11.8865C16.6859 11.5327 16.6859 10.9379 16.3124 10.5841C15.9665 10.2565 15.4248 10.2565 15.0789 10.5841L11.4631 14.0084C11.1546 14.3006 10.6715 14.3006 10.3629 14.0084Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">File Manager</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/file-manager/folders.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Folders</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/file-manager/files.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Files</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/file-manager/blank.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Blank Directory</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/file-manager/settings.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Settings</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor" />
                              <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Inbox</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/inbox/listing.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Messages</span>
                            <span className="menu-badge">
                              <span className="badge badge-light-success">3</span>
                            </span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/inbox/compose.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Compose</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/inbox/reply.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">View &amp; Reply</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                              <rect x={6} y={12} width={7} height={2} rx={1} fill="currentColor" />
                              <rect x={6} y={7} width={12} height={2} rx={1} fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Chat</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/chat/private.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Private Chat</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/chat/group.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Group Chat</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/chat/drawer.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Drawer Chat</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/calendar.html">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                              <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                              <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Calendar</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-title">Layouts</span>
                    <span className="menu-arrow d-lg-none" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-500px">
                    {/*begin:Dashboards menu*/}
                    <div className="menu-state-bg pt-1 pb-3 px-3 py-lg-6 px-lg-6" data-kt-menu-dismiss="true">
                      {/*begin:Row*/}
                      <div className="row">
                        {/*begin:Col*/}
                        <div className="col-lg-5 mb-3 pt-2">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/layouts/light-sidebar.html" className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot h-6px w-6px" />
                              </span>
                              <span className="menu-title">Light Sidebar</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/layouts/dark-sidebar.html" className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot h-6px w-6px" />
                              </span>
                              <span className="menu-title">Dark Sidebar</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/layouts/light-header.html" className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot h-6px w-6px" />
                              </span>
                              <span className="menu-title">Light Header</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="../../demo1/dist/layouts/dark-header.html" className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot h-6px w-6px" />
                              </span>
                              <span className="menu-title">Dark Header</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-7 mb-3 pt-2 pe-lg-8">
                          <img src="assets/media/stock/900x600/74.jpg" className="rounded mw-100" alt="imgas" />
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                      <div className="separator separator-dashed mx-lg-5 my-4" />
                      {/*begin:Landing*/}
                      <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-lg-5">
                        <div className="d-flex flex-column me-5">
                          <div className="fs-6 fw-bold text-gray-800">
                            Layout Builder
                          </div>
                          <div className="fs-7 fw-semibold text-muted">
                            Customize, preview and export
                          </div>
                        </div>
                        <a href="https://preview.keenthemes.com/keen/demo1/layout-builder.html" className="btn btn-sm btn-primary fw-bold">Try Builder</a>
                      </div>
                      {/*end:Landing*/}
                    </div>
                    {/*end:Dashboards menu*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-title">Help</span>
                    <span className="menu-arrow d-lg-none" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs/base/utilities" target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="currentColor" />
                              <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Components</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                              <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Documentation</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs/getting-started/changelog" target="_blank">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/coding/cod003.svg*/}
                          <span className="svg-icon svg-icon-3">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z" fill="currentColor" />
                              <path opacity="0.3" d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Changelog v3.0.3</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
              </div>
              {/*end::Menu*/}
            </div>
            {/*end::Menu wrapper*/}
            {/*begin::Navbar*/}
            <div className="app-navbar flex-shrink-0">
              {/*begin::Search*/}
              <div className="app-navbar-item align-items-stretch ms-1 ms-lg-3">
                {/*begin::Search*/}
                <div id="kt_header_search" className="header-search d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length={2} data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
                  {/*begin::Search toggle*/}
                  <div className="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
                    <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                      <span className="svg-icon svg-icon-1">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                          <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Search toggle*/}
                  {/*begin::Menu*/}
                  <div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
                    {/*begin::Wrapper*/}
                    <div data-kt-search-element="wrapper">
                      {/*begin::Form*/}
                      <form data-kt-search-element="form" className="w-100 position-relative mb-3" autoComplete="off">
                        {/*begin::Icon*/}
                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        {/*end::Icon*/}
                        {/*begin::Input*/}
                        <input type="text" className="search-input form-control form-control-flush ps-10" name="search" defaultValue placeholder="Search..." data-kt-search-element="input" />
                        {/*end::Input*/}
                        {/*begin::Spinner*/}
                        <span className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1" data-kt-search-element="spinner">
                          <span className="spinner-border h-15px w-15px align-middle text-gray-400" />
                        </span>
                        {/*end::Spinner*/}
                        {/*begin::Reset*/}
                        <span className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none" data-kt-search-element="clear">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                          <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                              <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        {/*end::Reset*/}
                        {/*begin::Toolbar*/}
                        <div className="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
                          {/*begin::Preferences toggle*/}
                          <div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1" data-bs-toggle="tooltip" title="Show search preferences">
                            {/*begin::Svg Icon | path: icons/duotune/coding/cod001.svg*/}
                            <span className="svg-icon svg-icon-1">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="currentColor" />
                                <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::Preferences toggle*/}
                          {/*begin::Advanced search toggle*/}
                          <div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip" title="Show more search options">
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                            <span className="svg-icon svg-icon-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::Advanced search toggle*/}
                        </div>
                        {/*end::Toolbar*/}
                      </form>
                      {/*end::Form*/}
                      {/*begin::Separator*/}
                      <div className="separator border-gray-200 mb-6" />
                      {/*end::Separator*/}
                      {/*begin::Recently viewed*/}
                      <div data-kt-search-element="results" className="d-none">
                        {/*begin::Items*/}
                        <div className="scroll-y mh-200px mh-lg-350px">
                          {/*begin::Category title*/}
                          <h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">
                            Users
                          </h3>
                          {/*end::Category title*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <img src="assets/media/avatars/300-6.jpg" alt="imgas" />
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column justify-content-start fw-semibold">
                              <span className="fs-6 fw-semibold">Karina Clark</span>
                              <span className="fs-7 fw-semibold text-muted">Marketing Manager</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <img src="assets/media/avatars/300-2.jpg" alt="imgas" />
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column justify-content-start fw-semibold">
                              <span className="fs-6 fw-semibold">Olivia Bold</span>
                              <span className="fs-7 fw-semibold text-muted">Software Engineer</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <img src="assets/media/avatars/300-9.jpg" alt="imgas" />
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column justify-content-start fw-semibold">
                              <span className="fs-6 fw-semibold">Ana Clark</span>
                              <span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <img src="assets/media/avatars/300-14.jpg" alt="imgas" />
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column justify-content-start fw-semibold">
                              <span className="fs-6 fw-semibold">Nick Pitola</span>
                              <span className="fs-7 fw-semibold text-muted">Art Director</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <img src="assets/media/avatars/300-11.jpg" alt="imgas" />
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column justify-content-start fw-semibold">
                              <span className="fs-6 fw-semibold">Edward Kulnic</span>
                              <span className="fs-7 fw-semibold text-muted">System Administrator</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Category title*/}
                          <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">
                            Customers
                          </h3>
                          {/*end::Category title*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/volicity-9.svg" alt="imgas" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column justify-content-start fw-semibold">
                              <span className="fs-6 fw-semibold">Company Rbranding</span>
                              <span className="fs-7 fw-semibold text-muted">UI Design</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tvit.svg" alt="imgas" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column justify-content-start fw-semibold">
                              <span className="fs-6 fw-semibold">Company Re-branding</span>
                              <span className="fs-7 fw-semibold text-muted">Web Development</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="imgas" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column justify-content-start fw-semibold">
                              <span className="fs-6 fw-semibold">Business Analytics App</span>
                              <span className="fs-7 fw-semibold text-muted">Administration</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/leaf.svg" alt="imgas" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column justify-content-start fw-semibold">
                              <span className="fs-6 fw-semibold">EcoLeaf App Launch</span>
                              <span className="fs-7 fw-semibold text-muted">Marketing</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tower.svg" alt="imgas" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column justify-content-start fw-semibold">
                              <span className="fs-6 fw-semibold">Tower Group Website</span>
                              <span className="fs-7 fw-semibold text-muted">Google Adwords</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Category title*/}
                          <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">
                            Projects
                          </h3>
                          {/*end::Category title*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor" />
                                    <rect x={7} y={17} width={6} height={2} rx={1} fill="currentColor" />
                                    <rect x={7} y={12} width={10} height={2} rx={1} fill="currentColor" />
                                    <rect x={7} y={7} width={6} height={2} rx={1} fill="currentColor" />
                                    <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <span className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
                              <span className="fs-7 fw-semibold text-muted">#45670</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x={8} y={9} width={3} height={10} rx="1.5" fill="currentColor" />
                                    <rect opacity="0.5" x={13} y={5} width={3} height={14} rx="1.5" fill="currentColor" />
                                    <rect x={18} y={11} width={3} height={8} rx="1.5" fill="currentColor" />
                                    <rect x={3} y={13} width={3} height={6} rx="1.5" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <span className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
                              <span className="fs-7 fw-semibold text-muted">#45690</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                    <rect x={6} y={12} width={7} height={2} rx={1} fill="currentColor" />
                                    <rect x={6} y={7} width={12} height={2} rx={1} fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
                              <span className="fs-7 fw-semibold text-muted">#21090</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                                    <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                                    <rect x={7} y={6} width={4} height={4} rx={2} fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <span className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
                              <span className="fs-7 fw-semibold text-muted">#34560</span>
                            </div>
                            {/*end::Title*/}
                          </a>
                          {/*end::Item*/}
                        </div>
                        {/*end::Items*/}
                      </div>
                      {/*end::Recently viewed*/}
                      {/*begin::Recently viewed*/}
                      <div className="mb-5" data-kt-search-element="main">
                        {/*begin::Heading*/}
                        <div className="d-flex flex-stack fw-semibold mb-4">
                          {/*begin::Label*/}
                          <span className="text-muted fs-6 me-2">Recently Searched:</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Items*/}
                        <div className="scroll-y mh-200px mh-lg-325px">
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/electronics/elc004.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z" fill="currentColor" />
                                    <path opacity="0.3" d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z" fill="currentColor" />
                                    <path opacity="0.3" d="M15 17H9V20H15V17Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
                              <span className="fs-7 text-muted fw-semibold">#45789</span>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/graphs/gra001.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z" fill="currentColor" />
                                    <path d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept API Project Meeting</a>
                              <span className="fs-7 text-muted fw-semibold">#84050</span>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="currentColor" />
                                    <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI Monitoring App Launch</a>
                              <span className="fs-7 text-muted fw-semibold">#84250</span>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/graphs/gra002.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M20 8L12.5 5L5 14V19H20V8Z" fill="currentColor" />
                                    <path d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project Reference FAQ</a>
                              <span className="fs-7 text-muted fw-semibold">#67945</span>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                                    <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro App Development</a>
                              <span className="fs-7 text-muted fw-semibold">#84250</span>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="currentColor" />
                                    <path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
                              <span className="fs-7 text-muted fw-semibold">#45690</span>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center mb-5">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-40px me-4">
                              <span className="symbol-label bg-light">
                                {/*begin::Svg Icon | path: icons/duotune/graphs/gra002.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M20 8L12.5 5L5 14V19H20V8Z" fill="currentColor" />
                                    <path d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="d-flex flex-column">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing UI Design" Launch</a>
                              <span className="fs-7 text-muted fw-semibold">#24005</span>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Item*/}
                        </div>
                        {/*end::Items*/}
                      </div>
                      {/*end::Recently viewed*/}
                      {/*begin::Empty*/}
                      <div data-kt-search-element="empty" className="text-center d-none">
                        {/*begin::Icon*/}
                        <div className="pt-10 pb-10">
                          {/*begin::Svg Icon | path: icons/duotune/files/fil024.svg*/}
                          <span className="svg-icon svg-icon-4x opacity-50">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor" />
                              <path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor" />
                              <rect x="13.6993" y="13.6656" width="4.42828" height="1.73089" rx="0.865447" transform="rotate(45 13.6993 13.6656)" fill="currentColor" />
                              <path d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Message*/}
                        <div className="pb-15 fw-semibold">
                          <h3 className="text-gray-600 fs-5 mb-2">
                            No result found
                          </h3>
                          <div className="text-muted fs-7">
                            Please try again with a different query
                          </div>
                        </div>
                        {/*end::Message*/}
                      </div>
                      {/*end::Empty*/}
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Preferences*/}
                    <form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
                      {/*begin::Heading*/}
                      <h3 className="fw-semibold text-dark mb-7">
                        Advanced Search
                      </h3>
                      {/*end::Heading*/}
                      {/*begin::Input group*/}
                      <div className="mb-5">
                        <input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-5">
                        {/*begin::Radio group*/}
                        <div className="nav-group nav-group-fluid">
                          {/*begin::Option*/}
                          <label>
                            <input type="radio" className="btn-check" name="type" defaultValue="has" defaultChecked="checked" />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
                          </label>
                          {/*end::Option*/}
                          {/*begin::Option*/}
                          <label>
                            <input type="radio" className="btn-check" name="type" defaultValue="users" />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
                          </label>
                          {/*end::Option*/}
                          {/*begin::Option*/}
                          <label>
                            <input type="radio" className="btn-check" name="type" defaultValue="orders" />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
                          </label>
                          {/*end::Option*/}
                          {/*begin::Option*/}
                          <label>
                            <input type="radio" className="btn-check" name="type" defaultValue="projects" />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
                          </label>
                          {/*end::Option*/}
                        </div>
                        {/*end::Radio group*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-5">
                        <input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" defaultValue />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-5">
                        <input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" defaultValue />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-5">
                        {/*begin::Radio group*/}
                        <div className="nav-group nav-group-fluid">
                          {/*begin::Option*/}
                          <label>
                            <input type="radio" className="btn-check" name="attachment" defaultValue="has" defaultChecked="checked" />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
                          </label>
                          {/*end::Option*/}
                          {/*begin::Option*/}
                          <label>
                            <input type="radio" className="btn-check" name="attachment" defaultValue="any" />
                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
                          </label>
                          {/*end::Option*/}
                        </div>
                        {/*end::Radio group*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="mb-5">
                        <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
                          <option value="next">Within the next</option>
                          <option value="last">Within the last</option>
                          <option value="between">Between</option>
                          <option value="on">On</option>
                        </select>
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="row mb-8">
                        {/*begin::Col*/}
                        <div className="col-6">
                          <input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" defaultValue />
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-6">
                          <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
                            <option value="days">Days</option>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                            <option value="years">Years</option>
                          </select>
                        </div>
                        {/*end::Col*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Actions*/}
                      <div className="d-flex justify-content-end">
                        <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">
                          Cancel
                        </button>
                        <a href="../../demo1/dist/pages/search/horizontal.html" className="btn btn-sm fw-bold btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
                      </div>
                      {/*end::Actions*/}
                    </form>
                    {/*end::Preferences*/}
                    {/*begin::Preferences*/}
                    <form data-kt-search-element="preferences" className="pt-1 d-none">
                      {/*begin::Heading*/}
                      <h3 className="fw-semibold text-dark mb-7">
                        Search Preferences
                      </h3>
                      {/*end::Heading*/}
                      {/*begin::Input group*/}
                      <div className="pb-4 border-bottom">
                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                          <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Projects</span>
                          <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked="checked" />
                        </label>
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="py-4 border-bottom">
                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                          <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Targets</span>
                          <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked="checked" />
                        </label>
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="py-4 border-bottom">
                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                          <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Affiliate Programs</span>
                          <input className="form-check-input" type="checkbox" defaultValue={1} />
                        </label>
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="py-4 border-bottom">
                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                          <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Referrals</span>
                          <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked="checked" />
                        </label>
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className="py-4 border-bottom">
                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                          <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Users</span>
                          <input className="form-check-input" type="checkbox" defaultValue={1} />
                        </label>
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Actions*/}
                      <div className="d-flex justify-content-end pt-7">
                        <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-sm fw-bold btn-primary">
                          Save Changes
                        </button>
                      </div>
                      {/*end::Actions*/}
                    </form>
                    {/*end::Preferences*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                {/*end::Search*/}
              </div>
              {/*end::Search*/}
              {/*begin::Activities*/}
              <div className="app-navbar-item ms-1 ms-lg-3">
                {/*begin::Drawer toggle*/}
                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" id="kt_activities_toggle">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x={8} y={9} width={3} height={10} rx="1.5" fill="currentColor" />
                      <rect opacity="0.5" x={13} y={5} width={3} height={14} rx="1.5" fill="currentColor" />
                      <rect x={18} y={11} width={3} height={8} rx="1.5" fill="currentColor" />
                      <rect x={3} y={13} width={3} height={6} rx="1.5" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Drawer toggle*/}
              </div>
              {/*end::Activities*/}
              {/*begin::Notifications*/}
              <div className="app-navbar-item ms-1 ms-lg-3">
                {/*begin::Menu- wrapper*/}
                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen022.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z" fill="currentColor" />
                      <path d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z" fill="currentColor" />
                      <path opacity="0.3" d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z" fill="currentColor" />
                      <path opacity="0.3" d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*begin::Menu*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true">
                  {/*begin::Heading*/}
                  <div className="d-flex flex-column bgi-no-repeat rounded-top" style={{backgroundImage: 'url("assets/media/misc/menu-header-bg.jpg")'}}>
                    {/*begin::Title*/}
                    <h3 className="text-white fw-semibold px-9 mt-10 mb-6">
                      Notifications
                      <span className="fs-8 opacity-75 ps-3">24 reports</span>
                    </h3>
                    {/*end::Title*/}
                    {/*begin::Tabs*/}
                    <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                      <li className="nav-item">
                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
                      </li>
                    </ul>
                    {/*end::Tabs*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Tab content*/}
                  <div className="tab-content">
                    {/*begin::Tab panel*/}
                    <div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
                      {/*begin::Items*/}
                      <div className="scroll-y mh-325px my-5 px-8">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-primary">
                                {/*begin::Svg Icon | path: icons/duotune/technology/teh008.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5ZM17.5 2C15 2 13 4 13 6.5C13 9 15 11 17.5 11C20 11 22 9 22 6.5C22 4 20 2 17.5 2ZM6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13ZM17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13Z" fill="currentColor" />
                                    <path d="M17.5 16C17.5 16 17.4 16 17.5 16L16.7 15.3C16.1 14.7 15.7 13.9 15.6 13.1C15.5 12.4 15.5 11.6 15.6 10.8C15.7 9.99999 16.1 9.19998 16.7 8.59998L17.4 7.90002H17.5C18.3 7.90002 19 7.20002 19 6.40002C19 5.60002 18.3 4.90002 17.5 4.90002C16.7 4.90002 16 5.60002 16 6.40002V6.5L15.3 7.20001C14.7 7.80001 13.9 8.19999 13.1 8.29999C12.4 8.39999 11.6 8.39999 10.8 8.29999C9.99999 8.19999 9.20001 7.80001 8.60001 7.20001L7.89999 6.5V6.40002C7.89999 5.60002 7.19999 4.90002 6.39999 4.90002C5.59999 4.90002 4.89999 5.60002 4.89999 6.40002C4.89999 7.20002 5.59999 7.90002 6.39999 7.90002H6.5L7.20001 8.59998C7.80001 9.19998 8.19999 9.99999 8.29999 10.8C8.39999 11.5 8.39999 12.3 8.29999 13.1C8.19999 13.9 7.80001 14.7 7.20001 15.3L6.5 16H6.39999C5.59999 16 4.89999 16.7 4.89999 17.5C4.89999 18.3 5.59999 19 6.39999 19C7.19999 19 7.89999 18.3 7.89999 17.5V17.4L8.60001 16.7C9.20001 16.1 9.99999 15.7 10.8 15.6C11.5 15.5 12.3 15.5 13.1 15.6C13.9 15.7 14.7 16.1 15.3 16.7L16 17.4V17.5C16 18.3 16.7 19 17.5 19C18.3 19 19 18.3 19 17.5C19 16.7 18.3 16 17.5 16Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
                              <div className="text-gray-400 fs-7">
                                Phase 1 development
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">1 hr</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-danger">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-danger">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                                    <rect x={11} y={14} width={7} height={2} rx={1} transform="rotate(-90 11 14)" fill="currentColor" />
                                    <rect x={11} y={17} width={2} height={2} rx={1} transform="rotate(-90 11 17)" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
                              <div className="text-gray-400 fs-7">
                                Confidential staff documents
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">2 hrs</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-warning">
                                {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-warning">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor" />
                                    <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
                              <div className="text-gray-400 fs-7">
                                Corporeate staff profiles
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">5 hrs</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-success">
                                {/*begin::Svg Icon | path: icons/duotune/files/fil023.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-success">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M5 15C3.3 15 2 13.7 2 12C2 10.3 3.3 9 5 9H5.10001C5.00001 8.7 5 8.3 5 8C5 5.2 7.2 3 10 3C11.9 3 13.5 4 14.3 5.5C14.8 5.2 15.4 5 16 5C17.7 5 19 6.3 19 8C19 8.4 18.9 8.7 18.8 9C18.9 9 18.9 9 19 9C20.7 9 22 10.3 22 12C22 13.7 20.7 15 19 15H5ZM5 12.6H13L9.7 9.29999C9.3 8.89999 8.7 8.89999 8.3 9.29999L5 12.6Z" fill="currentColor" />
                                    <path d="M17 17.4V12C17 11.4 16.6 11 16 11C15.4 11 15 11.4 15 12V17.4H17Z" fill="currentColor" />
                                    <path opacity="0.3" d="M12 17.4H20L16.7 20.7C16.3 21.1 15.7 21.1 15.3 20.7L12 17.4Z" fill="currentColor" />
                                    <path d="M8 12.6V18C8 18.6 8.4 19 9 19C9.6 19 10 18.6 10 18V12.6H8Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
                              <div className="text-gray-400 fs-7">
                                New frontend admin theme
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">2 days</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-primary">
                                {/*begin::Svg Icon | path: icons/duotune/maps/map001.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M6 22H4V3C4 2.4 4.4 2 5 2C5.6 2 6 2.4 6 3V22Z" fill="currentColor" />
                                    <path d="M18 14H4V4H18C18.8 4 19.2 4.9 18.7 5.5L16 9L18.8 12.5C19.3 13.1 18.8 14 18 14Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
                              <div className="text-gray-400 fs-7">
                                Product launch status update
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">21 Jan</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-info">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-info">
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z" fill="currentColor" />
                                    <path d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
                              <div className="text-gray-400 fs-7">
                                Collection of banner images
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">21 Jan</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-warning">
                                {/*begin::Svg Icon | path: icons/duotune/art/art002.svg*/}
                                <span className="svg-icon svg-icon-2 svg-icon-warning">
                                  <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z" fill="currentColor" />
                                    <path d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
                              <div className="text-gray-400 fs-7">
                                Collection of SVG icons
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">20 March</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Items*/}
                      {/*begin::View more*/}
                      <div className="py-3 text-center border-top">
                        <a href="../../demo1/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                          <span className="svg-icon svg-icon-5">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                              <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}</a>
                      </div>
                      {/*end::View more*/}
                    </div>
                    {/*end::Tab panel*/}
                    {/*begin::Tab panel*/}
                    <div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-column px-9">
                        {/*begin::Section*/}
                        <div className="pt-10 pb-0">
                          {/*begin::Title*/}
                          <h3 className="text-dark text-center fw-bold">
                            Get Pro Access
                          </h3>
                          {/*end::Title*/}
                          {/*begin::Text*/}
                          <div className="text-center text-gray-600 fw-semibold pt-1">
                            Outlines keep you honest. They stoping you from
                            amazing poorly about drive
                          </div>
                          {/*end::Text*/}
                          {/*begin::Action*/}
                          <div className="text-center mt-5 mb-9">
                            <a href="/" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                          </div>
                          {/*end::Action*/}
                        </div>
                        {/*end::Section*/}
                        {/*begin::Illustration*/}
                        <div className="text-center px-4">
                          <img className="mw-100 mh-200px" alt="image" src="assets/media/illustrations/sketchy-1/1.png" />
                        </div>
                        {/*end::Illustration*/}
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Tab panel*/}
                    {/*begin::Tab panel*/}
                    <div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
                      {/*begin::Items*/}
                      <div className="scroll-y mh-325px my-5 px-8">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">200 OK</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">New order</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Just now</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">New customer</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">2 hrs</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">200 OK</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">Payment process</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">5 hrs</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">Search query</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">2 days</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">200 OK</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">API connection</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">1 week</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">200 OK</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">Database restore</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Mar 5</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">System update</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">May 15</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Apr 3</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">API rollback</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Jun 30</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">Refund process</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Jul 10</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Sep 10</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a href="/" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Dec 10</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Items*/}
                      {/*begin::View more*/}
                      <div className="py-3 text-center border-top">
                        <a href="../../demo1/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                          <span className="svg-icon svg-icon-5">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                              <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}</a>
                      </div>
                      {/*end::View more*/}
                    </div>
                    {/*end::Tab panel*/}
                  </div>
                  {/*end::Tab content*/}
                </div>
                {/*end::Menu*/}
                {/*end::Menu wrapper*/}
              </div>
              {/*end::Notifications*/}
              {/*begin::Chat*/}
              <div className="app-navbar-item ms-1 ms-lg-3">
                {/*begin::Menu wrapper*/}
                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative" id="kt_drawer_chat_toggle">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                      <rect x={6} y={12} width={7} height={2} rx={1} fill="currentColor" />
                      <rect x={6} y={7} width={12} height={2} rx={1} fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink" />
                </div>
                {/*end::Menu wrapper*/}
              </div>
              {/*end::Chat*/}
              {/*begin::Languages*/}
              <div className="app-navbar-item ms-1 ms-lg-3">
                {/*begin::Menu wrapper*/}
                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                  <span className="symbol symbol-20px">
                    <img className="rounded" src="assets/media/flags/united-states.svg" alt="imgas" />
                  </span>
                </div>
                {/*begin::User account menu*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-semibold py-4 fs-6 w-175px" data-kt-menu="true">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5 active">
                      <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="assets/media/flags/united-states.svg" alt="imgas" /> </span>English</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                      <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="assets/media/flags/spain.svg" alt="imgas" /> </span>Spanish</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                      <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="assets/media/flags/germany.svg" alt="imgas" /> </span>German</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                      <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="assets/media/flags/japan.svg" alt="imgas" /> </span>Japanese</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                      <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="assets/media/flags/france.svg" alt="imgas" /> </span>French</a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::User account menu*/}
                {/*end::Menu wrapper*/}
              </div>
              {/*end::Languages*/}
              {/*begin::Theme mode*/}
              <div className="app-navbar-item ms-1 ms-lg-3">
                {/*begin::Menu toggle*/}
                <a href="/" className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen060.svg*/}
                  <span className="svg-icon theme-light-show svg-icon-2">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor" />
                      <path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor" />
                      <path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor" />
                      <path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor" />
                      <path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor" />
                      <path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor" />
                      <path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor" />
                      <path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor" />
                      <path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  {/*begin::Svg Icon | path: icons/duotune/general/gen061.svg*/}
                  <span className="svg-icon theme-dark-show svg-icon-2">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor" />
                      <path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor" />
                      <path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor" />
                      <path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </a>
                {/*begin::Menu toggle*/}
                {/*begin::Menu*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3 my-0">
                    <a href="/" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                      <span className="menu-icon" data-kt-element="icon">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen060.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor" />
                            <path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor" />
                            <path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor" />
                            <path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor" />
                            <path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor" />
                            <path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor" />
                            <path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor" />
                            <path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor" />
                            <path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Light</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3 my-0">
                    <a href="/" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                      <span className="menu-icon" data-kt-element="icon">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen061.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor" />
                            <path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor" />
                            <path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor" />
                            <path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">Dark</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3 my-0">
                    <a href="/" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                      <span className="menu-icon" data-kt-element="icon">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen062.svg*/}
                        <span className="svg-icon svg-icon-3">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-title">System</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu*/}
              </div>
              {/*end::Theme mode*/}
              {/*begin::User menu*/}
              <div className="app-navbar-item ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                {/*begin::Menu wrapper*/}
                <div className="cursor-pointer symbol symbol-35px symbol-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                  <img src="assets/media/avatars/300-3.jpg" alt="user" />
                </div>
                {/*begin::User account menu*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content d-flex align-items-center px-3">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-50px me-5">
                        <img alt="Logo" src="assets/media/avatars/300-3.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Username*/}
                      <div className="d-flex flex-column">
                        <div className="fw-bold d-flex align-items-center fs-5">
                          Max Smith
                          <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                        </div>
                        <a href="/" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
                      </div>
                      {/*end::Username*/}
                    </div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="../../demo1/dist/account/overview.html" className="menu-link px-5">My Profile</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="../../demo1/dist/apps/projects/list.html" className="menu-link px-5">
                      <span className="menu-text">My Projects</span>
                      <span className="menu-badge">
                        <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                      </span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                    <a href="/" className="menu-link px-5">
                      <span className="menu-title">My Subscription</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="../../demo1/dist/account/referrals.html" className="menu-link px-5">Referrals</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="../../demo1/dist/account/billing.html" className="menu-link px-5">Billing</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="../../demo1/dist/account/statements.html" className="menu-link px-5">Payments</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="../../demo1/dist/account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
                          <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements" /></a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator my-2" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3">
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                            <span className="form-check-label text-muted fs-7">Notifications</span>
                          </label>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="../../demo1/dist/account/statements.html" className="menu-link px-5">My Statements</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                    <a href="/" className="menu-link px-5">
                      <span className="menu-title position-relative">Language
                        <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
                          <img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="imgas" /></span></span>
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5 active">
                          <span className="symbol symbol-20px me-4">
                            <img className="rounded-1" src="assets/media/flags/united-states.svg" alt="imgas" /> </span>English</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                          <span className="symbol symbol-20px me-4">
                            <img className="rounded-1" src="assets/media/flags/spain.svg" alt="imgas" /> </span>Spanish</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                          <span className="symbol symbol-20px me-4">
                            <img className="rounded-1" src="assets/media/flags/germany.svg" alt="imgas" /> </span>German</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                          <span className="symbol symbol-20px me-4">
                            <img className="rounded-1" src="assets/media/flags/japan.svg" alt="imgas" /> </span>Japanese</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                          <span className="symbol symbol-20px me-4">
                            <img className="rounded-1" src="assets/media/flags/france.svg" alt="imgas" /> </span>French</a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5 my-1">
                    <a href="../../demo1/dist/account/settings.html" className="menu-link px-5">Account Settings</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="../../demo1/dist/authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::User account menu*/}
                {/*end::Menu wrapper*/}
              </div>
              {/*end::User menu*/}
              {/*begin::Header menu toggle*/}
              <div className="app-navbar-item d-lg-none ms-2 me-n3" title="Show header menu">
                <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_header_menu_toggle">
                  {/*begin::Svg Icon | path: icons/duotune/text/txt001.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z" fill="currentColor" />
                      <path opacity="0.3" d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Header menu toggle*/}
            </div>
            {/*end::Navbar*/}
          </div>
          {/*end::Header wrapper*/}
        </div>
        {/*end::Header container*/}
      </div>
      {/*end::Header*/}
      {/*begin::Wrapper*/}
      <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
        {/*begin::Sidebar*/}
        <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
          {/*begin::Logo*/}
          <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
            {/*begin::Logo image*/}
            <a href="../../demo1/dist/index.html">
              <img alt="Logo" src="assets/media/logos/default-dark.svg" className="h-30px app-sidebar-logo-default" />
            </a>
            {/*end::Logo image*/}
            {/*begin::Sidebar toggle*/}
            <div id="kt_app_sidebar_toggle" className="app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr079.svg*/}
              <span className="svg-icon svg-icon-2 rotate-180">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor" />
                  <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </div>
            {/*end::Sidebar toggle*/}
          </div>
          {/*end::Logo*/}
          {/*begin::sidebar menu*/}
          <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
            {/*begin::Menu wrapper*/}
            <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper hover-scroll-overlay-y my-5" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px">
              {/*begin::Menu*/}
              <div className="menu menu-column menu-rounded menu-sub-indention fw-semibold px-3" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x={2} y={2} width={9} height={9} rx={2} fill="currentColor" />
                          <rect opacity="0.3" x={13} y={2} width={9} height={9} rx={2} fill="currentColor" />
                          <rect opacity="0.3" x={13} y={13} width={9} height={9} rx={2} fill="currentColor" />
                          <rect opacity="0.3" x={2} y={13} width={9} height={9} rx={2} fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Dashboards</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link active" href="../../demo1/dist/index.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Default</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/dashboards/projects.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Projects</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/dashboards/ecommerce.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">eCommerce</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/dashboards/marketing.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Marketing</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    <div className="menu-inner flex-column collapse" id="kt_app_sidebar_menu_dashboards_collapse">
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo1/dist/dashboards/social.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Social</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo1/dist/dashboards/bidding.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Bidding</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo1/dist/dashboards/online-courses.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Online Courses</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="../../demo1/dist/dashboards/logistics.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Logistics</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    <div className="menu-item">
                      <div className="menu-content">
                        <a className="btn btn-flex btn-color-gray-500 btn-icon-gray-400 d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show Less">
                          <span data-kt-toggle-text-target="true">Show 4 More</span>
                          {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                          <span className="svg-icon toggle-on svg-icon-2 me-0">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                              <rect x="6.0104" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                          <span className="svg-icon toggle-off svg-icon-2 me-0">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                              <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                              <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item pt-5">
                  {/*begin:Menu content*/}
                  <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">Pages</span>
                  </div>
                  {/*end:Menu content*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/communication/com005.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="currentColor" />
                          <path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">User Profile</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/user-profile/overview.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Overview</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/user-profile/projects.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Projects</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/user-profile/campaigns.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Campaigns</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/user-profile/documents.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Documents</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/user-profile/followers.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Followers</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/user-profile/activity.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Activity</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen022.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z" fill="currentColor" />
                          <path d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z" fill="currentColor" />
                          <path opacity="0.3" d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z" fill="currentColor" />
                          <path opacity="0.3" d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Account</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/account/overview.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Overview</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/account/settings.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/account/security.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Security</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/account/activity.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Activity</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/account/billing.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Billing</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/account/statements.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Statements</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/account/referrals.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Referrals</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/account/api-keys.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">API Keys</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/account/logs.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Logs</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/communication/com013.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z" fill="currentColor" />
                          <rect opacity="0.3" x={8} y={3} width={8} height={8} rx={4} fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Authentication</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Corporate</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/sign-in.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Sign-in</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/sign-up.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Sign-up</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/two-steps.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Two-steps</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/reset-password.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Reset Password</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/layouts/corporate/new-password.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">New Password</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/extended/multi-steps-sign-up.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Multi-steps Sign-up</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/extended/two-factor-auth.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Two Factor Auth</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Email Templates</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/email/welcome-message.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Welcome Message</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/email/reset-password.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Reset Password</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/email/subscription-confirmed.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Subscription Confirmed</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/email/card-declined.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Credit Card Declined</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/email/promo-1.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Promo 1</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/email/promo-2.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Promo 2</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/authentication/email/promo-3.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Promo 3</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/authentication/general/welcome.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Welcome Message</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/authentication/general/verify-email.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Verify Email</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/authentication/general/coming-soon.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Coming Soon</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/authentication/general/password-confirmation.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Password Confirmation</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/authentication/general/account-deactivated.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Account Deactivation</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/authentication/general/error-404.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Error 404</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/authentication/general/error-500.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Error 500</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/authentication/general/maintenance.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Maintenance</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor" />
                          <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Corporate</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/about.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">About</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/team.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Our Team</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/faq.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">FAQ</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/contact.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Contact Us</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/pricing.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Pricing</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/licenses.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Licenses</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/sitemap.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sitemap</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs048.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
                          <path d="M8.70001 6C8.10001 5.7 7.39999 5.40001 6.79999 5.10001C7.79999 4.00001 8.90001 3 10.1 2.2C10.7 2.1 11.4 2 12 2C12.7 2 13.3 2.1 13.9 2.2C12 3.2 10.2 4.5 8.70001 6ZM12 8.39999C13.9 6.59999 16.2 5.30001 18.7 4.60001C18.1 4.00001 17.4 3.6 16.7 3.2C14.4 4.1 12.2 5.40001 10.5 7.10001C11 7.50001 11.5 7.89999 12 8.39999ZM7 20C7 20.2 7 20.4 7 20.6C6.2 20.1 5.49999 19.6 4.89999 19C4.59999 18 4.00001 17.2 3.20001 16.6C2.80001 15.8 2.49999 15 2.29999 14.1C4.99999 14.7 7 17.1 7 20ZM10.6 9.89999C8.70001 8.09999 6.39999 6.9 3.79999 6.3C3.39999 6.9 2.99999 7.5 2.79999 8.2C5.39999 8.6 7.7 9.80001 9.5 11.6C9.8 10.9 10.2 10.4 10.6 9.89999ZM2.20001 10.1C2.10001 10.7 2 11.4 2 12C2 12 2 12 2 12.1C4.3 12.4 6.40001 13.7 7.60001 15.6C7.80001 14.8 8.09999 14.1 8.39999 13.4C6.89999 11.6 4.70001 10.4 2.20001 10.1ZM11 20C11 14 15.4 9.00001 21.2 8.10001C20.9 7.40001 20.6 6.8 20.2 6.2C13.8 7.5 9 13.1 9 19.9C9 20.4 9.00001 21 9.10001 21.5C9.80001 21.7 10.5 21.8 11.2 21.9C11.1 21.3 11 20.7 11 20ZM19.1 19C19.4 18 20 17.2 20.8 16.6C21.2 15.8 21.5 15 21.7 14.1C19 14.7 16.9 17.1 16.9 20C16.9 20.2 16.9 20.4 16.9 20.6C17.8 20.2 18.5 19.6 19.1 19ZM15 20C15 15.9 18.1 12.6 22 12.1C22 12.1 22 12.1 22 12C22 11.3 21.9 10.7 21.8 10.1C16.8 10.7 13 14.9 13 20C13 20.7 13.1 21.3 13.2 21.9C13.9 21.8 14.5 21.7 15.2 21.5C15.1 21 15 20.5 15 20Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Social</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/social/feeds.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Feeds</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/social/activity.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Activty</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/social/followers.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Followers</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/social/settings.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="currentColor" />
                          <path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Blog</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion menu-active-bg">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/blog/home.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Blog Home</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/blog/post.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Blog Post</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/communication/com004.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M14 3V20H2V3C2 2.4 2.4 2 3 2H13C13.6 2 14 2.4 14 3ZM11 13V11C11 9.7 10.2 8.59995 9 8.19995V7C9 6.4 8.6 6 8 6C7.4 6 7 6.4 7 7V8.19995C5.8 8.59995 5 9.7 5 11V13C5 13.6 4.6 14 4 14V15C4 15.6 4.4 16 5 16H11C11.6 16 12 15.6 12 15V14C11.4 14 11 13.6 11 13Z" fill="currentColor" />
                          <path d="M2 20H14V21C14 21.6 13.6 22 13 22H3C2.4 22 2 21.6 2 21V20ZM9 3V2H7V3C7 3.6 7.4 4 8 4C8.6 4 9 3.6 9 3ZM6.5 16C6.5 16.8 7.2 17.5 8 17.5C8.8 17.5 9.5 16.8 9.5 16H6.5ZM21.7 12C21.7 11.4 21.3 11 20.7 11H17.6C17 11 16.6 11.4 16.6 12C16.6 12.6 17 13 17.6 13H20.7C21.2 13 21.7 12.6 21.7 12ZM17 8C16.6 8 16.2 7.80002 16.1 7.40002C15.9 6.90002 16.1 6.29998 16.6 6.09998L19.1 5C19.6 4.8 20.2 5 20.4 5.5C20.6 6 20.4 6.60005 19.9 6.80005L17.4 7.90002C17.3 8.00002 17.1 8 17 8ZM19.5 19.1C19.4 19.1 19.2 19.1 19.1 19L16.6 17.9C16.1 17.7 15.9 17.1 16.1 16.6C16.3 16.1 16.9 15.9 17.4 16.1L19.9 17.2C20.4 17.4 20.6 18 20.4 18.5C20.2 18.9 19.9 19.1 19.5 19.1Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Careers</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/careers/list.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Careers List</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/pages/careers/apply.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Careers Apply</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/art/art002.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z" fill="currentColor" />
                          <path d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Utilities</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Modals</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">General</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/general/invite-friends.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Invite Friends</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/general/view-users.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">View Users</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/general/select-users.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Select Users</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/general/upgrade-plan.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Upgrade Plan</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/general/share-earn.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Share &amp; Earn</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Forms</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/forms/new-target.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">New Target</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/forms/new-card.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">New Card</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/forms/new-address.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">New Address</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/forms/create-api-key.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Create API Key</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/forms/bidding.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Bidding</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Wizards</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-app.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Create App</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-campaign.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Create Campaign</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-account.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Create Business Acc</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/create-project.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Create Project</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/top-up-wallet.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Top Up Wallet</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/offer-a-deal.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Offer a Deal</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/two-factor-authentication.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Two Factor Auth</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                          {/*begin:Menu link*/}
                          <span className="menu-link">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Search</span>
                            <span className="menu-arrow" />
                          </span>
                          {/*end:Menu link*/}
                          {/*begin:Menu sub*/}
                          <div className="menu-sub menu-sub-accordion menu-active-bg">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/search/users.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Users</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="../../demo1/dist/utilities/modals/search/select-location.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Select Location</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Search</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/search/horizontal.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Horizontal</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/search/vertical.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Vertical</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/search/users.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Users</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/search/select-location.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Location</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Wizards</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/wizards/horizontal.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Horizontal</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/wizards/vertical.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Vertical</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/wizards/two-factor-authentication.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Two Factor Auth</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/wizards/create-app.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Create App</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/wizards/create-campaign.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Create Campaign</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/wizards/create-account.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Create Account</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/wizards/create-project.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Create Project</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/modals/wizards/top-up-wallet.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Top Up Wallet</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/utilities/wizards/offer-a-deal.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Offer a Deal</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item pt-5">
                  {/*begin:Menu content*/}
                  <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">Apps</span>
                  </div>
                  {/*end:Menu content*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor" />
                          <path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Projects</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/projects/list.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">My Projects</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/projects/project.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Project</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/projects/targets.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Targets</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/projects/budget.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Budget</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/projects/users.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Users</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/projects/files.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Files</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/projects/activity.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Activity</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/projects/settings.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                          <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                          <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">eCommerce</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Catalog</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/products.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Products</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/categories.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Categories</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-product.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add Product</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Edit Product</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-category.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add Category</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-category.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Edit Category</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Sales</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/listing.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Orders Listing</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/details.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Order Details</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/add-order.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add Order</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/sales/edit-order.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Edit Order</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Customers</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/customers/listing.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Customer Listing</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/customers/details.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Customer Details</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Reports</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Products Viewed</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/sales.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Sales</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/returns.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Returns</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/customer-orders.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Customer Orders</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/ecommerce/reports/shipping.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Shipping</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/ecommerce/settings.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs026.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M7 20.5L2 17.6V11.8L7 8.90002L12 11.8V17.6L7 20.5ZM21 20.8V18.5L19 17.3L17 18.5V20.8L19 22L21 20.8Z" fill="currentColor" />
                          <path d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Contacts</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/contacts/getting-started.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Getting Started</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/contacts/add-contact.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Add Contact</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/contacts/edit-contact.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Edit Contact</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/contacts/view-contact.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Contact</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="currentColor" />
                          <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Support Center</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/support-center/overview.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Overview</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Tickets</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/support-center/tickets/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Tickets List</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/support-center/tickets/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">View Ticket</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Tutorials</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/support-center/tutorials/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Tutorials List</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/support-center/tutorials/post.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Tutorial Post</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/support-center/faq.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">FAQ</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/support-center/licenses.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Licenses</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/support-center/contact.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Contact Us</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs029.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z" fill="currentColor" />
                          <path opacity="0.3" d="M13 6.5C13 4 15 2 17.5 2C20 2 22 4 22 6.5C22 9 20 11 17.5 11C15 11 13 9 13 6.5ZM6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22ZM17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">User Management</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Users</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/user-management/users/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Users List</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/user-management/users/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">View User</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Roles</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/user-management/roles/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Roles List</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/user-management/roles/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">View Role</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/user-management/permissions.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Permissions</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs040.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.7 8L7.49998 15.3L4.59999 20.3C3.49999 18.4 3.1 17.7 2.3 16.3C1.9 15.7 1.9 14.9 2.3 14.3L8.8 3L11.7 8Z" fill="currentColor" />
                          <path opacity="0.3" d="M11.7 8L8.79999 3H13.4C14.1 3 14.8 3.4 15.2 4L20.6 13.3H14.8L11.7 8ZM7.49997 15.2L4.59998 20.2H17.6C18.3 20.2 19 19.8 19.4 19.2C20.2 17.7 20.6 17 21.7 15.2H7.49997Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Customers</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/customers/getting-started.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Getting Started</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/customers/list.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Customer Listing</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/customers/view.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Customer Details</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/maps/map002.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.7 4.19995L4 6.30005V18.8999L8.7 16.8V19L3.1 21.5C2.6 21.7 2 21.4 2 20.8V6C2 5.4 2.3 4.89995 2.9 4.69995L8.7 2.09998V4.19995Z" fill="currentColor" />
                          <path d="M15.3 19.8L20 17.6999V5.09992L15.3 7.19989V4.99994L20.9 2.49994C21.4 2.29994 22 2.59989 22 3.19989V17.9999C22 18.5999 21.7 19.1 21.1 19.3L15.3 21.8998V19.8Z" fill="currentColor" />
                          <path opacity="0.3" d="M15.3 7.19995L20 5.09998V17.7L15.3 19.8V7.19995Z" fill="currentColor" />
                          <path opacity="0.3" d="M8.70001 4.19995V2L15.4 5V7.19995L8.70001 4.19995ZM8.70001 16.8V19L15.4 22V19.8L8.70001 16.8Z" fill="currentColor" />
                          <path opacity="0.3" d="M8.7 16.8L4 18.8999V6.30005L8.7 4.19995V16.8Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Subscription</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/subscriptions/getting-started.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Getting Started</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/subscriptions/list.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Subscription List</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/subscriptions/add.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Add Subscription</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/subscriptions/view.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Subscription</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                          <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Invoice Manager</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View Invoices</span>
                        <span className="menu-arrow" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-accordion menu-active-bg">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-1.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Invoice 1</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-2.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Invoice 2</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-3.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Invoice 3</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/invoices/create.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Create Invoice</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                          <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">File Manager</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/file-manager/folders.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Folders</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/file-manager/files.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Files</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/file-manager/blank.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Blank Directory</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/file-manager/settings.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/communication/com011.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor" />
                          <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Inbox</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/inbox/listing.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Messages</span>
                        <span className="menu-badge">
                          <span className="badge badge-success">3</span>
                        </span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/inbox/compose.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Compose</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/inbox/reply.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">View &amp; Reply</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                          <rect x={6} y={12} width={7} height={2} rx={1} fill="currentColor" />
                          <rect x={6} y={7} width={12} height={2} rx={1} fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Chat</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/chat/private.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Private Chat</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/chat/group.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Group Chat</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/apps/chat/drawer.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Drawer Chat</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="../../demo1/dist/apps/calendar.html">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                          <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                          <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Calendar</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item pt-5">
                  {/*begin:Menu content*/}
                  <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">Layouts</span>
                  </div>
                  {/*end:Menu content*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/layouts/lay008.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 7H3C2.4 7 2 6.6 2 6V3C2 2.4 2.4 2 3 2H20C20.6 2 21 2.4 21 3V6C21 6.6 20.6 7 20 7ZM7 9H3C2.4 9 2 9.4 2 10V20C2 20.6 2.4 21 3 21H7C7.6 21 8 20.6 8 20V10C8 9.4 7.6 9 7 9Z" fill="currentColor" />
                          <path opacity="0.3" d="M20 21H11C10.4 21 10 20.6 10 20V10C10 9.4 10.4 9 11 9H20C20.6 9 21 9.4 21 10V20C21 20.6 20.6 21 20 21Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Layout Options</span>
                    <span className="menu-arrow" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/layouts/light-sidebar.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Light Sidebar</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/layouts/dark-sidebar.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Dark Sidebar</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/layouts/light-header.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Light Header</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="../../demo1/dist/layouts/dark-header.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Dark Header</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="https://preview.keenthemes.com/keen/demo1/layout-builder.html">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs014.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M11.8 5.2L17.7 8.6V15.4L11.8 18.8L5.90001 15.4V8.6L11.8 5.2ZM11.8 2C11.5 2 11.2 2.1 11 2.2L3.8 6.4C3.3 6.7 3 7.3 3 7.9V16.2C3 16.8 3.3 17.4 3.8 17.7L11 21.9C11.3 22 11.5 22.1 11.8 22.1C12.1 22.1 12.4 22 12.6 21.9L19.8 17.7C20.3 17.4 20.6 16.8 20.6 16.2V7.9C20.6 7.3 20.3 6.7 19.8 6.4L12.6 2.2C12.4 2.1 12.1 2 11.8 2Z" fill="currentColor" />
                          <path d="M11.8 8.69995L8.90001 10.3V13.7L11.8 15.3L14.7 13.7V10.3L11.8 8.69995Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Layout Builder</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item pt-5">
                  {/*begin:Menu content*/}
                  <div className="menu-content">
                    <span className="menu-heading fw-bold text-uppercase fs-7">Help</span>
                  </div>
                  {/*end:Menu content*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs/base/utilities" target="_blank">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/general/gen002.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="currentColor" />
                          <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Components</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs" target="_blank">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                          <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Documentation</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div className="menu-item">
                  {/*begin:Menu link*/}
                  <a className="menu-link" href="https://preview.keenthemes.com/html/keen/docs/getting-started/changelog" target="_blank">
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/coding/cod003.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z" fill="currentColor" />
                          <path opacity="0.3" d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    <span className="menu-title">Changelog v3.0.3</span>
                  </a>
                  {/*end:Menu link*/}
                </div>
                {/*end:Menu item*/}
              </div>
              {/*end::Menu*/}
            </div>
            {/*end::Menu wrapper*/}
          </div>
          {/*end::sidebar menu*/}
          {/*begin::Footer*/}
          <div className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6" id="kt_app_sidebar_footer">
            <a href="https://preview.keenthemes.com/html/keen/docs" className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="200+ in-house components and 3rd-party plugins">
              <span className="btn-label">Docs &amp; Components</span>
              {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
              <span className="svg-icon btn-icon svg-icon-2 m-0">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor" />
                  <rect x={7} y={17} width={6} height={2} rx={1} fill="currentColor" />
                  <rect x={7} y={12} width={10} height={2} rx={1} fill="currentColor" />
                  <rect x={7} y={7} width={6} height={2} rx={1} fill="currentColor" />
                  <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </a>
          </div>
          {/*end::Footer*/}
        </div>
        {/*end::Sidebar*/}
        {/*begin::Main*/}
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
          {/*begin::Content wrapper*/}
          <div className="d-flex flex-column flex-column-fluid">
            {/*begin::Toolbar*/}
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
              {/*begin::Toolbar container*/}
              <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
                {/*begin::Page title*/}
                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                  {/*begin::Title*/}
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                    Default
                  </h1>
                  {/*end::Title*/}
                  {/*begin::Breadcrumb*/}
                  <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">
                      <a href="../../demo1/dist/index.html" className="text-muted text-hover-primary">Home</a>
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px" />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">Dashboards</li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
                {/*begin::Actions*/}
                <div className="d-flex align-items-center gap-2 gap-lg-3">
                  {/*begin::Filter menu*/}
                  <div className="d-flex">
                    <select name="campaign-type" data-control="select2" data-hide-search="true" className="form-select form-select-sm bg-body border-body w-175px">
                      <option value="Twitter" selected="selected">
                        Select Campaign
                      </option>
                      <option value="Twitter">Twitter Campaign</option>
                      <option value="Twitter">Facebook Campaign</option>
                      <option value="Twitter">Adword Campaign</option>
                      <option value="Twitter">Carbon Campaign</option>
                    </select>
                    <a href="/" className="btn btn-icon btn-sm btn-success flex-shrink-0 ms-4" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                      <span className="svg-icon svg-icon-2">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.5" x="11.364" y="20.364" width={16} height={2} rx={1} transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                          <rect x="4.36396" y="11.364" width={16} height={2} rx={1} fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                  </div>
                  {/*end::Filter menu*/}
                  {/*begin::Secondary button*/}
                  {/*end::Secondary button*/}
                  {/*begin::Primary button*/}
                  {/*end::Primary button*/}
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Toolbar container*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Content*/}
            <div id="kt_app_content" className="app-content flex-column-fluid">
              {/*begin::Content container*/}
              <div id="kt_app_content_container" className="app-container container-fluid">
                {/*begin::Row*/}
                <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                    {/*begin::Card widget 20*/}
                    <div className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10" style={{backgroundColor: '#3e97ff', backgroundImage: 'url("assets/media/svg/shapes/widget-bg-1.png")'}}>
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <div className="card-title d-flex flex-column">
                          {/*begin::Amount*/}
                          <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">69</span>
                          {/*end::Amount*/}
                          {/*begin::Subtitle*/}
                          <span className="text-white opacity-75 pt-1 fw-semibold fs-6">Active Projects in April</span>
                          {/*end::Subtitle*/}
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Card body*/}
                      <div className="card-body d-flex align-items-end pt-0">
                        {/*begin::Progress*/}
                        <div className="d-flex align-items-center flex-column mt-3 w-100">
                          <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                            <span>43 Pending</span>
                            <span>72%</span>
                          </div>
                          <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                            <div className="bg-white rounded h-8px" role="progressbar" style={{width: '72%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                        {/*end::Progress*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card widget 20*/}
                    {/*begin::List widget 26*/}
                    <div className="card card-flush h-md-50 mb-5 mb-xl-10">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title text-gray-800 fw-bold">
                          External Links
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                            <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*begin::Menu 2*/}
                          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mb-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Ticket</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Customer</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                              {/*begin::Menu item*/}
                              <a href="/" className="menu-link px-3">
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              {/*end::Menu item*/}
                              {/*begin::Menu sub*/}
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Admin Group</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Staff Group</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Member Group</a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Contact</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mt-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a className="btn btn-primary btn-sm px-4" href="/">Generate Reports</a>
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu 2*/}
                          {/*end::Menu*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-5">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <a href="/" className="text-primary fw-semibold fs-6 me-2">Avg. Client Rating</a>
                          {/*end::Section*/}
                          {/*begin::Action*/}
                          <button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr095.svg*/}
                            <span className="svg-icon svg-icon-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="currentColor" />
                                <rect x="21.9497" y="3.46448" width={13} height={2} rx={1} transform="rotate(135 21.9497 3.46448)" fill="currentColor" />
                                <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*end::Action*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <a href="/" className="text-primary fw-semibold fs-6 me-2">Instagram Followers</a>
                          {/*end::Section*/}
                          {/*begin::Action*/}
                          <button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr095.svg*/}
                            <span className="svg-icon svg-icon-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="currentColor" />
                                <rect x="21.9497" y="3.46448" width={13} height={2} rx={1} transform="rotate(135 21.9497 3.46448)" fill="currentColor" />
                                <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*end::Action*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <a href="/" className="text-primary fw-semibold fs-6 me-2">Google Ads CPC</a>
                          {/*end::Section*/}
                          {/*begin::Action*/}
                          <button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr095.svg*/}
                            <span className="svg-icon svg-icon-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z" fill="currentColor" />
                                <rect x="21.9497" y="3.46448" width={13} height={2} rx={1} transform="rotate(135 21.9497 3.46448)" fill="currentColor" />
                                <path d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*end::Action*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::LIst widget 26*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                    {/*begin::Card widget 17*/}
                    <div className="card card-flush h-md-50 mb-5 mb-xl-10">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <div className="card-title d-flex flex-column">
                          {/*begin::Info*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Currency*/}
                            <span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">$</span>
                            {/*end::Currency*/}
                            {/*begin::Amount*/}
                            <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">69,700</span>
                            {/*end::Amount*/}
                            {/*begin::Badge*/}
                            <span className="badge badge-light-success fs-base">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                              <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                  <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}2.2%</span>
                            {/*end::Badge*/}
                          </div>
                          {/*end::Info*/}
                          {/*begin::Subtitle*/}
                          <span className="text-gray-400 pt-1 fw-semibold fs-6">Projects Earnings in April</span>
                          {/*end::Subtitle*/}
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                        {/*begin::Chart*/}
                        <div className="d-flex flex-center me-5 pt-2">
                          <div id="kt_card_widget_17_chart" style={{minWidth: 70, minHeight: 70}} data-kt-size={70} data-kt-line={11} />
                        </div>
                        {/*end::Chart*/}
                        {/*begin::Labels*/}
                        <div className="d-flex flex-column content-justify-center flex-row-fluid">
                          {/*begin::Label*/}
                          <div className="d-flex fw-semibold align-items-center">
                            {/*begin::Bullet*/}
                            <div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
                            {/*end::Bullet*/}
                            {/*begin::Label*/}
                            <div className="text-gray-500 flex-grow-1 me-4">
                              Leaf CRM
                            </div>
                            {/*end::Label*/}
                            {/*begin::Stats*/}
                            <div className="fw-bolder text-gray-700 text-xxl-end">
                              $7,660
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Label*/}
                          {/*begin::Label*/}
                          <div className="d-flex fw-semibold align-items-center my-3">
                            {/*begin::Bullet*/}
                            <div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
                            {/*end::Bullet*/}
                            {/*begin::Label*/}
                            <div className="text-gray-500 flex-grow-1 me-4">
                              Mivy App
                            </div>
                            {/*end::Label*/}
                            {/*begin::Stats*/}
                            <div className="fw-bolder text-gray-700 text-xxl-end">
                              $2,820
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Label*/}
                          {/*begin::Label*/}
                          <div className="d-flex fw-semibold align-items-center">
                            {/*begin::Bullet*/}
                            <div className="bullet w-8px h-3px rounded-2 me-3" style={{backgroundColor: '#e4e6ef'}} />
                            {/*end::Bullet*/}
                            {/*begin::Label*/}
                            <div className="text-gray-500 flex-grow-1 me-4">
                              Others
                            </div>
                            {/*end::Label*/}
                            {/*begin::Stats*/}
                            <div className="fw-bolder text-gray-700 text-xxl-end">
                              $45,257
                            </div>
                            {/*end::Stats*/}
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Labels*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card widget 17*/}
                    {/*begin::List widget 25*/}
                    <div className="card card-flush h-lg-50">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title text-gray-800">Highlights</h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar d-none">
                          {/*begin::Daterangepicker(defined in src/js/layout/app.js)*/}
                          <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" className="btn btn-sm btn-light d-flex align-items-center px-4">
                            {/*begin::Display range*/}
                            <div className="text-gray-600 fw-bold">
                              Loading date range...
                            </div>
                            {/*end::Display range*/}
                            {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                            <span className="svg-icon svg-icon-1 ms-2 me-0">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                                <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                                <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::Daterangepicker*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-5">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="text-gray-700 fw-semibold fs-6 me-2">
                            Avg. Client Rating
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex align-items-senter">
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr094.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-success me-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="16.9497" y="8.46448" width={13} height={2} rx={1} transform="rotate(135 16.9497 8.46448)" fill="currentColor" />
                                <path d="M14.8284 9.97157L14.8284 15.8891C14.8284 16.4749 15.3033 16.9497 15.8891 16.9497C16.4749 16.9497 16.9497 16.4749 16.9497 15.8891L16.9497 8.05025C16.9497 7.49797 16.502 7.05025 15.9497 7.05025L8.11091 7.05025C7.52512 7.05025 7.05025 7.52513 7.05025 8.11091C7.05025 8.6967 7.52512 9.17157 8.11091 9.17157L14.0284 9.17157C14.4703 9.17157 14.8284 9.52975 14.8284 9.97157Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            {/*begin::Number*/}
                            <span className="text-gray-900 fw-bolder fs-6">7.8</span>
                            {/*end::Number*/}
                            <span className="text-gray-400 fw-bold fs-6">/10</span>
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="text-gray-700 fw-semibold fs-6 me-2">
                            Avg. Quotes
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex align-items-senter">
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr093.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-danger me-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="7.05026" y="15.5355" width={13} height={2} rx={1} transform="rotate(-45 7.05026 15.5355)" fill="currentColor" />
                                <path d="M9.17158 14.0284L9.17158 8.11091C9.17158 7.52513 8.6967 7.05025 8.11092 7.05025C7.52513 7.05025 7.05026 7.52512 7.05026 8.11091L7.05026 15.9497C7.05026 16.502 7.49797 16.9497 8.05026 16.9497L15.8891 16.9497C16.4749 16.9497 16.9498 16.4749 16.9498 15.8891C16.9498 15.3033 16.4749 14.8284 15.8891 14.8284L9.97158 14.8284C9.52975 14.8284 9.17158 14.4703 9.17158 14.0284Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            {/*begin::Number*/}
                            <span className="text-gray-900 fw-bolder fs-6">730</span>
                            {/*end::Number*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Section*/}
                          <div className="text-gray-700 fw-semibold fs-6 me-2">
                            Avg. Agent Earnings
                          </div>
                          {/*end::Section*/}
                          {/*begin::Statistics*/}
                          <div className="d-flex align-items-senter">
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr094.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-success me-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="16.9497" y="8.46448" width={13} height={2} rx={1} transform="rotate(135 16.9497 8.46448)" fill="currentColor" />
                                <path d="M14.8284 9.97157L14.8284 15.8891C14.8284 16.4749 15.3033 16.9497 15.8891 16.9497C16.4749 16.9497 16.9497 16.4749 16.9497 15.8891L16.9497 8.05025C16.9497 7.49797 16.502 7.05025 15.9497 7.05025L8.11091 7.05025C7.52512 7.05025 7.05025 7.52513 7.05025 8.11091C7.05025 8.6967 7.52512 9.17157 8.11091 9.17157L14.0284 9.17157C14.4703 9.17157 14.8284 9.52975 14.8284 9.97157Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                            {/*begin::Number*/}
                            <span className="text-gray-900 fw-bolder fs-6">$2,309</span>
                            {/*end::Number*/}
                          </div>
                          {/*end::Statistics*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::LIst widget 25*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xxl-6">
                    {/*begin::Tables widget 16*/}
                    <div className="card card-flush h-md-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-800">Authors Achievements</span>
                          <span className="text-gray-400 mt-1 fw-semibold fs-6">Avg. 69.34% Conv. Rate</span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                            <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*begin::Menu 2*/}
                          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mb-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Ticket</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Customer</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                              {/*begin::Menu item*/}
                              <a href="/" className="menu-link px-3">
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              {/*end::Menu item*/}
                              {/*begin::Menu sub*/}
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Admin Group</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Staff Group</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Member Group</a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Contact</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mt-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a className="btn btn-primary btn-sm px-4" href="/">Generate Reports</a>
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu 2*/}
                          {/*end::Menu*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-6">
                        {/*begin::Nav*/}
                        <ul className="nav nav-pills nav-pills-custom mb-3">
                          {/*begin::Item*/}
                          <li className="nav-item mb-3 me-3 me-lg-6">
                            {/*begin::Link*/}
                            <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active" id="kt_stats_widget_16_tab_link_1" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_1">
                              {/*begin::Icon*/}
                              <div className="nav-icon mb-3">
                                <i className="fonticon-drive fs-1 p-0" />
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">SaaS</span>
                              {/*end::Title*/}
                              {/*begin::Bullet*/}
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                              {/*end::Bullet*/}
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3 me-3 me-lg-6">
                            {/*begin::Link*/}
                            <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_2" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_2">
                              {/*begin::Icon*/}
                              <div className="nav-icon mb-3">
                                <i className="fonticon-bank fs-1 p-0" />
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Crypto</span>
                              {/*end::Title*/}
                              {/*begin::Bullet*/}
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                              {/*end::Bullet*/}
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3 me-3 me-lg-6">
                            {/*begin::Link*/}
                            <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_3" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_3">
                              {/*begin::Icon*/}
                              <div className="nav-icon mb-3">
                                <i className="fonticon-like-1 fs-1 p-0" />
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Social</span>
                              {/*end::Title*/}
                              {/*begin::Bullet*/}
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                              {/*end::Bullet*/}
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3 me-3 me-lg-6">
                            {/*begin::Link*/}
                            <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_4" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_4">
                              {/*begin::Icon*/}
                              <div className="nav-icon mb-3">
                                <i className="fonticon-remote-control fs-1 p-0" />
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Mobile</span>
                              {/*end::Title*/}
                              {/*begin::Bullet*/}
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                              {/*end::Bullet*/}
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3 me-3 me-lg-6">
                            {/*begin::Link*/}
                            <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_5" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_5">
                              {/*begin::Icon*/}
                              <div className="nav-icon mb-3">
                                <i className="fonticon-telegram fs-1 p-0" />
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Others</span>
                              {/*end::Title*/}
                              {/*begin::Bullet*/}
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                              {/*end::Bullet*/}
                            </a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                        </ul>
                        {/*end::Nav*/}
                        {/*begin::Tab Content*/}
                        <div className="tab-content">
                          {/*begin::Tap pane*/}
                          <div className="tab-pane fade show active" id="kt_stats_widget_16_tab_1">
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-3.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Guy Hawkins</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Haiti</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">78.34%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_1_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-2.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jane Cooper</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Monaco</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">63.83%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_1_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-9.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Poland</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">92.56%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_1_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-7.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Cody Fishers</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">63.08%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_1_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div className="tab-pane fade" id="kt_stats_widget_16_tab_2">
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-25.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Brooklyn Simmons</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Poland</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">85.23%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_2_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-24.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">74.83%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_2_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-20.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Annette Black</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Haiti</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">90.06%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_2_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-17.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Marvin McKinney</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Monaco</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">54.08%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_2_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div className="tab-pane fade" id="kt_stats_widget_16_tab_3">
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-11.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">New York</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">52.34%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_3_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-23.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Ronald Richards</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Madrid</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">77.65%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_3_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-4.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Leslie Alexander</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Pune</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">82.47%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_3_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-1.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Courtney Henry</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">67.84%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_3_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div className="tab-pane fade" id="kt_stats_widget_16_tab_4">
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-12.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Arlene McCoy</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">London</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">53.44%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_4_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-21.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Marvin McKinneyr</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Monaco</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">74.64%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_4_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-30.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">PManila</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">88.56%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_4_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-14.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Iceland</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">63.16%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_4_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div className="tab-pane fade" id="kt_stats_widget_16_tab_5">
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-6.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jane Cooper</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Haiti</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">68.54%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_5_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-10.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Kiribati</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">55.83%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_5_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-9.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Poland</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">93.46%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_5_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img src="assets/media/avatars/300-3.jpg" className alt="imgas" />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Ralph Edwards</a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">64.48%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div id="kt_table_widget_16_chart_5_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                    </td>
                                    <td className="text-end">
                                      <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                            <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*end::Table container*/}
                        </div>
                        {/*end::Tab Content*/}
                      </div>
                      {/*end: Card Body*/}
                    </div>
                    {/*end::Tables widget 16*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row gx-5 gx-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xxl-6 mb-5 mb-xl-10">
                    {/*begin::Chart widget 8*/}
                    <div className="card card-flush h-xl-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-dark">Performance Overview</span>
                          <span className="text-gray-400 mt-1 fw-semibold fs-6">Users from all channels</span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          <ul className="nav" id="kt_chart_widget_8_tabs">
                            <li className="nav-item">
                              <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1" data-bs-toggle="tab" id="kt_chart_widget_8_week_toggle" href="#kt_chart_widget_8_week_tab">Month</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1 active" data-bs-toggle="tab" id="kt_chart_widget_8_month_toggle" href="#kt_chart_widget_8_month_tab">Week</a>
                            </li>
                          </ul>
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-6">
                        {/*begin::Tab content*/}
                        <div className="tab-content">
                          {/*begin::Tab pane*/}
                          <div className="tab-pane fade" id="kt_chart_widget_8_week_tab" role="tabpanel">
                            {/*begin::Statistics*/}
                            <div className="mb-5">
                              {/*begin::Statistics*/}
                              <div className="d-flex align-items-center mb-2">
                                <span className="fs-1 fw-semibold text-gray-400 me-1 mt-n1">$</span>
                                <span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">18,89</span>
                                <span className="badge badge-light-success fs-base">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}4,8%</span>
                              </div>
                              {/*end::Statistics*/}
                              {/*begin::Description*/}
                              <span className="fs-6 fw-semibold text-gray-400">Avarage cost per interaction</span>
                              {/*end::Description*/}
                            </div>
                            {/*end::Statistics*/}
                            {/*begin::Chart*/}
                            <div id="kt_chart_widget_8_week_chart" className="ms-n5 min-h-auto" style={{height: 275}} />
                            {/*end::Chart*/}
                            {/*begin::Items*/}
                            <div className="d-flex flex-wrap pt-5">
                              {/*begin::Item*/}
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">Social Campaigns</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-danger me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-<gray-600 fs-6">Google Ads</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">Email Newsletter</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-warning me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">Courses</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-column pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-info me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">TV Campaign</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">Radio</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                            </div>
                            {/*ed::Items*/}
                          </div>
                          {/*end::Tab pane*/}
                          {/*begin::Tab pane*/}
                          <div className="tab-pane fade active show" id="kt_chart_widget_8_month_tab" role="tabpanel">
                            {/*begin::Statistics*/}
                            <div className="mb-5">
                              {/*begin::Statistics*/}
                              <div className="d-flex align-items-center mb-2">
                                <span className="fs-1 fw-semibold text-gray-400 me-1 mt-n1">$</span>
                                <span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">8,55</span>
                                <span className="badge badge-light-success fs-base">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}2.2%</span>
                              </div>
                              {/*end::Statistics*/}
                              {/*begin::Description*/}
                              <span className="fs-6 fw-semibold text-gray-400">Avarage cost per interaction</span>
                              {/*end::Description*/}
                            </div>
                            {/*end::Statistics*/}
                            {/*begin::Chart*/}
                            <div id="kt_chart_widget_8_month_chart" className="ms-n5 min-h-auto" style={{height: 275}} />
                            {/*end::Chart*/}
                            {/*begin::Items*/}
                            <div className="d-flex flex-wrap pt-5">
                              {/*begin::Item*/}
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">Social Campaigns</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-danger me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">Google Ads</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">Email Newsletter</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-warning me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">Courses</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-column pt-sm-3 pt-6">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-info me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">TV Campaign</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center">
                                  {/*begin::Bullet*/}
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  {/*end::Bullet*/}
                                  {/*begin::Label*/}
                                  <span className="fw-bold text-gray-600 fs-6">Radio</span>
                                  {/*end::Label*/}
                                </div>
                                {/*ed::Item*/}
                              </div>
                              {/*ed::Item*/}
                            </div>
                            {/*ed::Items*/}
                          </div>
                          {/*end::Tab pane*/}
                        </div>
                        {/*end::Tab content*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Chart widget 8*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-6 mb-5 mb-xl-10">
                    {/*begin::Chart widget 36*/}
                    <div className="card card-flush overflow-hidden h-xl-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-dark">Performance</span>
                          <span className="text-gray-400 mt-1 fw-semibold fs-6">1,046 Inbound Calls today</span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Daterangepicker(defined in src/js/layout/app.js)*/}
                          <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" data-kt-daterangepicker-range="today" className="btn btn-sm btn-light d-flex align-items-center px-4">
                            {/*begin::Display range*/}
                            <div className="text-gray-600 fw-bold">
                              Loading date range...
                            </div>
                            {/*end::Display range*/}
                            {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                            <span className="svg-icon svg-icon-1 ms-2 me-0">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                                <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                                <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::Daterangepicker*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Card body*/}
                      <div className="card-body d-flex align-items-end p-0">
                        {/*begin::Chart*/}
                        <div id="kt_charts_widget_36" className="min-h-auto w-100 ps-4 pe-6" style={{height: 300}} />
                        {/*end::Chart*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Chart widget 36*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row gx-5 gx-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xxl-4 mb-5 mb-xl-10">
                    {/*begin::List widget 8*/}
                    <div className="card card-flush h-lg-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-7 mb-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-800">Visits by Country</span>
                          <span className="text-gray-400 mt-1 fw-semibold fs-6">20 countries share 97% visits</span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          <a href="../../demo1/dist/apps/ecommerce/sales/listing.html" className="btn btn-sm btn-light">View All</a>
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-0">
                        {/*begin::Items*/}
                        <div className="m-0">
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img src="assets/media/flags/united-states.svg" className="me-4 w-25px" style={{borderRadius: 4}} alt="imgas" />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">United States</a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Direct link clicks</span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">9,763</span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}2.6%</span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-3" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img src="assets/media/flags/brazil.svg" className="me-4 w-25px" style={{borderRadius: 4}} alt="imgas" />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">Brasil</a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">All Social Channels</span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">4,062</span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-danger fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-danger ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                        <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}0.4%</span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-3" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img src="assets/media/flags/turkey.svg" className="me-4 w-25px" style={{borderRadius: 4}} alt="imgas" />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">Turkey</a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Mailchimp Campaigns</span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">1,680</span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}0.2%</span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-3" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img src="assets/media/flags/france.svg" className="me-4 w-25px" style={{borderRadius: 4}} alt="imgas" />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">France</a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Impact Radius visits</span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">849</span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}4.1%</span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-3" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img src="assets/media/flags/india.svg" className="me-4 w-25px" style={{borderRadius: 4}} alt="imgas" />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">India</a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Many Sources</span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">604</span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-danger fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-danger ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                        <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}8.3%</span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-3" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Flag*/}
                            <img src="assets/media/flags/sweden.svg" className="me-4 w-25px" style={{borderRadius: 4}} alt="imgas" />
                            {/*end::Flag*/}
                            {/*begin::Section*/}
                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                              {/*begin::Content*/}
                              <div className="me-5">
                                {/*begin::Title*/}
                                <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">Sweden</a>
                                {/*end::Title*/}
                                {/*begin::Desc*/}
                                <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Social Network</span>
                                {/*end::Desc*/}
                              </div>
                              {/*end::Content*/}
                              {/*begin::Info*/}
                              <div className="d-flex align-items-center">
                                {/*begin::Number*/}
                                <span className="text-gray-800 fw-bold fs-6 me-3 d-block">237</span>
                                {/*end::Number*/}
                                {/*begin::Label*/}
                                <div className="m-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}1.9%</span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Section*/}
                          </div>
                          {/*end::Item*/}
                        </div>
                        {/*end::Items*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::LIst widget 8*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xxl-4 mb-5 mb-xl-10">
                    {/*begin::List widget 9*/}
                    <div className="card card-flush h-xl-100">
                      {/*begin::Header*/}
                      <div className="card-header py-7">
                        {/*begin::Statistics*/}
                        <div className="m-0">
                          {/*begin::Heading*/}
                          <div className="d-flex align-items-center mb-2">
                            {/*begin::Title*/}
                            <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">5,037</span>
                            {/*end::Title*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light-success fs-base">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                              <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                  <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}2.2%</span>
                            {/*end::Label*/}
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Description*/}
                          <span className="fs-6 fw-semibold text-gray-400">Visits by Social Networks</span>
                          {/*end::Description*/}
                        </div>
                        {/*end::Statistics*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                            <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*begin::Menu 2*/}
                          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mb-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Ticket</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Customer</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                              {/*begin::Menu item*/}
                              <a href="/" className="menu-link px-3">
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              {/*end::Menu item*/}
                              {/*begin::Menu sub*/}
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Admin Group</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Staff Group</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Member Group</a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Contact</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mt-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a className="btn btn-primary btn-sm px-4" href="/">Generate Reports</a>
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu 2*/}
                          {/*end::Menu*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body card-body d-flex justify-content-between flex-column pt-3">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Flag*/}
                          <img src="assets/media/svg/brand-logos/dribbble-icon-1.svg" className="me-4 w-30px" style={{borderRadius: 4}} alt="imgas" />
                          {/*end::Flag*/}
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                            {/*begin::Content*/}
                            <div className="me-5">
                              {/*begin::Title*/}
                              <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">Dribbble</a>
                              {/*end::Title*/}
                              {/*begin::Desc*/}
                              <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Community</span>
                              {/*end::Desc*/}
                            </div>
                            {/*end::Content*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Number*/}
                              <span className="text-gray-800 fw-bold fs-4 me-3">579</span>
                              {/*end::Number*/}
                              {/*begin::Info*/}
                              <div className="m-0">
                                {/*begin::Label*/}
                                <span className="badge badge-light-success fs-base">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}2.6%</span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Flag*/}
                          <img src="assets/media/svg/brand-logos/linkedin-1.svg" className="me-4 w-30px" style={{borderRadius: 4}} alt="imgas" />
                          {/*end::Flag*/}
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                            {/*begin::Content*/}
                            <div className="me-5">
                              {/*begin::Title*/}
                              <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">Linked In</a>
                              {/*end::Title*/}
                              {/*begin::Desc*/}
                              <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Social Media</span>
                              {/*end::Desc*/}
                            </div>
                            {/*end::Content*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Number*/}
                              <span className="text-gray-800 fw-bold fs-4 me-3">1,088</span>
                              {/*end::Number*/}
                              {/*begin::Info*/}
                              <div className="m-0">
                                {/*begin::Label*/}
                                <span className="badge badge-light-danger fs-base">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                  <span className="svg-icon svg-icon-5 svg-icon-danger ms-n1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                      <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}0.4%</span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Flag*/}
                          <img src="assets/media/svg/brand-logos/slack-icon.svg" className="me-4 w-30px" style={{borderRadius: 4}} alt="imgas" />
                          {/*end::Flag*/}
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                            {/*begin::Content*/}
                            <div className="me-5">
                              {/*begin::Title*/}
                              <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">Slack</a>
                              {/*end::Title*/}
                              {/*begin::Desc*/}
                              <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Messanger</span>
                              {/*end::Desc*/}
                            </div>
                            {/*end::Content*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Number*/}
                              <span className="text-gray-800 fw-bold fs-4 me-3">794</span>
                              {/*end::Number*/}
                              {/*begin::Info*/}
                              <div className="m-0">
                                {/*begin::Label*/}
                                <span className="badge badge-light-success fs-base">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}0.2%</span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Flag*/}
                          <img src="assets/media/svg/brand-logos/youtube-3.svg" className="me-4 w-30px" style={{borderRadius: 4}} alt="imgas" />
                          {/*end::Flag*/}
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                            {/*begin::Content*/}
                            <div className="me-5">
                              {/*begin::Title*/}
                              <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">YouTube</a>
                              {/*end::Title*/}
                              {/*begin::Desc*/}
                              <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Video Channel</span>
                              {/*end::Desc*/}
                            </div>
                            {/*end::Content*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Number*/}
                              <span className="text-gray-800 fw-bold fs-4 me-3">978</span>
                              {/*end::Number*/}
                              {/*begin::Info*/}
                              <div className="m-0">
                                {/*begin::Label*/}
                                <span className="badge badge-light-success fs-base">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}4.1%</span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Separator*/}
                        <div className="separator separator-dashed my-3" />
                        {/*end::Separator*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack">
                          {/*begin::Flag*/}
                          <img src="assets/media/svg/brand-logos/instagram-2-1.svg" className="me-4 w-30px" style={{borderRadius: 4}} alt="imgas" />
                          {/*end::Flag*/}
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center flex-stack flex-wrap flex-row-fluid d-grid gap-2">
                            {/*begin::Content*/}
                            <div className="me-5">
                              {/*begin::Title*/}
                              <a href="/" className="text-gray-800 fw-bold text-hover-primary fs-6">Instagram</a>
                              {/*end::Title*/}
                              {/*begin::Desc*/}
                              <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Social Network</span>
                              {/*end::Desc*/}
                            </div>
                            {/*end::Content*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex align-items-center">
                              {/*begin::Number*/}
                              <span className="text-gray-800 fw-bold fs-4 me-3">1,458</span>
                              {/*end::Number*/}
                              {/*begin::Info*/}
                              <div className="m-0">
                                {/*begin::Label*/}
                                <span className="badge badge-light-success fs-base">
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                  <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}8.3%</span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Info*/}
                            </div>
                            {/*end::Wrapper*/}
                          </div>
                          {/*end::Section*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::List widget 9*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xxl-4 mb-5 mb-xl-10">
                    {/*begin::Engage widget 11*/}
                    <div className="card card-flush h-xl-100" style={{backgroundColor: '#202b46', backgroundImage: 'url("assets/media/svg/shapes/widget-bg-2.png")'}} data-bs-theme="light">
                      {/*begin::Body*/}
                      <div className="card-body d-flex flex-column justify-content-between mt-6 bgi-no-repeat bgi-size-cover bgi-position-x-center">
                        {/*begin::Wrapper*/}
                        <div className="mb-10">
                          {/*begin::Title*/}
                          <div className="fs-1 fw-bold text-white text-center mb-9">
                            <span className="me-2">Analyse Your
                              <br />
                              <span className="position-relative d-inline-block">
                                <a href="../../demo1/dist/pages/user-profile/overview.html" className="text-success opacity-75-hover">Infrastructure</a>
                                {/*begin::Separator*/}
                                <span className="position-absolute opacity-25 bottom-0 start-0 border-4 border-success border-bottom w-100" />
                                {/*end::Separator*/}
                              </span></span>with Keen
                          </div>
                          {/*end::Title*/}
                          {/*begin::Action*/}
                          <div className="text-center">
                            <a href="/" className="btn btn-sm btn-color-white bg-body bg-opacity-15 bg-hover-opacity-25 fw-bold fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Get Started</a>
                          </div>
                          {/*begin::Action*/}
                        </div>
                        {/*begin::Wrapper*/}
                        {/*begin::Illustration*/}
                        <img className="mx-auto h-150px h-lg-200px mb-11" src="assets/media/svg/illustrations/sigma/illustration-realestate.svg" alt="imgas" />
                        {/*end::Illustration*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Engage widget 11*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xl-4">
                    {/*begin::Chart Widget 35*/}
                    <div className="card card-flush h-md-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5 mb-6">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          {/*begin::Statistics*/}
                          <div className="d-flex align-items-center mb-2">
                            {/*begin::Currency*/}
                            <span className="fs-3 fw-semibold text-gray-400 align-self-start me-1">$</span>
                            {/*end::Currency*/}
                            {/*begin::Value*/}
                            <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">3,274.94</span>
                            {/*end::Value*/}
                            {/*begin::Label*/}
                            <span className="badge badge-light-success fs-base">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                              <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                  <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}9.2%</span>
                            {/*end::Label*/}
                          </div>
                          {/*end::Statistics*/}
                          {/*begin::Description*/}
                          <span className="fs-6 fw-semibold text-gray-400">Avg. Agent Earnings</span>
                          {/*end::Description*/}
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                            <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={4} fill="currentColor" />
                                <rect x={11} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                <rect x={15} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                                <rect x={7} y={11} width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*begin::Menu 2*/}
                          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mb-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Ticket</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Customer</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                              {/*begin::Menu item*/}
                              <a href="/" className="menu-link px-3">
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              {/*end::Menu item*/}
                              {/*begin::Menu sub*/}
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Admin Group</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Staff Group</a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="/" className="menu-link px-3">Member Group</a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">New Contact</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mt-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a className="btn btn-primary btn-sm px-4" href="/">Generate Reports</a>
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu 2*/}
                          {/*end::Menu*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body py-0 px-0">
                        {/*begin::Nav*/}
                        <ul className="nav d-flex justify-content-between mb-3 mx-9">
                          {/*begin::Item*/}
                          <li className="nav-item mb-3">
                            {/*begin::Link*/}
                            <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px active" data-bs-toggle="tab" id="kt_charts_widget_35_tab_1" href="#kt_charts_widget_35_tab_content_1">1d</a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3">
                            {/*begin::Link*/}
                            <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_2" href="#kt_charts_widget_35_tab_content_2">5d</a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3">
                            {/*begin::Link*/}
                            <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_3" href="#kt_charts_widget_35_tab_content_3">1m</a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3">
                            {/*begin::Link*/}
                            <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_4" href="#kt_charts_widget_35_tab_content_4">6m</a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <li className="nav-item mb-3">
                            {/*begin::Link*/}
                            <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_5" href="#kt_charts_widget_35_tab_content_5">1y</a>
                            {/*end::Link*/}
                          </li>
                          {/*end::Item*/}
                        </ul>
                        {/*end::Nav*/}
                        {/*begin::Tab Content*/}
                        <div className="tab-content mt-n6">
                          {/*begin::Tap pane*/}
                          <div className="tab-pane fade active show" id="kt_charts_widget_35_tab_content_1">
                            {/*begin::Chart*/}
                            <div id="kt_charts_widget_35_chart_1" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                            {/*end::Chart*/}
                            {/*begin::Table container*/}
                            <div className="table-responsive mx-9 mt-n6">
                              {/*begin::Table*/}
                              <table className="table align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr>
                                    <th className="min-w-100px" />
                                    <th className="min-w-100px text-end pe-0" />
                                    <th className="text-end min-w-50px" />
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-danger">-139.34</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">3:10 PM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$3,207.03</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-success">+576.24</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">3:55 PM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$3,274.94</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-success">+124.03</span>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_2">
                            {/*begin::Chart*/}
                            <div id="kt_charts_widget_35_chart_2" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                            {/*end::Chart*/}
                            {/*begin::Table container*/}
                            <div className="table-responsive mx-9 mt-n6">
                              {/*begin::Table*/}
                              <table className="table align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr>
                                    <th className="min-w-100px" />
                                    <th className="min-w-100px text-end pe-0" />
                                    <th className="text-end min-w-50px" />
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">4:30 PM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$2,345.45</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-success">+134.02</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">11:35 AM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-primary">-124.03</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">3:30 PM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$1,756.26</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-danger">+144.04</span>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_3">
                            {/*begin::Chart*/}
                            <div id="kt_charts_widget_35_chart_3" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                            {/*end::Chart*/}
                            {/*begin::Table container*/}
                            <div className="table-responsive mx-9 mt-n6">
                              {/*begin::Table*/}
                              <table className="table align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr>
                                    <th className="min-w-100px" />
                                    <th className="min-w-100px text-end pe-0" />
                                    <th className="text-end min-w-50px" />
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">3:20 AM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$3,756.26</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-primary">+185.03</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">12:30 AM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-danger">+124.03</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">4:30 PM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-success">-154.03</span>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_4">
                            {/*begin::Chart*/}
                            <div id="kt_charts_widget_35_chart_4" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                            {/*end::Chart*/}
                            {/*begin::Table container*/}
                            <div className="table-responsive mx-9 mt-n6">
                              {/*begin::Table*/}
                              <table className="table align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr>
                                    <th className="min-w-100px" />
                                    <th className="min-w-100px text-end pe-0" />
                                    <th className="text-end min-w-50px" />
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-warning">+124.03</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">5:30 AM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$1,756.26</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-info">+144.65</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">4:30 PM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$2,085.25</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-primary">+154.06</span>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                          {/*begin::Tap pane*/}
                          <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_5">
                            {/*begin::Chart*/}
                            <div id="kt_charts_widget_35_chart_5" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                            {/*end::Chart*/}
                            {/*begin::Table container*/}
                            <div className="table-responsive mx-9 mt-n6">
                              {/*begin::Table*/}
                              <table className="table align-middle gs-0 gy-4">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr>
                                    <th className="min-w-100px" />
                                    <th className="min-w-100px text-end pe-0" />
                                    <th className="text-end min-w-50px" />
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$2,045.04</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-warning">+114.03</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">3:30 AM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-primary">-124.03</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="/" className="text-gray-600 fw-bold fs-6">10:30 PM</a>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="text-gray-800 fw-bold fs-6 me-1">$1.756.26</span>
                                    </td>
                                    <td className="pe-0 text-end">
                                      <span className="fw-bold fs-6 text-info">+165.86</span>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                              {/*end::Table*/}
                            </div>
                            {/*end::Table container*/}
                          </div>
                          {/*end::Tap pane*/}
                        </div>
                        {/*end::Tab Content*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Chart Widget 35*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-8">
                    {/*begin::Table widget 14*/}
                    <div className="card card-flush h-md-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-7">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-800">Projects Stats</span>
                          <span className="text-gray-400 mt-1 fw-semibold fs-6">Updated 37 minutes ago</span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          <a href="../../demo1/dist/apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">History</a>
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-6">
                        {/*begin::Table container*/}
                        <div className="table-responsive">
                          {/*begin::Table*/}
                          <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                            {/*begin::Table head*/}
                            <thead>
                              <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                <th className="p-0 pb-3 min-w-175px text-start">
                                  ITEM
                                </th>
                                <th className="p-0 pb-3 min-w-100px text-end">
                                  BUDGET
                                </th>
                                <th className="p-0 pb-3 min-w-100px text-end">
                                  PROGRESS
                                </th>
                                <th className="p-0 pb-3 min-w-175px text-end pe-12">
                                  STATUS
                                </th>
                                <th className="p-0 pb-3 w-125px text-end pe-7">
                                  CHART
                                </th>
                                <th className="p-0 pb-3 w-50px text-end">VIEW</th>
                              </tr>
                            </thead>
                            {/*end::Table head*/}
                            {/*begin::Table body*/}
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                      <img src="assets/media/stock/600x600/img-49.jpg" className alt="imgas" />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a href="/" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Mivy App</a>
                                      <span className="text-gray-400 fw-semibold d-block fs-7">Jane Cooper</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">$32,400</span>
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}9.2%</span>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-12">
                                  <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                                </td>
                                <td className="text-end pe-0">
                                  <div id="kt_table_widget_14_chart_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                </td>
                                <td className="text-end">
                                  <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                      <img src="assets/media/stock/600x600/img-40.jpg" className alt="imgas" />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a href="/" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Avionica</a>
                                      <span className="text-gray-400 fw-semibold d-block fs-7">Esther Howard</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">$256,910</span>
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-danger fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-danger ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                        <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}0.4%</span>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-12">
                                  <span className="badge py-3 px-4 fs-7 badge-light-warning">On Hold</span>
                                </td>
                                <td className="text-end pe-0">
                                  <div id="kt_table_widget_14_chart_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                                </td>
                                <td className="text-end">
                                  <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                      <img src="assets/media/stock/600x600/img-39.jpg" className alt="imgas" />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a href="/" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Charto CRM</a>
                                      <span className="text-gray-400 fw-semibold d-block fs-7">Jenny Wilson</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">$8,220</span>
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}9.2%</span>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-12">
                                  <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                                </td>
                                <td className="text-end pe-0">
                                  <div id="kt_table_widget_14_chart_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                </td>
                                <td className="text-end">
                                  <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                      <img src="assets/media/stock/600x600/img-47.jpg" className alt="imgas" />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a href="/" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Tower Hill</a>
                                      <span className="text-gray-400 fw-semibold d-block fs-7">Cody Fisher</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">$74,000</span>
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-success fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
                                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}9.2%</span>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-12">
                                  <span className="badge py-3 px-4 fs-7 badge-light-success">Complated</span>
                                </td>
                                <td className="text-end pe-0">
                                  <div id="kt_table_widget_14_chart_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                                </td>
                                <td className="text-end">
                                  <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                      <img src="assets/media/stock/600x600/img-48.jpg" className alt="imgas" />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a href="/" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">9 Degree</a>
                                      <span className="text-gray-400 fw-semibold d-block fs-7">Savannah Nguyen</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-end pe-0">
                                  <span className="text-gray-600 fw-bold fs-6">$183,300</span>
                                </td>
                                <td className="text-end pe-0">
                                  {/*begin::Label*/}
                                  <span className="badge badge-light-danger fs-base">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr065.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-danger ms-n1">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x={11} y={18} width={13} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                        <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}0.4%</span>
                                  {/*end::Label*/}
                                </td>
                                <td className="text-end pe-12">
                                  <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                                </td>
                                <td className="text-end pe-0">
                                  <div id="kt_table_widget_14_chart_5" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                                </td>
                                <td className="text-end">
                                  <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr001.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                        <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                            {/*end::Table body*/}
                          </table>
                        </div>
                        {/*end::Table*/}
                      </div>
                      {/*end: Card Body*/}
                    </div>
                    {/*end::Table widget 14*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
          {/*begin::Footer*/}
          <div id="kt_app_footer" className="app-footer">
            {/*begin::Footer container*/}
            <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
              {/*begin::Copyright*/}
              <div className="text-dark order-2 order-md-1">
                <span className="text-muted fw-semibold me-1">2023©</span>
                <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
              </div>
              {/*end::Copyright*/}
              {/*begin::Menu*/}
              <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                <li className="menu-item">
                  <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                </li>
                <li className="menu-item">
                  <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
                </li>
                <li className="menu-item">
                  <a href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/" target="_blank" className="menu-link px-2">Purchase</a>
                </li>
              </ul>
              {/*end::Menu*/}
            </div>
            {/*end::Footer container*/}
          </div>
          {/*end::Footer*/}
        </div>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    {/*end::Page*/}
  </div>
  )
  }
  export default Header
