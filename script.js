const SKILLS = [
  {icon:'⚙️', name:'C / C++',          level:'Proficient',    pct:80, desc:'Systems programming & DSA'},
  {icon:'🐍', name:'Python',            level:'Proficient',    pct:82, desc:'Scripting, automation & data'},
  {icon:'🌿', name:'Django',            level:'Intermediate',  pct:70, desc:'Full-stack Python web framework'},
  {icon:'🗄️', name:'SQL',               level:'Proficient',    pct:78, desc:'Relational queries & schema design'},
  {icon:'🍃', name:'MongoDB',           level:'Intermediate',  pct:68, desc:'NoSQL document database'},
  {icon:'🐬', name:'MySQL',             level:'Intermediate',  pct:72, desc:'Relational DB management'},
  {icon:'🔢', name:'NumPy',             level:'Intermediate',  pct:70, desc:'Numerical computing with Python'},
  {icon:'🐼', name:'Pandas',            level:'Intermediate',  pct:68, desc:'Data manipulation & analysis'},
  {icon:'💻', name:'Operating System',  level:'Proficient',    pct:75, desc:'Process, memory & file systems'},
  {icon:'🏗️', name:'System Design',     level:'Intermediate',  pct:65, desc:'Scalable architecture patterns'},
  {icon:'🌐', name:'Computer Network',  level:'Proficient',    pct:74, desc:'TCP/IP, HTTP & network protocols'},
  {icon:'📚', name:'DBMS',              level:'Proficient',    pct:76, desc:'Database management & theory'},
  {icon:'🎨', name:'HTML / CSS',        level:'Advanced',      pct:92, desc:'Semantic, responsive layouts'},
  {icon:'⚡', name:'JavaScript',        level:'Proficient',    pct:85, desc:'ES6+, async/await & DOM mastery'},
  {icon:'⚛️', name:'React.js',          level:'Intermediate',  pct:68, desc:'Component-based UI development'},
  {icon:'☁️', name:'AWS',               level:'Beginner',      pct:45, desc:'Cloud services & deployment'},
];

const PROJECTS = [
  {
    num:'01',
    title:'Coding Protocol',
    desc:'A smart internship & placement platform with separate student and admin dashboards. Includes application forms, admin control panel, and role-based access.',
    tags:['HTML','CSS','JavaScript','Firebase'],
    live:'https://coding-protocol-edf72.web.app/',
    admin:'https://coding-protocol-edf72.web.app/admin-login.html',
    github:'https://github.com/shejolesumesh/coding-protocol',
    impact:'Full dual-dashboard system with role-based authentication',
    problem:'Students lacked a centralized platform to discover and apply for internships efficiently.',
    solution:'Built a Firebase-backed web app with student-facing application flow and a complete admin control panel with real-time data management.',
    results:['Dual dashboard architecture (student + admin)','Role-based access control via Firebase Auth','Real-time data with Firestore','Deployed on Firebase Hosting'],
  },
  {
    num:'02',
    title:'Deep Sea Portfolio',
    desc:'This very website — a cinematic scroll-driven 3D experience built with Three.js, GSAP ScrollTrigger, and custom GLSL shaders.',
    tags:['Three.js','GSAP','GLSL','WebGL'],
    live:'#',
    github:'#',
    impact:'Award-quality interactive WebGL portfolio experience',
    problem:'Standard portfolios fail to communicate deep technical expertise through design alone.',
    solution:'Designed a scroll-driven ocean descent metaphor with custom GLSL wave shaders, bioluminescent particles, and procedural 3D creatures.',
    results:['Custom vertex & fragment shaders','GSAP scroll-driven camera path','Procedural 3D creature system','60fps particle animations'],
  },
];

const TIMELINE = [
  {year:'2025 — Present',role:'B.Tech CSBS Student',org:'Computer Science & Business Systems',desc:'Studying the intersection of technology and business — building real-world projects alongside coursework.',badge:'Current'},
  {year:'2025',role:'Coding Protocol',org:'Personal Project — Lead Developer',desc:'Designed and built a complete internship management platform from scratch, handling architecture, authentication, and UI/UX.'},
  {year:'2025',role:'WebGL & 3D Graphics',org:'Self-Directed Learning',desc:'Deep-diving into Three.js, GLSL shaders, and GPU programming through hands-on projects and open-source exploration.',badge:'Ongoing'},
  {year:'2025',role:'Frontend Development',org:'Web Projects',desc:'Mastered HTML, CSS, JavaScript and began building progressively more complex web applications with Firebase backends.'},
  {year:'2025',role:'First Code',org:'Hello, World.',desc:'Started the journey. Wrote first lines of HTML and immediately knew this was it.',badge:'Origin'},
];

