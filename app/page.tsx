// app/page.tsx
'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
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
                    <h3>Lunch Break</h3>
                  </div>
                </li>
                <li>
                  <div className="bullet green"></div>
                  <div className="time">2:38pm</div>
                  <div className="desc">
                    <h3>Finish</h3>
                    <h4>Go to Home</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Start User detail */}
        <div className="user_div">
          <h5 className="brand-name mb-4">
            User Crush
            <a href="javascript:void(0)" className="user_btn">
              <i className="icon-close"></i>
            </a>
          </h5>
          <div className="card">
            <Image className="card-img-top" src="/assets/images/gallery/6.jpg" alt="Card image cap" width={400} height={300} />
            <div className="card-body">
              <h5 className="card-title">Daniel Kristeen</h5>
              <p className="card-text">795 Folsom Ave, Suite 600 San Francisco, 94107</p>
              <div className="row">
                <div className="col-4">
                  <h6>
                    <strong>3265</strong>
                  </h6>
                  <small>Post</small>
                </div>
                <div className="col-4">
                  <h6>
                    <strong>1358</strong>
                  </h6>
                  <small>Followers</small>
                </div>
                <div className="col-4">
                  <h6>
                    <strong>10K</strong>
                  </h6>
                  <small>Likes</small>
                </div>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">michael@example.com</li>
              <li className="list-group-item">+ 202-555-2828</li>
              <li className="list-group-item">October 22th, 1990</li>
            </ul>
            <div className="card-body">
              <a href="javascript:void(0);" className="card-link">
                View More
              </a>
              <a href="javascript:void(0);" className="card-link">
                Another link
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label className="d-block">
                  Total Income<span className="float-right">77%</span>
                </label>
                <div className="progress progress-xs">
                  <div className="progress-bar bg-blue" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: '77%' }}></div>
                </div>
              </div>
              <div className="form-group">
                <label className="d-block">
                  Total Expenses <span className="float-right">50%</span>
                </label>
                <div className="progress progress-xs">
                  <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="form-group mb-0">
                <label className="d-block">
                  Gross Profit <span className="float-right">23%</span>
                </label>
                <div className="progress progress-xs">
                  <div className="progress-bar bg-green" role="progressbar" aria-valuenow={23} aria-valuemin={0} aria-valuemax={100} style={{ width: '23%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="d-block">
              Storage <span className="float-right">77%</span>
            </label>
            <div className="progress progress-sm">
              <div className="progress-bar" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: '77%' }}></div>
            </div>
            <button type="button" className="btn btn-primary btn-block mt-3">
              Upgrade Storage
            </button>
          </div>
        </div>

        {/* Start Main menu */}
        <div id="left-sidebar" className="sidebar">
          <div className="d-flex justify-content-between brand_name">
            <h5 className="brand-name">MONITORING PEGAWAI</h5>
            <div className="theme_btn">
              <a className="theme1" data-toggle="tooltip" title="Theme Radical" href="#" onClick={(e) => { e.preventDefault(); setStyleSheet('/assets/css/theme1.css'); }}></a>
              <a className="theme2" data-toggle="tooltip" title="Theme Turmeric" href="#" onClick={(e) => { e.preventDefault(); setStyleSheet('/assets/css/theme2.css'); }}></a>
              <a className="theme3" data-toggle="tooltip" title="Theme Caribbean" href="#" onClick={(e) => { e.preventDefault(); setStyleSheet('/assets/css/theme3.css'); }}></a>
              <a className="theme4" data-toggle="tooltip" title="Theme Cascade" href="#" onClick={(e) => { e.preventDefault(); setStyleSheet('/assets/css/theme4.css'); }}></a>
            </div>
          </div>
          {/* <div className="input-icon">
            <span className="input-icon-addon">
              <i className="fe fe-search"></i>
            </span>
            <input type="text" className="form-control" placeholder="Search..." readOnly />
          </div> */}
          {/* <ul className="nav nav-tabs b-none">
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
          </ul> */}
          <div className="tab-content">
            <div className="tab-pane fade active show" id="all-tab">
              <nav className="sidebar-nav">
                <ul className="metismenu ci-effect-1">
                  <li className="g_heading">Data Karyawan</li>
                  <li>
                    <Link href="/data-karyawan">
                      <i className="fa-solid fa-users"></i>
                      <span data-hover="Profil Karyawan">Profil Karyawan</span>
                    </Link>
                  </li>
                  <li className="g_heading">Absensi Karyawan</li>
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
                    <input type="radio" className="custom-control-input" name="font" defaultChecked onChange={() => {}} />
                    <span className="custom-control-label">Open Sans Font</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="font" onChange={() => {}} />
                    <span className="custom-control-label">Montserrat Google Font</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="font" onChange={() => {}} />
                    <span className="custom-control-label">Poppins Google Font</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <h6 className="font-14 font-weight-bold text-muted">Dropdown Menu Icon</h6>
                <div className="custom-controls-stacked arrow_option">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="marrow" defaultChecked onChange={() => {}} />
                    <span className="custom-control-label">A</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="marrow" onChange={() => {}} />
                    <span className="custom-control-label">B</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="marrow" onChange={() => {}} />
                    <span className="custom-control-label">C</span>
                  </label>
                </div>
                <h6 className="font-14 font-weight-bold mt-4 text-muted">SubMenu List Icon</h6>
                <div className="custom-controls-stacked list_option">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="listicon" value="list-a" defaultChecked onChange={() => {}} />
                    <span className="custom-control-label">A</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="listicon" value="list-b" onChange={() => {}} />
                    <span className="custom-control-label">B</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" name="listicon" value="list-c" onChange={() => {}} />
                    <span className="custom-control-label">C</span>
                  </label>
                </div>
              </div>
              <div>
                <h6 className="font-14 font-weight-bold mt-4 text-muted">General Settings</h6>
                <ul className="setting-list list-unstyled mt-1 setting_switch">
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Night Mode</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-darkmode" onChange={() => {}} />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Fix Navbar top</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-fixnavbar" onChange={() => {}} />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Header Dark</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-pageheader" onChange={() => {}} />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Min Sidebar Dark</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-min_sidebar" onChange={() => {}} />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Sidebar Dark</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-sidebar" onChange={() => {}} />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Icon Color</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-iconcolor" onChange={() => {}} />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Gradient Color</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-gradient" onChange={() => {}} />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Box Shadow</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-boxshadow" onChange={() => {}} />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">RTL Support</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-rtl" onChange={() => {}} />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-switch">
                      <span className="custom-switch-description">Box Layout</span>
                      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-boxlayout" onChange={() => {}} />
                      <span className="custom-switch-indicator"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Start main body part */}
        <div className="page">
          {/* Start body header */}
          <div id="page_top" className="section-body">
            <div className="container-fluid">
              <div className="page-header">
                <div className="left">
                  <h1 className="page-title">DASHBOARD</h1>
                </div>
                <div className="right">
                  <div className="notification d-flex">
                    {/* <button type="button" className="btn btn-facebook">
                      <i className="fa fa-info-circle mr-2"></i>Need Help
                    </button>
                    <button type="button" className="btn btn-facebook">
                      <i className="fa fa-file-text mr-2"></i>Data export
                    </button> */}
                    <button type="button" className="btn btn-facebook" onClick={handleSignOut}>
                      <i className="fa fa-power-off mr-2"></i> Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="section-body">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="mb-4">
                    <h2>Welcome Admin!</h2>
                    <small>
                      Measure How Fast You&apos;re Growing Monthly Recurring Revenue. <a href="#">Learn More</a>
                    </small>
                  </div>
                </div>
              </div>

              {/* Cards Row */}
              <div className="row clearfix row-deck">
                <div className="col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">My Balance</h3>
                      <div className="card-options">
                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen">
                          <i className="fe fe-maximize"></i>
                        </a>
                        <a href="#" className="card-options-remove" data-toggle="card-remove">
                          <i className="fe fe-x"></i>
                        </a>
                        <div className="item-action dropdown ml-2">
                          <a href="#" data-toggle="dropdown">
                            <i className="fe fe-more-vertical"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-eye"></i> View Details
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-share-alt"></i> Share
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-cloud-download"></i> Download
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-copy"></i> Copy to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-folder"></i> Move to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-edit"></i> Rename
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-trash"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <span>Balance</span>
                      <h4>
                        $<span className="counter">20,508</span>
                      </h4>
                      <div id="apexspark1" className="mb-4"></div>
                      <div className="form-group">
                        <label className="d-block">
                          Bank of America{' '}
                          <span className="float-right">
                            $<span className="counter">15,025</span>
                          </span>
                        </label>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-azure" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{ width: '77%' }}></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="d-block">
                          RBC Bank{' '}
                          <span className="float-right">
                            $<span className="counter">1,843</span>
                          </span>
                        </label>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-green" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="d-block">
                          Frost Bank{' '}
                          <span className="float-right">
                            $<span className="counter">3,641</span>
                          </span>
                        </label>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-blue" role="progressbar" aria-valuenow={23} aria-valuemin={0} aria-valuemax={100} style={{ width: '23%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a href="#" className="btn btn-block btn-info btn-sm">
                        View More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Product Valuation</h3>
                      <div className="card-options">
                        <label className="custom-switch m-0">
                        <input type="checkbox" className="custom-switch-input" defaultChecked />
                          <span className="custom-switch-indicator"></span>
                        </label>
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="chart-bar" style={{ height: '350px' }}></div>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-info btn-sm w200">
                          Generate Report
                        </a>
                        <small>
                          Measure How Fast You&apos;re Growing Monthly Recurring Revenue. <a href="#">Learn More</a>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shortcuts Section */}
          <div className="section-body">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body ribbon">
                      <div className="ribbon-box green counter">5</div>
                      <a href="#" className="my_sort_cut text-muted">
                        <i className="icon-users"></i>
                        <span>Users</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body">
                      <a href="#" className="my_sort_cut text-muted">
                        <i className="icon-bubbles"></i>
                        <span>Chat App</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body ribbon">
                      <div className="ribbon-box orange counter">8</div>
                      <a href="#" className="my_sort_cut text-muted">
                        <i className="icon-calendar"></i>
                        <span>Events</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body ribbon">
                      <div className="ribbon-box cyan counter">7</div>
                      <a href="#" className="my_sort_cut text-muted">
                        <i className="icon-envelope-open"></i>
                        <span>Inbox</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body">
                      <a href="#" className="my_sort_cut text-muted">
                        <i className="icon-share"></i>
                        <span>Social</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-body">
                      <a href="#" className="my_sort_cut text-muted">
                        <i className="icon-settings"></i>
                        <span>Setting</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Statistics and Revenue */}
          <div className="section-body">
            <div className="container-fluid">
              <div className="row clearfix row-deck">
                <div className="col-lg-8 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Sales Statistics</h3>
                      <div className="card-options">
                        <form>
                          <div className="input-group">
                            <input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" readOnly/>
                            <span className="input-group-btn ml-2">
                              <button className="btn btn-sm btn-default" type="submit">
                                <span className="fe fe-search"></span>
                              </button>
                            </span>
                          </div>
                        </form>
                        <div className="item-action dropdown ml-2">
                          <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen">
                            <i className="fe fe-maximize"></i>
                          </a>
                          <a href="#" data-toggle="dropdown">
                            <i className="fe fe-more-vertical"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-eye"></i> View Details
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-share-alt"></i> Share
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-cloud-download"></i> Download
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-copy"></i> Copy to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-folder"></i> Move to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-edit"></i> Rename
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-trash"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-6">
                          <div className="card bg-none b-none">
                            <div className="card-body p-2">
                              <div className="card-value float-right">
                                <span className="statistics_chart">5,2,3,6,9,8,4,1,2,8</span>
                              </div>
                              <h3 className="mb-1">$20,504</h3>
                              <div>Total income</div>
                              <div className="mt-2">
                                <div className="progress progress-xs">
                                  <div className="progress-bar bg-primary" style={{ width: '84%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="card bg-none b-none">
                            <div className="card-body p-2">
                              <div className="card-value float-right">
                                <span className="statistics_chart">5,2,3,6,9,8,4,1,2,8</span>
                              </div>
                              <h3 className="mb-1">$20,504</h3>
                              <div>Total Expense</div>
                              <div className="mt-2">
                                <div className="progress progress-xs">
                                  <div className="progress-bar bg-danger" style={{ width: '20%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="card bg-none b-none">
                            <div className="card-body p-2">
                              <div className="card-value float-right">
                                <span className="statistics_chart">5,2,3,6,9,8,4,1,2,8</span>
                              </div>
                              <h3 className="mb-1">$20,504</h3>
                              <div>Total Growth</div>
                              <div className="mt-2">
                                <div className="progress progress-xs">
                                  <div className="progress-bar bg-green" style={{ width: '27%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="flotChart" className="flot-chart"></div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Sales Revenue</h3>
                      <div className="card-options">
                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen">
                          <i className="fe fe-maximize"></i>
                        </a>
                        <a href="#" className="card-options-remove" data-toggle="card-remove">
                          <i className="fe fe-x"></i>
                        </a>
                        <div className="item-action dropdown ml-2">
                          <a href="#" data-toggle="dropdown">
                            <i className="fe fe-more-vertical"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-eye"></i> View Details
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-share-alt"></i> Share
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-cloud-download"></i> Download
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-copy"></i> Copy to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-folder"></i> Move to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-edit"></i> Rename
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-trash"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <div className="mt-4">
                        <input type="text" className="knob" defaultValue="34" data-width="147" data-height="147" data-thickness="0.07" data-bgcolor="#3f454a" data-fgcolor="#395bb6" />
                      </div>
                      <h3 className="mb-0 mt-3 font300">
                        24,301 <span className="text-green font-15">+3.7%</span>
                      </h3>
                      <small>
                        Lorem Ipsum is simply dummy text <br /> <a href="#">Read more</a>
                      </small>
                      <div className="mt-4">
                        <span className="chart_3">2,5,8,3,6,9,4,5,6,3</span>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a href="#" className="btn btn-block btn-success btn-sm">
                        Send Report
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue By Location and Order Status */}
              <div className="row clearfix row-deck">
                <div className="col-lg-8 col-md-12">
                  <div className="card visitors-map">
                    <div className="card-header">
                      <h3 className="card-title">Revenue By Location</h3>
                      <div className="card-options">
                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen">
                          <i className="fe fe-maximize"></i>
                        </a>
                        <a href="#" className="card-options-remove" data-toggle="card-remove">
                          <i className="fe fe-x"></i>
                        </a>
                        <div className="item-action dropdown ml-2">
                          <a href="#" data-toggle="dropdown">
                            <i className="fe fe-more-vertical"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-eye"></i> View Details
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-share-alt"></i> Share
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-cloud-download"></i> Download
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-copy"></i> Copy to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-folder"></i> Move to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-edit"></i> Rename
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-trash"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row clearfix">
                        <div className="col-lg-7 col-md-12">
                          <div id="world-map-markers" style={{ height: '300px' }}></div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                          <span>
                            Measure How Fast You&apos;re Growing Monthly Recurring Revenue. <a href="#">Learn More</a>
                          </span>
                          <ul className="list-group mt-3">
                            <li className="list-group-item">
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>35%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">America</small>
                                </div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-azure" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>25%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">India</small>
                                </div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-green" role="progressbar" style={{ width: '25%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>15%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">australia</small>
                                </div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-orange" role="progressbar" style={{ width: '15%' }} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>20%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">UK</small>
                                </div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-indigo" role="progressbar" style={{ width: '20%' }} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>11%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">UAE</small>
                                </div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-pink" role="progressbar" style={{ width: '11%' }} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Order status</h3>
                      <div className="card-options">
                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen">
                          <i className="fe fe-maximize"></i>
                        </a>
                        <a href="#" className="card-options-remove" data-toggle="card-remove">
                          <i className="fe fe-x"></i>
                        </a>
                        <div className="item-action dropdown ml-2">
                          <a href="#" data-toggle="dropdown">
                            <i className="fe fe-more-vertical"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-eye"></i> View Details
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-share-alt"></i> Share
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-cloud-download"></i> Download
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-copy"></i> Copy to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-folder"></i> Move to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-edit"></i> Rename
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-trash"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <div id="Order_status" style={{ height: '268px' }}></div>
                    </div>
                    <div className="card-footer text-center">
                      <div className="row clearfix">
                        <div className="col-6">
                          <h6 className="mb-0">$3,095</h6>
                          <small className="text-muted">Last Month</small>
                        </div>
                        <div className="col-6">
                          <h6 className="mb-0">$2,763</h6>
                          <small className="text-muted">This Month</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Summary Table */}
          <div className="section-body">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Product Summary</h3>
                      <div className="card-options">
                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen">
                          <i className="fe fe-maximize"></i>
                        </a>
                        <a href="#" className="card-options-remove" data-toggle="card-remove">
                          <i className="fe fe-x"></i>
                        </a>
                        <div className="item-action dropdown ml-2">
                          <a href="#" data-toggle="dropdown">
                            <i className="fe fe-more-vertical"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-eye"></i> View Details
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-share-alt"></i> Share
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-cloud-download"></i> Download
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-copy"></i> Copy to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-folder"></i> Move to
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-edit"></i> Rename
                            </a>
                            <a href="#" className="dropdown-item">
                              <i className="dropdown-icon fa fa-trash"></i> Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-striped mb-0 text-nowrap">
                          <thead>
                            <tr>
                              <th>#No</th>
                              <th>Client Name</th>
                              <th>Product ID</th>
                              <th>Product</th>
                              <th>Product Cost</th>
                              <th>Payment Mode</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>#01</td>
                              <td>Sean Black</td>
                              <td>PRO12345</td>
                              <td>Mi LED Smart TV 4A 80</td>
                              <td>$14,500</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="badge badge-success">Delivered</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#02</td>
                              <td>Evan Rees</td>
                              <td>PRO8765</td>
                              <td>Thomson R9 122cm (48 inch) Full HD LED TV</td>
                              <td>$30,000</td>
                              <td>Cash on delivered</td>
                              <td>
                                <span className="badge badge-primary">Add Cart</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#03</td>
                              <td>David Wallace</td>
                              <td>PRO54321</td>
                              <td>Vu 80cm (32 inch) HD Ready LED TV</td>
                              <td>$13,200</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="badge badge-warning">Pending</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#04</td>
                              <td>Julia Bower</td>
                              <td>PRO97654</td>
                              <td>Micromax 81cm (32 inch) HD Ready LED TV</td>
                              <td>$15,100</td>
                              <td>Cash on delivered</td>
                              <td>
                                <span className="badge badge-secondary">Delivering</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#05</td>
                              <td>Kevin James</td>
                              <td>PRO4532</td>
                              <td>HP 200 Mouse &amp; Wireless Laptop Keyboard</td>
                              <td>$5,987</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="badge badge-danger">Shipped</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#06</td>
                              <td>Theresa Wright</td>
                              <td>PRO6789</td>
                              <td>Digisol DG-HR3400 Router</td>
                              <td>$11,987</td>
                              <td>Cash on delivered</td>
                              <td>
                                <span className="badge badge-success">Delivering</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#07</td>
                              <td>Sebastian Black</td>
                              <td>PRO4567</td>
                              <td>Dell WM118 Wireless Optical Mouse</td>
                              <td>$4,700</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="badge badge-secondary">Add to Cart</span>
                              </td>
                            </tr>
                            <tr>
                              <td>#08</td>
                              <td>Kevin Glover</td>
                              <td>PRO32156</td>
                              <td>Dell 16 inch Laptop Backpack</td>
                              <td>$678</td>
                              <td>Cash On delivered</td>
                              <td>
                                <span className="badge badge-cyan">Delivered</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="section-body">
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    Copyright © 2019 <a href="https://themeforest.net/user/puffintheme">PuffinTheme</a>.
                  </div>
                  <div className="col-md-6 col-sm-12 text-md-right">
                    <ul className="list-inline mb-0">
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}