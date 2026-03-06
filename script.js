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
    live:'https://shejolesumesh.github.io/sumit-portfolio3d/',
    github:'https://github.com/shejolesumesh/sumit-portfolio3d',
    impact:'Award-quality interactive WebGL portfolio experience',
    problem:'Standard portfolios fail to communicate deep technical expertise through design alone.',
    solution:'Designed a scroll-driven ocean descent metaphor with custom GLSL wave shaders, bioluminescent particles, and procedural 3D creatures.',
    results:['Custom vertex & fragment shaders','GSAP scroll-driven camera path','Procedural 3D creature system','Smooth performance-adaptive animations'],
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
  {icon:'💬',label:'WhatsApp',val:'Chat with me',href:'https://wa.me/918827503016?text=Hello%20Sumit',target:'_blank'},
];


const isMobile = innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
const deviceMem = navigator.deviceMemory || 4;        
const cpuCores  = navigator.hardwareConcurrency || 4;
const isLowEnd  = isMobile && (deviceMem <= 2 || cpuCores <= 4);
const TIER = isLowEnd ? 'low' : (isMobile ? 'mid' : 'high');


const Q = {
  pc   : {high:2500, mid:700,  low:250 }[TIER],  
  fc   : {high:700,  mid:200,  low:80  }[TIER],  
  coral: {high:28,   mid:12,   low:5   }[TIER],
  jelly: {high:8,    mid:4,    low:2   }[TIER],
  rocks: {high:14,   mid:6,    low:3   }[TIER],
  wSeg : {high:64,   mid:28,   low:14  }[TIER],  
  sSeg : {high:48,   mid:22,   low:10  }[TIER],  
  dpr  : {high:Math.min(devicePixelRatio,1.5), mid:1, low:1}[TIER],
  aa   : {high:true, mid:false,low:false}[TIER],
  fps  : {high:60,   mid:60,   low:30  }[TIER],
  
  far  : {high:600,  mid:520,  low:480 }[TIER],
};


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


const skillsGrid=document.getElementById('skills-grid');
(()=>{
  const frag=document.createDocumentFragment();
  SKILLS.forEach(s=>{
    const d=document.createElement('div');
    d.className='skill-node'; d.dataset.pct=s.pct;
    d.innerHTML=`<div class="skill-tooltip">${s.desc}</div>
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-level">${s.level}</div>
      <div class="skill-bar-wrap"><div class="skill-bar" style="width:0%"></div></div>`;
    frag.appendChild(d);
  });
  skillsGrid.appendChild(frag);
})();


const projCards=document.getElementById('project-cards');
(()=>{
  const frag=document.createDocumentFragment();
  PROJECTS.forEach((p,i)=>{
    const d=document.createElement('div');
    d.className='proj-card'; d.dataset.idx=i;
    d.innerHTML=`<div class="proj-num">${p.num}</div>
      <div class="proj-title">${p.title}</div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-tags">${p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div>
      <div class="proj-links">
        <a href="${p.live}" target="_blank" class="proj-link primary" onclick="event.stopPropagation()">Live Demo</a>
        <a href="${p.github}" target="_blank" class="proj-link" onclick="event.stopPropagation()">GitHub</a>
      </div>
      <div class="proj-impact">↗ ${p.impact}</div>`;
    frag.appendChild(d);
  });
  projCards.appendChild(frag);
})();
document.querySelectorAll('.proj-card').forEach(card=>{
  card.addEventListener('click',()=>openModal(parseInt(card.dataset.idx)));
});


const tl_el=document.getElementById('timeline');
(()=>{
  const frag=document.createDocumentFragment();
  TIMELINE.forEach(t=>{
    const d=document.createElement('div');
    d.className='tl-item';
    d.innerHTML=`<div class="tl-dot"></div>
      <div class="tl-content">
        <div class="tl-year">${t.year}</div>
        <div class="tl-role">${t.role}</div>
        <div class="tl-org">${t.org}</div>
        <div class="tl-desc">${t.desc}</div>
        ${t.badge?`<div class="tl-badge">${t.badge}</div>`:''}
      </div>`;
    frag.appendChild(d);
  });
  tl_el.appendChild(frag);
})();


