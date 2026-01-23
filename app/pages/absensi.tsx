import { useState } from 'react'

type Absensi = {
    nama: string
    nip: string
    divisi: string
    jabatan: string
    shift: string
    status: 'Hadir' | 'Izin' | 'Sakit' | 'Tidak Hadir'
    masuk: string
    keluar: string
}

export default function AbsensiPage() {
    const [data] = useState<Absensi[]>([
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
    ])

    const [status, setStatus] = useState<string>('')
    const [divisi, setDivisi] = useState<string>('')
    const [search, setSearch] = useState<string>('')

    const filteredData = data.filter(item =>
        (status === '' || item.status === status) &&
        (divisi === '' || item.divisi === divisi) &&
        (item.nama.toLowerCase().includes(search.toLowerCase()) || item.nip.includes(search))
    )

    const badgeColor = (status: Absensi['status']) => {
        switch (status) {
            case 'Hadir': return 'success'
            case 'Izin': return 'primary'
            case 'Sakit': return 'warning'
            case 'Tidak Hadir': return 'danger'
            default: return 'secondary'
        }
    }

    return (
        <div className="container-fluid mt-4">
            <h1 className="mb-4">Absensi Karyawan</h1>

            {/* Filter UI */}
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Cari nama atau NIP"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-control mb-2"
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-select mb-2"
                >
                    <option value="">Semua Status</option>
                    <option value="Hadir">Hadir</option>
                    <option value="Izin">Izin</option>
                    <option value="Sakit">Sakit</option>
                    <option value="Tidak Hadir">Tidak Hadir</option>
                </select>
                <select
                    value={divisi}
                    onChange={(e) => setDivisi(e.target.value)}
                    className="form-select"
                >
                    <option value="">Semua Divisi</option>
                    <option value="Divisi 2">Divisi 2</option>
                    <option value="Divisi 4">Divisi 4</option>
                </select>
            </div>

            {/* Table */}
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>NIP</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, i) => (
                        <tr key={i}>
                            <td>{row.nama}</td>
                            <td>{row.nip}</td>
                            <td>
                                <span className={`badge bg-${badgeColor(row.status)}`}>
                                    {row.status}
                                </span>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-dark">Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}