const CONTACTS = [
  {icon:'📧',label:'Email',val:'shejolesumesh@gmail.com',href:'mailto:shejolesumesh@gmail.com'},
  {icon:'📞',label:'Phone',val:'+91 88275 03016',href:'tel:8827503016'},
  {icon:'💻',label:'GitHub',val:'github.com/shejolesumesh',href:'https://github.com/shejolesumesh',target:'_blank'},
  {icon:'🔗',label:'LinkedIn',val:'linkedin.com/in/sumit-shejole',href:'https://www.linkedin.com/in/sumit-shejole',target:'_blank'},
  {icon:'💬',label:'WhatsApp',val:'Chat with me',href:'https://wa.me/8827503016',target:'_blank'},
];


let loadPct=0;
const loaderBar=document.getElementById('loader-bar');
const loaderPct=document.getElementById('loader-pct');
function tickLoader(){
  loadPct+=Math.random()*8+2;
  if(loadPct>100)loadPct=100;
  loaderBar.style.width=loadPct+'%';
  loaderPct.textContent=Math.round(loadPct)+'%';
  if(loadPct<100){setTimeout(tickLoader,80);}
  else{setTimeout(()=>document.getElementById('loader').classList.add('done'),400);}
}
setTimeout(tickLoader,300);

/* ════════════════════════════════════════════════════════════
   DOM — BUILD SKILLS
════════════════════════════════════════════════════════════ */
const skillsGrid=document.getElementById('skills-grid');
SKILLS.forEach(s=>{
  skillsGrid.innerHTML+=`
  <div class="skill-node" data-pct="${s.pct}">
    <div class="skill-tooltip">${s.desc}</div>
    <div class="skill-icon">${s.icon}</div>
    <div class="skill-name">${s.name}</div>
    <div class="skill-level">${s.level}</div>
    <div class="skill-bar-wrap"><div class="skill-bar" style="width:0%"></div></div>
  </div>`;
});

/* ════════════════════════════════════════════════════════════
   DOM — BUILD PROJECTS
════════════════════════════════════════════════════════════ */
const projCards=document.getElementById('project-cards');
PROJECTS.forEach((p,i)=>{
  projCards.innerHTML+=`
  <div class="proj-card" data-idx="${i}">
    <div class="proj-num">${p.num}</div>
    <div class="proj-title">${p.title}</div>
    <div class="proj-desc">${p.desc}</div>
    <div class="proj-tags">${p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div>
    <div class="proj-links">
      <a href="${p.live}" target="_blank" class="proj-link primary" onclick="event.stopPropagation()">Live Demo</a>
      <a href="${p.github}" target="_blank" class="proj-link" onclick="event.stopPropagation()">GitHub</a>
    </div>
    <div class="proj-impact">↗ ${p.impact}</div>
  </div>`;
});
document.querySelectorAll('.proj-card').forEach(card=>{
  card.addEventListener('click',()=>openModal(parseInt(card.dataset.idx)));
});

/* ════════════════════════════════════════════════════════════
   DOM — BUILD TIMELINE
════════════════════════════════════════════════════════════ */
const tl_el=document.getElementById('timeline');
TIMELINE.forEach(t=>{
  tl_el.innerHTML+=`
  <div class="tl-item">
    <div class="tl-dot"></div>
    <div class="tl-content">
      <div class="tl-year">${t.year}</div>
      <div class="tl-role">${t.role}</div>
      <div class="tl-org">${t.org}</div>
      <div class="tl-desc">${t.desc}</div>
      ${t.badge?`<div class="tl-badge">${t.badge}</div>`:''}
    </div>
  </div>`;
});

/* ════════════════════════════════════════════════════════════
   DOM — BUILD CONTACTS
════════════════════════════════════════════════════════════ */
const cgrid=document.getElementById('contact-grid');
CONTACTS.forEach(c=>{
  cgrid.innerHTML+=`
  <a href="${c.href}" ${c.target?`target="${c.target}"`:''}  class="contact-card">
    <div class="cc-icon">${c.icon}</div>
    <div>
      <div class="cc-label">${c.label}</div>
      <div class="cc-val">${c.val}</div>
    </div>
  </a>`;
});

/* ════════════════════════════════════════════════════════════
   MODAL
════════════════════════════════════════════════════════════ */
const modalOverlay=document.getElementById('modal-overlay');
const modalContent=document.getElementById('modal-content');
document.getElementById('modal-close').addEventListener('click',closeModal);
modalOverlay.addEventListener('click',e=>{if(e.target===modalOverlay)closeModal();});

function openModal(idx){
  const p=PROJECTS[idx];
  modalContent.innerHTML=`
    <div class="modal-tag">Project ${p.num}</div>
    <div class="modal-title">${p.title}</div>
    <div class="modal-section"><h4>Problem Statement</h4><p>${p.problem}</p></div>
    <div class="modal-section"><h4>Solution Approach</h4><p>${p.solution}</p></div>
    <div class="modal-section"><h4>Technologies Used</h4><div class="modal-tech">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>
    <div class="modal-section"><h4>Key Results</h4><ul>${p.results.map(r=>`<li>${r}</li>`).join('')}</ul></div>
    <div class="modal-links">
      <a href="${p.live}" target="_blank" class="btn modal-link live">Live Demo</a>
      ${p.admin?`<a href="${p.admin}" target="_blank" class="btn modal-link gh">Admin Panel</a>`:''}
      <a href="${p.github}" target="_blank" class="btn modal-link gh">GitHub</a>
    </div>`;
  modalOverlay.classList.add('open');
}
function closeModal(){modalOverlay.classList.remove('open');}

