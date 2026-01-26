'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type Gender = 'Laki-laki' | 'Perempuan'

type Employee = {
  id: string
  nama: string
  email: string
  nip: string
  password: string
  jenisKelamin: Gender
  phone: string
  tglLahir: string
  tempatLahir: string
  kota: string
  alamat: string
  divisi: string
  jabatan: string
  pendidikanTerakhir: string
  photoUrl?: string
}

type EmployeeDraft = Omit<Employee, 'id'>

const DIVISI_OPTIONS = ['Divisi 1', 'Divisi 2', 'Divisi 3', 'Divisi 4']
const JABATAN_OPTIONS = ['HRD', 'Accounting', 'IT', 'Staff', 'Manager']
const PENDIDIKAN_OPTIONS = ['SMA/SMK', 'D3', 'S1', 'S2', 'S3']

const seedEmployees: Employee[] = [
  {
    id: '1',
    nama: 'Cayadi Rangga Firgantoro',
    email: 'maya83@example.net',
    nip: '59869443482894482',
    password: '••••••••',
    jenisKelamin: 'Laki-laki',
    phone: '(+62) 361 6111 1306',
    tglLahir: '26/06/2010',
    tempatLahir: 'Sawahlunto',
    kota: 'Jambi',
    alamat: 'Jr. Sudiarto No. 672, Bima 57464, Sulte',
    divisi: 'Divisi 3',
    jabatan: 'HRD',
    pendidikanTerakhir: 'S3',
  },
  {
    id: '2',
    nama: 'Drajat Marbun',
    email: 'drajat.marbun@example.net',
    nip: '34624709471647633',
    password: '••••••••',
    jenisKelamin: 'Laki-laki',
    phone: '(+62) 812 3456 7890',
    tglLahir: '12/09/1996',
    tempatLahir: 'Medan',
    kota: 'Medan',
    alamat: 'Jl. Sisingamangaraja No. 10',
    divisi: 'Divisi 2',
    jabatan: 'Staff',
    pendidikanTerakhir: 'S1',
  },
  {
    id: '3',
    nama: 'Michelle Rahmawati',
    email: 'michelle.rahmawati@example.net',
    nip: '77335716670980247',
    password: '••••••••',
    jenisKelamin: 'Perempuan',
    phone: '(+62) 811 2222 3333',
    tglLahir: '01/01/1998',
    tempatLahir: 'Bandung',
    kota: 'Bandung',
    alamat: 'Jl. Asia Afrika No. 1',
    divisi: 'Divisi 1',
    jabatan: 'Manager',
    pendidikanTerakhir: 'S2',
  },
]

function makeId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID()
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const a = parts[0]?.[0] ?? ''
  const b = parts.length > 1 ? parts[parts.length - 1][0] : parts[0]?.[1] ?? ''
  return (a + b).toUpperCase()
}

function emptyDraft(): EmployeeDraft {
  return {
    nama: '',
    email: '',
    nip: '',
    password: '',
    jenisKelamin: 'Laki-laki',
    phone: '',
    tglLahir: '',
    tempatLahir: '',
    kota: '',
    alamat: '',
    divisi: '',
    jabatan: '',
    pendidikanTerakhir: '',
    photoUrl: undefined,
  }
}

type ModalMode = 'create' | 'edit'