const cgrid=document.getElementById('contact-grid');
(()=>{
  const frag=document.createDocumentFragment();
  CONTACTS.forEach(c=>{
    const a=document.createElement('a');
    a.href=c.href; if(c.target)a.target=c.target; a.className='contact-card';
    a.innerHTML=`<div class="cc-icon">${c.icon}</div>
      <div><div class="cc-label">${c.label}</div><div class="cc-val">${c.val}</div></div>`;
    frag.appendChild(a);
  });
  cgrid.appendChild(frag);
})();


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
    <div class="modal-section"><h4>Technologies Used</h4>
      <div class="modal-tech">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>
    <div class="modal-section"><h4>Key Results</h4>
      <ul>${p.results.map(r=>`<li>${r}</li>`).join('')}</ul></div>
    <div class="modal-links">
      <a href="${p.live}" target="_blank" class="btn modal-link live">Live Demo</a>
      ${p.admin?`<a href="${p.admin}" target="_blank" class="btn modal-link gh">Admin Panel</a>`:''}
      <a href="${p.github}" target="_blank" class="btn modal-link gh">GitHub</a>
    </div>`;
  modalOverlay.classList.add('open');
}
function closeModal(){modalOverlay.classList.remove('open');}


gsap.registerPlugin(ScrollTrigger);

const cvs=document.getElementById('three-canvas');


const renderer=new THREE.WebGLRenderer({
  canvas:cvs,
  antialias:Q.aa,
  alpha:false,
  powerPreference:isLowEnd?'low-power':'high-performance',
});
renderer.setPixelRatio(Q.dpr);
renderer.setSize(innerWidth,innerHeight);
renderer.setClearColor(0x020810,1);
renderer.shadowMap.enabled=false; 

const scn=new THREE.Scene();
scn.fog=new THREE.FogExp2(0x0a2a4a,0.032);

const cam=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,0.1,Q.far);
cam.position.set(0,2,10);
cam.lookAt(0,0,0);


const waveVert=`
  uniform float uTime; varying float vH;
  float w(vec2 p,float f,float s,float a){return sin(p.x*f+uTime*s)*cos(p.y*f*.7+uTime*s*.8)*a;}
  void main(){vec3 p=position;
    p.y+=w(p.xz,.8,1.2,.55)+w(p.xz,1.5,.9,.3)${TIER==='high'?'+w(p.xz,2.3,1.7,.15)+w(p.xz,.35,.5,.8)':''};
    vH=p.y;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`;
const waveFrag=TIER==='high'
  ?`uniform vec3 uCol1,uCol2;varying float vH;
    void main(){float t=clamp((vH+1.)/2.,0.,1.);vec3 c=mix(uCol2,uCol1,t);
      c=mix(c,vec3(.9,.97,1.),smoothstep(.6,1.,t)*.45);gl_FragColor=vec4(c,1.);}`
  :`uniform vec3 uCol1,uCol2;varying float vH;
    void main(){float t=clamp((vH+1.)/2.,0.,1.);gl_FragColor=vec4(mix(uCol2,uCol1,t),1.);}`;
const wMat=new THREE.ShaderMaterial({
  uniforms:{uTime:{value:0},uCol1:{value:new THREE.Color(0x1a7fbf)},uCol2:{value:new THREE.Color(0x0a2a4a)}},
  vertexShader:waveVert,fragmentShader:waveFrag,side:THREE.DoubleSide
});
const wGeo=new THREE.PlaneGeometry(100,100,Q.wSeg,Q.wSeg); wGeo.rotateX(-Math.PI/2);
scn.add(new THREE.Mesh(wGeo,wMat));


const skyMat=new THREE.ShaderMaterial({
  side:THREE.BackSide,uniforms:{uP:{value:0}},
  vertexShader:`varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`varying vec3 vP;uniform float uP;
    void main(){float t=clamp(vP.y/200.,0.,1.);vec3 s=mix(vec3(.5,.8,.95),vec3(.15,.45,.78),1.-t);
      gl_FragColor=vec4(mix(s,vec3(.01,.04,.08),uP),1.);}`
});
scn.add(new THREE.Mesh(new THREE.SphereGeometry(450,TIER==='low'?14:22,10),skyMat));


