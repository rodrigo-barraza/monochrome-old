<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="title" content="Rodrigo Barraza">
<meta http-equiv="Content-Type"  content="text/html; charset=utf-8" />
<link REL="shortcut icon" HREF="http://www.monochro.me/favicon.ico">
<meta content="Contact information of Vancouver based photographer Rodrigo Barraza" name="description">
<meta name="keywords" content="about, rodrigo barraza, contact, email, comission, freelance, comission, fine-art, tumblr, flickr, 500px, behance, google plus" >
<meta http-equiv="Content-Type"  content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible"  content="IE=EmulateIE7" />
<meta name="viewport" content = "width = 600, user-scalable = no" />  
<title>Rodrigo Barraza — Contact</title>

<?php include '../include/header.php'; ?>
<body itemscope itemtype="http://schema.org/ContactPage">
<?php include '../include/navigation.php'; ?>
<main class="contact">
   <div class="block5" itemprop="name" itemscope itemtype="http://schema.org/Person">
        <p><span itemprop="name">Rodrigo Barraza</span> is available for fine-art, commercial and private comission based work.</p>
        <p><span itemprop="name">Delivering photographic goods within Canada and the United States.</p>
        <p><span itemprop="address">Providing local photography services at 502 - 111 West Georgia Street, Vancouver, BC, Canada.</p>
        <h1>Inquiries</h1>
        <ul>
            <ol><a href="mailto:rodrigo@monochro.me" itemprop="email">rodrigo@monochro.me</a></ol>
        </ul>
        <h1>Links</h1>
        <ul>
            <ol><a target="_blank" href="http://barraza.me/" itemprop="url" rel="author">Journal</a></ol>
            <ol><a target="_blank" href="http://www.flickr.com/photos/rodrigobarraza/" itemprop="url" rel="author">Flickr Photostream</a></ol>
            <ol><a target="_blank" href="http://vimeo.com/rodrigobarraza" itemprop="url" rel="author">Vimeo Videos</a></ol>
            <ol><a target="_blank" href="https://plus.google.com/u/0/113029346575842062898?rel=author" rel="author">Google+</a></ol>
            <ol><a target="_blank" href="https://plus.google.com/b/113008674012193933202/113008674012193933202/about?rel=author" rel="author">Business+</a></ol>
            <ol><a target="_blank" href="http://500px.com/rodrigobarraza" itemprop="url" rel="author">500px Photos</a></ol>
            <ol><a target="_blank" href="http://www.behance.net/rodrigobarraza" itemprop="url" rel="author">Behance Projects</a></ol>
        </ul>
   </div>
    <div class="block5">
    	<h1>Message</h1>
        <form id="contact" name="contact" method="post" action="../include/mail.php" onsubmit="return checkEmail(this)">
        <ol>
            	<li><input id="email" hint="test" type="text" value="" name="email"></li>
            	<li><input id="name" hint="test" type="text" value="" name="name"></li>
            	<li><textarea id="msg" hint="test" rows="6" cols="59" name="msg"></textarea></li>
                <li><input class="submit" type="submit" name="submit" value="Send"></li> 
        </ol>
        </form>
        <!-- <img class="polaroid" src="../img/polaroid.png" /> -->
    </div>
</main>
</body>
</html>