/* ════════════════════════════════════════════════════════════
   THREE.JS SCENE
════════════════════════════════════════════════════════════ */
gsap.registerPlugin(ScrollTrigger);

const cvs=document.getElementById('three-canvas');
const renderer=new THREE.WebGLRenderer({canvas:cvs,antialias:true,alpha:false});
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.setSize(innerWidth,innerHeight);
renderer.setClearColor(0x020810,1);
renderer.shadowMap.enabled=true;

const scn=new THREE.Scene();
scn.fog=new THREE.FogExp2(0x0a2a4a,0.032);

const cam=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,0.1,600);
cam.position.set(0,2,10);
cam.lookAt(0,0,0);

/* ── WAVE SURFACE ── */
const wMat=new THREE.ShaderMaterial({
  uniforms:{uTime:{value:0},uCol1:{value:new THREE.Color(0x1a7fbf)},uCol2:{value:new THREE.Color(0x0a2a4a)}},
  vertexShader:`
    uniform float uTime; varying float vH; varying vec2 vUv;
    float w(vec2 p,float f,float s,float a){return sin(p.x*f+uTime*s)*cos(p.y*f*.7+uTime*s*.8)*a;}
    void main(){vUv=uv;vec3 p=position;
      p.y+=w(p.xz,.8,1.2,.55)+w(p.xz,1.5,.9,.3)+w(p.xz,2.3,1.7,.15)+w(p.xz,.35,.5,.8);
      vH=p.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
  fragmentShader:`
    uniform vec3 uCol1,uCol2; varying float vH;
    void main(){float t=clamp((vH+1.)/2.,0.,1.);vec3 c=mix(uCol2,uCol1,t);
      c=mix(c,vec3(.9,.97,1.),smoothstep(.6,1.,t)*.45);gl_FragColor=vec4(c,1.);}`,
  side:THREE.DoubleSide
});
const wGeo=new THREE.PlaneGeometry(100,100,128,128); wGeo.rotateX(-Math.PI/2);
scn.add(new THREE.Mesh(wGeo,wMat));

/* ── SKY ── */
const skyMat=new THREE.ShaderMaterial({
  side:THREE.BackSide,uniforms:{uP:{value:0}},
  vertexShader:`varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`varying vec3 vP;uniform float uP;
    void main(){float t=clamp(vP.y/200.,0.,1.);vec3 s=mix(vec3(.5,.8,.95),vec3(.15,.45,.78),1.-t);
      gl_FragColor=vec4(mix(s,vec3(.01,.04,.08),uP),1.);}`
});
scn.add(new THREE.Mesh(new THREE.SphereGeometry(450,32,16),skyMat));

/* ── MID-WATER PARTICLES ── */
const isMobile=innerWidth<768;
const PC=isMobile?1500:4000;
const pPos=new Float32Array(PC*3),pCol=new Float32Array(PC*3),pSpd=new Float32Array(PC);
const pPal=[0x3dffd0,0x00aaff,0x7b5ea7,0x00ffaa,0x0af4ff].map(h=>new THREE.Color(h));
for(let i=0;i<PC;i++){
  pPos[i*3]=(Math.random()-.5)*70;pPos[i*3+1]=(Math.random()-.5)*45-22;pPos[i*3+2]=(Math.random()-.5)*70;
  const c=pPal[i%pPal.length];pCol[i*3]=c.r;pCol[i*3+1]=c.g;pCol[i*3+2]=c.b;pSpd[i]=Math.random()*.6+.2;
}
const pGeo=new THREE.BufferGeometry();
pGeo.setAttribute('position',new THREE.BufferAttribute(pPos,3));
pGeo.setAttribute('color',new THREE.BufferAttribute(pCol,3));
const pMat=new THREE.PointsMaterial({size:isMobile?.12:.18,vertexColors:true,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false});
scn.add(new THREE.Points(pGeo,pMat));

/* ── OCEAN FLOOR ── */
const floorG=new THREE.Group(); floorG.position.y=-36; scn.add(floorG);

