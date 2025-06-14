---
title: WLAN-Access-Point
type: docs
---
Dieser Abschnitt beschreibt die Konfiguration eines Raspberry Pi als WLAN-Access-Point.

## 1. Software installieren

Als erstes müssen die benötigten Software-Pakete installiert werden.

```bash
sudo apt update && sudo apt install dnsmasq hostapd iptables dhcpcd5 -y
```

Dies installiert die folgenden Pakete:
- `dnsmasq`: DNS- und DHCP-Server
- `hostapd`: WLAN-Access-Point-Software
- `iptables`: Firewall-Software
- `dhcpcd5`: DHCP-Client-Software*

*(Raspberry Pi verwendet ansonsten einen eigenen DHCP-Client)

## 2. Statische IP-Adresse

Anschliessend wird die statische IP-Adresse für das WLAN-Interface konfiguriert.

```bash
sudo nano /etc/dhcpcd.conf
```

```
interface wlan0
static ip_address=192.168.1.1/24
nohook wpa_supplicant
```


Dieser Schritt definiert, dass das WLAN-Interface `wlan0` die statische IP-Adresse `192.168.1.1/24` erhält und keine `wpa_supplicant`-Konfiguration verwendet.

Der Raspberry Pi wird somit als WLAN-Router konfiguriert und erhält die IP-Adresse `192.168.1.1` und kann mit dieser IP-Adresse über das WLAN-Interface erreicht werden.

```bash
sudo systemctl restart dhcpcd
```

## 3. Dynamische IP-Adressen

Um neuen Clients dynamische IP-Adressen zuweisen zu können, wird der DHCP-Server konfiguriert.

```bash
sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf_alt
sudo nano /etc/dnsmasq.conf
```

```ini
# DHCP-Server aktiv für WLAN-Interface
interface=wlan0

# DHCP-Server nicht aktiv für Ethernet-Interface
no-dhcp-interface=eth0

# IPv4-Adressbereich des Routers und Release-Time
dhcp-range=192.168.1.100,192.168.1.200,255.255.255.0,24h

# DNS
dhcp-option=option:dns-server,192.168.1.1

# Domain
domain=algaecare
address=/host.algaecare/192.168.1.1
```

Der DHCP-Server ist somit aktiviert und weist neuen Clients im Adressbereich `192.168.1.100-200` dynamische IP-Adressen zu. Nach `24 Stunden` wird die IP-Adresse wieder freigegeben.

Zudem wird der DNS-Server auf die IP-Adresse `192.168.1.1` gesetzt und die Domain `algaecare` definiert. Die Domain `host.algaecare` wird auf die IP-Adresse `192.168.1.1` gemappt, somit ist der Raspberry Pi unter `host.algaecare` erreichbar.

```bash
dnsmasq --test -C /etc/dnsmasq.conf
```

```bash
sudo systemctl restart dnsmasq
```

```bash
sudo systemctl enable dnsmasq
```

## 4. WLAN-Interface konfigurieren

Anschliessend wird das WLAN-Interface konfiguriert. Hier wird der WLAN-Access-Point definiert, mit dem sich Clients verbinden können.

```bash
sudo nano /etc/hostapd/hostapd.conf
```

```bash
# WLAN-Router-Betrieb

# Schnittstelle und Treiber
interface=wlan0
#driver=nl80211

# WLAN-Konfiguration
ssid=algaecare
channel=1
hw_mode=g
ieee80211n=1
ieee80211d=1
country_code=CH
wmm_enabled=1

# WLAN-Verschlüsselung
auth_algs=1
wpa=2
wpa_key_mgmt=WPA-PSK
rsn_pairwise=CCMP
wpa_passphrase=ip12FHNW2025!
```

In dieser Konfiguration wird das WLAN-Interface `wlan0` als Access-Point konfiguriert. Der Access-Point wird mit dem Namen `algaecare` betrieben und verwendet den WLAN-Kanal `1` mit dem Frequenzband `2.4 GHz` (`2.4 GHz` Kanäle sind in der Schweiz von `1-13` verfügbar).

Zur Verschlüsselung wird `WPA2` verwendet und das Passwort `ip12FHNW2025!` definiert.

```bash
sudo nano /etc/default/hostapd
```

```bash
RUN_DAEMON=yes
DAEMON_CONF="/etc/hostapd/hostapd.conf"
```

```bash
sudo systemctl unmask hostapd
sudo systemctl start hostapd
sudo systemctl enable hostapd
```

```bash
sudo systemctl status hostapd
```

## 5. Ethernet to WLAN Bridge (optional)

Dieser Abschnitt beschreibt die Konfiguration einer Ethernet-to-WLAN-Bridge.

Somit kann der Raspberry Pi als WLAN-Router verwendet werden und die Internetverbindung über das Ethernet-Interface bereitstellen. Falls keine Internetverbindung über das Ethernet-Interface bereitgestellt werden soll, kann dieser Abschnitt übersprungen werden. Der WIFI-Access-Point funktioniert auch ohne Internetverbindung.

```bash
sudo nano /etc/sysctl.conf
```

```ini
net.ipv4.ip_forward=1
```

```bash
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```

```bash
sudo sh -c "iptables-save > /etc/iptables.ipv4.nat"
```

```bash
sudo nano /etc/rc.local
```

```bash
iptables-restore < /etc/iptables.ipv4.nat
```

```bash
sudo reboot
```


## 6. Autostart Boot (important)

Nach einem Reboot wird der WLAN-Access-Point nicht automatisch gestartet. Um den WLAN-Access-Point automatisch zu starten, muss der `hostapd`-Service nach dem `dhcpcd`-Service gestartet werden. Dies ist eine manuelle Konfiguration, da der `hostapd`-Service nicht automatisch gestartet wird.

```bash
sudo nano /etc/systemd/system/delayed-hostapd-restart.service
```

```ini
[Unit]
Description=Delayed Restart of hostapd Service
After=multi-user.target

[Service]
Type=oneshot
ExecStart=/bin/bash -c 'sleep 2; systemctl restart hostapd'
RemainAfterExit=true

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
```

```bash
sudo systemctl enable delayed-hostapd-restart.service
```

## Quellenangaben und weitere Informationen

- [How to install updates via command line?](https://askubuntu.com/questions/196768/how-to-install-updates-via-command-line)
- [Turn your RaspberryPi into a WiFi Router!](https://www.youtube.com/watch?v=laeOmNDE-Ac)
- [raspi-config for access points](https://www.raspberrypi.com/documentation/computers/configuration.html)
- [Raspberry Pi als WLAN-Router einrichten (WLAN-Access-Point)](https://www.elektronik-kompendium.de/sites/raspberry-pi/2002171.htm)