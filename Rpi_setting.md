# Raspberry Pi setting instructions For Windows

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