export default function DataTable() {
  const [rows, setRows] = useState<Employee[]>(seedEmployees)

  const [filterDivisi, setFilterDivisi] = useState('')
  const [filterJabatan, setFilterJabatan] = useState('')
  const [search, setSearch] = useState('')

  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<ModalMode>('create')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<EmployeeDraft>(emptyDraft)
  const [tempObjectUrl, setTempObjectUrl] = useState<string | null>(null)
  const initialFocusRef = useRef<HTMLInputElement | null>(null)

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase()
    return rows.filter((r) => {
      const okDivisi = filterDivisi === '' || r.divisi === filterDivisi
      const okJabatan = filterJabatan === '' || r.jabatan === filterJabatan
      const okSearch =
        q === '' ||
        r.nama.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.nip.includes(q)
      return okDivisi && okJabatan && okSearch
    })
  }, [rows, filterDivisi, filterJabatan, search])

  const openCreate = () => {
    setMode('create')
    setEditingId(null)
    setDraft(emptyDraft())
    setIsOpen(true)
  }

  const openEdit = (emp: Employee) => {
    setMode('edit')
    setEditingId(emp.id)
    setDraft({ ...emp, photoUrl: emp.photoUrl })
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const onPickPhoto = (file: File | null) => {
    if (!file) return
    // cleanup previous object url
    if (tempObjectUrl) URL.revokeObjectURL(tempObjectUrl)
    const url = URL.createObjectURL(file)
    setTempObjectUrl(url)
    setDraft((d) => ({ ...d, photoUrl: url }))
  }

  const handleSubmit = () => {
    if (mode === 'create') {
      const next: Employee = { id: makeId(), ...draft }
      setRows((prev) => [next, ...prev])
      closeModal()
      return
    }

    if (editingId) {
      setRows((prev) => prev.map((r) => (r.id === editingId ? { id: editingId, ...draft } : r)))
    }
    closeModal()
  }

  const handleDelete = (id: string) => {
    // basic confirm only (frontend)
    if (typeof window !== 'undefined' && !window.confirm('Hapus karyawan ini?')) return
    setRows((prev) => prev.filter((r) => r.id !== id))
  }

  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKeyDown)

    const t = window.setTimeout(() => initialFocusRef.current?.focus(), 0)

    return () => {
      window.clearTimeout(t)
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) return
    if (tempObjectUrl) {
      URL.revokeObjectURL(tempObjectUrl)
      setTempObjectUrl(null)
    }
  }, [isOpen, tempObjectUrl])

  return (
    <div className="section-body">
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h3 className="card-title mb-0">Data Karyawan</h3>
                <button type="button" className="btn btn-secondary" onClick={openCreate}>
                  <i className="fa fa-plus mr-2"></i> Tambah Karyawan
                </button>
              </div>

              <div className="card-body">
                <div className="row g-2 align-items-end mb-3">
                  <div className="col-md-3">
                    <label className="form-label">Filter:</label>
                    <select className="form-select" value={filterDivisi} onChange={(e) => setFilterDivisi(e.target.value)}>
                      <option value="">Pilih Divisi</option>
                      {DIVISI_OPTIONS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label">&nbsp;</label>
                    <select className="form-select" value={filterJabatan} onChange={(e) => setFilterJabatan(e.target.value)}>
                      <option value="">Pilih Jabatan</option>
                      {JABATAN_OPTIONS.map((j) => (
                        <option key={j} value={j}>
                          {j}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">&nbsp;</label>
                    <input
                      className="form-control"
                      placeholder="Cari Nama / NIP / Email"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  <div className="col-md-2">
                    <label className="form-label">&nbsp;</label>
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={() => {
                        setFilterDivisi('')
                        setFilterJabatan('')
                        setSearch('')
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-hover table-striped mb-0">
                    <thead className="table-light">
                      <tr>
                        <th style={{ width: 70 }}>No.</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>NIP</th>
                        <th>Divisi</th>
                        <th>Jabatan</th>
                        <th style={{ width: 160 }}>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRows.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="text-center text-muted py-4">
                            Data tidak ditemukan.
                          </td>
                        </tr>
                      ) : (
                        filteredRows.map((emp, idx) => (
                          <tr key={emp.id}>
                            <td>{idx + 1}</td>
                            <td>{emp.nama}</td>
                            <td>{emp.email}</td>
                            <td>{emp.nip}</td>
                            <td>{emp.divisi || '-'}</td>
                            <td>{emp.jabatan || '-'}</td>
                            <td>
                              <div className="d-flex gap-2">
                                <button type="button" className="btn btn-sm btn-secondary" onClick={() => openEdit(emp)}>
                                  Edit
                                </button>
                                <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(emp.id)}>
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="modal-backdrop fade show" onClick={closeModal}></div>
          <div className="modal fade show" style={{ display: 'block' }} role="dialog" aria-modal="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{mode === 'create' ? 'Tambah Karyawan' : 'Edit Karyawan'}</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                </div>

                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Foto</label>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          background: '#e9f0ff',
                          color: '#5b7cfa',
                          fontWeight: 600,
                          fontSize: 22,
                          overflow: 'hidden',
                        }}
                      >
                        {draft.photoUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={draft.photoUrl} alt="Foto" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          initials(draft.nama || 'CF')
                        )}
                      </div>

                      <div>
                        <input
                          id="photo-input"
                          type="file"
                          accept="image/*"
                          className="d-none"
                          onChange={(e) => onPickPhoto(e.target.files?.[0] ?? null)}
                        />
                        <label htmlFor="photo-input" className="btn btn-outline-primary mb-0">
                          Pilih Foto Baru
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Nama Karyawan</label>
                      <input
                        ref={initialFocusRef}
                        className="form-control"
                        value={draft.nama}
                        onChange={(e) => setDraft((d) => ({ ...d, nama: e.target.value }))}
                        placeholder="Nama lengkap"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        value={draft.email}
                        onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
                        placeholder="email@contoh.com"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">NIP</label>
                      <input
                        className="form-control"
                        value={draft.nip}
                        onChange={(e) => setDraft((d) => ({ ...d, nip: e.target.value }))}
                        placeholder="Nomor Induk Pegawai"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Kata Sandi</label>
                      <input
                        type="password"
                        className="form-control"
                        value={draft.password}
                        onChange={(e) => setDraft((d) => ({ ...d, password: e.target.value }))}
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Jenis Kelamin</label>
                      <div className="d-flex align-items-center gap-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender-m"
                            checked={draft.jenisKelamin === 'Laki-laki'}
                            onChange={() => setDraft((d) => ({ ...d, jenisKelamin: 'Laki-laki' }))}
                          />
                          <label className="form-check-label" htmlFor="gender-m">
                            Laki-laki
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender-f"
                            checked={draft.jenisKelamin === 'Perempuan'}
                            onChange={() => setDraft((d) => ({ ...d, jenisKelamin: 'Perempuan' }))}
                          />
                          <label className="form-check-label" htmlFor="gender-f">
                            Perempuan
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input
                        className="form-control"
                        value={draft.phone}
                        onChange={(e) => setDraft((d) => ({ ...d, phone: e.target.value }))}
                        placeholder="(+62) ..."
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Tgl. Lahir</label>
                      <input
                        className="form-control"
                        value={draft.tglLahir}
                        onChange={(e) => setDraft((d) => ({ ...d, tglLahir: e.target.value }))}
                        placeholder="dd/mm/yyyy"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Tempat Lahir</label>
                      <input
                        className="form-control"
                        value={draft.tempatLahir}
                        onChange={(e) => setDraft((d) => ({ ...d, tempatLahir: e.target.value }))}
                        placeholder="Kota lahir"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Kota</label>
                      <input
                        className="form-control"
                        value={draft.kota}
                        onChange={(e) => setDraft((d) => ({ ...d, kota: e.target.value }))}
                        placeholder="Kota domisili"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Alamat</label>
                      <input
                        className="form-control"
                        value={draft.alamat}
                        onChange={(e) => setDraft((d) => ({ ...d, alamat: e.target.value }))}
                        placeholder="Alamat lengkap"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Divisi</label>
                      <select
                        className="form-select"
                        value={draft.divisi}
                        onChange={(e) => setDraft((d) => ({ ...d, divisi: e.target.value }))}
                      >
                        <option value="">Pilih Divisi</option>
                        {DIVISI_OPTIONS.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Jabatan</label>
                      <select
                        className="form-select"
                        value={draft.jabatan}
                        onChange={(e) => setDraft((d) => ({ ...d, jabatan: e.target.value }))}
                      >
                        <option value="">Pilih Jabatan</option>
                        {JABATAN_OPTIONS.map((j) => (
                          <option key={j} value={j}>
                            {j}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Pendidikan Terakhir</label>
                      <select
                        className="form-select"
                        value={draft.pendidikanTerakhir}
                        onChange={(e) => setDraft((d) => ({ ...d, pendidikanTerakhir: e.target.value }))}
                      >
                        <option value="">Pilih Pendidikan</option>
                        {PENDIDIKAN_OPTIONS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-light" onClick={closeModal}>
                    Batal
                  </button>
                  <button type="button" className="btn btn-dark" onClick={handleSubmit}>
                    Konfirmasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}