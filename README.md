<h2>🐼 Visa Slot Alerts – The Flying Panda</h2> 

<p>A mini internal dashboard built for The Flying Panda to track and manage visa slot alerts efficiently.The application focuses on clarity, structure, and realistic production patterns rather than over-engineering.</p>
<br>

<img src="frontend/public/UI.png" alt="UI"/>

<br>
<h2>📦 Features </h2>
<h3>Visa Slots Management</h3>
<ul>
  <li>✅ Create, update, and delete visa slot alerts </li>
<li>🔍 Filter visa slots by country and status.</li> 
  <li>📄 Client-side pagination with selectable rows per page (5 / 25 / 50 / 100)</li> 
  <li>🎨 Modern UI using Material UI + Tailwind CSS</li> 
  <li>🔔 Snackbar notifications (top-right position)</li>
  <li>🧾 Form validation with clear user feedback</li> 
  <li>🎬 Smooth animations using Framer Motion</li> 
  <li>⚡ Loading states and action spinners</li>
</ul>
<br>
<h2>🏗 What I’d Improve for Production</h2> 
<ul>
  <li>Backend pagination & search indexing</li>
  <li>Authentication & role-based access</li>
  <li>Server-side validation (Joi/Zod)</li>
  <li>Rate limiting & security headers</li>
  <li>Unit & integration tests</li>
  <li>Audit logs for alert changes</li>
  <li>Input validation using Joi/Zod</li>
</ul>



<br>
<h2>🧠 Design Decisions</h2>
 <ol>
   <li>Single reusable modal for Create & Update to reduce duplication</li>
   <li>Full-screen loading overlays for critical actions to prevent double submissions</li>
   <li>Immediate UI updates after API success (optimistic UX)</li>
   <li>Centralized error handling on backend for maintainability</li>
   <li>Minimal but realistic feature set aligned with internal tools</li>
   <li>Custom Hook (useAlerts) : Centralized all API logic and state management for cleaner components.</li>
   <li>Frontend Pagination : Chosen for simplicity and faster iteration given dataset size.</li>
   <li>Status-driven UI : Status chips and colors improve readability and UX.</li>
   <li>Separation of Concerns: Controllers, services, hooks, and UI components are clearly separated.</li>   
 </ol>
<br>

<h2>📂 Project Structure</h2> 
frontend/ <br>
src/<br>
│<br>
├── components/<br>
│   ├── AlertForm.jsx<br>
│   ├── AlertsTable.jsx <br>
│   ├── AlertsFilter.jsx<br>
│   ├── simplespinner.jsx<br>
│   ├── ConfirmDialog.jsx <br>
│   ├── PageLoader.jsx<br>
│   ├── StatusChip.jsx<br>
├── hooks/<br>
│   └── useAlerts.js<br>
│<br>
├── pages/<br>
│   └── Dashboard.jsx <br>
│<br>
├── services/ <br>
│   └── alerts.api.js <br>
│<br>
├── App.css <br>
└── App.jsx<br>
<br>
backend/ <br>
src/<br>
│<br>
├── config/<br>
│   └── db.js<br>
│   
├── controllers/<br>
│   └── alerts.controllers.js<br>
│<br>
├── middleware/<br>
│   ├── error.middleware.js<br>
│   ├── logger.middleware.js<br>
│   └── validateAlert.middleware.js <br>
│<br>
├── models/ <br>
│   └── alerts.model.js <br>
│<br>
├── routes/ <br>
│   └── alerts.routes.js <br>
├── .env<br>
├── server.js <br>
└── app.js <br>
<br>



<h2>⚙️ Setup Instructions</h2> 
1️⃣ Clone the Repository <br>
  &nbsp; &nbsp;   o git clone : https://github.com/AyushGhole/TheFlyingPanda.git<br>
  &nbsp; &nbsp;   o cd backend <br>
  &nbsp; &nbsp; &nbsp; &nbsp;   - npm install <br>
  &nbsp; &nbsp;  &nbsp; &nbsp;   - create .env <br>
  &nbsp; &nbsp;  &nbsp; &nbsp;   - Port=5000<br>
  &nbsp; &nbsp;  &nbsp; &nbsp;   - MONGO_URI=your_mongodb_connection_string <br>
  &nbsp; &nbsp;  &nbsp; &nbsp;   - npm run dev  <br>
  &nbsp; &nbsp;   o cd frontend <br>
  &nbsp; &nbsp;  &nbsp; &nbsp;   - npm install <br> 
  &nbsp; &nbsp;  &nbsp; &nbsp;   - npm run dev
