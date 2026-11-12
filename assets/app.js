let activeCategory = "All";
const categories = ["All", ...new Set(DOCS.map(d=>d.category))];
const app = document.getElementById("app");
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function render(){
 const q=(document.getElementById("q")?.value||"").trim().toLowerCase();
 const filtered=DOCS.filter(d=>(activeCategory==="All"||d.category===activeCategory) &&
   (!q || (d.title+" "+d.category+" "+d.filename).toLowerCase().includes(q)));
 app.innerHTML=`
 <header><div class="head"><div class="brand">MEYDAN FZ<small>EMPLOYEE KNOWLEDGE HUB</small></div><nav><a href="#library">Document Library</a><a href="#guidance">Using this hub</a></nav></div></header>
 <main>
  <section class="hero">
   <div class="eyebrow">Employee process reference centre</div>
   <h1>Meydan FZ Knowledge Hub</h1>
   <p>A central library of employee process guides, visa procedures, company formation references, immigration card instructions, FAQs and email templates supplied in the knowledge-base ZIP.</p>
   <div class="search"><input id="q" type="search" placeholder="Search documents, topics or categories..." value="${esc(q)}"><button id="searchBtn">Search</button></div>
   <div class="stats"><span>${DOCS.length} source documents</span><span>${categories.length-1} knowledge areas</span><span>PDF reference library</span></div>
   <div class="results">${filtered.length} matching documents</div>
  </section>
  <section id="library">
   <div class="rowhead"><div><h2>Browse the knowledge library</h2><div class="muted">Choose a category or open an individual process document.</div></div></div>
   <div class="filters">${categories.map(c=>`<button class="filter ${activeCategory===c?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}</div>
   <div class="grid">${filtered.map(d=>`<article class="card"><div class="tag">${esc(d.category)}</div><h3>${esc(d.title)}</h3><p>${esc(d.filename)}</p><div class="actions"><a href="${encodeURI(d.file)}" target="_blank" rel="noopener">Open PDF ↗</a><a href="${encodeURI(d.file)}" download>Download ↓</a></div></article>`).join("")}</div>
   ${filtered.length===0?'<div class="empty">No matching documents. Try a different keyword or category.</div>':''}
  </section>
  <section id="guidance" class="notice"><strong>Employee use and content control:</strong> These documents are the source files supplied for this knowledge hub. Check the document itself for its latest revision and confirm current fees, processing times, authority requirements and internal routing with the authorised process owner before advising a client. Do not upload client-specific passports, KYC records, credentials or confidential case files to a public repository.</section>
 </main><footer>Meydan FZ Employee Knowledge Hub · Built from supplied reference documents · Internal use subject to company approval</footer>`;
 document.getElementById("q").addEventListener("input",()=>{const val=document.getElementById("q").value;const pos=document.getElementById("q").selectionStart;render();const inp=document.getElementById("q");inp.focus();inp.setSelectionRange(pos,pos);});
 document.getElementById("searchBtn").addEventListener("click",render);
 document.querySelectorAll("[data-cat]").forEach(b=>b.addEventListener("click",()=>{activeCategory=b.dataset.cat;render();}));
}
render();
