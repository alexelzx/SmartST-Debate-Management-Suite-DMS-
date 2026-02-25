# SmartST DMS | Executive Debate Management Suite

SmartST DMS is a high-fidelity, real-time synchronization engine designed for structured executive discourse and professional debate. By leveraging cloud-synchronized chronometry, it ensures absolute fairness and objective analysis in high-stakes forum environments .

## 🌳 Architectural Vision
The suite utilizes a sophisticated editorial aesthetic inspired by modern minimalist design, intended to foster a tranquil yet authoritative atmosphere for rigorous intellectual exchange.

## 🛠 Core Ecosystem
The platform is comprised of six distinct modules working in unison :

* **Executive Landing Page (`main.html`):** The introductory gateway featuring project scope, strategic debate protocols, and developer background
* **Unified Access Portal (`index.html`):** A secure entry point supporting a three-tier hierarchy: Participants, PIN-authenticated Moderators, and registered Hosts
* **Host Command Center (`host.html`):** The primary administrative console for generating 6-digit session codes, 4-digit Moderator PINs, managing the parole queue, and maintaining a precision audit log.
* **Debator Workspace (`participant.html`):** A bidirectional workstation featuring localized notes with `@mention` capabilities, a real-time roster, and an immersive "Parole Granted" notification system (visual "breathe green" effect + auditory cue) .
* **Projector Broadcast (`tv.html`):** A high-visibility, large-scale view for physical conference rooms displaying the active speaker's profile, a master chronometer, and a real-time queue sidebar .
* **Security Layer (`auth.html`):** Integrated Firebase Authentication for Host identity verification.

## 🚀 Technical Implementation
* **Backend:** Firebase Firestore for real-time data streaming and synchronization 
* **Authentication:** Firebase Auth (Email/Password) for Host security
* **Design:** CSS3 with frosted-glass (glassmorphism) effects and responsive viewport scaling
* **Logic:** Asynchronous JavaScript leveraging the latest Firebase SDK (v12.9.0)