const sandGeo=new THREE.PlaneGeometry(120,120,80,80); sandGeo.rotateX(-Math.PI/2);
const sv=sandGeo.attributes.position;
for(let i=0;i<sv.count;i++)sv.setY(i,sv.getY(i)+(Math.random()-.5)*.4); sv.needsUpdate=true;
const sandMat=new THREE.ShaderMaterial({
  uniforms:{uT:{value:0},uG:{value:new THREE.Color(0x00ffe0)},uS:{value:new THREE.Color(0x080f1e)}},
  vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`uniform float uT;uniform vec3 uG,uS;varying vec2 vUv;
    float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
    void main(){float n1=n(vUv*8.+uT*.12),n2=n(vUv*16.-uT*.08),n3=n(vUv*4.+uT*.05);
      float v=pow(1.-abs(n1-.5)*2.,4.)+pow(1.-abs(n2-.5)*2.,6.)*.5;
      float g=clamp((v*.6+pow(n(vUv*30.+uT*.2),8.)*3.*.4)*(.5+.5*sin(uT*.7+n3*6.28)),0.,1.);
      gl_FragColor=vec4(mix(uS,uG,g*.7)+uG*g*.3,1.);}`
});
floorG.add(new THREE.Mesh(sandGeo,sandMat));

/* Coral */
const coralPals=[{b:0x00ffe0,e:0x00ffe0},{b:0xff4fbe,e:0xff4fbe},{b:0x4af0c4,e:0x00ffaa},{b:0x9b5de5,e:0x9b5de5},{b:0xf9c74f,e:0xffd166}];
const coralA=[];
function mkCoral(x,z){
  const g=new THREE.Group(),pp=coralPals[~~(Math.random()*coralPals.length)],h=1.2+Math.random()*2.5;
  const m=new THREE.MeshStandardMaterial({color:pp.b,emissive:new THREE.Color(pp.e),emissiveIntensity:.7,roughness:.5,metalness:.1});
  const st=new THREE.Mesh(new THREE.CylinderGeometry(.06,.2,h,8),m); st.position.y=h/2; g.add(st);
  for(let b=0;b<3+~~(Math.random()*4);b++){
    const r=.2+Math.random()*.45,bm=m.clone();bm.emissiveIntensity=1.1;
    const bl=new THREE.Mesh(new THREE.SphereGeometry(r,8,8),bm);
    bl.position.set((Math.random()-.5)*.8,h+r*.5,(Math.random()-.5)*.8); g.add(bl);
  }
  const l=new THREE.PointLight(pp.e,1.6,6); l.position.set(0,h+.5,0); g.add(l);
  g.position.set(x,0,z); coralA.push({m,l,ph:Math.random()*Math.PI*2,sp:.5+Math.random()});
  return g;
}
for(let i=0;i<(isMobile?20:42);i++){const a=Math.random()*Math.PI*2,d=2+Math.random()*22;floorG.add(mkCoral(Math.cos(a)*d,Math.sin(a)*d));}

/* Rocks */
for(let i=0;i<14;i++){
  const r=.5+Math.random()*1.4,g=new THREE.SphereGeometry(r,8,6),v=g.attributes.position;
  for(let j=0;j<v.count;j++)v.setXYZ(j,v.getX(j)*(.7+Math.random()*.5),v.getY(j)*(.4+Math.random()*.4),v.getZ(j)*(.7+Math.random()*.5));
  v.needsUpdate=true;
  const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:0x0d1f2d,roughness:.9,metalness:.15,emissive:new THREE.Color(0x001a33),emissiveIntensity:.3}));
  m.position.set((Math.random()-.5)*35,r*.35,(Math.random()-.5)*35); floorG.add(m);
}

/* Floor glow spores */
const FC=isMobile?400:1000,fpPo=new Float32Array(FC*3),fpC=new Float32Array(FC*3),fpSp=new Float32Array(FC);
const fpal=[0x00ffe0,0x4af0c4,0x9b5de5,0xff4fbe,0x0af4ff].map(h=>new THREE.Color(h));
for(let i=0;i<FC;i++){fpPo[i*3]=(Math.random()-.5)*50;fpPo[i*3+1]=Math.random()*4;fpPo[i*3+2]=(Math.random()-.5)*50;const c=fpal[i%fpal.length];fpC[i*3]=c.r;fpC[i*3+1]=c.g;fpC[i*3+2]=c.b;fpSp[i]=Math.random()*.4+.1;}
const fpGeo=new THREE.BufferGeometry();
fpGeo.setAttribute('position',new THREE.BufferAttribute(fpPo,3));
fpGeo.setAttribute('color',new THREE.BufferAttribute(fpC,3));
floorG.add(new THREE.Points(fpGeo,new THREE.PointsMaterial({size:.1,vertexColors:true,transparent:true,opacity:.8,blending:THREE.AdditiveBlending,depthWrite:false})));

