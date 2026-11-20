import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Menu, X, Check, Sparkles, CalendarDays, MapPin, MessageCircle } from 'lucide-react';
import './style.css';

const services = [
  { n:'01', title:'Weddings & Engagements', text:'Thoughtful planning and seamless coordination for celebrations that feel unmistakably yours.', tag:'LOVE & CELEBRATION', image:'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85' },
  { n:'02', title:'Corporate Events', text:'Polished experiences for launches, conferences, company celebrations and meaningful connections.', tag:'BUSINESS & BRAND', image:'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1100&q=85' },
  { n:'03', title:'Birthdays & Milestones', text:'Personal celebrations with considered details, beautiful styling and a smooth guest experience.', tag:'MILESTONES', image:'https://images.unsplash.com/photo-1530103862676-de8c9debaa1f?auto=format&fit=crop&w=1100&q=85' },
  { n:'04', title:'Private Celebrations', text:'Intimate gatherings and special occasions brought together with care, creativity and precision.', tag:'GATHER TOGETHER', image:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1100&q=85' }
];
const gallery = [
  {category:'Weddings', title:'An elegant celebration', image:'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85'},
  {category:'Corporate', title:'A considered setting', image:'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85'},
  {category:'Birthdays', title:'A moment to celebrate', image:'https://images.unsplash.com/photo-1530103862676-de8c9debaa1f?auto=format&fit=crop&w=1000&q=85'},
  {category:'Private', title:'Gathered beautifully', image:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85'}
];

function App(){
  const [menu,setMenu]=useState(false);
  const [filter,setFilter]=useState('All');
  const [sent,setSent]=useState(false);
  const shown = filter==='All' ? gallery : gallery.filter(x=>x.category===filter);
  const waNumber = '233XXXXXXXXX'; // Replace with the business WhatsApp number after approval.
  const wa = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Knightsbridge Events, I would like to enquire about planning an event.')}`;
  const submit = e => { e.preventDefault(); setSent(true); };
  return <div>
    <div className="announcement">A thoughtful approach to every occasion <span>✦</span> Accra, Ghana</div>
    <header className="header">
      <a className="brand" href="#home" onClick={()=>setMenu(false)}><span className="brand-mark">K</span><span>KNIGHTSBRIDGE<small>EVENTS & EXPERIENCES</small></span></a>
      <button className="menu-btn" aria-label="Toggle menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      <nav className={menu?'nav open':'nav'}>
        {['Home','About','Services','Gallery','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setMenu(false)}>{x}</a>)}
        <a className="nav-cta" href="#contact" onClick={()=>setMenu(false)}>Plan your event <ArrowRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-photo"></div><div className="hero-shade"></div>
        <div className="hero-content">
          <div className="eyebrow light"><span></span> EVENT PLANNING & COORDINATION</div>
          <h1>Moments made<br/><i>meaningful.</i></h1>
          <p>From the first idea to the final detail, we bring people together through beautifully considered events.</p>
          <div className="hero-actions"><a className="button gold" href="#contact">Start planning <ArrowRight size={16}/></a><a className="text-link" href="#services">Discover our services <span>↘</span></a></div>
        </div>
        <div className="hero-note"><span>01 / 04</span><span>Thoughtfully planned. Beautifully remembered.</span></div>
      </section>

      <section className="intro section" id="about">
        <div className="eyebrow"><span></span> THE KNIGHTSBRIDGE APPROACH</div>
        <div className="intro-grid"><h2>Every occasion<br/>deserves <i>intention.</i></h2><div className="intro-copy"><p className="lead">We believe the best events are more than a date on the calendar. They're experiences shaped around people, purpose and the details that matter.</p><p>Knightsbridge Events brings planning, creativity and coordination together to help make each occasion feel effortless for you and memorable for your guests.</p><a className="under-link" href="#contact">Let’s create something special <ArrowRight size={15}/></a></div></div>
        <div className="values"><div><span>01</span><b>Thoughtful planning</b><p>A clear plan built around your vision.</p></div><div><span>02</span><b>Considered details</b><p>Care in every choice, large or small.</p></div><div><span>03</span><b>Seamless coordination</b><p>A calm, connected experience throughout.</p></div></div>
      </section>

      <section className="services section dark" id="services">
        <div className="section-top"><div><div className="eyebrow light"><span></span> WHAT WE DO</div><h2>Events with purpose.<br/><i>Experiences with soul.</i></h2></div><p>From personal milestones to professional gatherings, discover how we can help bring your next occasion to life.</p></div>
        <div className="service-grid">{services.map(s=><article className="service-card" key={s.n}><div className="service-image"><img src={s.image} alt="Event inspiration" loading="lazy"/><span>{s.n}</span></div><div className="service-info"><small>{s.tag}</small><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" aria-label={'Enquire about '+s.title}>Enquire <ArrowRight size={15}/></a></div></article>)}</div>
      </section>

      <section className="process section">
        <div className="process-heading"><div className="eyebrow"><span></span> THE EXPERIENCE</div><h2>From first conversation<br/>to <i>final flourish.</i></h2><p>A collaborative process designed to keep your plans clear and your experience considered.</p></div>
        <div className="steps"><div><span>01</span><h3>We listen</h3><p>Tell us about your occasion, ideas and priorities.</p></div><div><span>02</span><h3>We shape the plan</h3><p>We help bring the details, people and possibilities together.</p></div><div><span>03</span><h3>We coordinate</h3><p>We work through the details so the day feels well considered.</p></div><div><span>04</span><h3>You enjoy the moment</h3><p>Be present with your guests while the experience comes together.</p></div></div>
      </section>

      <section className="gallery-section section" id="gallery">
        <div className="section-top"><div><div className="eyebrow"><span></span> VISUAL INSPIRATION</div><h2>A glimpse of what’s <i>possible.</i></h2></div><p>A curated moodboard of event styles and atmospheres. Project imagery can be added as the Knightsbridge portfolio grows.</p></div>
        <div className="filters">{['All','Weddings','Corporate','Birthdays','Private'].map(f=><button className={filter===f?'active':''} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div>
        <div className="gallery-grid">{shown.map((g,i)=><div className="gallery-item" key={g.category}><img src={g.image} alt={g.title} loading="lazy"/><div><small>{g.category}</small><b>{g.title}</b></div></div>)}</div>
      </section>

      <section className="quote-band"><div className="quote-mark">“</div><p>Good events bring people together.<br/><i>Great ones give them a reason to remember.</i></p><span>THE KNIGHTSBRIDGE PHILOSOPHY</span></section>

      <section className="contact section" id="contact">
        <div className="contact-copy"><div className="eyebrow light"><span></span> LET’S BEGIN</div><h2>Your next occasion<br/>starts with <i>a conversation.</i></h2><p>Share a little about what you're planning. We'd love to hear your ideas and explore how we can help.</p><div className="contact-detail"><MessageCircle size={18}/><span>Prefer WhatsApp?<br/><a href={wa} target="_blank" rel="noreferrer">Start a conversation <ArrowRight size={14}/></a></span></div><div className="contact-detail"><MapPin size={18}/><span>Based in Accra, Ghana<br/><small>Enquiries welcome for your upcoming occasion.</small></span></div></div>
        <form className="enquiry" onSubmit={submit}><div className="form-heading"><span>EVENT ENQUIRY</span><small>Tell us a little about your plans.</small></div>
          <label>Your name<input required placeholder="Full name"/></label><label>Email or phone<input required placeholder="How can we reach you?"/></label>
          <div className="form-row"><label>Event type<select defaultValue=""><option value="" disabled>Select an event</option><option>Wedding / Engagement</option><option>Corporate event</option><option>Birthday / Milestone</option><option>Private celebration</option><option>Other</option></select></label><label>Preferred date<input type="date"/></label></div>
          <label>Tell us about your event<textarea rows="3" placeholder="Your ideas, location, guest count or anything you'd like us to know..."/></label>
          <button className="button submit" type="submit">{sent?'Enquiry noted':'Send enquiry'} <ArrowRight size={16}/></button>
          {sent&&<p className="success"><Check size={15}/> Demo form interaction complete. Connect a real form service before launch.</p>}
          <small className="form-note">Demonstration form — submissions are not sent or stored.</small>
        </form>
      </section>
    </main>
    <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">K</span><span>KNIGHTSBRIDGE<small>EVENTS & EXPERIENCES</small></span></a><span>Creating extraordinary experiences.</span><span>© 2026 Knightsbridge Events · Concept website by Nexora</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
