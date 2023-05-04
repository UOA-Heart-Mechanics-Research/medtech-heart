Documentation for host heart app locally on windows
==========================================================

- Install git to your windows
- Install nvm to your windows from https://github.com/coreybutler/nvm-windows/releases
  - nvm install 16.16.0
  - nvm alias default 16.16.0
  - nvm use 16.16.0
- Install yarn
  - npm install - -global yarn
- In your Windows PowerShell:
  - cd desktop
  - git clone https://github.com/UOA-Heart-Mechanics-Research/medtech-heart.git
  - cd medtech-heart
  - yarn
- Find the start.bat file in the medtech-heart root folder, then open it in one of your Editors.
  - Replace "C:\path\to\your\project" with the actual path to your project folder.

    e.g, replace C:\Users\xxx\Desktop\medtech-heart to yours one: C:\Users\Yours_username_here\Desktop\medtech-heart

    - save it
- Press the Windows key + R, type "shell:startup" and press Enter to open the Windows startup folder.
  - Copy the start.bat into startup folder.
- Restart your computer see what happens.