const PC=Q.pc;
const pPos=new Float32Array(PC*3);  
const pCol=new Float32Array(PC*3);
const pSpd=new Float32Array(PC);
const pOff=new Float32Array(PC);
const pPal=[0x3dffd0,0x00aaff,0x7b5ea7,0x00ffaa,0x0af4ff].map(h=>new THREE.Color(h));
for(let i=0;i<PC;i++){
  pPos[i*3  ]=(Math.random()-.5)*70;
  pPos[i*3+1]=(Math.random()-.5)*45-22;  
  pPos[i*3+2]=(Math.random()-.5)*70;
  const c=pPal[i%pPal.length];
  pCol[i*3]=c.r; pCol[i*3+1]=c.g; pCol[i*3+2]=c.b;
  pSpd[i]=Math.random()*.6+.2;
  pOff[i]=Math.random()*Math.PI*2;
}
const pGeo=new THREE.BufferGeometry();
pGeo.setAttribute('position',new THREE.BufferAttribute(pPos,3));
pGeo.setAttribute('aColor',  new THREE.BufferAttribute(pCol,3));
pGeo.setAttribute('aSpeed',  new THREE.BufferAttribute(pSpd,1));
pGeo.setAttribute('aOffset', new THREE.BufferAttribute(pOff,1));

const GPU_PARTICLE_VERT=`
  attribute vec3 aColor;
  attribute float aSpeed;
  attribute float aOffset;
  uniform float uTime;
  varying vec3 vColor;
  void main(){
    vColor = aColor;
    vec3 pos = position;
    // Drift up, wrap in range [-36, 5] (span 41)
    float travel = uTime * aSpeed * 0.1;
    pos.y = mod(pos.y + 36.0 + travel, 41.0) - 36.0;
    // Lateral sway — deterministic, no CPU accumulation
    pos.x += sin(uTime * aSpeed * 0.5 + aOffset) * 0.6;
    pos.z += cos(uTime * aSpeed * 0.4 + aOffset) * 0.6;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = ${isMobile?'1.8':'2.2'};
  }`;
const GPU_PARTICLE_FRAG=`
  uniform float uOpacity;
  varying vec3 vColor;
  void main(){
    float d = length(gl_PointCoord - vec2(0.5));
    if(d > 0.5) discard;
    gl_FragColor = vec4(vColor, uOpacity * (1.0 - d * 1.8));
  }`;

const pMat=new THREE.ShaderMaterial({
  uniforms:{uTime:{value:0},uOpacity:{value:0}},
  vertexShader:GPU_PARTICLE_VERT,
  fragmentShader:GPU_PARTICLE_FRAG,
  transparent:true,blending:THREE.AdditiveBlending,depthWrite:false
});
scn.add(new THREE.Points(pGeo,pMat));


const floorG=new THREE.Group(); floorG.position.y=-36; scn.add(floorG);

