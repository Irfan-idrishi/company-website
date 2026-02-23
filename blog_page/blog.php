<?php
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Latest Blogs</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<link rel="stylesheet" href="../blog_page/blog_css/blog_header.css"  >
<link rel="stylesheet" href="../blog_page/blog_css/blog_footer.css"  >
<link rel="stylesheet" href="../blog_page/blog_css/blog_style.css"  >

</head>

<body>

<!-- HEADER -->
<?php include '../blog_page/blog_header.php'; ?>

<!-- HERO -->
<section class="blog-hero">
  <h1>LATEST <span>BLOGS</span></h1>
</section>

<!-- BLOG SECTION -->
<section class="blog-section">
  <div class="container">
    <!-- <div class="blog-grid">

  <!-- CARD 1 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?seo" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>SEO Strategies for 2026</h3>
      <p>Discover powerful SEO techniques to improve rankings and drive organic traffic.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">February 20, 2026 • No Comments</div>
  </div>

  <!-- CARD 2 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?marketing" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Digital Marketing Trends</h3>
      <p>Explore the latest marketing trends shaping online businesses this year.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">February 6, 2026 • No Comments</div>
  </div>

  <!-- CARD 3 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?branding" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Building a Strong Brand</h3>
      <p>Learn how branding helps businesses stand out in competitive markets.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 28, 2026 • No Comments</div>
  </div>

  <!-- CARD 4 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?socialmedia" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Social Media Growth Hacks</h3>
      <p>Boost engagement and grow your audience using smart strategies.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 20, 2026 • No Comments</div>
  </div>

  <!-- CARD 5 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?content" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Content Marketing Guide</h3>
      <p>Create impactful content that attracts and converts customers.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 10, 2026 • No Comments</div>
  </div>

  <!-- CARD 6 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?webdesign" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Modern Web Design Tips</h3>
      <p>Improve user experience with clean layouts and fast loading pages.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 30, 2025 • No Comments</div>
  </div>

  <!-- CARD 7 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?analytics" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Understanding Google Analytics</h3>
      <p>Track performance and optimize campaigns with data-driven insights.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 15, 2025 • No Comments</div>
  </div>

  <!-- CARD 8 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?ecommerce" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>E-commerce Growth Tips</h3>
      <p>Increase online sales with optimized product pages and ads.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 5, 2025 • No Comments</div>
  </div>

  <!-- CARD 9 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?ppc" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>PPC Advertising Guide</h3>
      <p>Learn how to run profitable Google and Meta ad campaigns.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">November 25, 2025 • No Comments</div>
  </div>

  <!-- CARD 10 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?startup" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Startup Marketing Blueprint</h3>
      <p>Effective strategies to grow your startup from zero to scale.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">November 10, 2025 • No Comments</div>
  </div>

  <!-- CARD 11 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?technology" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Future of Digital Technology</h3>
      <p>Explore how AI and automation are transforming marketing.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">October 28, 2025 • No Comments</div>
  </div>

  <!-- CARD 12 
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?business" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Business Growth Strategies</h3>
      <p>Proven methods to scale revenue and improve brand authority.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">October 15, 2025 • No Comments</div>
  </div> -->
  <div class="blog-grid">

<?php if($page == 1): ?>

  

  <!-- CARD 1 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?seo" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>SEO Strategies for 2026</h3>
      <p>Discover powerful SEO techniques to improve rankings and drive organic traffic.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">February 20, 2026 • No Comments</div>
  </div>

  <!-- CARD 2 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?marketing" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Digital Marketing Trends</h3>
      <p>Explore the latest marketing trends shaping online businesses this year.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">February 6, 2026 • No Comments</div>
  </div>

  <!-- CARD 3 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?branding" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Building a Strong Brand</h3>
      <p>Learn how branding helps businesses stand out in competitive markets.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 28, 2026 • No Comments</div>
  </div>

  <!-- CARD 4 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?socialmedia" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Social Media Growth Hacks</h3>
      <p>Boost engagement and grow your audience using smart strategies.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 20, 2026 • No Comments</div>
  </div>

  <!-- CARD 5 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?content" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Content Marketing Guide</h3>
      <p>Create impactful content that attracts and converts customers.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 10, 2026 • No Comments</div>
  </div>

  <!-- CARD 6 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?webdesign" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Modern Web Design Tips</h3>
      <p>Improve user experience with clean layouts and fast loading pages.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 30, 2025 • No Comments</div>
  </div>

  <!-- CARD 7 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?analytics" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Understanding Google Analytics</h3>
      <p>Track performance and optimize campaigns with data-driven insights.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 15, 2025 • No Comments</div>
  </div>

  <!-- CARD 8 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?ecommerce" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>E-commerce Growth Tips</h3>
      <p>Increase online sales with optimized product pages and ads.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 5, 2025 • No Comments</div>
  </div>

  <!-- CARD 9 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?ppc" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>PPC Advertising Guide</h3>
      <p>Learn how to run profitable Google and Meta ad campaigns.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">November 25, 2025 • No Comments</div>
  </div>

  <!-- CARD 10 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?startup" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Startup Marketing Blueprint</h3>
      <p>Effective strategies to grow your startup from zero to scale.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">November 10, 2025 • No Comments</div>
  </div>

  <!-- CARD 11 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?technology" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Future of Digital Technology</h3>
      <p>Explore how AI and automation are transforming marketing.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">October 28, 2025 • No Comments</div>
  </div>

  <!-- CARD 12 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?business" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Business Growth Strategies</h3>
      <p>Proven methods to scale revenue and improve brand authority.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">October 15, 2025 • No Comments</div>
  </div>

