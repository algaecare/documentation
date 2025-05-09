---
title: Dokumentation-Server
type: docs
---

Dieser Abschnitt beschreibt die Konfiguration des Dokumentationsservers des Raspberry Pi.

{{< callout type="info" >}}
Sobald ein Client mit dem WLAN-Netzwerk des Raspberry Pi verbunden ist, kann die Dokumentation über die IP-Adresse des Raspberry Pi erreicht werden:
- `http://192.168.1.1`
- `https://host.algaecare`
{{< /callout >}}

## Installation

### 1. Software installieren

Als erstes müssen die benötigten Software-Pakete installiert werden.

```bash
sudo apt install nginx -y
```

Dies installiert die folgenden Pakete:
- `nginx`: Webserver-Software

### 2. Dokumentationsverzeichnis einrichten

Anschliessend wird das Verzeichnis für die Dokumentation eingerichtet. Das Verzeichnis wird von der SMB-Freigabe verwendet, um die Dokumentation bereitzustellen. Somit muss ein symbolischer Link der beiden Verzeichnisse erstellt werden, sowie die Berechtigungen angepasst werden.

```bash
sudo ln -s /home/pi/algaecare/docs /var/www/algaecare
```

```bash
sudo chmod +x /home/pi
sudo chmod -R 755 /home/pi/algaecare
sudo chmod -R 755 /home/pi/algaecare/docs
sudo chown -R www-data:www-data /home/pi/algaecare/docs
```

### 3. Nginx-Konfiguration

Zum Schluss wird die Nginx-Konfiguration angepasst, um die Dokumentation bereitzustellen.

```bash
sudo nano /etc/nginx/sites-available/default
```

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/algaecare;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Dieser Schritt definiert, dass der Webserver auf Port 80 lauscht und die Dokumentation im Verzeichnis `/var/www/algaecare` bereitstellt. Somit ist die Dokumentation über die IP-Adresse des Raspberry Pi erreichbar.

```bash
sudo systemctl restart nginx
```

## Verwendung

Sobald die Einrichtung abgeschlossen ist, kann die Dokumentation über die IP-Adresse des Raspberry Pi erreicht werden.

Um die Dokumentation zu aktualisieren müssen folgende Schritte durchgeführt werden:
1. Mit dem AlgaeCare-WLAN verbinden
2. SMB-Client verbinden, sodass auf das File-System zugegriffen werden kann
3. Das `docu` Repository lokal öffnen
4. `deploy.sh` Skript ausführen - dieses builded die Dokumentation und kopiert die gesamten Inhalte auf den Raspberry Pi, in den `/home/pi/algaecare/docu` Ordner.

### `deploy.sh` Skript

```bash
#!/bin/bash
#
# This script checks if you are connected to the network and the SMB share is available.
# If connected, it builds the project using pnpm (if available) or npm,
# and then copies the build output to a specified SMB share.
#

# Set the SMB share destination. Update this to your actual SMB share mount point.
SMB_DEST="/Volumes/AlgaeCare/docs/"

# Prompt the user to confirm network connectivity.
read -p "Are you connected to the network and to the SMB-Share? (y/n): " response
if [[ "$response" != "y" && "$response" != "Y" ]]; then
    echo "Network not available. Exiting."
    exit 1
fi

# Check for pnpm; if not found, default to npm.
if command -v pnpm >/dev/null 2>&1; then
    echo "Using pnpm for build."
    build_cmd="pnpm run build"
else
    echo "Using npm for build."
    build_cmd="npm run build"
fi

# Build the project.
echo "Starting build..."
$build_cmd
if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

# Ensure build output directory exists; adjust 'build' to match your project.
if [ ! -d "out" ]; then
    echo "Build output directory 'out' not found. Exiting."
    exit 1
fi

# Copy the build files to the SMB share.
echo "Copying build files to SMB share at $SMB_DEST..."
cp -R out/* "$SMB_DEST"
if [ $? -eq 0 ]; then
    echo "Files copied successfully."
else
    echo "Failed to copy files."
fi
```