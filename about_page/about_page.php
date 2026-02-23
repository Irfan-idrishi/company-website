<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About Us - Web Marlins</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="about_css/about_header.css">
<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#f5f6fa;
color:#1e2a4a;
}

.container{
width:100%;
max-width:1200px;
 margin:auto;
/* padding:20px 0; */
}

h1,h2,h3{
font-weight:700;
}

span{
color:#ff5c62;
}

/* HERO */
.about-hero{
height:450px;
background:url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f') center/cover no-repeat;
position:relative;
display:flex;
align-items:center;
justify-content:center;
}

.hero-overlay{
background:rgba(0,0,0,0.65);
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:#fff;
text-align:center;
}

.hero-overlay h1{
font-size:48px;
margin-bottom:20px;
}

/* STORY */
.story-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:60px;
align-items:center;
}

.story img{
width:100%;
border-radius:10px;
}

/* CLIENTS */
.clients{
background:#fff;
padding:80px 0;
text-align:center;
}

.client-grid{
display:flex;
justify-content:center;
gap:40px;
margin-top:40px;
flex-wrap:wrap;
}

.client-circle{
width:170px;
height:170px;
border:2px solid #1e2a4a;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
background:#fafafa;
}

/* STRENGTHS */
.strength-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
margin-top:40px;
}

.strength-box{
background:#fff;
padding:40px;
border-radius:12px;
box-shadow:0 10px 30px rgba(0,0,0,0.05);
transition:.3s;
}

.strength-box:hover{
transform:translateY(-8px);
}

/* TESTIMONIALS */
.testimonials{
background:#fff;
padding:80px 0;
text-align:center;
}

.testimonial-grid{
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:30px;
margin-top:40px;
}

.testimonial-card{
background:#f4f4f4;
padding:30px;
border-radius:12px;
}

/* CONTACT */
.contact{
background:#fff;
padding:80px 0;
}

.contact-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:60px;
}

.contact-form input,
.contact-form select,
.contact-form textarea{
width:100%;
padding:12px;
margin-bottom:15px;
border:1px solid #ccc;
border-radius:6px;
}

.contact-form button{
background:#ff5c62;
color:#fff;
padding:14px;
border:none;
border-radius:30px;
cursor:pointer;
font-weight:600;
transition:.3s;
}

.contact-form button:hover{
background:#e14a50;
}

/* WHATSAPP FLOAT */
.whatsapp{
position:fixed;
right:20px;
bottom:20px;
background:#25d366;
color:#fff;
width:60px;
height:60px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
cursor:pointer;
box-shadow:0 10px 20px rgba(0,0,0,0.2);
}

/* RESPONSIVE */
@media(max-width:992px){
.story-grid,
.strength-grid,
.testimonial-grid,
.contact-grid{
grid-template-columns:1fr;
}
.hero-overlay h1{
font-size:32px;
}
}

</style>
</head>

<body>

<!-- HEADER -->
    <?php include 'about_header.php'; ?>




<!-- HERO -->
<section class="about-hero">
<div class="hero-overlay">
<h1>ABOUT US</h1>
<p>Discover the essence of digital marketing mastery at <span>Web Marlins</span></p>
</div>
</section>

<!-- STORY -->
<section class="story container">
<div class="story-grid">
<div>
<h2>Web Marlins - Revolutionizing <span>Digital Marketing Since 2023</span></h2>
<p>We deliver innovative strategies and measurable results that empower businesses to grow online with confidence and clarity.</p>
</div>
<div>
<img src="https://images.unsplash.com/photo-1551434678-e076c223a692" alt="">
</div>
</div>
</section>

<!-- CLIENTS -->
<section class="clients">
<div class="container">
<h2>Our <span>Clients</span></h2>
<div class="client-grid">
<div class="client-circle">Logo</div>
<div class="client-circle">Logo</div>
<div class="client-circle">Logo</div>
<div class="client-circle">Logo</div>
<div class="client-circle">Logo</div>
</div>
</div>
</section>

<!-- STRENGTHS -->
<section class="container">
<h2>Our Strengths in Driving <span>Digital Success</span></h2>
<div class="strength-grid">
<div class="strength-box">
<h3>A Holistic Approach</h3>
<p>Integrated digital strategy for maximum impact.</p>
</div>
<div class="strength-box">
<h3>Creative Excellence</h3>
<p>Unique and innovative campaign execution.</p>
</div>
<div class="strength-box">
<h3>Technical SEO</h3>
<p>Strong foundation for search engine success.</p>
</div>
<div class="strength-box">
<h3>Data Analytics</h3>
<p>Strategic decisions backed by deep insights.</p>
</div>
</div>
</section>

<!-- TESTIMONIALS -->
<section class="testimonials">
<div class="container">
<h2>What Our <span>Clients Say</span></h2>
<div class="testimonial-grid">
<div class="testimonial-card">
<h4>Client Name</h4>
<p>"Excellent digital marketing team!"</p>
</div>
<div class="testimonial-card">
<h4>Client Name</h4>
<p>"Our conversions improved dramatically."</p>
</div>
<div class="testimonial-card">
<h4>Client Name</h4>
<p>"Professional and result-oriented approach."</p>
</div>
</div>
</div>
</section>

<!-- CONTACT -->
<section class="contact">
<div class="container contact-grid">
<div>
<h2>Let's talk about you</h2>
<p>Grow your business with Web Marlins.</p>
</div>

<div class="contact-form">
<input type="text" placeholder="Name">
<input type="email" placeholder="Email">
<input type="text" placeholder="Website">
<input type="text" placeholder="Phone">
<select>
<option>SEO</option>
<option>PPC</option>
<option>Social Media</option>
</select>
<textarea rows="4" placeholder="Comments"></textarea>
<button>Send Message</button>
</div>

</div>
</section>

<div class="whatsapp">☎</div>

<script>

// Simple animation on scroll
const boxes = document.querySelectorAll('.strength-box');

window.addEventListener('scroll',()=>{
boxes.forEach(box=>{
let top = box.getBoundingClientRect().top;
if(top < window.innerHeight - 50){
box.style.opacity="1";
box.style.transform="translateY(0)";
}
});
});

</script>

</body>
</html>