/* ── PROCEDURAL JELLYFISH ── */
const jellyG=new THREE.Group(); jellyG.position.y=-18; scn.add(jellyG);
const jellyD=[];
for(let i=0;i<(isMobile?4:8);i++){
  const jg=new THREE.Group(),hue=i/(isMobile?4:8);
  const jc=new THREE.Color().setHSL(hue,1,.65),je=new THREE.Color().setHSL(hue,1,.5);
  const bm=new THREE.MeshStandardMaterial({color:jc,emissive:je,emissiveIntensity:1.3,transparent:true,opacity:.72,side:THREE.DoubleSide,roughness:.15});
  jg.add(new THREE.Mesh(new THREE.SphereGeometry(.45,12,8,0,Math.PI*2,0,Math.PI*.55),bm));
  const im=new THREE.MeshStandardMaterial({color:jc,emissive:je,emissiveIntensity:2,transparent:true,opacity:.28,side:THREE.FrontSide});
  jg.add(new THREE.Mesh(new THREE.SphereGeometry(.3,8,8,0,Math.PI*2,0,Math.PI*.5),im));
  for(let t=0;t<6;t++){
    const ta=(t/6)*Math.PI*2,tm=new THREE.MeshStandardMaterial({color:jc,emissive:je,emissiveIntensity:1.8,transparent:true,opacity:.45});
    const ts=new THREE.Mesh(new THREE.CylinderGeometry(.01,.003,1.4+Math.random()*.9,4),tm);
    ts.position.set(Math.cos(ta)*.28,-1.0,Math.sin(ta)*.28); jg.add(ts);
  }
  const jl=new THREE.PointLight(jc,1.3,7); jg.add(jl);
  const r=(3+i*2.1)%13+4,sp=(.07+i*.009)*(i%2===0?1:-1),ph=i*(Math.PI*2/(isMobile?4:8));
  jellyG.add(jg);
  jellyD.push({mesh:jg,bm,light:jl,speed:sp,phase:ph,orbitR:r,orbitSpd:sp,baseY:0});
}

/* ── SHARK ── */
const sharkG=new THREE.Group(); scn.add(sharkG);
const SHARK={radius:12,speed:.18,phase:0,baseY:-14,mesh:null};
(function buildShark(){
  const mat=new THREE.MeshStandardMaterial({color:0x5a9fc8,emissive:new THREE.Color(0x0a2540),emissiveIntensity:.5,roughness:.35,metalness:.2});
  const g=new THREE.Group();
  const body=new THREE.CylinderGeometry(.3,.06,3.8,12); body.rotateZ(Math.PI/2);
  g.add(new THREE.Mesh(body,mat));
  const sn=new THREE.SphereGeometry(.34,10,8); sn.scale(1.3,.85,1.0);
  const snm=new THREE.Mesh(sn,mat); snm.position.x=2.0; g.add(snm);
  const dor=new THREE.CylinderGeometry(0,.23,.8,4); dor.rotateZ(-.12);
  const df=new THREE.Mesh(dor,mat); df.position.set(.3,.5,0); g.add(df);
  [-1,1].forEach(s=>{const pf=new THREE.Mesh(new THREE.CylinderGeometry(0,.28,.95,4),mat);pf.rotation.z=s*1.3;pf.position.set(.15,-.1,s*.38);g.add(pf);});
  const tail=new THREE.CylinderGeometry(0,.3,.9,4); tail.rotateZ(Math.PI/2);
  const tf=new THREE.Mesh(tail,mat); tf.position.x=-2.1; g.add(tf);
  const t2=new THREE.CylinderGeometry(0,.2,.7,4); t2.rotateZ(Math.PI/2+.45);
  const tf2=new THREE.Mesh(t2,mat); tf2.position.set(-2.0,.25,0); g.add(tf2);
  sharkG.add(g); SHARK.mesh=g;
  scn.add(new THREE.PointLight(0x4af0c4,1.5,16));
})();

/* ── KRAKEN ── */
const krakenG=new THREE.Group(); krakenG.position.set(0,-42,-10); scn.add(krakenG);
const KRAKEN={tentacles:[],eyes:[],glow:null};
(function buildKraken(){
  const bm=new THREE.MeshStandardMaterial({color:0x180828,emissive:new THREE.Color(0x6600bb),emissiveIntensity:.8,roughness:.5,metalness:.25});
  const tm=new THREE.MeshStandardMaterial({color:0x1a0530,emissive:new THREE.Color(0x4400aa),emissiveIntensity:.6,roughness:.55,metalness:.15});
  const bg=new THREE.SphereGeometry(2.4,16,12),bv=bg.attributes.position;
  for(let i=0;i<bv.count;i++)bv.setY(i,bv.getY(i)*.58); bv.needsUpdate=true;
  const body=new THREE.Mesh(bg,bm); body.position.y=2; krakenG.add(body);
  const mg=new THREE.SphereGeometry(1.5,12,10),mv=mg.attributes.position;
  for(let i=0;i<mv.count;i++)mv.setY(i,mv.getY(i)*2.1+.9); mv.needsUpdate=true;
  const mantle=new THREE.Mesh(mg,bm); mantle.position.y=2.5; krakenG.add(mantle);
  const em=new THREE.MeshStandardMaterial({color:0xff1100,emissive:new THREE.Color(0xff3300),emissiveIntensity:3,roughness:.05});
  [-1,1].forEach(ex=>{
    const eye=new THREE.Mesh(new THREE.SphereGeometry(.26,10,10),em);
    eye.position.set(ex*.95,2.45,2.0); krakenG.add(eye); KRAKEN.eyes.push(eye);
    const el=new THREE.PointLight(0xff2200,2.5,10); el.position.copy(eye.position); krakenG.add(el);
  });
  for(let t=0;t<8;t++){
    const angle=(t/8)*Math.PI*2,tg=new THREE.Group(); tg.rotation.y=angle; krakenG.add(tg);
    const segs=[];
    for(let s=0;s<7;s++){
      const r1=Math.max(.015,.2-s*.025),r2=Math.max(.008,r1-.025);
      const seg=new THREE.Mesh(new THREE.CylinderGeometry(r2,r1,1.5,6),tm);
      seg.position.set(0,-.5-s*.5,1.4+s*.55); seg.rotation.x=.3+s*.2; tg.add(seg); segs.push(seg);
    }
    KRAKEN.tentacles.push({group:tg,segs,phase:t*(Math.PI*2/8)});
  }
  const kg=new THREE.PointLight(0x8800ff,8,30); kg.position.set(0,2,0); krakenG.add(kg); KRAKEN.glow=kg;
})();

