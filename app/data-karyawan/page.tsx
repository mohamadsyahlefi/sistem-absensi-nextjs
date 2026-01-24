// app/data-karyawan/page.tsx
'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DataTable from '../components/DataTable'
import { useRouter } from 'next/navigation'

export default function DataKaryawanPage() {
  useEffect(() => {
    // Hide page loader after component mounts
    const loader = document.querySelector('.page-loader-wrapper')
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden')
      }, 1000)
    }
  }, [])

  const router = useRouter()

  const handleSignOut = () => {
    router.push('/login')
  }

  const setStyleSheet = (url: string) => {
    // Use global function if available, otherwise use local implementation
    if (typeof window !== 'undefined' && (window as any).setStyleSheet) {
      (window as any).setStyleSheet(url)
    } else {
      const stylesheet = document.getElementById('stylesheet')
      if (stylesheet) {
        stylesheet.setAttribute('href', url)
      }
    }
  }

  return (
    <>
      {/* Page Loader */}
      <div className="page-loader-wrapper">
        <div className="loader"></div>
      </div>

      {/* Start main html */}
      <div id="main_content">
        {/* Small icon top menu */}
        <div id="header_top" className="header_top">
          <div className="container">
            <div className="hleft">
              <div className="dropdown">
                <a href="javascript:void(0)" className="nav-link user_btn">
                  <Image className="avatar" src="/assets/images/user.png" alt="User" width={40} height={40} />
                </a>
                <a href="#" className="nav-link icon">
                  <i className="fa fa-search"></i>
                </a>
                <Link href="/" className="nav-link icon">
                  <i className="fa fa-home"></i>
                </Link>
                <a href="#" className="nav-link">
                  <i className="fa-solid fa-user-group"></i>
                </a>
              </div>
            </div>
            <div className="hright">
              <div className="dropdown">
                <a href="javascript:void(0)" className="nav-link icon settingbar">
                  <i className="fa fa-bell"></i>
                </a>
                <a href="javascript:void(0)" className="nav-link icon menu_toggle">
                  <i className="fa fa-navicon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Notification and Activity */}
        <div id="rightsidebar" className="right_sidebar">
          <a href="javascript:void(0)" className="p-3 settingbar float-right">
            <i className="fa fa-close"></i>
          </a>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#notification" aria-expanded="true">
                Notification
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#activity" aria-expanded="false">
                Activity
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="notification" aria-expanded="true">
              <ul className="list-unstyled feeds_widget">
                <li>
                  <div className="feeds-left">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="feeds-body">
                    <h4 className="title text-danger">Issue Fixed</h4>
                    <small>WE have fix all Design bug with Responsive</small>
                    <small className="text-muted">11:05</small>
                  </div>
                </li>
                <li>
                  <div className="feeds-left">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="feeds-body">
                    <h4 className="title">New User</h4>
                    <small>I feel great! Thanks team</small>
                    <small className="text-muted">10:45</small>
                  </div>
                </li>
                <li>
                  <div className="feeds-left">
                    <i className="fa fa-thumbs-o-up"></i>
                  </div>
                  <div className="feeds-body">
                    <h4 className="title">7 New Feedback</h4>
                    <small>It will give a smart finishing to your site</small>
                    <small className="text-muted">Today</small>
                  </div>
                </li>
                <li>
                  <div className="feeds-left">
                    <i className="fa fa-question-circle"></i>
                  </div>
                  <div className="feeds-body">
                    <h4 className="title text-warning">Server Warning</h4>
                    <small>Your connection is not private</small>
                    <small className="text-muted">10:50</small>
                  </div>
                </li>
                <li>
                  <div className="feeds-left">
                    <i className="fa fa-shopping-cart"></i>
                  </div>
                  <div className="feeds-body">
                    <h4 className="title">7 New Orders</h4>
                    <small>You received a new oder from Tina.</small>
                    <small className="text-muted">11:35</small>
                  </div>
                </li>
              </ul>
            </div>
            <div role="tabpanel" className="tab-pane" id="activity" aria-expanded="false">
              <ul className="new_timeline mt-3">
                <li>
                  <div className="bullet pink"></div>
                  <div className="time">11:00am</div>
                  <div className="desc">
                    <h3>Attendance</h3>
                    <h4>Computer Class</h4>
                  </div>
                </li>
                <li>
                  <div className="bullet pink"></div>
                  <div className="time">11:30am</div>
                  <div className="desc">
                    <h3>Added an interest</h3>
                    <h4>&quot;Volunteer Activities&quot;</h4>
                  </div>
                </li>
                <li>
                  <div className="bullet green"></div>
                  <div className="time">12:00pm</div>
                  <div className="desc">
                    <h3>Developer Team</h3>
                    <h4>Hangouts</h4>
                    <ul className="list-unstyled team-info margin-0 p-t-5">
                      <li>
                        <Image src="/assets/images/xs/avatar1.jpg" alt="Avatar" width={32} height={32} />
                      </li>
                      <li>
                        <Image src="/assets/images/xs/avatar2.jpg" alt="Avatar" width={32} height={32} />
                      </li>
                      <li>
                        <Image src="/assets/images/xs/avatar3.jpg" alt="Avatar" width={32} height={32} />
                      </li>
                      <li>
                        <Image src="/assets/images/xs/avatar4.jpg" alt="Avatar" width={32} height={32} />
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="bullet green"></div>
                  <div className="time">2:00pm</div>
                  <div className="desc">
                    <h3>Responded to need</h3>
                    <a href="#">&quot;In-Kind Opportunity&quot;</a>
                  </div>
                </li>
                <li>
                  <div className="bullet orange"></div>
                  <div className="time">1:30pm</div>
                  <div className="desc">
                    <h3>Volunteer</h3>
                    <h4>Cambridge, Massachusetts</h4>
                    <h4>Help</h4>
                  </div>
                </li>
                <li>
                  <div className="bullet green"></div>
                  <div className="time">4:00pm</div>
                  <div className="desc">
                    <h3>Added an interest</h3>
                    <h4>&quot;In-Kind Opportunity&quot;</h4>
                  </div>
                </li>
                <li>
                  <div className="bullet cyan"></div>
                  <div className="time">5:00pm</div>
                  <div className="desc">
                    <h3>Developer Team</h3>
                    <h4>Meeting</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Start Main menu */}
        <div id="left-sidebar" className="sidebar">
          <div className="d-flex justify-content-between brand_name">
            <h5 className="brand-name">EMPLOYEE INFORMATION</h5>
            <div className="theme_btn">
              <a className="theme1" data-toggle="tooltip" title="Theme Radical" href="#" onClick={(e) => { e.preventDefault(); setStyleSheet('/assets/css/theme1.css'); }}></a>
              <a className="theme2" data-toggle="tooltip" title="Theme Turmeric" href="#" onClick={(e) => { e.preventDefault(); setStyleSheet('/assets/css/theme2.css'); }}></a>
              <a className="theme3" data-toggle="tooltip" title="Theme Caribbean" href="#" onClick={(e) => { e.preventDefault(); setStyleSheet('/assets/css/theme3.css'); }}></a>
              <a className="theme4" data-toggle="tooltip" title="Theme Cascade" href="#" onClick={(e) => { e.preventDefault(); setStyleSheet('/assets/css/theme4.css'); }}></a>
            </div>
          </div>
          <div className="input-icon">
            <span className="input-icon-addon">
              <i className="fe fe-search"></i>
            </span>
            <input type="text" className="form-control" placeholder="Search..." readOnly />
          </div>
          <ul className="nav nav-tabs b-none">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#all-tab">
                <i className="fa fa-list-ul"></i> All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#app-tab">
                Elements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#setting-tab">
                Settings
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade active show" id="all-tab">
              <nav className="sidebar-nav">
                <ul className="metismenu ci-effect-1">
                  <li className="g_heading">Menu</li>
                  <li className="active">
                    <Link href="/data-karyawan">
                      <i className="fa-solid fa-users"></i>
                      <span data-hover="Profil Karyawan">Profil Karyawan</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/absensi">
                      <i className="icon-speech"></i>
                      <span data-hover="Absensi Karyawan">Absensi Karyawan</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/shift">
                      <i className="icon-notebook"></i>
                      <span data-hover="Shift Karyawan">Shift Karyawan</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gaji">
                      <i className="fa-solid fa-hand-holding-dollar"></i>
                      <span data-hover="Gaji">Perhitungan Gaji</span>
                    </Link>
                  </li> */}
                  {/* <li className="g_heading">Extra Pages</li>
                  <li>
                    <a href="javascript:void(0)" className="has-arrow arrow-b">
                      <i className="icon-lock"></i>
                      <span data-hover="Authentication">Authentication</span>
                    </a>
                    <ul>
                      <li>
                        <Link href="/login">
                          <span data-hover="Login">Login</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/register">
                          <span data-hover="Register">Register</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/forgot-password">
                          <span data-hover="Forgot">Forgot password</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/404">
                          <span data-hover="404">404 error</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/500">
                          <span data-hover="500">500 error</span>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div className="tab-pane fade" id="app-tab">
              <nav className="sidebar-nav">
                <ul className="metismenu">
                  <li className="g_heading">Components</li>
                  <li>
                    <a href="/components/typography">
                      <i className="fe fe-type"></i>
                      <span>Typography</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/colors">
                      <i className="fe fe-feather"></i>
                      <span>Colors</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/alerts">
                      <i className="fe fe-alert-triangle"></i>
                      <span>Alerts</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/avatars">
                      <i className="fe fe-user"></i>
                      <span>Avatars</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/buttons">
                      <i className="fe fe-toggle-right"></i>
                      <span>Buttons</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/breadcrumb">
                      <i className="fe fe-link-2"></i>
                      <span>Breadcrumb</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/forms">
                      <i className="fe fe-layers"></i>
                      <span>Input group</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/list-group">
                      <i className="fe fe-list"></i>
                      <span>List group</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/modal">
                      <i className="fe fe-square"></i>
                      <span>Modal</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/pagination">
                      <i className="fe fe-file-text"></i>
                      <span>Pagination</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/cards">
                      <i className="fe fe-image"></i>
                      <span>Cards</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/charts">
                      <i className="fe fe-pie-chart"></i>
                      <span>Charts</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/form-components">
                      <i className="fe fe-check-square"></i>
                      <span>Form</span>
                    </a>
                  </li>
                  <li>
                    <a href="/components/tags">
                      <i className="fe fe-tag"></i>
                      <span>Tags</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="tab-pane fade" id="setting-tab">
              <div className="mb-4 mt-3">
                <h6 className="font-14 font-weight-bold text-muted">Font Style</h6>
                <div className="custom-controls-stacked font_setting">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="font" value="font-opensans" defaultChecked />
                    <span className="custom-control-label">Open Sans Font</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="font" value="font-montserrat" />
                    <span className="custom-control-label">Montserrat Google Font</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="font" value="font-poppins" />
                    <span className="custom-control-label">Poppins Google Font</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <h6 className="font-14 font-weight-bold text-muted">General Settings</h6>
                <ul className="setting-list list-unstyled">
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Report Panel Usage</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-report" defaultChecked />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Email Redirect</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-email" />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Notifications</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-notification" defaultChecked />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Auto Updates</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-updates" />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Offline</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-offline" />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Location Permission</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-locations" />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h6 className="font-14 font-weight-bold text-muted">Theme Settings</h6>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-1">
                    <div className="themeselect">
                      <input type="radio" name="theme" id="theme1" value="theme1" />
                      <label htmlFor="theme1">
                        <Image src="/assets/images/themes/default.png" alt="img" width={24} height={24} />
                        <span>Default</span>
                      </label>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <div className="themeselect">
                      <input type="radio" name="theme" id="theme2" value="theme2" />
                      <label htmlFor="theme2">
                        <Image src="/assets/images/themes/dark.png" alt="img" width={24} height={24} />
                        <span>Dark</span>
                      </label>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <div className="themeselect">
                      <input type="radio" name="theme" id="theme3" value="theme3" />
                      <label htmlFor="theme3">
                        <Image src="/assets/images/themes/light.png" alt="img" width={24} height={24} />
                        <span>Light</span>
                      </label>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <div className="themeselect">
                      <input type="radio" name="theme" id="theme4" value="theme4" defaultChecked />
                      <label htmlFor="theme4">
                        <Image src="/assets/images/themes/rtl.png" alt="img" width={24} height={24} />
                        <span>RTL</span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Start main body part */}
        <div className="page">
          {/* start body header */}
          <div id="page_top" className="section-body">
            <div className="container-fluid">
              <div className="page-header">
                <div className="left">
                  <h1 className="page-title">Data Karyawan</h1>
                </div>
                <div className="right">
                  <div className="notification d-flex">
                    <button type="button" className="btn btn-facebook">
                      <i className="fa fa-info-circle mr-2"></i>Need Help
                    </button>
                    <button type="button" className="btn btn-facebook">
                      <i className="fa fa-file-text mr-2"></i>Data export
                    </button>
                    <button type="button" className="btn btn-facebook" onClick={handleSignOut}>
                      <i className="fa fa-power-off mr-2"></i>Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DataTable />
        </div>
      </div>
    </>
  )
}