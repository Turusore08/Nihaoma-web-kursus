document.addEventListener('DOMContentLoaded', () => {

    const names = [
        "Agus Pratama", "Andi Wijaya", "Anisa Rahma", "Ayu Lestari", "Bambang Sudarsono",
        "Budi Santoso", "Citra Kirana", "Diah Permata", "Dimas Anggara", "Eko Prasetyo",
        "Fitri Handayani", "Gilang Ramadhan", "Hendra Saputra", "Ilham Mansiz", "Indah Pertiwi",
        "Joko Susilo", "Kartika Sari", "Lestari Wahyuni", "Melati Indah", "Muhammad Rizky",
        "Naya Anindita", "Putri Rahayu", "Rani Puspita", "Rizky Ramadhan", "Siti Aminah",
        "Yoga Pratama", "Zahra Aulia"
    ];

    const namaInput = document.getElementById('nama');
    const nameSuggestions = document.getElementById('nameSuggestions');

    namaInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        nameSuggestions.innerHTML = '';
        if (value.length > 0) {
            const filteredNames = names.filter(n => n.toLowerCase().includes(value));
            filteredNames.forEach(name => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.textContent = name;
                div.addEventListener('click', () => {
                    namaInput.value = name;
                    nameSuggestions.innerHTML = '';
                });
                nameSuggestions.appendChild(div);
            });
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target !== namaInput) {
            nameSuggestions.innerHTML = '';
        }
    });


    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');


    fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(p => {
                const opt = document.createElement('option');
                opt.value = p.id;
                opt.textContent = p.name;
                provinceSelect.appendChild(opt);
            });
        });

    provinceSelect.addEventListener('change', () => {
        const provinceId = provinceSelect.value;
        citySelect.innerHTML = '<option value="">Pilih Kabupaten/Kota</option>';
        districtSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
        citySelect.disabled = !provinceId;
        districtSelect.disabled = true;

        if (provinceId) {
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`)
                .then(res => res.json())
                .then(data => {
                    data.forEach(c => {
                        const opt = document.createElement('option');
                        opt.value = c.id;
                        opt.textContent = c.name;
                        citySelect.appendChild(opt);
                    });
                });
        }
    });

    citySelect.addEventListener('change', () => {
        const cityId = citySelect.value;
        districtSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
        districtSelect.disabled = !cityId;

        if (cityId) {
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${cityId}.json`)
                .then(res => res.json())
                .then(data => {
                    data.forEach(d => {
                        const opt = document.createElement('option');
                        opt.value = d.id;
                        opt.textContent = d.name;
                        districtSelect.appendChild(opt);
                    });
                });
        }
    });

    const btnCariKodePos = document.getElementById('btnCariKodePos');
    const postalResult = document.getElementById('postalResult');
    const resKodePos = document.getElementById('resKodePos');
    const resInfo = document.getElementById('resInfo');
    const kodePosInput = document.getElementById('kodepos');

    btnCariKodePos.addEventListener('click', () => {
        const cityText = citySelect.options[citySelect.selectedIndex].text;
        const districtText = districtSelect.options[districtSelect.selectedIndex].text;

        if (!citySelect.value || !districtSelect.value) {
            alert('Silakan pilih Kota dan Kecamatan terlebih dahulu.');
            return;
        }

        btnCariKodePos.textContent = 'Mencari...';
        btnCariKodePos.disabled = true;

        fetch(`https://kodepos.now.sh/search?q=${districtText}`)
            .then(res => res.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                    const filtered = data.data.find(item => 
                        item.regency.toLowerCase().includes(cityText.toLowerCase().replace('KABUPATEN ', '').replace('KOTA ', ''))
                    ) || data.data[0];

                    resKodePos.textContent = filtered.code;
                    resInfo.textContent = `${filtered.village}, ${filtered.district}, ${filtered.regency}, ${filtered.province}`;
                    postalResult.style.display = 'block';
                    kodePosInput.value = filtered.code;
                } else {
                    resKodePos.textContent = 'Tidak ditemukan';
                    resInfo.textContent = 'Data tidak ditemukan untuk kecamatan ini.';
                    postalResult.style.display = 'block';
                    kodePosInput.value = '';
                }
            })
            .catch(err => {
                console.error(err);
                alert('Terjadi kesalahan saat mencari kode pos.');
            })
            .finally(() => {
                btnCariKodePos.textContent = 'Cari Kode Pos';
                btnCariKodePos.disabled = false;
            });
    });

    const regForm = document.getElementById('regForm');
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(regForm);
        const data = Object.fromEntries(formData.entries());
        
        console.log('Data Pendaftaran:', data);
        alert(`Terima kasih ${data.nama}! Pendaftaran Anda telah kami terima.`);
        regForm.reset();
        postalResult.style.display = 'none';
        citySelect.disabled = true;
        districtSelect.disabled = true;
    });
});