let sandMat;
if(TIER==='low'){
  
  sandMat=new THREE.MeshStandardMaterial({color:0x050f18,roughness:1,metalness:0});
} else if(TIER==='mid'){
  sandMat=new THREE.ShaderMaterial({
    uniforms:{uT:{value:0},uG:{value:new THREE.Color(0x00ffe0)},uS:{value:new THREE.Color(0x080f1e)}},
    vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    // Simplified 1-octave sand for mid
    fragmentShader:`uniform float uT;uniform vec3 uG,uS;varying vec2 vUv;
      void main(){
        float n=sin(vUv.x*8.+uT*.12)*sin(vUv.y*8.+uT*.09)*.5+.5;
        float g=pow(n,3.)*.65*(.5+.5*sin(uT*.7+n*6.28));
        gl_FragColor=vec4(mix(uS,uG,g),1.);}`
  });
} else {
  
  sandMat=new THREE.ShaderMaterial({
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
}

const sandGeo=new THREE.PlaneGeometry(120,120,Q.sSeg,Q.sSeg); sandGeo.rotateX(-Math.PI/2);
const sv=sandGeo.attributes.position;
for(let i=0;i<sv.count;i++)sv.setY(i,sv.getY(i)+(Math.random()-.5)*.4); sv.needsUpdate=true;
floorG.add(new THREE.Mesh(sandGeo,sandMat));


const coralPals=[
  {b:0x00ffe0,e:0x00ffe0},{b:0xff4fbe,e:0xff4fbe},
  {b:0x4af0c4,e:0x00ffaa},{b:0x9b5de5,e:0x9b5de5},{b:0xf9c74f,e:0xffd166}
];
const coralMatPool=coralPals.map(pp=>
  new THREE.MeshStandardMaterial({color:pp.b,emissive:new THREE.Color(pp.e),emissiveIntensity:.8,roughness:.5,metalness:.1})
);
const sharedStemGeo = new THREE.CylinderGeometry(.06,.2,2,6);
const sharedBlobGeo = new THREE.SphereGeometry(.3,6,5);

const coralA=[];
function mkCoral(x,z){
  const g=new THREE.Group();
  const pi=~~(Math.random()*coralPals.length);
  const mat=coralMatPool[pi];
  const h=1.2+Math.random()*2.5;
  const st=new THREE.Mesh(sharedStemGeo,mat); st.scale.set(1,h/2,1); st.position.y=h/2; g.add(st);
  for(let b=0;b<2+~~(Math.random()*3);b++){
    const r=.2+Math.random()*.4;
    const bl=new THREE.Mesh(sharedBlobGeo,mat);
    bl.scale.setScalar(r/.3);
    bl.position.set((Math.random()-.5)*.8,h+r*.5,(Math.random()-.5)*.8); g.add(bl);
  }
  g.position.set(x,0,z);
  coralA.push({m:mat,ph:Math.random()*Math.PI*2,sp:.5+Math.random()});
  return g;
}
for(let i=0;i<Q.coral;i++){
  const a=Math.random()*Math.PI*2,d=2+Math.random()*22;
  floorG.add(mkCoral(Math.cos(a)*d,Math.sin(a)*d));
}


const rockMat=new THREE.MeshStandardMaterial({color:0x0d1f2d,roughness:.9,metalness:.15,emissive:new THREE.Color(0x001a33),emissiveIntensity:.3});
for(let i=0;i<Q.rocks;i++){
  const r=.5+Math.random()*1.4;
  const g=new THREE.SphereGeometry(r,6,5);
  const v=g.attributes.position;
  for(let j=0;j<v.count;j++)v.setXYZ(j,v.getX(j)*(.7+Math.random()*.5),v.getY(j)*(.4+Math.random()*.4),v.getZ(j)*(.7+Math.random()*.5));
  v.needsUpdate=true;
  const m=new THREE.Mesh(g,rockMat);
  m.position.set((Math.random()-.5)*35,r*.35,(Math.random()-.5)*35); floorG.add(m);
}


const FC=Q.fc;
const fpPo=new Float32Array(FC*3);
const fpC =new Float32Array(FC*3);
const fpSp=new Float32Array(FC);
const fpOf=new Float32Array(FC);
const fpal=[0x00ffe0,0x4af0c4,0x9b5de5,0xff4fbe,0x0af4ff].map(h=>new THREE.Color(h));
for(let i=0;i<FC;i++){
  fpPo[i*3  ]=(Math.random()-.5)*50;
  fpPo[i*3+1]=Math.random()*4;         
  fpPo[i*3+2]=(Math.random()-.5)*50;
  const c=fpal[i%fpal.length];
  fpC[i*3]=c.r; fpC[i*3+1]=c.g; fpC[i*3+2]=c.b;
  fpSp[i]=Math.random()*.4+.1;
  fpOf[i]=Math.random()*Math.PI*2;
}
const fpGeo=new THREE.BufferGeometry();
fpGeo.setAttribute('position',new THREE.BufferAttribute(fpPo,3));
fpGeo.setAttribute('aColor',  new THREE.BufferAttribute(fpC, 3));
fpGeo.setAttribute('aSpeed',  new THREE.BufferAttribute(fpSp,1));
fpGeo.setAttribute('aOffset', new THREE.BufferAttribute(fpOf,1));

const fpMat=new THREE.ShaderMaterial({
  uniforms:{uTime:{value:0},uOpacity:{value:.8}},
  vertexShader:`
    attribute vec3 aColor;
    attribute float aSpeed;
    attribute float aOffset;
    uniform float uTime;
    varying vec3 vColor;
    void main(){
      vColor = aColor;
      vec3 pos = position;
      float travel = uTime * aSpeed * 0.055;
      pos.y = mod(pos.y + travel, 5.0);
      pos.x += sin(uTime * aSpeed * 0.4 + aOffset) * 0.3;
      pos.z += cos(uTime * aSpeed * 0.3 + aOffset) * 0.3;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = 1.5;
    }`,
  fragmentShader:`
    uniform float uOpacity;
    varying vec3 vColor;
    void main(){
      float d = length(gl_PointCoord - vec2(0.5));
      if(d > 0.5) discard;
      gl_FragColor = vec4(vColor, uOpacity * (1.0 - d * 1.6));
    }`,
  transparent:true,blending:THREE.AdditiveBlending,depthWrite:false
});
floorG.add(new THREE.Points(fpGeo,fpMat));


const jellyG=new THREE.Group(); jellyG.position.y=-18; scn.add(jellyG);
const jellyD=[];

const jBodyGeo=new THREE.SphereGeometry(.45,10,7,0,Math.PI*2,0,Math.PI*.55);
const jInnerGeo=new THREE.SphereGeometry(.3,8,6,0,Math.PI*2,0,Math.PI*.5);
const jTentGeo=new THREE.CylinderGeometry(.01,.003,1.4,3);

for(let i=0;i<Q.jelly;i++){
  const jg=new THREE.Group(),hue=i/Q.jelly;
  const jc=new THREE.Color().setHSL(hue,1,.65),je=new THREE.Color().setHSL(hue,1,.5);
  const bm=new THREE.MeshStandardMaterial({color:jc,emissive:je,emissiveIntensity:1.3,transparent:true,opacity:.72,side:THREE.DoubleSide,roughness:.15});
  jg.add(new THREE.Mesh(jBodyGeo,bm));
  const im=new THREE.MeshStandardMaterial({color:jc,emissive:je,emissiveIntensity:2,transparent:true,opacity:.28});
  jg.add(new THREE.Mesh(jInnerGeo,im));
  const tCount=isLowEnd?3:5;
  for(let t=0;t<tCount;t++){
    const ta=(t/tCount)*Math.PI*2;
    const tm=new THREE.MeshStandardMaterial({color:jc,emissive:je,emissiveIntensity:1.8,transparent:true,opacity:.45});
    const ts=new THREE.Mesh(jTentGeo,tm);
    ts.position.set(Math.cos(ta)*.28,-1.0,Math.sin(ta)*.28); jg.add(ts);
  }
  let jl=null;
  if(TIER!=='low'){jl=new THREE.PointLight(jc,.8,5); jg.add(jl);}
  const r=(3+i*2.1)%13+4,sp=(.07+i*.009)*(i%2===0?1:-1),ph=i*(Math.PI*2/Q.jelly);
  jellyG.add(jg);
  jellyD.push({mesh:jg,bm,light:jl,speed:sp,phase:ph,orbitR:r,orbitSpd:sp,baseY:0});
}


const sharkG=new THREE.Group(); scn.add(sharkG);
const SHARK={radius:12,speed:.18,phase:0,baseY:-14,mesh:null};
(function buildShark(){
  const mat=new THREE.MeshStandardMaterial({color:0x5a9fc8,emissive:new THREE.Color(0x0a2540),emissiveIntensity:.5,roughness:.35,metalness:.2});
  const g=new THREE.Group();
  const seg=isLowEnd?7:12;
  const body=new THREE.CylinderGeometry(.3,.06,3.8,seg); body.rotateZ(Math.PI/2);
  g.add(new THREE.Mesh(body,mat));
  const sn=new THREE.SphereGeometry(.34,8,6); sn.scale(1.3,.85,1.0);
  const snm=new THREE.Mesh(sn,mat); snm.position.x=2.0; g.add(snm);
  const dor=new THREE.CylinderGeometry(0,.23,.8,4); dor.rotateZ(-.12);
  const df=new THREE.Mesh(dor,mat); df.position.set(.3,.5,0); g.add(df);
  [-1,1].forEach(s=>{const pf=new THREE.Mesh(new THREE.CylinderGeometry(0,.28,.95,4),mat);pf.rotation.z=s*1.3;pf.position.set(.15,-.1,s*.38);g.add(pf);});
  const tail=new THREE.CylinderGeometry(0,.3,.9,4); tail.rotateZ(Math.PI/2);
  const tf=new THREE.Mesh(tail,mat); tf.position.x=-2.1; g.add(tf);
  const t2=new THREE.CylinderGeometry(0,.2,.7,4); t2.rotateZ(Math.PI/2+.45);
  const tf2=new THREE.Mesh(t2,mat); tf2.position.set(-2.0,.25,0); g.add(tf2);
  sharkG.add(g); SHARK.mesh=g;
})();


const krakenG=new THREE.Group(); krakenG.position.set(0,-42,-10); scn.add(krakenG);
const KRAKEN={tentacles:[],eyes:[],glow:null};
(function buildKraken(){
  const bm=new THREE.MeshStandardMaterial({color:0x180828,emissive:new THREE.Color(0x6600bb),emissiveIntensity:.8,roughness:.5,metalness:.25});
  const tm=new THREE.MeshStandardMaterial({color:0x1a0530,emissive:new THREE.Color(0x4400aa),emissiveIntensity:.6,roughness:.55,metalness:.15});
  const bSeg=isLowEnd?10:14;
  const bg=new THREE.SphereGeometry(2.4,bSeg,9);
  const bv=bg.attributes.position;
  for(let i=0;i<bv.count;i++)bv.setY(i,bv.getY(i)*.58); bv.needsUpdate=true;
  krakenG.add(new THREE.Mesh(bg,bm)).position.y=2;
  const mg=new THREE.SphereGeometry(1.5,bSeg,8);
  const mv=mg.attributes.position;
  for(let i=0;i<mv.count;i++)mv.setY(i,mv.getY(i)*2.1+.9); mv.needsUpdate=true;
  krakenG.add(new THREE.Mesh(mg,bm)).position.y=2.5;
  const em=new THREE.MeshStandardMaterial({color:0xff1100,emissive:new THREE.Color(0xff3300),emissiveIntensity:3,roughness:.05});
  [-1,1].forEach(ex=>{
    const eye=new THREE.Mesh(new THREE.SphereGeometry(.26,8,8),em);
    eye.position.set(ex*.95,2.45,2.0); krakenG.add(eye); KRAKEN.eyes.push(eye);
    if(TIER!=='low'){const el=new THREE.PointLight(0xff2200,1.5,8); el.position.copy(eye.position); krakenG.add(el);}
  });
  const tCount=isLowEnd?5:8, sCount=isLowEnd?4:7;
  for(let t=0;t<tCount;t++){
    const angle=(t/tCount)*Math.PI*2,tg=new THREE.Group(); tg.rotation.y=angle; krakenG.add(tg);
    const segs=[];
    for(let s=0;s<sCount;s++){
      const r1=Math.max(.015,.2-s*.025),r2=Math.max(.008,r1-.025);
      const seg=new THREE.Mesh(new THREE.CylinderGeometry(r2,r1,1.5,4),tm);
      seg.position.set(0,-.5-s*.5,1.4+s*.55); seg.rotation.x=.3+s*.2; tg.add(seg); segs.push(seg);
    }
    KRAKEN.tentacles.push({group:tg,segs,phase:t*(Math.PI*2/tCount)});
  }
  const kg=new THREE.PointLight(0x8800ff,isLowEnd?5:8,isLowEnd?20:30);
  kg.position.set(0,2,0); krakenG.add(kg); KRAKEN.glow=kg;
})();


scn.add(new THREE.AmbientLight(0x112244,2.0));
const sun=new THREE.DirectionalLight(0xffd4a3,1.2); sun.position.set(10,20,10); scn.add(sun);
const dL=new THREE.PointLight(0x0af4ff,3,35); dL.position.set(0,-20,0); scn.add(dL);
const fl1=new THREE.PointLight(0x00ffe0,5,50); fl1.position.set(0,-32,0); scn.add(fl1);
// Extra animated floor lights only for high/mid
let fl2=null,fl3=null,rL=null;
if(TIER!=='low'){
  fl2=new THREE.PointLight(0x9b5de5,4,40); fl2.position.set(-8,-32,6); scn.add(fl2);
  fl3=new THREE.PointLight(0xff4fbe,3,35); fl3.position.set(10,-32,-8); scn.add(fl3);
  rL =new THREE.PointLight(0x4af0c4,6,30); rL.position.set(5,-33,5); scn.add(rL);
}


let scrollProg=0;

const masterTL=gsap.timeline({
  scrollTrigger:{
    trigger:'#scroll-container',start:'top top',end:'bottom bottom',
    scrub:isMobile?1:1.5,          
    onUpdate(self){
      scrollProg=self.progress;
      updateUI(self.progress);
      updateSections(self.progress);
    }
  }
});

masterTL.to(cam.position,{y:2,z:10,duration:.12,ease:'none'},0);
masterTL.to(cam.position,{y:-20,z:8,duration:.3,ease:'power2.inOut'},.12);
masterTL.to(cam.rotation,{x:-.12,duration:.3,ease:'power2.inOut'},.12);
masterTL.to(cam.position,{y:-33,z:6,duration:.45,ease:'power1.inOut'},.42);
masterTL.to(cam.rotation,{x:-.32,duration:.45,ease:'power1.inOut'},.42);
masterTL.to(cam.position,{y:-38,z:4,duration:.25,ease:'power1.in'},.87);
masterTL.to(cam.rotation,{x:-.2,duration:.25,ease:'power1.in'},.87);

masterTL.to(scn.fog.color,{r:.01,g:.03,b:.06,duration:.3,ease:'power2.in'},.12);
masterTL.to(scn.fog,{density:.065,duration:.3,ease:'none'},.12);
masterTL.to(skyMat.uniforms.uP,{value:1,duration:.2,ease:'power2.in'},.08);


masterTL.to(pMat.uniforms.uOpacity,{value:.9,duration:.2,ease:'power2.out'},.18);
masterTL.to(pMat.uniforms.uOpacity,{value:.3,duration:.2,ease:'power1.in'},.72);

masterTL.fromTo('#phase-dive',{opacity:0,y:20},{opacity:1,y:0,duration:.1},.22);
masterTL.to('#phase-dive',{opacity:0,duration:.08},.36);
masterTL.fromTo('#phase-deep',{opacity:0},{opacity:1,duration:.08},.58);
masterTL.to('#phase-deep',{opacity:0,duration:.08},.74);


const SECS=[
  {id:'sec-hero',    start:0,   end:.14,  offset:0},
  {id:'sec-skills',  start:.18, end:.37,  offset:0},
  {id:'sec-projects',start:.42, end:.60,  offset:0},
  {id:'sec-timeline',start:.63, end:.76,  offset:0},
  {id:'sec-kraken',  start:.80, end:.90,  offset:0},
  {id:'sec-contact', start:.93, end:1.01, offset:0},
];
const secEls=SECS.map(s=>({...s,el:document.getElementById(s.id)}));

let lastActive='';
function updateSections(p){
  secEls.forEach(s=>{
    const inRange=p>=s.start && p<=s.end;
    const fade=Math.min((p-s.start)/.04,1)*Math.min((s.end-p)/.04,1);
    s.el.style.opacity=Math.max(0,fade);
    // CSS class approach — O(1), no DOM traversal
    s.el.classList.toggle('pe-active',inRange);
    if(inRange && s.id!==lastActive){
      lastActive=s.id;
      if(s.id==='sec-skills')  animateSkills();
      if(s.id==='sec-projects')animateProjects();
      if(s.id==='sec-timeline')animateTimeline();
      if(s.id==='sec-kraken')  animateKraken();
      if(s.id==='sec-contact') animateContact();
    }
  });
  sharkG.visible  =(p>=.14 && p<=.62);
  jellyG.visible  =(p>=.22 && p<=.82);
  krakenG.visible =(p>=.76);
}
updateSections(0);


function animateSkills(){
  document.querySelectorAll('.skill-node').forEach((el,i)=>{
    gsap.to(el,{opacity:1,y:0,duration:.5,delay:i*.06,ease:'power2.out'});
    setTimeout(()=>{el.querySelector('.skill-bar').style.width=el.dataset.pct+'%';},400+i*60);
  });
}
function animateProjects(){
  document.querySelectorAll('.proj-card').forEach((el,i)=>{
    gsap.to(el,{opacity:1,x:0,duration:.55,delay:i*.12,ease:'power2.out'});
  });
}
function animateTimeline(){
  document.querySelectorAll('.tl-item').forEach((el,i)=>{
    gsap.to(el,{opacity:1,x:0,duration:.55,delay:i*.1,ease:'power2.out'});
  });
}
function animateKraken(){
  
  document.querySelectorAll('.k-stat-num,.kraken-cta,.kraken-cta .btn').forEach(el=>{
    el.style.removeProperty('opacity');
    el.style.removeProperty('visibility');
    el.style.removeProperty('transform');
  });
}
function animateContact(){
  document.querySelectorAll('.contact-card').forEach((el,i)=>{
    gsap.to(el,{opacity:1,y:0,duration:.45,delay:i*.08,ease:'power2.out'});
  });
  gsap.to('#contact-footer',{opacity:1,duration:.6,delay:.5});
}


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

setTimeout(()=>{
  gsap.to('.hero-eyebrow',{opacity:1,y:0,duration:.8,ease:'power2.out',delay:.2});
  gsap.to('.hero-name',{opacity:1,y:0,duration:1.1,ease:'power2.out',delay:.5});
  gsap.to('.hero-role',{opacity:1,duration:.8,delay:1.0,ease:'power2.out'});
  gsap.to('.hero-tagline',{opacity:1,duration:.8,delay:1.2,ease:'power2.out'});
  gsap.to('#hero-ctas',{opacity:1,duration:.8,delay:1.5,ease:'power2.out'});
  gsap.to('#scroll-hint',{opacity:1,duration:.8,delay:2.2,ease:'power2.out'});
  document.getElementById('sec-hero').style.opacity=1;
},800);


const clock=new THREE.Clock();
let time=0;
const FRAME_MS=1000/Q.fps;
let lastTS=0;

function animate(ts){
  requestAnimationFrame(animate);
  
  if(ts-lastTS < FRAME_MS) return;
  lastTS=ts;

  const dt=clock.getDelta();
  time+=dt;

  
  wMat.uniforms.uTime.value=time;
  pMat.uniforms.uTime.value=time;
  fpMat.uniforms.uTime.value=time;
  if(TIER!=='low' && sandMat.uniforms) sandMat.uniforms.uT.value=time;

  
  if(TIER!=='low'){
    coralA.forEach(c=>{
      c.m.emissiveIntensity=.5+(.5+.5*Math.sin(time*c.sp+c.ph))*.8;
    });
  }

  
  if(rL){rL.position.x=Math.sin(time*.18)*14; rL.position.z=Math.cos(time*.13)*14; rL.intensity=4+2*Math.sin(time*.9);}
  if(fl1)fl1.intensity=4+2*Math.sin(time*.6);
  if(fl2)fl2.intensity=3+1.5*Math.sin(time*.8+1.2);
  if(fl3)fl3.intensity=2.5+1.5*Math.sin(time*.5+2.4);

  
  if(sharkG.visible){
    const a=time*SHARK.speed+SHARK.phase;
    sharkG.position.set(Math.cos(a)*SHARK.radius,SHARK.baseY+Math.sin(time*.55)*1.4,Math.sin(a)*SHARK.radius);
    sharkG.rotation.y=-a-Math.PI/2;
    if(SHARK.mesh){SHARK.mesh.rotation.z=Math.sin(time*1.9)*.07;SHARK.mesh.rotation.x=Math.sin(time*.95)*.04;}
  }

  
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
      if(j.light)j.light.intensity=.5+.7*Math.sin(time*2.2+j.phase);
    });
  }

  
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
    if(KRAKEN.glow)KRAKEN.glow.intensity=(isLowEnd?4:6)+(isLowEnd?2:4)*Math.sin(time*.85);
  }

  if(scrollProg<.1)cam.position.x=Math.sin(time*.3)*.07;

  renderer.render(scn,cam);
}
animate(0);


window.addEventListener('resize',()=>{
  cam.aspect=innerWidth/innerHeight; cam.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);
});

document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));