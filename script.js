const services = {
  bpo:{n:"01",title:"Business Process<br>Outsourcing",text:"Extend your team with flexible, process-driven outsourcing built around your goals. Delegate essential operations while maintaining quality, visibility and control.",tags:["Operations","Dedicated teams","Process support"]},
  support:{n:"02",title:"Customer<br>Support",text:"Deliver responsive, professional customer experiences across voice, email, chat and digital channels.",tags:["Voice support","Digital support","Customer experience"]},
  sales:{n:"03",title:"Sales & Lead<br>Generation",text:"Build stronger pipelines with targeted prospecting, lead qualification, appointment setting and sales support.",tags:["Prospecting","Qualification","Appointments"]},
  backoffice:{n:"04",title:"Back-office<br>Operations",text:"Reduce operational workload with dependable support across data processing, documentation, administration and repetitive business processes.",tags:["Data operations","Administration","Documentation"]},
  research:{n:"05",title:"Business<br>Research",text:"Turn conversations, surveys and market intelligence into useful insights that help businesses understand customers and markets.",tags:["Market research","Surveys","Intelligence"]},
  analytics:{n:"06",title:"Business<br>Analytics",text:"Transform business data into practical dashboards, reports and insights for better operational and commercial decisions.",tags:["Dashboards","Reporting","Insights"]},
  ai:{n:"07",title:"AI &<br>Automation",text:"Use AI and automation to reduce repetitive work, improve response times and create more efficient workflows.",tags:["AI workflows","Automation","Process design"]},
  tech:{n:"08",title:"Technology<br>Solutions",text:"Build and improve digital tools, websites, workflows and technology systems that support modern business operations.",tags:["Web","Workflows","Technology"]},
  consulting:{n:"09",title:"Business<br>Consulting",text:"Practical business support for companies looking to improve operations, enter new markets and scale efficiently.",tags:["Strategy","Operations","Growth"]}
};

document.addEventListener("DOMContentLoaded",()=>{
  const header=document.querySelector(".site-header");
  const toggle=document.querySelector(".menu-toggle");
  const mobile=document.querySelector(".mobile-menu");
  const year=document.querySelector("#year");
  year.textContent=new Date().getFullYear();

  const onScroll=()=>header.classList.toggle("scrolled",window.scrollY>45);
  window.addEventListener("scroll",onScroll,{passive:true}); onScroll();

  toggle.addEventListener("click",()=>{
    const open=mobile.classList.toggle("open");
    toggle.setAttribute("aria-expanded",open);
  });
  mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobile.classList.remove("open")));

  const detail=document.querySelector("#service-detail");
  document.querySelectorAll(".service-tab").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(".service-tab").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      const s=services[btn.dataset.service];
      detail.innerHTML=`<div class="service-number">${s.n}</div><div class="service-icon">↗</div><h3>${s.title}</h3><p>${s.text}</p><div class="service-tags">${s.tags.map(t=>`<span>${t}</span>`).join("")}</div>`;
    });
  });

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",e=>{
      const target=document.querySelector(a.getAttribute("href"));
      if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"})}
    });
  });
});