/* ── LIGHTS ── */
scn.add(new THREE.AmbientLight(0x112244,2.0));
const sun=new THREE.DirectionalLight(0xffd4a3,1.2); sun.position.set(10,20,10); scn.add(sun);
const dL=new THREE.PointLight(0x0af4ff,3,35); dL.position.set(0,-20,0); scn.add(dL);
const fl1=new THREE.PointLight(0x00ffe0,5,50); fl1.position.set(0,-32,0); scn.add(fl1);
const fl2=new THREE.PointLight(0x9b5de5,4,40); fl2.position.set(-8,-32,6); scn.add(fl2);
const fl3=new THREE.PointLight(0xff4fbe,3,35); fl3.position.set(10,-32,-8); scn.add(fl3);
const rL=new THREE.PointLight(0x4af0c4,6,30); rL.position.set(5,-33,5); scn.add(rL);

/* ════════════════════════════════════════════════════════════
   GSAP SCROLL TIMELINE
════════════════════════════════════════════════════════════ */
let scrollProg=0;

const masterTL=gsap.timeline({
  scrollTrigger:{
    trigger:'#scroll-container',start:'top top',end:'bottom bottom',
    scrub:1.5,
    onUpdate(self){
      scrollProg=self.progress;
      updateUI(self.progress);
      updateSections(self.progress);
    }
  }
});

// Camera dive path
masterTL.to(cam.position,{y:2,z:10,duration:.12,ease:'none'},0);
masterTL.to(cam.position,{y:-20,z:8,duration:.3,ease:'power2.inOut'},.12);
masterTL.to(cam.rotation,{x:-.12,duration:.3,ease:'power2.inOut'},.12);
masterTL.to(cam.position,{y:-33,z:6,duration:.45,ease:'power1.inOut'},.42);
masterTL.to(cam.rotation,{x:-.32,duration:.45,ease:'power1.inOut'},.42);
masterTL.to(cam.position,{y:-38,z:4,duration:.25,ease:'power1.in'},.87);
masterTL.to(cam.rotation,{x:-.2,duration:.25,ease:'power1.in'},.87);

// Fog & sky
masterTL.to(scn.fog.color,{r:.01,g:.03,b:.06,duration:.3,ease:'power2.in'},.12);
masterTL.to(scn.fog,{density:.065,duration:.3,ease:'none'},.12);
masterTL.to(skyMat.uniforms.uP,{value:1,duration:.2,ease:'power2.in'},.08);

// Particles
masterTL.to(pMat,{opacity:.9,duration:.2,ease:'power2.out'},.18);
masterTL.to(pMat,{opacity:.3,duration:.2,ease:'power1.in'},.72);

// Phase text
masterTL.fromTo('#phase-dive',{opacity:0,y:20},{opacity:1,y:0,duration:.1},.22);
masterTL.to('#phase-dive',{opacity:0,duration:.08},.36);
masterTL.fromTo('#phase-deep',{opacity:0},{opacity:1,duration:.08},.58);
masterTL.to('#phase-deep',{opacity:0,duration:.08},.74);

/* ════════════════════════════════════════════════════════════
   SECTION TRANSITIONS
════════════════════════════════════════════════════════════ */
const SECS=[
  {id:'sec-hero',     start:0,    end:.14,  offset:0},
  {id:'sec-skills',   start:.18,  end:.37,  offset:0},
  {id:'sec-projects', start:.42,  end:.60,  offset:0},
  {id:'sec-timeline', start:.63,  end:.76,  offset:0},
  {id:'sec-kraken',   start:.80,  end:.90,  offset:0},
  {id:'sec-contact',  start:.93,  end:1.01, offset:0},
];
const secEls=SECS.map(s=>({...s,el:document.getElementById(s.id)}));

// Set pointer-events on element AND every descendant
function setPE(el, value){
  el.style.pointerEvents = value;
  el.querySelectorAll('*').forEach(child => child.style.pointerEvents = value);
}

