---
title: SMB-Server
type: docs
---
Der SMB-Server ermöglicht den Zugriff auf Dateien und Verzeichnisse über das Netzwerk. Der Raspberry Pi wird somit zu einem Dateiserver.

## 1. Software installieren

Als erstes müssen die benötigten Software-Pakete installiert werden.

```bash
sudo apt-get update
sudo apt-get install samba samba-common smbclient -y
```
Dies installiert die folgenden Pakete:
- `samba`: SMB-Server-Software
- `samba-common`: Gemeinsame Dateien für Samba
- `smbclient`: SMB-Client-Software


## 2. Samba-Server konfigurieren

Als erstes wird die Konfigurationsdatei von Samba gesichert und eine neue Konfigurationsdatei erstellt.

```bash
sudo mv /etc/samba/smb.conf /etc/samba/smb.conf_alt
sudo nano /etc/samba/smb.conf
```

```ini
[global]
workgroup = WORKGROUP
security = user
encrypt passwords = yes
client min protocol = SMB2
client max protocol = SMB3
```

Diese Konfiguration ist ein Minimalbeispiel für eine Samba-Konfiguration.

```bash
testparm # Parameter überprüfen
```

```bash
sudo service smbd restart
sudo service nmbd restart
```

## 3. Samba-Freigaben einrichten

Dieser Abschnitt beschreibt, wie ein Verzeichnis für die Freigabe über Samba eingerichtet wird.

```bash
sudo mkdir /home/pi/algaecare
```

Ein Verzeichnis wird erstellt, das für die Freigabe über Samba vorgesehen ist.

```bash
# Berechtigungen für root
sudo chown root:root /home/pi/algaecare
sudo chmod 777 /home/pi/algaecare

# Berechtigungen für users
sudo chown root:users /home/pi/algaecare
sudo chmod 770 /home/pi/algaecare

# Berechtigungen für pi
sudo chown pi:pi /home/pi/algaecare
sudo chmod 700 /home/pi/algaecare
```

Berechtigungen für das Verzeichnis werden gesetzt.

```bash
sudo nano /etc/samba/smb.conf
```

```ini
[AlgaeCare]
comment = AlgaeCare-Freigabe
path = /home/pi/algaecare
read only = no
```

Der Pfad des zu freigebenden Verzeichnisses wird angegeben, sowie die Berechtigungen für die Freigabe.

## 4. Benutzer hinzufügen

**Wichtig:** Die Benutzerverwaltung für Samba findet durch das Betriebssystem und Samba statt. Das bedeutet, Samba benutzt die eingerichteten Benutzernamen und die Datei- und Verzeichnisberechtigungen des Betriebssystems.

```bash
sudo smbpasswd -a pi
```

Das gilt **nicht** für die Passwörter der Benutzer.

## 5. Mit Samba verbinden

Um sich mit dem Samba-Server zu verbinden, wird der Dateimanager verwendet. Für genauere Anweisungen bitte die Dokumentation des Dateimanagers konsultieren.

## Quellenangaben und weitere Informationen

- [Samba-Freigabe auf dem Raspberry Pi einrichten](https://www.elektronik-kompendium.de/sites/raspberry-pi/2007071.htm)
