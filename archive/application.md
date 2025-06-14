---
title: Algae Care App
type: docs
---
## Setup

1. Verify Your Java Version

```bash
java -version
```

- If you are using OpenJDK (e.g., openjdk-21+), it does not include JavaFX by default.
- You will need to install JavaFX separately.

2. Install JavaFX

```bash
wget -O ~/openjfx.zip https://download2.gluonhq.com/openjfx/23.0.1/openjfx-23.0.1_linux-aarch64_bin-sdk.zip
mkdir -p ~/openjfx
mv ~/openjfx/openjfx-23.0.1* ~/openjfx/sdk
```

Verify the installation by running the following command:

```bash
java --module-path /usr/share/openjfx/lib --add-modules javafx.controls,javafx.fxml -version
```