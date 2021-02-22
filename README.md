# The Evolution of Trust

This is a modification to put the game into Raspberry Pi Kiosk mode.   
The whole game is running offline in loop.  
The purpose of this project is to have an interactive device to let people play this game on a touch screen. Probably while they hang around in a mall or happen to see the device installation. The demo is done with smaller touch screen, but it can be working on larger touch screen as well. 
22/02/2021 by Asvoria Kuan

# The Original
This game is designed by Nicky Case: https://ncase.me/  
Please send love, praises and support to the original author!
For the original repository:  
https://github.com/ncase/trust

#	PLAY IT HERE: [http://ncase.me/trust/](http://ncase.me/trust/)

*The Evolution of Trust* is dedicated to the public domain, and is made thanks to the many Creative Commons & open source resources out there! Here is a full list of music, sounds, and code used:

**Music:** "Bleu" by Komiku (CC Zero). [Download their full album on Free Music Archive](http://freemusicarchive.org/music/Komiku/Its_time_for_adventure_/)

**Sound Effects:**

* [Coin insert](https://freesound.org/people/bassmosphere/sounds/384700/) by bassmosphere (CC Zero)
* [Coin get!](https://freesound.org/people/plasterbrain/sounds/242857/) by plasterbrain (CC Zero)
* [Evil Laugh](https://freesound.org/people/JohnsonBrandEditing/sounds/173933/) by JohnsonBrandEditing (CC Zero)
* [Slot machine](https://freesound.org/people/lukaso/sounds/69689/) by lukaso (CC Sampling+)
* [Drumroll](https://freesound.org/people/adriann/sounds/191718/) by adriann (CC Zero)
* [click plink pop boop bonk](https://freesound.org/people/Owdeo/sounds/116653/) by Owdeo (CC BY-NC)
* [Swoosh](https://freesound.org/people/aglinder/sounds/264468/) by aglinder (CC Zero)
* [Squeaky Toy](https://freesound.org/people/survivalzombie/sounds/240015/) by survivalzombie (CC Zero)
* [Thump](https://freesound.org/people/Brokenphono/sounds/344149/) by Brokenphono (CC Zero)
* [Fart](https://freesound.org/people/DSISStudios/sounds/241000/) by DSISStudios (CC Zero)

**Open Source Libraries:**

* [PIXI.js](http://www.pixijs.com/) for rendering graphics
* [Howler.js](https://howlerjs.com/) for the audio
* [Tween.js](http://www.createjs.com/tweenjs) for tweening animation
* [Balloon.css](https://kazzkiq.github.io/balloon.css/) for pop-up tooltips
* [Q](https://github.com/kriskowal/q/) for promises
* [MinPubSub](https://github.com/daniellmb/MinPubSub) for publish/subscribe
* [Pegasus](https://github.com/typicode/pegasus) for me being too lazy to write my own XHR

**Font:** [Futura Handwritten](http://www.dafont.com/futurahandwritten.font) by Bill Snyder

#	Translation Available!

**[IMPORTANT:
BEFORE YOU DECIDE TO MAKE A TRANSLATION, CHECK THE "ISSUES" TAB ABOVE,
TO SEE IF SOMEONE ELSE IS ALREADY WORKING ON IT.
If so, maybe you can collaborate!
And if no one else is, PLEASE CREATE A NEW ISSUE in this repo
so that others know you're working on it!]**

Translations done so far:
[Japanese](https://htlife.github.io/trust_jp/),
[Chinese (Simplified)](https://sekai.co/trust/),
[Chinese (Taiwan)](https://audreyt.github.io/trust-zh-TW/),
[Brazilian Portuguese](https://brunolemos.github.io/trust/),
[French](https://ayowel.github.io/trust/),
[Spain Spanish](https://ccamara.github.io/trust/),
[Latin American Spanish](https://maeriens.github.io/trust/),
[Russian](https://notdotteam.github.io/trust/),
[German](https://jkoelling.github.io/trust/),
[Italian](https://lvdt.github.io/trust/),
[Turkish](https://osaatcioglu.github.io/trust),
[Polish](https://sin.github.io/trust/),
[Vietnamese](https://nghiatt90.github.io/trust-vn/),
[Greek](https://lightspot21.github.io/trust/),
[Persian/Farsi](https://hamed.github.io/trust/),
[Hungarian](http://ncase.me/trust-hu/),
[Catalan](https://fbricart.github.io/trust/),
[Arabic](https://mudaraljundi.github.io/trust/),
[Bulgarian](http://ncase.me/trust-bg/),
[Korean](https://osori.github.io/trust-ko/),
[Romanian](https://enfactorial.github.io/trust/),
[Ukrainian](https://yaroslav-f.github.io/trust/),
[Croatian](http://www.varljiv.org/evolucija-povjerenja/index.html),
[Swedish](http://trust.alicedarner.se/),
[Estonian](http://ncase.me/trust-et/),
[Czech](https://nextghost.github.io/trust/),
[Latvian](https://reversedfate.github.io/trust/),
[Dutch](https://rayraz.github.io/trust/),
[Finnish](https://1luap.github.io/trust/),
[Danish](https://mok0.github.io/trust/),
[Bahasa Indonesia](https://chairulakmal.github.io/trust/)
[Albanian](https://kreshnik.github.io/trust/),
[Macedonian](https://stosto2.github.io/trust/),
[Slovenian](https://matejko124.github.io/trust/),
[Armenian](https://kamee.gitlab.io/trust/),
[Filipino (Tagalog)](https://tiwalaph.github.io/TiwalaPH/)

# Raspberry Pi Setup Instructions For Windows

1. Download Raspbian lite: https://www.raspberrypi.org/software/operating-systems/  
2. Format SD card using SD Card Formatter: https://www.sdcard.org/downloads/formatter/  
3. Download Balena Etcher: https://www.balena.io/etcher/
4. Etche the Raspbian lite image to SD card.
5. Un-plug and plug the SD card, in the card, create file "ssh" with a single space.
6. Create a file in the root of boot called: wpa_supplicant.conf (instructions below). Then paste the following into it (adjusting for your ISO 3166 alpha-2 country code, network name and network password):  
<pre><code>country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="NETWORK-NAME"
    psk="NETWORK-PASSWORD"
    key_mgmt=WPA-PSK
}
</code></pre>  
7. Intall putty: https://www.putty.org
8. Use putty to ssh into Rpi: find the Ip address when power on Rpi
9. Update: sudo apt-get update  
10. Configure startup settings:  
<pre><code>sudo raspi-config</code></pre>  
11. System Options>boot>Console Autologin  
12. Install minimum GUI components  
<pre><code>sudo apt-get install --no-install-recommends xserver-xorg x11-xserver-utils xinit openbox</code></pre>  
14. Install Chromium Web browser  
<pre><code>sudo apt-get install --no-install-recommends xserver-xorg x11-xserver-utils xinit openbox</code></pre>  
15. Edit Openbox config: When Openbox launches at startup it will run two scripts in the /etc/xdg/openbox folder. The first, environment will setup any environment variables, etc. The second, autostart will setup and launch whatever app you specify.

16. Edit the autostart file and then how to add environment variables to support it.
<pre><code>sudo nano /etc/xdg/openbox/autostart</code></pre>  
<pre><code>xset -dpms       # turn off display power management system
xset s noblank   # turn off screen blanking
xset s off       # turn off screen saver

# Remove exit errors from the config files that could trigger a warning
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' ~/.config/chromium/'Local State'
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/; s/"exit_type":"[^"]\+"/"exit_type":"Normal"/' ~/.config/chromium/Default/Preferences

# Start local server
/usr/local/bin/http-server /home/pi/trust &

# Run Chromium in kiosk mode
chromium-browser  --noerrdialogs --disable-infobars --kiosk $KIOSK_URL

--check-for-update-interval=31536000
</code></pre>  
18. Download the game from github  
<pre><code>sudo apt-get install git</code></pre>  
<pre><code>sudo git clone https://github.com/Asvoria/trust_Kiosk_Rpi_loop</code></pre>  
19. Install npm and http-server: 
<pre><code>sudo apt-get install npm</code></pre>  
<pre><code>sudo npm install npm@latest -g</code></pre>  
<pre><code>sudo npm install -g http-server</code></pre>  
19. Setup the environment  
<pre><code>sudo nano /etc/xdg/openbox/environment</code></pre>  
<pre><code>export KIOSK_URL=http://localhost:8080/</code></pre>  
20. Start the X server on boot  
<pre><code>touch ~/.bash_profile</code></pre> 
<pre><code>sudo nano ~/.bash_profile</code></pre> 
<pre><code>[[ -z $DISPLAY && $XDG_VTNR -eq 1 ]] && startx -- -nocursor</code></pre>  
21. Run the following line and then reboot:    
<pre><code>source ~/.bash_profile</code></pre> 
<pre><code>npm install npm@latest -g</code></pre>  
<pre><code>sudo reboot</code></pre>  

## Offline code edit
Since the device is not connected to internet, all links that is directed to outside may not work. Therefore, the fork of this repository had the links deactivated.  

There are only 2 version available at my repository: English and Chinese (Simplified)


#	"LICENSE"

[Creative Commons Zero](https://github.com/ncase/trust/blob/gh-pages/LICENSE): it's a public domain dedication, so basically, do whatever you want! Attribution is super appreciated, but I'm not gonna send legal goons after you or anything.
