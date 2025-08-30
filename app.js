// ====== Util ======
function $(sel, root){ return (root||document).querySelector(sel); }
function create(el, cls){ var e=document.createElement(el); if(cls) e.className=cls; return e; }

// ====== Data ======
var AESTHETIC_SERVICES = [
  { name: "Facial Premium", desc: "Deep cleansing, eksfoliasi, masker.", img: "assets/images/service-facial.jpg" },
  { name: "Chemical Peeling", desc: "Glycolic/Salicylic untuk jerawat & flek.", img: "assets/images/service-peeling.jpg" },
  { name: "Laser Rejuvenation", desc: "Tightening pori & meratakan warna kulit.", img: "assets/images/service-laser.jpg" }
];
var DENTAL_SERVICES = [
  { name: "Scaling & Polishing", desc: "Pembersihan karang gigi & stain.", img: "assets/images/service-scaling.jpg" },
  { name: "Teeth Whitening", desc: "Pemutihan gigi klinik + home kit.", img: "assets/images/service-whitening.jpg" },
  { name: "Tambal Estetik", desc: "Resin komposit warna natural.", img: "assets/images/service-filling.jpg" }
];
var PACKAGES = [
  { title: "Glow Starter", price: "Rp 799.000", items: ["Facial Premium","Skin Booster (lite)","Homecare Basic"] },
  { title: "Acne Care", price: "Rp 1.299.000", items: ["Chemical Peeling","Blue Light","Konsultasi & Obat 2 minggu"] },
  { title: "Smile Bright", price: "Rp 1.999.000", items: ["Scaling & Polishing","In-office Whitening","Desensitizer"] }
];
var DOCTORS = [
  { name: "dr. Linghe., Dipl.AAAM", role: "Dokter Aesthetic", bio: "Anti-aging, pigmentasi, jerawat.", img: "assets/images/dok1.jpg" },
  { name: "drg. Park Hoon., Sp.KG", role: "Sp. Konservasi", bio: "Restorasi estetik, saluran akar, veneer.", img: "assets/images/dok2.jpg" },
  { name: "drg. Yitian., Sp.Ort", role: "Sp. Ortodonti", bio: "Aligner transparan & behel estetik.", img: "assets/images/dok3.jpg" }
];
var TESTIMONIALS = [
  { name: "Aurel", text: "Kulit langsung calming & glow. Dokternya detail!" },
  { name: "Darren", text: "Scaling + whitening hasilnya mantap, minim ngilu." },
  { name: "Nisa", text: "Program acne 6 minggu bikin breakout terkendali." }
];
var FAQS = [
  { q: "Apakah konsultasi wajib sebelum tindakan?", a: "Ya. Dokter melakukan asesmen kulit/gigi & riwayat kesehatan." },
  { q: "Bisa booking via WhatsApp?", a: "Bisa. Isi formulir/klik tombol kontak; kami konfirmasi jadwal." },
  { q: "Ada paket bundling?", a: "Ada. Lihat bagian Paket & Harga." },
  { q: "Keamanan prosedur?", a: "Protokol steril & informed consent." }
];

// ====== Render ======
function serviceCard(s){
  var card = create('div','rounded-2xl border border-line bg-white shadow-soft overflow-hidden');
  var img = create('img','w-full aspect-[4/3] object-cover');
  img.src = s.img; img.alt = s.name;
  var body = create('div','p-4');
  var h3 = create('h3','text-base font-semibold'); h3.textContent = s.name;
  var p = create('p','mt-1 text-sm text-slate-600'); p.textContent = s.desc;
  body.appendChild(h3); body.appendChild(p);
  card.appendChild(img); card.appendChild(body);
  return card;
}

function renderServices(dataset){
  var grid = $('#serviceGrid');
  if (!grid) return;
  grid.innerHTML = '';
  for(var i=0;i<dataset.length;i++){
    grid.appendChild(serviceCard(dataset[i]));
  }
}

function renderPackages(){
  var grid = $('#packageGrid'); if (!grid) return;
  grid.innerHTML = '';
  for(var i=0;i<PACKAGES.length;i++){
    var p = PACKAGES[i];
    var card = create('div','rounded-3xl border border-line bg-white p-6 shadow-soft flex flex-col');
    var h = create('h3','text-lg font-semibold'); h.textContent = p.title;
    var price = create('div','mt-1 text-2xl font-bold text-accent'); price.textContent = p.price;
    var ul = create('ul','mt-3 space-y-1 text-sm text-slate-700');
    for(var j=0;j<p.items.length;j++){ var li=create('li'); li.textContent='• '+p.items[j]; ul.appendChild(li); }
    var a = create('a','mt-4 inline-flex rounded-2xl bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-600');
    a.href='#janji'; a.textContent='Pilih Paket';
    card.appendChild(h); card.appendChild(price); card.appendChild(ul); card.appendChild(a);
    grid.appendChild(card);
  }
}