<br>
<h2>🔗 API Endpoints</h2>

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td><code>/alerts</code></td>
      <td>Fetch all alerts (with filters)</td>
    </tr>
    <tr>
      <td>POST</td>
      <td><code>/alerts</code></td>
      <td>Create a new alert</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td><code>/alerts/:id</code></td>
      <td>Update an existing alert</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td><code>/alerts/:id</code></td>
      <td>Delete an alert</td>
    </tr>
  </tbody>
</table>


<br>
<h2>✅ Assignment Alignment</h2> 
<ul>
  <li>✔ MERN stack used</li>
  <li>✔ CRUD APIs implemented</li>
  <li>✔ Custom middleware & error handling</li>
  <li>✔ Filters supported</li>
  <li>✔ Pagination supported</li>
  <li>✔ Input Validation supported</li>
  <li>✔ Frontend calls own backend APIs</li>
  <li>✔ Clear README with design thinking</li>
</ul>
<br> 
<h2>📊 Data Model</h2 > 
<h4>Each visa alert contains:</h4> 
{ <br>
 &nbsp; "id": "string",<br>
 &nbsp;  "country": "string",<br>
 &nbsp;  "city": "string",<br>
&nbsp;   "visaType": "Tourist | Business | Student",<br>
&nbsp;   "status": "Active | Booked | Expired",<br>
&nbsp;   "createdAt": "ISO Date",<br>
} <br>
 <br> 
<h2>🤖 Where AI Helped vs Human Thinking</h2> 
<h4>AI Helped With:</h4> 
<ul>
  <li>Boilerplate structure</li> 
  <li>Code refactoring suggestions</li> 
  <li>UI improvement ideas</li> 
  <li>Debugging repetitive errors faster</li>
</ul>
<h4>Human Thinking Was Required For:</h4>
<ul>
  <li>Data flow & architecture decisions</li>
  <li>Pagination strategy alignment (frontend vs backend)</li>
  <li>UX decisions (status handling, confirmations)</li>
  <li>Debugging real-world state & async issues</li>
  <li>Matching requirements exactly to the assignment</li>
</ul>











<h2>🚀 Tech Stack </h2> 
<span><img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" height="30px" width="100px"></span>
<span><img src="https://img.shields.io/badge/-Javascript-ff6e6e?style=flat-square" height="30px" width="100px" >
</span><span><img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3" height="30px" width="90px" ></span>
<span><img src="https://img.shields.io/badge/React.js-9d57b3?style=flat-square" height="30px" width="120px" ></span>
<span><img src="https://img.shields.io/badge/Tailwind_CSS-e164e3?style=flat-square&logo=tailwindcss&logoColor=white" height="60px" width="150px" ></span>
<span><img src="https://img.shields.io/badge/-MATERIAL_UI-ff6e6e?style=flat-square" height="40px" width="110px" ></span>
<span><img src="https://img.shields.io/badge/-Responsive Design-yellow?style=flat-square" height="40px" width="150px" ></span>
<span><img src="https://img.shields.io/badge/-Framer Motion-0723f5?style=flat-square" height="40px" width="110px" ></span> 
<span><img src="https://img.shields.io/badge/-Notistack(Snackbar Notifications)-f23400?style=flat-square" height="40px" width="280px" ></span>
<span><img src="https://img.shields.io/badge/-Node.js-ff6e6e?style=flat-square" height="40px" width="67px" ></span>
<span><img src="https://img.shields.io/badge/-Express.js-90c953?style=flat-square" height="40px" width="90px" ></span> 
<span><img src="https://img.shields.io/badge/RESTFULL_API--eeff6e?style=flat-square" height="60px" width="130px" ></span>
<span><img src="https://img.shields.io/badge/-MongoDB-34c5ed?style=flat-square" height="40px" width="90px" ></span>
<span><img src="https://img.shields.io/badge/-MongoDB_Atlas-611e55?style=flat-square" height="40px" width="130px" ></span>
<span><img src="https://img.shields.io/badge/-FullStackDevelopment-1572B6?style=flat-square&logo=css3" height="40px" width="220px" ></span>
<span><img src="https://img.shields.io/badge/-ProblemSolving-90c953?style=flat-square" height="50px" width="130px" ></span>
<span><img src="https://img.shields.io/badge/-Centralized Error Handling-17f507?style=flat-square" height="40px" width="270px" ></span>


<h3>Deployed Project Link : </h3>
  <a href="https://theflyingpanda-frontend.onrender.com/">
         <img src="https://img.shields.io/badge/-Website_Link-blue?style=flat-square" height="30px" width="90px" >
   </a>
   <br>
   <h4>Demo Link : </h4> 
    <a href="https://youtu.be/B_iN8GiBKnA">
         <img src="https://img.shields.io/badge/-Demo_Link-blue?style=flat-square" height="30px" width="90px" >
   </a> 
