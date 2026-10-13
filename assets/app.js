const $ = selector => document.querySelector(selector);
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = name => '<i data-lucide="'+name+'"></i>';
const refreshIcons = () => window.lucide?.createIcons();
const projects = window.portfolioProjects || [];
const cases = window.portfolioCases || [];
$('#project-list').innerHTML = projects.slice(1).map((p,i) => '<button class="project-row" data-project="'+p.id+'" aria-label="Подробнее: '+escapeHtml(p.title)+'"><span class="row-index">0'+(i+2)+'</span><span class="row-title">'+escapeHtml(p.title)+'<span class="row-kind">'+escapeHtml(p.kind)+'</span></span><span class="row-description">'+escapeHtml(p.description)+'</span><span class="row-arrow">'+icon('arrow-up-right')+'</span></button>').join('');
const dialog = $('#detail-dialog');
function openDetail(label,markup){$('#dialog-label').textContent=label;$('#dialog-content').innerHTML=markup;dialog.showModal();refreshIcons();}
function section(title,items){return '<section class="detail-section"><h3>'+title+'</h3><ul>'+items.map(x=>'<li>'+escapeHtml(x)+'</li>').join('')+'</ul></section>';}
document.addEventListener('click',e=>{
  const projectButton=e.target.closest('[data-project]');
  if(projectButton){const p=projects.find(p=>p.id===projectButton.dataset.project);if(!p)return;openDetail(p.kind,'<h2 id="dialog-title">'+escapeHtml(p.title)+'</h2><p class="dialog-description">'+escapeHtml(p.description)+'</p>'+section('Что проверял',p.scope)+section('Мой вклад',p.contribution)+'<div class="dialog-links">'+p.links.map(l=>'<a href="'+escapeHtml(l.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(l.title)+' '+icon('arrow-up-right')+'</a>').join('')+'</div>');}
  const caseButton=e.target.closest('[data-case]');
  if(caseButton){const c=cases.find(c=>c.id===caseButton.dataset.case);if(!c)return;openDetail(c.id+' / Functional / '+c.priority,'<h2 id="dialog-title">'+escapeHtml(c.title)+'</h2><p class="dialog-description">Skyrexio · '+escapeHtml(c.section)+'</p><section class="detail-section"><h3>Предусловия</h3><p>'+escapeHtml(c.preconditions)+'</p></section><section class="detail-section"><h3>Шаги</h3><p>'+escapeHtml(c.steps||'В исходном экспорте шаги не заполнены.')+'</p></section><section class="detail-section"><h3>Ожидаемый результат</h3><p>'+escapeHtml(c.expected||'Отдельное поле не заполнено в исходном экспорте.')+'</p></section><p class="document-note">Исходный тест-кейс из TestRail. Результаты выполнения в этом экспорте не указаны.</p>');}
});
$('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
let priority='all';
function renderCases(){const query=$('#case-search').value.trim().toLocaleLowerCase('ru');const visible=cases.filter(c=>(priority==='all'||c.priority===priority)&&(c.id+' '+c.title).toLocaleLowerCase('ru').includes(query));$('#case-list').innerHTML=visible.length?visible.map(c=>'<tr><td>'+escapeHtml(c.id)+'</td><td><button class="case-link" data-case="'+c.id+'">'+escapeHtml(c.title)+'</button></td><td><span class="priority '+c.priority+'">'+escapeHtml(c.priority)+'</span></td><td>'+icon('arrow-up-right')+'</td></tr>').join(''):'<tr><td colspan="4" class="empty">Ничего не найдено</td></tr>';$('#case-count').textContent='Показано '+visible.length+' из '+cases.length;refreshIcons();}
document.querySelectorAll('[data-priority]').forEach(b=>b.addEventListener('click',()=>{priority=b.dataset.priority;document.querySelectorAll('[data-priority]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderCases();}));
$('#case-search').addEventListener('input',renderCases);
renderCases();refreshIcons();
