'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

declare global {
  interface Window {
    setStyleSheet?: (url: string) => void
  }
}

type StatusType = 'Hadir' | 'Izin' | 'Sakit' | 'Tidak Hadir'

type Absensi = {
  nama: string
  nip: string
  divisi: string
  jabatan: string
  shift: string
  status: StatusType
  masuk: string
  keluar: string
}

const DATA: Absensi[] = [
  {
    nama: 'Oni Hassanah M.TI',
    nip: '82158026248149294',
    divisi: 'Divisi 4',
    jabatan: 'Accounting',
    shift: '-',
    status: 'Sakit',
    masuk: '-',
    keluar: '-',
  },
  {
    nama: 'Drajat Marbun',
    nip: '34624709471647633',
    divisi: 'Divisi 2',
    jabatan: 'Staff',
    shift: 'Shift 2',
    status: 'Hadir',
    masuk: '18:49',
    keluar: '02:01',
  },
  {
    nama: 'Michelle Rahmawati',
    nip: '77335716670980247',
    divisi: 'Divisi 2',
    jabatan: 'Manager',
    shift: '-',
    status: 'Tidak Hadir',
    masuk: '-',
    keluar: '-',
  },
  {
    nama: 'Purwanto Haryanto',
    nip: '31702596004773134',
    divisi: 'Divisi 1',
    jabatan: 'IT',
    shift: '-',
    status: 'Izin',
    masuk: '-',
    keluar: '-',
  },
]

export default function AbsensiPage() {
  useEffect(() => {
    // Hide page loader after component mounts
    const loader = document.querySelector('.page-loader-wrapper') as HTMLElement | null
    if (!loader) return
    const t = window.setTimeout(() => {
      // Make sure loader is actually gone even if core.js/jQuery doesn't run
      loader.style.display = 'none'
      loader.style.opacity = '0'
      loader.style.pointerEvents = 'none'
    }, 50)
    return () => window.clearTimeout(t)
  }, [])

  const [status, setStatus] = useState<string>('')
  const [divisi, setDivisi] = useState<string>('')
  const [search, setSearch] = useState<string>('')

  const filteredData = useMemo(
    () =>
      DATA.filter(
        (item) =>
          (status === '' || item.status === status) &&
          (divisi === '' || item.divisi === divisi) &&
          (item.nama.toLowerCase().includes(search.toLowerCase()) || item.nip.includes(search)),
      ),
    [status, divisi, search],
  )

  const summary = useMemo(() => {
    const counts: Record<StatusType, number> = {
      Hadir: 0,
      Izin: 0,
      Sakit: 0,
      'Tidak Hadir': 0,
    }
    DATA.forEach((row) => {
      counts[row.status] += 1
    })
    return counts
  }, [])

  const badgeColor = (state: StatusType) => {
    switch (state) {
      case 'Hadir':
        return 'success'
      case 'Izin':
        return 'primary'
      case 'Sakit':
        return 'warning'
      case 'Tidak Hadir':
        return 'danger'
      default:
        return 'secondary'
    }
  }

  const handleReset = () => {
    setStatus('')
    setDivisi('')
    setSearch('')
  }

  const handleSignOut = () => {
    console.log('Signing out...')
  }

  const setStyleSheet = (url: string) => {
    // Use global function if available, otherwise use local implementation
    if (typeof window !== 'undefined' && window.setStyleSheet) {
      window.setStyleSheet(url)
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
            <div role="tabpanel" className="tab-pane active" id="notification">
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
            <div role="tabpanel" className="tab-pane" id="activity">
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
                    <a href="javascript:void(0)">&quot;In-Kind Opportunity&quot;</a>
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
                  <li>
                    <Link href="/data-karyawan">
                      <i className="fa-solid fa-users"></i>
                      <span data-hover="Profil Karyawan">Profil Karyawan</span>
                    </Link>
                  </li>
                  <li className="active">
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
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* start main body part */}
        <div className="page">
          {/* Header */}
          <div id="page_top" className="section-body">
            <div className="container-fluid">
              <div className="page-header">
                <div className="left">
                  <h1 className="page-title">Absensi Karyawan</h1>
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
                      <i className="fa fa-power-off mr-2"></i> Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary cards */}
          <div className="container-fluid mt-4">
            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <div className="card shadow-sm border-0 bg-success text-white">
                  <div className="card-body text-center">
                    <h5>Hadir</h5>
                    <h2>{summary.Hadir}</h2>
                    <small>Terlambat: 0</small>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow-sm border-0 bg-primary text-white">
                  <div className="card-body text-center">
                    <h5>Izin</h5>
                    <h2>{summary.Izin}</h2>
                    <small>Izin / Cuti</small>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow-sm border-0 bg-warning text-dark">
                  <div className="card-body text-center">
                    <h5>Sakit</h5>
                    <h2>{summary.Sakit}</h2>
                    <small>Surat Dokter</small>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow-sm border-0 bg-danger text-white">
                  <div className="card-body text-center">
                    <h5>Tidak Hadir</h5>
                    <h2>{summary['Tidak Hadir']}</h2>
                    <small>Belum Absen</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="card-body">
              <div className="row mb-3 g-2">
                <div className="col-md-3">
                  <label className="form-label">Filter Status</label>
                  <select id="filterStatus" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">Semua</option>
                    <option value="Hadir">Hadir</option>
                    <option value="Izin">Izin</option>
                    <option value="Sakit">Sakit</option>
                    <option value="Tidak Hadir">Tidak Hadir</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <label className="form-label">Filter Divisi</label>
                  <select id="filterDivisi" className="form-select" value={divisi} onChange={(e) => setDivisi(e.target.value)}>
                    <option value="">Semua</option>
                    <option value="Divisi 1">Divisi 1</option>
                    <option value="Divisi 2">Divisi 2</option>
                    <option value="Divisi 4">Divisi 4</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Cari Nama / NIP</label>
                  <input
                    type="text"
                    id="searchBox"
                    className="form-control"
                    placeholder="Ketik nama atau NIP..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div className="col-md-3 d-flex align-items-end gap-2">
                  <button id="searchFilter" className="btn btn-primary w-100" type="button">
                    Cari
                  </button>
                  <button id="resetFilter" className="btn btn-secondary w-100" type="button" onClick={handleReset}>
                    Reset
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="table-responsive">
                <table id="absensiTable" className="table table-striped table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Nama</th>
                      <th>NIP</th>
                      <th>Divisi</th>
                      <th>Jabatan</th>
                      <th>Shift</th>
                      <th>Status</th>
                      <th>Masuk</th>
                      <th>Keluar</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((row, i) => (
                      <tr key={`${row.nip}-${i}`}>
                        <td>{row.nama}</td>
                        <td>{row.nip}</td>
                        <td>{row.divisi}</td>
                        <td>{row.jabatan}</td>
                        <td>{row.shift}</td>
                        <td>
                          <span className={`badge bg-${badgeColor(row.status)}`}>{row.status}</span>
                        </td>
                        <td>{row.masuk}</td>
                        <td>{row.keluar}</td>
                        <td>
                          <button className="btn btn-sm btn-dark">Detail</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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