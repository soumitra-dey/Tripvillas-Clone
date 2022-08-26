function getnavbar(){
    return`<header >
    <nav>

        <h1 id="logo">
            <img src="https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png
            " alt="TRIPVILLAS">
        </h1>
        
        <ul class="right">
            <ul id="signin"><span><img id="userimg" src="https://cdn-user-icons.flaticon.com/77563/77563239/1661351548416.svg?token=exp=1661449500~hmac=50be8557fc9f6fa97812c965ed5f6181" alt="error"></span>
                <ul id="sign">
                    <li ><a href="">SIGN IN</a> </li>
                    <li ><a href="">SIGN UP</a> </li>
                </ul>
                
            </ul>
            <ul id="atul" ><span id="rohit">INR</span>
               <i style="color:white" class="fas fa-caret-down"></i>
                <ul id="alex">
                    <li class="opt">AED</li>
                    <li class="opt">AUD</li>
                    <li class="opt">BRL</li>
                    <li class="opt">CAD</li>
                    <li class="opt">CHF</li>
                    <li class="opt">CZK</li>
                    <li class="opt">DKK</li>
                    <li class="opt">EUR</li>
                    <li class="opt">GBP</li>
                    <li class="opt">HKD</li>
                    <li class="opt">HUF</li>
                    <li class="opt">INR</li>
                    <li class="opt">ILS</li>
                    <li class="opt">INR</li>
                    <li class="opt">JPY</li>
                    <li class="opt">MXN</li>
                    <li class="opt">NOK</li>
                    <li class="opt">NZD</li>
                    <li class="opt">PHP</li>
                    <li class="opt">PLN</li>
                    <li class="opt">SEK</li>
                    <li class="opt">SGD</li>
                    <li class="opt">THB</li>
                    <li class="opt">TRY</li>
                    <li class="opt">TWD</li>
                    <li class="opt">USD</li>
                </ul>
            </ul>

            <input type="checkbox"  id="opensidebarmenu">
            <label for="opensidebarmenu" class="sidebaricon">
                <div class="spinner top"></div>
                <div class="spinner middle"></div>
                <div class="spinner bottom"></div>
            </label>
            
            <div class="sidebarmenu">
                <div class="menu" >
                    <ul>
                        
                        <li>ARE YOU A PROPERTY OWNER/MANAGER?</li>
                        <li><a href="">List New Property</a></li>
                        <li><a href="">Sign In To Your Dashboard</a></li>
                    </ul>
                    <ul>
                        <li>HOLIDAY HOMES FOR SALE</li>
                        <li><a href="">Tripvillas Managed</a> </li>
                        <li><a href="">Homes from A grade developers. Rentals guaranteed</a> </li>
                        <li><a href="">Marketplace</a> </li>
                        <li><a href="">See what homes are up for sale from different property owners.</a> </li>

                    </ul>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <ul>
                        <li>© Tripvillas Pte Ltd</li>
                    </ul>
                </div>
                
            </div>
        </ul>

    </nav>
</header>`
}

export default getnavbar 