let lastActive='';
function updateSections(p){
  secEls.forEach(s=>{
    const inRange = p >= s.start && p <= s.end;
    const fade = Math.min((p-s.start)/.04,1) * Math.min((s.end-p)/.04,1);
    s.el.style.opacity = Math.max(0, fade);
    // Explicitly set every element inside - no CSS inheritance ambiguity
    setPE(s.el, inRange ? 'auto' : 'none');
    if(inRange && s.id !== lastActive){
      lastActive = s.id;
      if(s.id==='sec-skills')  animateSkills();
      if(s.id==='sec-projects')animateProjects();
      if(s.id==='sec-timeline')animateTimeline();
      if(s.id==='sec-kraken')  animateKraken();
      if(s.id==='sec-contact') animateContact();
    }
  });
  sharkG.visible  = (p>=.14 && p<=.62);
  jellyG.visible  = (p>=.22 && p<=.82);
  krakenG.visible = (p>=.76);
}
updateSections(0);

function animateSkills(){
  gsap.to('#sec-skills',{opacity:1});
  document.querySelectorAll('.skill-node').forEach((el,i)=>{
    gsap.to(el,{opacity:1,y:0,duration:.5,delay:i*.06,ease:'power2.out'});
    setTimeout(()=>{
      el.querySelector('.skill-bar').style.width=el.dataset.pct+'%';
    },400+i*60);
  });
  document.getElementById('sec-skills').classList.add('active');
}
function animateProjects(){
  document.querySelectorAll('.proj-card').forEach((el,i)=>{
    gsap.to(el,{opacity:1,x:0,duration:.55,delay:i*.12,ease:'power2.out'});
  });
  document.getElementById('sec-projects').classList.add('active');
}
function animateTimeline(){
  document.querySelectorAll('.tl-item').forEach((el,i)=>{
    gsap.to(el,{opacity:1,x:0,duration:.55,delay:i*.1,ease:'power2.out'});
  });
}
function animateKraken(){
  document.getElementById('sec-kraken').classList.add('active');
  // Clear any leftover GSAP inline opacity styles
  document.querySelectorAll('.k-stat-num, .kraken-cta, .kraken-cta .btn').forEach(el=>{
    el.style.opacity='';
    el.style.visibility='';
    el.style.transform='';
  });
}
function animateContact(){
  document.querySelectorAll('.contact-card').forEach((el,i)=>{
    gsap.to(el,{opacity:1,y:0,duration:.45,delay:i*.08,ease:'power2.out'});
  });
  gsap.to('#contact-footer',{opacity:1,duration:.6,delay:.5});
  document.getElementById('sec-contact').classList.add('active');
}

/* ════════════════════════════════════════════════════════════
   UI UPDATES
════════════════════════════════════════════════════════════ */
function updateUI(p){
  document.getElementById('progress-line').style.width=(p*100)+'%';
  document.getElementById('depth-bar').style.height=(p*100)+'%';
  document.getElementById('depth-val').textContent=Math.round(p*400)+'m';
  document.getElementById('depth-meter').classList.toggle('show',p>.04);
  document.getElementById('main-nav').classList.toggle('scrolled',p>.02);
}

function scrollToSection(p){
  const sc=document.getElementById('scroll-container');
  const totalH=sc.offsetHeight-window.innerHeight;
  window.scrollTo({top:p*totalH,behavior:'smooth'});
}

/* ════════════════════════════════════════════════════════════
   GSAP HERO ENTRANCE
════════════════════════════════════════════════════════════ */
setTimeout(()=>{
  gsap.to('.hero-eyebrow',{opacity:1,y:0,duration:.8,ease:'power2.out',delay:.2});
  gsap.to('.hero-name',{opacity:1,y:0,duration:1.1,ease:'power2.out',delay:.5});
  gsap.to('.hero-role',{opacity:1,duration:.8,delay:1.0,ease:'power2.out'});
  gsap.to('.hero-tagline',{opacity:1,duration:.8,delay:1.2,ease:'power2.out'});
  gsap.to('#hero-ctas',{opacity:1,duration:.8,delay:1.5,ease:'power2.out',
    onComplete:()=>document.getElementById('hero-ctas').classList.add('active')});
  gsap.to('#scroll-hint',{opacity:1,duration:.8,delay:2.2,ease:'power2.out'});
  document.getElementById('sec-hero').style.opacity=1;
},800);

/* ════════════════════════════════════════════════════════════
   ANIMATION LOOP
════════════════════════════════════════════════════════════ */
const clock=new THREE.Clock();
let time=0;