</div>

 

<?php endif; ?>


<?php if($page == 2): ?>


  <!-- CARD 1 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?seo" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>SEO Strategies for 2026</h3>
      <p>Discover powerful SEO techniques to improve rankings and drive organic traffic.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">February 20, 2026 • No Comments</div>
  </div>

  <!-- CARD 2 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?marketing" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Digital Marketing Trends</h3>
      <p>Explore the latest marketing trends shaping online businesses this year.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">February 6, 2026 • No Comments</div>
  </div>

  <!-- CARD 3 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?branding" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Building a Strong Brand</h3>
      <p>Learn how branding helps businesses stand out in competitive markets.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 28, 2026 • No Comments</div>
  </div>

  <!-- CARD 4 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?socialmedia" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Social Media Growth Hacks</h3>
      <p>Boost engagement and grow your audience using smart strategies.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 20, 2026 • No Comments</div>
  </div>

  <!-- CARD 5 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?content" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Content Marketing Guide</h3>
      <p>Create impactful content that attracts and converts customers.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 10, 2026 • No Comments</div>
  </div>

  <!-- CARD 6 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?webdesign" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Modern Web Design Tips</h3>
      <p>Improve user experience with clean layouts and fast loading pages.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 30, 2025 • No Comments</div>
  </div>

  <!-- CARD 7 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?analytics" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Understanding Google Analytics</h3>
      <p>Track performance and optimize campaigns with data-driven insights.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 15, 2025 • No Comments</div>
  </div>

  <!-- CARD 8 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?ecommerce" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>E-commerce Growth Tips</h3>
      <p>Increase online sales with optimized product pages and ads.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 5, 2025 • No Comments</div>
  </div>

  <!-- CARD 9 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?ppc" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>PPC Advertising Guide</h3>
      <p>Learn how to run profitable Google and Meta ad campaigns.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">November 25, 2025 • No Comments</div>
  </div>

  <!-- CARD 10 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?startup" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Startup Marketing Blueprint</h3>
      <p>Effective strategies to grow your startup from zero to scale.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">November 10, 2025 • No Comments</div>
  </div>

  <!-- CARD 11 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?technology" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Future of Digital Technology</h3>
      <p>Explore how AI and automation are transforming marketing.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">October 28, 2025 • No Comments</div>
  </div>

  <!-- CARD 12 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?business" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Business Growth Strategies</h3>
      <p>Proven methods to scale revenue and improve brand authority.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">October 15, 2025 • No Comments</div>
  </div>

</div>

<?php endif; ?>

<?php if($page == 3): ?>

  <!-- CARD 1 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?seo" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>SEO Strategies for 2026</h3>
      <p>Discover powerful SEO techniques to improve rankings and drive organic traffic.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">February 20, 2026 • No Comments</div>
  </div>

  <!-- CARD 2 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?marketing" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Digital Marketing Trends</h3>
      <p>Explore the latest marketing trends shaping online businesses this year.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">February 6, 2026 • No Comments</div>
  </div>

  <!-- CARD 3 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?branding" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Building a Strong Brand</h3>
      <p>Learn how branding helps businesses stand out in competitive markets.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 28, 2026 • No Comments</div>
  </div>

  <!-- CARD 4 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?socialmedia" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Social Media Growth Hacks</h3>
      <p>Boost engagement and grow your audience using smart strategies.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 20, 2026 • No Comments</div>
  </div>

  <!-- CARD 5 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?content" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Content Marketing Guide</h3>
      <p>Create impactful content that attracts and converts customers.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 10, 2026 • No Comments</div>
  </div>

  <!-- CARD 6 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?webdesign" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Modern Web Design Tips</h3>
      <p>Improve user experience with clean layouts and fast loading pages.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 30, 2025 • No Comments</div>
  </div>

  <!-- CARD 7 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?analytics" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Understanding Google Analytics</h3>
      <p>Track performance and optimize campaigns with data-driven insights.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 15, 2025 • No Comments</div>
  </div>

  <!-- CARD 8 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?ecommerce" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>E-commerce Growth Tips</h3>
      <p>Increase online sales with optimized product pages and ads.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 5, 2025 • No Comments</div>
  </div>

  <!-- CARD 9 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?ppc" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>PPC Advertising Guide</h3>
      <p>Learn how to run profitable Google and Meta ad campaigns.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">November 25, 2025 • No Comments</div>
  </div>

  <!-- CARD 10 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?startup" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Startup Marketing Blueprint</h3>
      <p>Effective strategies to grow your startup from zero to scale.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">November 10, 2025 • No Comments</div>
  </div>

  <!-- CARD 11 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?technology" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Future of Digital Technology</h3>
      <p>Explore how AI and automation are transforming marketing.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">October 28, 2025 • No Comments</div>
  </div>

  <!-- CARD 12 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?business" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Business Growth Strategies</h3>
      <p>Proven methods to scale revenue and improve brand authority.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">October 15, 2025 • No Comments</div>
  </div>

