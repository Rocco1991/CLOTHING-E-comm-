const createFooter = () => {
    let footer = document.querySelector('footer'); /* ide bez točke ('footer'); E1 51:10 */
    footer.innerHTML = `
    
    <div class="footer-content">
    <img src="imgs/dark-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">MEN</li>
            <li><a href="#" class="footer-link">T-SHIRTS</a></li>
            <li><a href="#" class="footer-link">SWEATSHIRT</a></li>
            <li><a href="#" class="footer-link">JEANS</a></li>
            <li><a href="#" class="footer-link">TROUSERS</a></li>
            <li><a href="#" class="footer-link">SHOES</a></li>
            <li><a href="#" class="footer-link">CASUALS</a></li>
            <li><a href="#" class="footer-link">FORMALS</a></li>
            <li><a href="#" class="footer-link">SPORTS</a></li>
            <li><a href="#" class="footer-link">WATCH</a></li>
        </ul>

        <ul class="category">
            <li class="category-title">WOMEN</li>
            <li><a href="#" class="footer-link">T-SHIRTS</a></li>
            <li><a href="#" class="footer-link">SWEATSHIRT</a></li>
            <li><a href="#" class="footer-link">JEANS</a></li>
            <li><a href="#" class="footer-link">TROUSERS</a></li>
            <li><a href="#" class="footer-link">SHOES</a></li>
            <li><a href="#" class="footer-link">CASUALS</a></li>
            <li><a href="#" class="footer-link">FORMALS</a></li>
            <li><a href="#" class="footer-link">SPORTS</a></li>
            <li><a href="#" class="footer-link">WATCH</a></li>
        </ul>
    </div>
    <div class="footer-social-container">
        <div>
            <a href="https://www.facebook.com/"><img src="imgs/facebook.png" class="img-fluid w-auto h-auto m-2" alt="Facebook Link">Facebook &#xae;</a>
        </div>

        <div class>
            <a href="https://www.youtube.com/"><img src="imgs/youtube.png" class="img-fluid w-auto h-auto m-2" alt="Youtube Link">Youtube &#xae;</a>
        </div>

        <div class>
            <a href="https://www.instagram.com/"><img src="imgs/instagram.png" class="img-fluid w-auto h-auto m-2" alt="Instagram Link">Instagram &#xae;</a>
        </div>

        <div class>
            <a href="https://www.tiktok.com/"><img src="imgs/twitter.png" class="img-fluid w-auto h-auto m-2" alt="Tik-Tok Link">Tik Tok &#xae;</a>
        </div>

        <div class>
            <a href="https://twitter.com/"><img src="imgs/skype.png" class="img-fluid w-auto h-auto m-2" alt="Twitter Link">Twitter &#xae;</a>
        </div>

    </div>
</div>

</div>
<p class="footer-title">ADDRESS & TELEPHONE:</p>
<p class="info">OSTRAVSKA 37, 21000 SPLIT,ST CROATIA</p>
<p class="info">+385981234233</p>
<p class="info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione at quasi quod commodi repellat odit temporibus necessitatibus fuga tempore aliquid accusamus repudiandae reprehenderit deleniti, quidem quae quam vero molestiae? <br>            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione at quasi quod commodi repellat odit temporibus necessitatibus fuga tempore aliquid accusamus repudiandae reprehenderit deleniti, quidem quae quam vero molestiae?</p>

<div class="copyright mt-5">
    <div class="row container mx-auto">
        <div class="">
            <p>E-Commerce <a href="https://hr.linkedin.com/in/roko-gruica-3b9256132">CHRIS ROCCO</a> All Rights Reserved, March 2023</p>
        </div>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">TERMS & SERVICES</a>
            </div>

            <div>
                <a href="#" class="social-link">PRIVACY PAGE</a>
            </div>

        </div>
    </div>
</div>
    
    `;
}

createFooter();