function animate(){
  requestAnimationFrame(animate);
  const dt=clock.getDelta(); time+=dt;

  wMat.uniforms.uTime.value=time;
  sandMat.uniforms.uT.value=time;

  // Particles drift
  const pp=pGeo.attributes.position;
  for(let i=0;i<PC;i++){
    const s=pSpd[i];
    pp.setY(i,pp.getY(i)+dt*s*.1);
    pp.setX(i,pp.getX(i)+Math.sin(time*s*.5+i)*dt*.035);
    pp.setZ(i,pp.getZ(i)+Math.cos(time*s*.4+i)*dt*.035);
    if(pp.getY(i)>5)pp.setY(i,-36);
    if(pp.getY(i)<-40)pp.setY(i,5);
  }
  pp.needsUpdate=true;

  // Floor spore drift
  const fp=fpGeo.attributes.position;
  for(let i=0;i<FC;i++){
    const s=fpSp[i];
    fp.setY(i,fp.getY(i)+dt*s*.055);
    fp.setX(i,fp.getX(i)+Math.sin(time*s*.4+i)*dt*.025);
    fp.setZ(i,fp.getZ(i)+Math.cos(time*s*.3+i)*dt*.025);
    if(fp.getY(i)>5)fp.setY(i,.1);
    if(fp.getY(i)<0)fp.setY(i,.1);
  }
  fp.needsUpdate=true;

  // Coral pulse
  coralA.forEach(c=>{
    const p=.5+.5*Math.sin(time*c.sp+c.ph);
    c.m.emissiveIntensity=.4+p*1.2; c.l.intensity=.8+p*2.0;
  });

  // Light animation
  rL.position.x=Math.sin(time*.18)*14; rL.position.z=Math.cos(time*.13)*14; rL.intensity=4+2*Math.sin(time*.9);
  fl1.intensity=4+2*Math.sin(time*.6); fl2.intensity=3+1.5*Math.sin(time*.8+1.2); fl3.intensity=2.5+1.5*Math.sin(time*.5+2.4);

  // Shark
  if(sharkG.visible){
    const a=time*SHARK.speed+SHARK.phase;
    sharkG.position.set(Math.cos(a)*SHARK.radius,SHARK.baseY+Math.sin(time*.55)*1.4,Math.sin(a)*SHARK.radius);
    sharkG.rotation.y=-a-Math.PI/2;
    if(SHARK.mesh){SHARK.mesh.rotation.z=Math.sin(time*1.9)*.07;SHARK.mesh.rotation.x=Math.sin(time*.95)*.04;}
  }

  // Jellyfish
  if(jellyG.visible){
    jellyD.forEach(j=>{
      const a=time*j.orbitSpd+j.phase;
      j.mesh.position.x=Math.cos(a)*j.orbitR;
      j.mesh.position.z=Math.sin(a)*j.orbitR;
      j.mesh.position.y=j.baseY+Math.sin(time*Math.abs(j.speed)*3+j.phase)*1.8;
      j.mesh.rotation.y=a;
      const pulse=.8+.2*Math.sin(time*2.2+j.phase);
      j.mesh.scale.y=pulse;
      j.bm.emissiveIntensity=.9+.6*Math.sin(time*2.2+j.phase);
      if(j.light)j.light.intensity=.8+1.*Math.sin(time*2.2+j.phase);
    });
  }

  // Kraken
  if(krakenG.visible){
    const reveal=Math.min(1,Math.max(0,(scrollProg-.76)/.24));
    krakenG.position.y=-42+reveal*6;
    krakenG.position.z=-10+reveal*3;
    krakenG.rotation.y=time*.06;
    KRAKEN.tentacles.forEach(t=>{
      t.segs.forEach((seg,s)=>{
        seg.rotation.x=.3+s*.2+Math.sin(time*1.5+t.phase+s*.7)*(.1+s*.04);
        seg.rotation.z=Math.sin(time*1.0+t.phase+s*.5)*.1;
      });
    });
    KRAKEN.eyes.forEach(e=>{e.material.emissiveIntensity=2.5+1.8*Math.sin(time*3.2);});
    if(KRAKEN.glow)KRAKEN.glow.intensity=6+4*Math.sin(time*.85);
  }

  // Surface camera sway
  if(scrollProg<.1)cam.position.x=Math.sin(time*.3)*.07;

  renderer.render(scn,cam);
}
animate();

window.addEventListener('resize',()=>{
  cam.aspect=innerWidth/innerHeight; cam.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);
});

// Prevent default scroll behavior on nav links
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));

/* ════════════════════════════════════════════════════════════
   HAMBURGER / MOBILE NAV
════════════════════════════════════════════════════════════ */
const hamburger=document.getElementById('nav-hamburger');
const mobileNav=document.getElementById('mobile-nav');

hamburger.addEventListener('click',()=>{
  const open=mobileNav.classList.toggle('open');
  hamburger.classList.toggle('active',open);
  document.body.style.overflow=open?'hidden':'';
});

document.querySelectorAll('.mobile-nav a').forEach(a=>{
  a.addEventListener('click',e=>e.preventDefault());
});

function mobileNavTo(p){
  mobileNav.classList.remove('open');
  hamburger.classList.remove('active');
  document.body.style.overflow='';
  setTimeout(()=>scrollToSection(p),300);
}

window.addEventListener('orientationchange',()=>{
  setTimeout(()=>{
    cam.aspect=innerWidth/innerHeight;
    cam.updateProjectionMatrix();
    renderer.setSize(innerWidth,innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  },200);
});