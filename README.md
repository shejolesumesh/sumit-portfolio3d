 # Portfolio

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)

A cinematic, scroll-driven 3D interactive developer portfolio built to showcase my technical skills, projects, and educational journey. Designed as an ocean descent metaphor, the experience takes users from the vibrant surface down to the bioluminescent deep sea.

 [View Live Demo](https://shejolesumesh.github.io/sumit-portfolio3d/)

---

 Key Features

* **Scroll-Driven 3D Experience:** The camera descends through a fully realized 3D underwater environment synced to the user's scroll using GSAP's ScrollTrigger.
* **Custom GLSL Shaders:** Features custom vertex and fragment shaders to simulate dynamic ocean waves and bioluminescent floating particles.
* **Procedural 3D Ecosystem:** Includes procedurally animated jellyfish, a swimming shark, glowing coral reefs, and a flagship "Kraken" entity at the bottom of the ocean.
* **Adaptive Performance Tiering:** The system dynamically detects the user's device capabilities (Mobile vs. PC, CPU cores, RAM) and automatically scales graphics (geometry segments, particle counts, lighting passes, and anti-aliasing) between `low`, `mid`, and `high` tiers for smooth 60fps performance on any device.
* **Interactive UI Overlays:** A sleek, glassmorphism-inspired UI provides details about skills, featured projects, and a professional timeline without breaking the 3D immersion.
* **Dynamic Depth Meter:** A custom UI depth gauge tracks your descent progress in real time.

 Technologies Used

* **Core:** HTML5, CSS3, JavaScript (ES6+)
* **3D Rendering Engine:** [Three.js](https://threejs.org/) (r128)
* **Animation & Scroll Sync:** [GSAP](https://greensock.com/gsap/) (3.12.2) & ScrollTrigger
* **Graphics:** WebGL & Custom GLSL Shaders

 Project Structure

* `index.html`: The core markup, UI overlays, and layout structure.
* `style.css`: Contains the design system, CSS variables, glassmorphism effects, and responsive media queries.
* `script.js`: The powerhouse of the application. Handles Three.js scene setup, procedural generation, GLSL shaders, GSAP timelines, and device performance tiering.
* `sumit-shejole-resume.pdf`: Downloadable copy of my professional resume.