function renderDoctors(){
  var grid = $('#doctorGrid'); if (!grid) return;
  grid.innerHTML = '';
  for(var i=0;i<DOCTORS.length;i++){
    var d = DOCTORS[i];
    var card = create('div','rounded-3xl border border-line bg-white p-6 shadow-soft');
    var img = create('img','w-full aspect-[4/3] object-cover rounded-xl');
    img.src = d.img || 'assets/images/doctor-aesthetic.jpg';
    img.alt = d.name;
    var name = create('div','mt-3 text-base font-semibold'); name.textContent = d.name;
    var role = create('div','text-sm font-semibold text-accent'); role.textContent = d.role;
    var bio  = create('p','mt-1 text-sm text-slate-600'); bio.textContent = d.bio;
    card.appendChild(img); card.appendChild(name); card.appendChild(role); card.appendChild(bio);
    grid.appendChild(card);
  }
}

function renderTestimonials(){
  var grid = $('#testiGrid'); if (!grid) return;
  grid.innerHTML = '';
  for(var i=0;i<TESTIMONIALS.length;i++){
    var t = TESTIMONIALS[i];
    var fig = create('figure','rounded-3xl border border-line bg-white p-6 shadow-soft');
    var q = create('blockquote','text-sm leading-relaxed text-slate-700'); q.textContent = '“'+t.text+'”';
    var c = create('figcaption','mt-3 text-sm font-semibold'); c.textContent = '— '+t.name;
    fig.appendChild(q); fig.appendChild(c);
    grid.appendChild(fig);
  }
}

function renderFAQ(){
  var wrap = $('#faqList'); if (!wrap) return;
  wrap.innerHTML = '';
  for(var i=0;i<FAQS.length;i++){
    var f = FAQS[i];
    var det = create('details','rounded-2xl border border-line bg-white p-4 shadow-soft');
    var sum = create('summary','cursor-pointer text-sm font-semibold'); sum.textContent = f.q;
    var p = create('p','mt-2 text-sm text-slate-600'); p.textContent = f.a;
    det.appendChild(sum); det.appendChild(p);
    wrap.appendChild(det);
  }
}

// ====== Search ======
function initSearch(dataset){
  var input = $('#serviceSearch'); if (!input) return;
  function filter(){
    var q = input.value.toLowerCase();
    if (!q) return renderServices(dataset);
    var list = []; for(var i=0;i<dataset.length;i++){
      var d = dataset[i];
      if (d.name.toLowerCase().indexOf(q)!==-1 || d.desc.toLowerCase().indexOf(q)!==-1){ list.push(d); }
    }
    renderServices(list);
  }
  input.addEventListener('input', filter);
  renderServices(dataset);
}

// ====== Form & Nav ======
function initAppointment(){
  var select = $('#serviceSelect'); if (select){
    var options = ["Konsultasi Aesthetic","Facial Premium","Chemical Peeling","Laser Rejuvenation","Botox/Filler","Acne Program","Scaling & Polishing","Teeth Whitening","Tambal Estetik","Veneer","Implan Gigi","Behel/Aligner"];
    for (var i=0;i<options.length;i++){ var o=document.createElement('option'); o.value=options[i]; o.textContent=options[i]; select.appendChild(o); }
  }
  var form = $('#apptForm'); var msg = $('#formMsg');
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var data = {
        name: form.elements.name.value,
        phone: form.elements.phone.value,
        email: form.elements.email.value,
        service: form.elements.service.value,
        date: form.elements.date.value,
        time: form.elements.time.value,
        note: form.elements.note.value
      };
      console.log('APPOINTMENT_SUBMIT', data);
      if (msg){ msg.textContent = 'Terima kasih! Tim kami akan menghubungi untuk konfirmasi jadwal.'; }
      form.reset();
    });
  }
}

function initNavbar(){
  var btn = $('#navToggle'); var menu = $('#navMenu');
  if (btn && menu){
    btn.addEventListener('click', function(){
      var hidden = menu.classList.contains('hidden');
      if (hidden){ menu.classList.remove('hidden'); } else { menu.classList.add('hidden'); }
    });
  }
}

// ====== Boot ======
(function(){
  var year = $('#year'); if (year) year.textContent = new Date().getFullYear();
  initNavbar();
  var dataset = AESTHETIC_SERVICES.concat(DENTAL_SERVICES);
  initSearch(dataset);
  renderPackages();
  renderDoctors();
  renderTestimonials();
  renderFAQ();
  initAppointment();
})();