</div>
<?php endif; ?>

<?php if($page == 4): ?>


  <!-- CARD 1 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?seo" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>SEO Strategies for 2026</h3>
      <p>Discover powerful SEO techniques to improve rankings and drive organic traffic.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">February 20, 2026 • No Comments</div>
  </div>

  <!-- CARD 2 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?marketing" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Digital Marketing Trends</h3>
      <p>Explore the latest marketing trends shaping online businesses this year.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">February 6, 2026 • No Comments</div>
  </div>

  <!-- CARD 3 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?branding" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Building a Strong Brand</h3>
      <p>Learn how branding helps businesses stand out in competitive markets.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 28, 2026 • No Comments</div>
  </div>

  <!-- CARD 4 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?socialmedia" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Social Media Growth Hacks</h3>
      <p>Boost engagement and grow your audience using smart strategies.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 20, 2026 • No Comments</div>
  </div>

  <!-- CARD 5 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?content" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Content Marketing Guide</h3>
      <p>Create impactful content that attracts and converts customers.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">January 10, 2026 • No Comments</div>
  </div>

  <!-- CARD 6 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?webdesign" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Modern Web Design Tips</h3>
      <p>Improve user experience with clean layouts and fast loading pages.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 30, 2025 • No Comments</div>
  </div>

  <!-- CARD 7 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?analytics" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Understanding Google Analytics</h3>
      <p>Track performance and optimize campaigns with data-driven insights.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 15, 2025 • No Comments</div>
  </div>

  <!-- CARD 8 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?ecommerce" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>E-commerce Growth Tips</h3>
      <p>Increase online sales with optimized product pages and ads.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">December 5, 2025 • No Comments</div>
  </div>

  <!-- CARD 9 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?ppc" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>PPC Advertising Guide</h3>
      <p>Learn how to run profitable Google and Meta ad campaigns.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">November 25, 2025 • No Comments</div>
  </div>

  <!-- CARD 10 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?startup" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Startup Marketing Blueprint</h3>
      <p>Effective strategies to grow your startup from zero to scale.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">November 10, 2025 • No Comments</div>
  </div>

  <!-- CARD 11 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?technology" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Future of Digital Technology</h3>
      <p>Explore how AI and automation are transforming marketing.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">October 28, 2025 • No Comments</div>
  </div>

  <!-- CARD 12 -->
  <div class="blog-card">
    <div class="blog-image">
      <img src="https://source.unsplash.com/600x400/?business" alt="">
      <span class="badge">BLOG</span>
    </div>
    <div class="blog-content">
      <h3>Business Growth Strategies</h3>
      <p>Proven methods to scale revenue and improve brand authority.</p>
      <a href="#" class="read-more">READ MORE »</a>
    </div>
    <div class="blog-meta">October 15, 2025 • No Comments</div>
  </div>
  
  <?php endif; ?>

</div>

</div>

</div>
    

    <!-- <div class="pagination">
      <a href="#">« Previous</a>
      <a href="#" class="active">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">Next »</a>
    </div> -->

    <div class="pagination">

<?php if($page > 1): ?>
  <a href="?page=<?php echo $page-1; ?>">« Previous</a>
<?php endif; ?>

<a href="?page=1" class="<?php echo ($page==1)?'active':''; ?>">1</a>
<a href="?page=2" class="<?php echo ($page==2)?'active':''; ?>">2</a>
<a href="?page=3" class="<?php echo ($page==3)?'active':''; ?>">3</a>
<a href="?page=4" class="<?php echo ($page==4)?'active':''; ?>">4</a>

<?php if($page < 4): ?>
  <a href="?page=<?php echo $page+1; ?>">Next »</a>
<?php endif; ?>

</div>

  </div>
</section>

<!-- FOOTER -->
<?php include '../blog_page/blog_footer.php'; ?>
<script src="../blog_page/blog_js/blog_script.js"></script>


</body>
</html>