# myFlix: Angular Cinema Dashboard

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![Material Design](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=angular-material&logoColor=white)

**myFlix** is a sophisticated Single Page Application (SPA) built with **Angular 16+**. It provides users with a reactive interface to explore a vast database of movies, directors, and genres. The application features a secure, JWT-protected backend integration and a personalized favorites management system.

## Key Features

* **Reactive State Management:** Leverages **RxJS Observables** to manage asynchronous data streams and UI reactivity.
* **Secure Authentication:** Full JWT implementation with custom **AuthGuards** to protect sensitive routes.
* **Material Design System:** Clean, accessible UI components (Modals, Snackbars, Navigation) built with **Angular Material**.
* **Typed API Integration:** Robust service layer utilizing Angular's `HttpClient` for structured, type-safe communication with a Node.js/Express API.
* **Personalized Watchlists:** Dynamic favorites system with persistent storage via RESTful updates.

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Angular 16+ (TypeScript) |
| **Reactive Ops** | RxJS |
| **UI Components**| Angular Material |
| **Backend API** | Node.js, Express, MongoDB |
| **Authentication**| JWT (JSON Web Tokens) |
| **Deployment** | GitHub Pages |

## Architecture & Design Patterns

The project follows the **Singleton Service Pattern** and **Separation of Concerns**:
- **Services:** Centralized logic for API calls and authentication (Dependency Injection).
- **Components:** Independent, reusable UI blocks for movies, login, and user profiles.
- **Interceptors:** Automated injection of JWT tokens into all outgoing HTTP headers.

## Development Setup

### 1. Clone the Repo
```bash
git clone [https://github.com/Mancini-Developer80/MyFlixAngular.git](https://github.com/Mancini-Developer80/MyFlixAngular.git)
cd MyFlixAngular
```

### 2. Install Dependecies
```bash
npm install
```
### 3. Run the Development Server
``` bash
ng serve
```
### 4. Production Build
```bush 
ng build --configuration production
```

## Engineering Insight

### JKT Lifecycle Management
To maintain security, the application uses an HTTP Interceptor to catch 401 (Unauthorized) errors globally. If a token expires, the interceptor triggers a cleanup of local storage and redirects the user to the welcome page, ensuring a secure user session.

### RxJS Stream Composition
The application avoids "Callback Hell" by using RxJS operators to pipe and transform data streams. This ensures that the UI only updates when the data is fully resolved and sanitized.

-

## Connect with me
* **Portfolio**: giuseppemancini.dev
* **LinkedIn** : https://www.linkedin.com/in/giuseppe-mancini-developer/?locale=it_IT





