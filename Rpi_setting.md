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
}
</code></pre>  
7. Install Bonjour Service: https://support.apple.com/kb/DL999?locale=en_US  
8. Intall putty: https://www.putty.org
9. Use putty to ssh into Rpi: host name: raspberrypi.local
