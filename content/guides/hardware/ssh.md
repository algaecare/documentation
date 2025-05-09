---
title: SSH
type: docs
---
# SSH

[//]: # (Changing the hostname on a Linux system depends on your distribution. Here’s how you can do it:)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (1. Temporary Change &#40;Until Reboot&#41;)

[//]: # ()
[//]: # (This method will change the hostname immediately but revert after a reboot.)

[//]: # ()
[//]: # (sudo hostnamectl set-hostname NEW_HOSTNAME)

[//]: # ()
[//]: # (For example, to change the hostname to myserver:)

[//]: # ()
[//]: # (sudo hostnamectl set-hostname myserver)

[//]: # ()
[//]: # (Verify the change with:)

[//]: # ()
[//]: # (hostname)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (2. Permanent Change &#40;Survives Reboot&#41;)

[//]: # ()
[//]: # (For a permanent hostname change, follow these steps:)

[//]: # ()
[//]: # (For Modern Linux Distributions &#40;Systemd-based&#41;)

[//]: # (1.	Change the hostname:)

[//]: # ()
[//]: # (sudo hostnamectl set-hostname NEW_HOSTNAME)

[//]: # ()
[//]: # ()
[//]: # (	2.	Edit the /etc/hosts file:)

[//]: # ()
[//]: # (sudo nano /etc/hosts)

[//]: # ()
[//]: # (Find the line with the current hostname and change it to the new one:)

[//]: # ()
[//]: # (127.0.0.1   localhost)

[//]: # (127.0.1.1   NEW_HOSTNAME)

[//]: # ()
[//]: # ()
[//]: # (	3.	Restart the system &#40;or restart the hostname service&#41;:)

[//]: # ()
[//]: # (sudo reboot)

[//]: # ()
[//]: # (OR)

[//]: # ()
[//]: # (sudo systemctl restart systemd-hostnamed)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (For Older Linux Distributions &#40;Without Systemd&#41;)

[//]: # (1.	Manually edit the hostname file:)

[//]: # ()
[//]: # (sudo nano /etc/hostname)

[//]: # ()
[//]: # (Replace the old hostname with the new one and save the file.)

[//]: # ()
[//]: # (	2.	Edit /etc/hosts:)

[//]: # ()
[//]: # (sudo nano /etc/hosts)

[//]: # ()
[//]: # (Replace any reference to the old hostname with the new one.)

[//]: # ()
[//]: # (	3.	Apply changes without rebooting:)

[//]: # ()
[//]: # (sudo hostname NEW_HOSTNAME)

[//]: # ()
[//]: # ()
[//]: # (	4.	Restart networking services or reboot:)

[//]: # ()
[//]: # (sudo systemctl restart networking)

[//]: # ()
[//]: # (OR)

[//]: # ()
[//]: # (sudo reboot)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Verification)

[//]: # ()
[//]: # (After reboot, verify that the hostname has been changed successfully:)

[//]: # ()
[//]: # (hostnamectl)

[//]: # ()
[//]: # (or)

[//]: # ()
[//]: # (cat /etc/hostname)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Let me know if you need help with a specific Linux distro! 🚀)

[//]: # ()
[//]: # (Enabling password authentication on a Raspberry Pi &#40;especially for SSH&#41; requires modifying the SSH configuration. Here’s how you can do it:)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (1. Enable Password Authentication for SSH)

[//]: # ()
[//]: # (Step 1: Connect to the Raspberry Pi)

[//]: # (•	If you have direct access: Open a terminal.)

[//]: # (•	If you are connecting remotely: Use another device to SSH into the Pi:)

[//]: # ()
[//]: # (ssh pi@raspberrypi.local)

[//]: # ()
[//]: # (&#40;Replace raspberrypi.local with the actual IP address if needed.&#41;)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Step 2: Edit the SSH Configuration)

[//]: # (1.	Open the SSH configuration file:)

[//]: # ()
[//]: # (sudo nano /etc/ssh/sshd_config)

[//]: # ()
[//]: # ()
[//]: # (	2.	Find the following lines and modify/uncomment them:)

[//]: # ()
[//]: # (PasswordAuthentication yes)

[//]: # (PermitRootLogin no)

[//]: # ()
[//]: # (&#40;Make sure PasswordAuthentication yes is set to yes and not commented out.&#41;)

[//]: # ()
[//]: # (	3.	Save the file by pressing CTRL + X, then Y, and Enter.)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Step 3: Restart the SSH Service)

[//]: # ()
[//]: # (Apply the changes by restarting the SSH service:)

[//]: # ()
[//]: # (sudo systemctl restart ssh)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (2. Allow Password Authentication in raspi-config &#40;Optional&#41;)

[//]: # ()
[//]: # (If password authentication is disabled in Raspberry Pi OS settings, enable it using raspi-config:)

[//]: # (1.	Run:)

[//]: # ()
[//]: # (sudo raspi-config)

[//]: # ()
[//]: # ()
[//]: # (	2.	Go to Interfacing Options → SSH → Enable.)

[//]: # (	3.	Exit and reboot the system:)

[//]: # ()
[//]: # (sudo reboot)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (3. Set a Password &#40;If Needed&#41;)

[//]: # ()
[//]: # (If your user does not have a password set, you can assign one:)

[//]: # ()
[//]: # (sudo passwd pi)

[//]: # ()
[//]: # (&#40;Replace pi with your actual username.&#41;)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (4. Verify SSH Password Authentication)

[//]: # ()
[//]: # (From another machine, try logging in using SSH with a password:)

[//]: # ()
[//]: # (ssh pi@raspberrypi.local)

[//]: # ()
[//]: # (&#40;Enter the password when prompted.&#41;)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Let me know if you need further assistance! 🚀)

[//]: # ()
[//]: # (By default, ssh-copy-id copies the default SSH key &#40;~/.ssh/id_rsa.pub or ~/.ssh/id_ed25519.pub&#41; to the target machine. If you have multiple SSH keys and want to specify which one to use, follow these steps:)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Specify a Custom SSH Key for ssh-copy-id)

[//]: # ()
[//]: # (Use the -i option to specify the exact key file you want to copy:)

[//]: # ()
[//]: # (ssh-copy-id -i ~/.ssh/custom_key.pub pi@192.168.0.70)

[//]: # ()
[//]: # (Example)

[//]: # ()
[//]: # (If you have a key file named mykey_rsa.pub, use:)

[//]: # ()
[//]: # (ssh-copy-id -i ~/.ssh/mykey_rsa.pub pi@192.168.0.70)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Alternative: Manually Copy the Key)

[//]: # ()
[//]: # (If ssh-copy-id does not work for some reason, you can manually copy and append the key:)

[//]: # ()
[//]: # (Step 1: Copy the Key)

[//]: # ()
[//]: # (cat ~/.ssh/mykey_rsa.pub | ssh pi@192.168.0.70 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys")

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Step 2: Verify SSH Key Authentication)

[//]: # ()
[//]: # (Once copied, try connecting using the corresponding private key:)

[//]: # ()
[//]: # (ssh -i ~/.ssh/mykey_rsa pi@192.168.0.70)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Let me know if you need more help! 🚀)

[//]: # ()
[//]: # (The error suggests that ssh-copy-id is looking for the private key &#40;~/.ssh/AlgaeCare&#41; instead of the public key &#40;~/.ssh/AlgaeCare.pub&#41;. This can happen if the private key does not exist or the filename is incorrect.)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Fix 1: Verify the Key Files Exist)

[//]: # ()
[//]: # (First, check that the public key file actually exists:)

[//]: # ()
[//]: # (ls -l ~/.ssh/AlgaeCare.pub)

[//]: # ()
[//]: # (If the file is missing, you need to generate the key first:)

[//]: # ()
[//]: # (ssh-keygen -t rsa -b 4096 -f ~/.ssh/AlgaeCare)

[//]: # ()
[//]: # (&#40;Replace rsa with ed25519 if you prefer a more modern key type.&#41;)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Fix 2: Use the Correct File Path)

[//]: # ()
[//]: # (Run:)

[//]: # ()
[//]: # (ssh-copy-id -i ~/.ssh/AlgaeCare.pub pi@192.168.0.70)

[//]: # ()
[//]: # (If that still fails, try forcing the installation:)

[//]: # ()
[//]: # (ssh-copy-id -f -i ~/.ssh/AlgaeCare.pub pi@192.168.0.70)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Fix 3: Manually Copy the Key)

[//]: # ()
[//]: # (If ssh-copy-id still fails, manually copy the key using:)

[//]: # ()
[//]: # (cat ~/.ssh/AlgaeCare.pub | ssh pi@192.168.0.70 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys")

[//]: # ()
[//]: # (Then, test SSH access:)

[//]: # ()
[//]: # (ssh -i ~/.ssh/AlgaeCare pi@192.168.0.70)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Let me know if you need more help! 🚀)

[//]: # ()
[//]: # (To remove SSH keys from your Raspberry Pi, you need to delete or modify the authorized_keys file in the ~/.ssh/ directory of the user you’re managing &#40;e.g., pi&#41;.)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (1. Remove a Specific SSH Key)

[//]: # ()
[//]: # (If you want to remove a specific SSH key:)

[//]: # (1.	SSH into your Raspberry Pi &#40;or log in directly&#41;:)

[//]: # ()
[//]: # (ssh pi@192.168.0.70)

[//]: # ()
[//]: # ()
[//]: # (	2.	Edit the authorized_keys file:)

[//]: # ()
[//]: # (nano ~/.ssh/authorized_keys)

[//]: # ()
[//]: # ()
[//]: # (	3.	Find the key you want to remove &#40;each key is on a separate line&#41;.)

[//]: # (	4.	Delete the line containing the key.)

[//]: # (	5.	Save and exit &#40;Press CTRL + X, then Y, then ENTER&#41;.)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (2. Remove All SSH Keys)

[//]: # ()
[//]: # (If you want to remove all SSH keys &#40;disabling key-based authentication for that user&#41;:)

[//]: # ()
[//]: # (rm ~/.ssh/authorized_keys)

[//]: # ()
[//]: # (or)

[//]: # ()
[//]: # (> ~/.ssh/authorized_keys  # Clears the file without deleting it)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (3. Disable SSH Key Authentication &#40;Optional&#41;)

[//]: # ()
[//]: # (If you want to disable SSH key authentication entirely &#40;forcing password authentication&#41;:)

[//]: # (1.	Edit the SSH configuration:)

[//]: # ()
[//]: # (sudo nano /etc/ssh/sshd_config)

[//]: # ()
[//]: # ()
[//]: # (	2.	Find and modify:)

[//]: # ()
[//]: # (PubkeyAuthentication no)

[//]: # ()
[//]: # ()
[//]: # (	3.	Restart SSH service:)

[//]: # ()
[//]: # (sudo systemctl restart ssh)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (4. Verify Key Removal)

[//]: # ()
[//]: # (Try logging in again from your remote machine:)

[//]: # ()
[//]: # (ssh pi@192.168.0.70)

[//]: # ()
[//]: # (	•	If the key was removed successfully, SSH should now ask for a password instead.)

[//]: # ()
[//]: # (Let me know if you need more help! 🚀)

[//]: # ()
[//]: # (Yes! You can open files that you would normally edit with Nano in VS Code. Here’s how to do it:)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (1. Open a Specific File in VS Code)

[//]: # ()
[//]: # (If you have a file that you would normally edit in Nano, you can open it directly in VS Code by running:)

[//]: # ()
[//]: # (code /path/to/yourfile)

[//]: # ()
[//]: # (For example:)

[//]: # ()
[//]: # (code ~/.ssh/authorized_keys)

[//]: # ()
[//]: # (This will open the file in VS Code instead of Nano.)

[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (2. Set VS Code as Default Editor &#40;Instead of Nano&#41;)

[//]: # ()
[//]: # (If you want to replace Nano with VS Code as the default editor when running commands like git commit or editing system files, follow these steps:)

[//]: # ()
[//]: # (Temporarily &#40;For Current Session Only&#41;)

[//]: # ()
[//]: # (Run:)

[//]: # ()
[//]: # (export EDITOR="code --wait")

[//]: # ()
[//]: # (This tells the system to use VS Code as the editor for commands like git commit or sudo visudo.)

[//]: # ()
[//]: # (Permanently &#40;Add to .bashrc or .zshrc&#41;)

[//]: # (1.	Open your shell configuration file:)

[//]: # ()
[//]: # (nano ~/.bashrc  # For Bash users)

[//]: # ()
[//]: # (or)

[//]: # ()
[//]: # (nano ~/.zshrc   # For Zsh users &#40;Mac users often use Zsh&#41;)

[//]: # ()
[//]: # ()
[//]: # (	2.	Add this line at the end:)

[//]: # ()
[//]: # (export EDITOR="code --wait")

[//]: # ()
[//]: # ()
[//]: # (	3.	Save and exit &#40;CTRL + X, then Y, then ENTER&#41;.)

[//]: # (	4.	Apply the changes:)

[//]: # ()
[//]: # (source ~/.bashrc  # Or use ~/.zshrc if using Zsh)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (3. Open a File Over SSH in VS Code &#40;From Local Machine&#41;)

[//]: # ()
[//]: # (If you’re connected to a remote Raspberry Pi &#40;or another Linux system&#41; via SSH and want to edit a file with VS Code on your local machine:)

[//]: # (1.	Install the Remote - SSH extension in VS Code.)

[//]: # (2.	Open VS Code and press Ctrl + Shift + P &#40;or Cmd + Shift + P on Mac&#41;.)

[//]: # (3.	Search for and select:)

[//]: # (“Remote-SSH: Connect to Host…”)

[//]: # (4.	Enter your Raspberry Pi’s SSH address:)

[//]: # ()
[//]: # (pi@192.168.0.70)

[//]: # ()
[//]: # ()
[//]: # (	5.	Once connected, you can open any file in VS Code using:)

[//]: # ()
[//]: # (code ~/.ssh/authorized_keys)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (⸻)

[//]: # ()
[//]: # (Now, instead of using Nano, VS Code will open the file whenever you need to edit something! 🚀)

[//]: # ()
[//]: # (Let me know if you need further clarification. 😊)

[//]: # ()
[//]: # ()
[//]: # (The `Auth fail` error indicates that the authentication to the remote Raspberry Pi failed. This could be due to incorrect credentials or SSH settings. Here are a few steps to troubleshoot and resolve the issue:)

[//]: # ()
[//]: # (1. **Verify SSH Credentials**: Ensure that the username, password, IP address, and port are correct.)

[//]: # ()
[//]: # (2. **Check SSH Access**: Manually try to SSH into the Raspberry Pi using the same credentials to verify they work:)

[//]: # (```bash)

[//]: # (ssh pi@192.168.0.70)

[//]: # (   ```)

[//]: # ()
[//]: # (3. **Update `pom.xml`**: Ensure the credentials in the `pom.xml` are correct. Here is the relevant section:)

[//]: # (```xml)

[//]: # (<properties>)

[//]: # (    <pi.username>pi</pi.username>)

[//]: # (    <pi.password>TH@nt*9Bk2dA</pi.password>)

[//]: # (    <pi.ipnumber>192.168.0.70</pi.ipnumber>)

[//]: # (    <pi.port>22</pi.port>)

[//]: # (    <pi.deploydirectory>/home/pi/algaecare/app</pi.deploydirectory>)

[//]: # (</properties>)

[//]: # (   ```)

[//]: # ()
[//]: # (4. **Use SSH Key Authentication**: It's more secure to use SSH key-based authentication instead of a password. Generate an SSH key pair and copy the public key to the Raspberry Pi:)

[//]: # (```bash)

[//]: # (ssh-keygen -t rsa -b 4096 -C "your_email@example.com")

[//]: # (ssh-copy-id pi@192.168.0.70)

[//]: # (   ```)

[//]: # ()
[//]: # (5. **Update `pom.xml` for SSH Key Authentication**: Modify the `pom.xml` to use the SSH key:)

[//]: # (```xml)

[//]: # (<plugin>)

[//]: # (    <groupId>org.apache.maven.plugins</groupId>)

[//]: # (    <artifactId>maven-antrun-plugin</artifactId>)

[//]: # (    <executions>)

[//]: # (        <execution>)

[//]: # (            <id>transfer</id>)

[//]: # (            <phase>install</phase>)

[//]: # (            <goals>)

[//]: # (                <goal>run</goal>)

[//]: # (            </goals>)

[//]: # (            <configuration>)

[//]: # (                <target>)

[//]: # (                    <scp trust="true")

[//]: # (                        localFile="${project.build.directory}/${jar.name}.zip")

[//]: # (                        todir="${pi.username}@${pi.ipnumber}:${pi.deploydirectory}")

[//]: # (                        port="${pi.port}")

[//]: # (                        keyfile="/path/to/private/key">)

[//]: # (                    </scp>)

[//]: # (                </target>)

[//]: # (            </configuration>)

[//]: # (        </execution>)

[//]: # (    </executions>)

[//]: # (</plugin>)

[//]: # (   ```)

[//]: # ()
[//]: # (Replace `/path/to/private/key` with the path to your private SSH key.)

[//]: # ()
[//]: # (After making these changes, try running the Maven build again.)