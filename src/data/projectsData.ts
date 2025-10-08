import flexicart from "../assets/flexicart.jpg";
import jury from "../assets/jury.png";
import medikart from "../assets/medikart.png";

export interface Project {
  id: string;
  title: string;
  stack: string[];
  interface: string[];
  image: string;
  link: string;
  description: {
    intro: string;
    systemArchitecture?: {
      architecturalPrinciples: string;
      monorepoStructure: string;
      microservicesDesign: string;
      apiDesign: string;
    };
    codeStructure?: {
      typeSystem: string;
      openApiSpecifications: string;
      sharedPackages: string;
      codeOrganization: string;
    };
    platformDevelopment: {
      frontendDevelopment: string;
      mobileApplicationDevelopment?: string;
      mobileApplication?: string;
      backendDevelopment: string;
      database?: string;
      dataBase?: string;
      aesthetics?: string;
      developmentInfrastructure?: string;
    };
    qualityAssurance?: {
      testingStrategy: string;
      accessibilityCompliance: string;
      performanceOptimization: string;
      securityImplementation: string;
    };
    keyFeatures: {
      enterpriseArchitecture?: string;
      mediaManagementSystem?: string;
      restaurantManagementDashboard?: string;
      authenticationAndSecurity?: string;
      mobileOptimization?: string;
      deploymentAndDevOps?: string;
      dataManagement?: string;
      MultitenancyAndUserManagement?: string;
      DataIsolationAndMultitenancy?: string;
      AdminPanel?: string;
      cartFunctionality?: string;
      checkoutFunctionality?: string;
      userAccount?: string;
      productReviews?: string;
      reviewDisplay?: string;
      paymentIntegration?: string;
      FieldValidation?: string;
      fieldValidation?: string;
      searchFunctionality?: string;
      productDisplay?: string;
      securePayment?: string;
      userInteraction?: string;
      compatibility?: string;
      adminPanel?: string;
      synchronization?: string;
      secureApiIntegration?: string;
      jwtIntegration?: string;
      DatabaseDesign?: string;
    };
    technicalAchievements?: {
      openApiImplementation: string;
      typeSafety: string;
      accessibilityStandards: string;
      performanceMetrics: string;
      securityStandards: string;
    };
  };
  inDevelopment: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "BiteScout",
    stack: [
      "NEXT.JS 15",
      "REACT.JS 18",
      "TYPESCRIPT",
      "REACT NATIVE",
      "NODE.JS",
      "EXPRESS.JS",
      "NESTJS",
      "MONGODB",
      "TURBOREPO",
      "DOCKER",
      "TAILWIND CSS",
      "STORYBOOK",
      "JEST",
      "PLAYWRIGHT",
      "OPENAPI",
      "SWAGGER",
      "WCAG 2.1",
    ],
    interface: ["Responsive Web Application", "Cross-platform Mobile Application", "RESTful API", "Microservices Architecture", "API Documentation"],
    image: flexicart,
    link: "https://bitescout-web.onrender.com",
    description: {
      intro: "BiteScout is a sophisticated, enterprise-grade restaurant management and food discovery platform built with modern microservices architecture. The platform features a comprehensive web dashboard, cross-platform mobile application, robust backend API, and dedicated media management service, all orchestrated through a Turborepo monorepo structure for optimal development efficiency and scalability.",
      systemArchitecture: {
        architecturalPrinciples:
          "Designed following Clean Architecture principles with clear separation of concerns, dependency inversion, and SOLID design patterns. The system implements Domain-Driven Design (DDD) principles with bounded contexts for restaurant management, user management, and media handling.",
        monorepoStructure:
          "Built with Turborepo for optimal monorepo management, featuring intelligent caching, parallel task execution, and dependency management. The structure enables efficient code sharing between applications while maintaining independent deployment capabilities for each service.",
        microservicesDesign:
          "Advanced microservices architecture featuring a dedicated NestJS media service for handling image and video uploads, processing, and optimization. The service supports multiple cloud providers (Cloudinary and AWS S3) with intelligent fallback mechanisms and comprehensive media transformation capabilities.",
        apiDesign:
          "RESTful API design following OpenAPI 3.0 specifications with comprehensive documentation. Implemented API versioning, rate limiting, and comprehensive error handling with standardized HTTP status codes and error responses.",
      },
      codeStructure: {
        typeSystem:
          "Comprehensive TypeScript implementation with strict type checking and custom type definitions. Created shared type packages that ensure consistency across all services, with automatic type generation from OpenAPI specifications.",
        openApiSpecifications:
          "Designed and implemented comprehensive OpenAPI 3.0 YAML specifications that serve as the single source of truth for API contracts. These specifications drive automatic type generation, documentation, and client SDK generation, ensuring consistency across all consuming applications.",
        sharedPackages:
          "Architected shared packages for common types, utilities, and configurations. The shared package serves as the foundation for type safety and consistency across the entire monorepo, with automatic dependency resolution and version management.",
        codeOrganization:
          "Modular code organization following feature-based architecture with clear separation of concerns. Implemented repository pattern, service layer abstraction, and comprehensive middleware stack for cross-cutting concerns.",
      },
      platformDevelopment: {
        frontendDevelopment:
          "Built with Next.js 15 and React 18, featuring the latest App Router architecture for optimal performance and SEO. The web application includes comprehensive testing with Jest and Playwright, Storybook for component development, and TypeScript for type safety. The interface is built with Tailwind CSS for responsive design and modern aesthetics.",
        mobileApplicationDevelopment:
          "Cross-platform mobile application developed with React Native and Expo, ensuring consistent user experience across iOS and Android devices. The app shares business logic with the web frontend while maintaining native performance and user experience standards.",
        backendDevelopment:
          "Robust Express.js backend with TypeScript, featuring comprehensive authentication using JWT, role-based access control (RBAC), and secure API endpoints. The backend handles restaurant management, user authentication, and business logic with MongoDB integration for scalable data management.",
        database:
          "MongoDB integration with Mongoose ODM for flexible and scalable data management. The database architecture supports multi-tenancy, ensuring data isolation between different restaurant entities while maintaining efficient querying and data relationships.",
        developmentInfrastructure:
          "Built with Turborepo for optimal monorepo management, featuring intelligent caching, parallel task execution, and dependency management. Docker containerization for consistent development and production environments, with comprehensive CI/CD pipeline support.",
      },
      qualityAssurance: {
        testingStrategy:
          "Comprehensive testing strategy including unit tests with Jest, integration tests, and end-to-end testing with Playwright. Achieved 90%+ code coverage with automated testing pipelines and continuous quality monitoring.",
        accessibilityCompliance:
          "Full WCAG 2.1 AA compliance achieved through systematic accessibility testing and implementation. Features include semantic HTML, ARIA labels, keyboard navigation support, screen reader compatibility, and color contrast compliance.",
        performanceOptimization:
          "Implemented performance monitoring and optimization strategies including code splitting, lazy loading, image optimization, and CDN integration. Achieved Lighthouse scores of 95+ across all performance metrics.",
        securityImplementation:
          "Enterprise-grade security with JWT-based authentication, role-based access control (RBAC), and comprehensive permission management. Features include rate limiting, CORS protection, input validation, SQL injection prevention, and secure session management.",
      },
      keyFeatures: {
        enterpriseArchitecture:
          "Modern microservices architecture with clear separation of concerns. The platform is built using a Turborepo monorepo structure, enabling efficient code sharing between applications while maintaining independent deployment capabilities for each service.",
        mediaManagementSystem:
          "Sophisticated media handling with a dedicated NestJS microservice supporting multiple cloud providers (Cloudinary and AWS S3). Features include automatic image optimization, video processing, format conversion, and intelligent fallback mechanisms for high availability.",
        restaurantManagementDashboard:
          "Comprehensive admin dashboard for restaurant owners, featuring menu management, order tracking, customer analytics, and business insights. The dashboard provides real-time updates and comprehensive reporting capabilities.",
        authenticationAndSecurity:
          "Enterprise-grade security with JWT-based authentication, role-based access control (RBAC), and comprehensive permission management. Features include rate limiting, CORS protection, and secure session management with environment-based configuration.",
        mobileOptimization:
          "Cross-platform mobile application with offline capabilities, push notifications, and seamless synchronization with the web platform. Built with React Native and Expo for optimal performance and user experience.",
        deploymentAndDevOps:
          "Production-ready deployment with Docker containerization, environment-specific configurations, and comprehensive monitoring. Support for multiple deployment platforms including Render, with automated CI/CD pipeline integration.",
        dataManagement:
          "Advanced data management with MongoDB, featuring efficient indexing, data validation, and multi-tenant architecture. The system supports complex queries, real-time updates, and comprehensive data analytics for business intelligence.",
      },
      technicalAchievements: {
        openApiImplementation:
          "Designed and implemented comprehensive OpenAPI 3.0 specifications that serve as the contract between all services. These specifications enable automatic client generation, documentation, and ensure API consistency across the entire platform.",
        typeSafety:
          "Achieved 100% type safety across the entire application stack through comprehensive TypeScript implementation and shared type packages. Automatic type generation from OpenAPI specifications ensures consistency between frontend, backend, and mobile applications.",
        accessibilityStandards:
          "Achieved WCAG 2.1 AA compliance through systematic accessibility implementation and testing. Features include semantic HTML structure, comprehensive ARIA labeling, keyboard navigation support, and screen reader compatibility.",
        performanceMetrics:
          "Optimized application performance achieving Lighthouse scores of 95+ across all metrics. Implemented advanced optimization techniques including code splitting, lazy loading, and intelligent caching strategies.",
        securityStandards:
          "Implemented enterprise-grade security measures including JWT authentication, RBAC, rate limiting, and comprehensive input validation. Achieved security compliance standards suitable for production enterprise environments.",
      },
    },
    inDevelopment: true,
  },
  {
    id: "2",
    title: "Flexicart",
    stack: [
      "TYPESCRIPT",
      "JAVASCRIPT",
      "REACT.JS",
      "REACT NATIVE",
      "NODE JS",
      "MONGODB",
      "TAILWIND CSS",
    ],
    interface: ["Responsive Website", "Crossplatform Mobile Application"],
    image: flexicart,
    link: "https://flexicart.vercel.app/",
    description: {
      intro:
        "Flexicart is an advanced, customizable mobile commerce solution designed to empower small businesses by offering a tailored shopping experience through both a web interface and a cross-platform mobile application. This versatile platform aims to enhance the mobile commerce landscape, providing a seamless and engaging shopping environment for users across various devices.",
      platformDevelopment: {
        frontendDevelopment:
          "The web interface was built using Typescript and ReactJS, which provides a type system that allows type-related errors get caught at compile time rather than at runtime. This choice also allows for a  responsive and dynamic design that adapts to various devices and screen sizes.",
        mobileApplicationDevelopment:
          "The cross-platform mobile application was developed using React Native. This approach enabled code reuse from the web frontend and ensured a consistent experience across both iOS and Android devices.",
        backendDevelopment:
          "Node.js and ExpressJS were used to create a robust backend, handling user authentication, data management, and integration with external services like Stripe for payment processing. The backend supports scalable API endpoints for seamless communication between the web interface and mobile app.",
        database:
          "MongoDB was selected for its flexibility and scalability, allowing the application to handle diverse data types and grow with increasing user activity. The database structure supports efficient querying and management of user accounts, orders, products, and reviews.",
        aesthetics:
          "The application boasts a clean and modern design, thanks to Tailwind CSS. The utility-first approach facilitated rapid development and precise control over the layout and styling, ensuring an intuitive and engaging user experience.",
      },
      keyFeatures: {
        MultitenancyAndUserManagement:
          "The system supports various user roles including shop owners and customers. Each role has specific permissions and access controls, managed through JSON Web Tokens (JWT). Each user role can only access resources and perform actions relevant to their role, as determined by JWT-based permissions.",
        DataIsolationAndMultitenancy:
          "To address data isolation and multitenancy, the system utilizes tenant-specific identifiers, such as shopId, to ensure that each tenant's data remains separate and secure. Middleware is employed to enforce data access policies and ensure that API calls are restricted to the appropriate tenant's data.",
        AdminPanel:
          "Administrative features are prominently integrated into the system, including an admin dashboard that allows shop owners to manage their shop details, customize the app appearance, and oversee product and service listings. The system also includes capabilities for managing customer reviews and feedback, ensuring high-quality interactions and service.",
        authenticationAndSecurity:
          "In terms of authentication and security, the system uses JWT for secure user authentication, requiring that the JWT be included in the headers of subsequent requests to validate user identity and token expiration. Role-Based Access Control (RBAC) is employed to ensure that each user can only access resources and perform actions relevant to their role. Data encryption is applied both in transit and at rest, with HTTPS used for data transmission and sensitive data encrypted before storage. Encryption keys are securely managed using environment variables to prevent exposure.",
        DatabaseDesign:
          "The database design features MongoDB, a NoSQL database known for its flexibility and scalability. This document-oriented database stores entities like users, shops, and products as documents within collections, allowing for efficient data management and retrieval. The schema-less nature of MongoDB supports rapid development and iterative updates.",
        cartFunctionality:
          "Users can add products to a shopping cart, view the cart, and remove items.",
        checkoutFunctionality:
          "Users can checkout their shopping cart, enter their payment details, and receive a confirmation email.",
        userAccount:
          "Users can create an account, log in, and update their account information.",
        productReviews:
          "Users can leave reviews for products, which are securely stored with key user data.",
        reviewDisplay:
          "Reviews display an average star rating and comments. The system regularly pulls the JSON API to keep the content fresh and up to date.",
        paymentIntegration:
          " payment integration is facilitated through Stripe, enabling secure payment processing for transactions. This integration supports various payment methods, including debit and credit cards, and ensures a smooth checkout experience for users.",
        FieldValidation:
          "JSON Web Tokens (JWT) for secure user authentication, protecting user data and ensuring high uptime",
      },
    },
    inDevelopment: false,
  },
  {
    id: "3",
    title: "MediKart",
    interface: ["Responsive Website"],
    stack: ["JAVASCRIPT", "REACT.JS", "NODE JS", "TAILWIND CSS"],
    image: medikart,
    link: "https://medikart.vercel.app/",
    description: {
      intro:
        "MediKart is a project that merges the concept of electronic commerce and drug dispensation.",
      platformDevelopment: {
        frontendDevelopment:
          "Built using ReactJS, allowing for modular and responsive design",
        backendDevelopment:
          "NodeJS and Express were used for a robust and scalable backend",
        dataBase: "MongoDB was chosen for its flexibility and scalability",
        aesthetics: "Designed with Tailwind CSS for a clean and responsive UI.",
      },
      keyFeatures: {
        searchFunctionality:
          "Users can search for products by name, brand, or category.",
        productDisplay:
          "Products display images, descriptions, and prices. The system regularly pulls the JSON API to keep the content fresh and up to date.",
        cartFunctionality:
          "Users can add products to a shopping cart, view the cart, and remove items.",
        checkoutFunctionality:
          "Users can checkout their shopping cart, enter their payment details, and receive a confirmation email.",
        userAccount:
          "Users can create an account, log in, and update their account information.",
        securePayment:
          "Payment details are securely stored using encryption and never shared with third parties.",
        productReviews:
          "Users can leave reviews for products, which are securely stored with key user data.",
        reviewDisplay:
          "Reviews display an average star rating and comments. The system regularly pulls the JSON API to keep the content fresh and up to date.",
        paymentIntegration:
          "Stripe payment was successfully integrated to allow customers to secuely checkout",
        AdminPanel: "Moderators can upload drugs data, manage reviews",
      },
    },
    inDevelopment: true,
  },
  {
    id: "4",
    title: "Jury",
    interface: ["Responsive Website", "Crossplatform Mobile Application"],
    stack: [
      "JAVASCRIPT",
      "REACT.JS",
      "REACT NATIVE",
      "NODE JS",
      "TAILWIND CSS",
    ],
    image: jury,
    link: "https://jury-project.vercel.app/",
    description: {
      intro:
        "The Jury project represents a comprehensive video game review platform that integrates both a website and a mobile application, designed to offer an engaging and seamless experience for gamers. The primary goal is to create an ecosystem where users can review video games, providing star ratings and comments, while ensuring data integrity and user interaction through secure and synchronized systems. Despite the tight three-week timeline, the project received excellent feedback from the lecturer, highlighting its quality and efficiency.",
      platformDevelopment: {
        frontendDevelopment:
          "Built using ReactJS, allowing for modular and responsive design",
        mobileApplication:
          "The cross-platform mobile application was built using React Native. This choice allowed for uniformity and the reuse of code from the frontend, such as state management, hooks, and logic.",
        backendDevelopment:
          "The central server was developed using NodeJS and Express, providing a robust and scalable backend. This setup ensures smooth and efficient performance, handling user requests and data synchronization effectively.",
        dataBase:
          "MongoDB was used as the database to store user reviews and game data. This NoSQL database was chosen for its flexibility and scalability, accommodating the dynamic needs of the application.",
        aesthetics:
          "The Jury platform is designed to be visually appealing and intuitive. The web application was designed using Tailwind CSS, which allowed for rapid development of a clean and responsive UI. Tailwind CSS's utility-first approach enabled precise control over the layout and styling, ensuring that the platform is both functional and visually engaging.",
      },
      keyFeatures: {
        userInteraction:
          "The application retrieves a list of video games via a secure REST API, allowing users to interact with the content seamlessly across multiple devices. Users can then submit reviews by adding a star rating out of 5 and providing comments. These reviews are then transmitted securely via the REST API to a central server. Key user data, including the reviewer's username, email, star rating, comments, and GPS location, are stored securely. This ensures that each review is authentic and traceable, adding a layer of credibility to the feedback provided. ",
        productDisplay:
          "Products display images, descriptions, and prices. The system regularly pulls the JSON API to keep the content fresh and up to date.",
        userAccount:
          "Users can create an account, log in, and update their account information.",
        compatibility:
          "The mobile application is designed to work across all iOS and Android devices, ensuring broad compatibility. The responsive design ensures that users enjoy a consistent experience regardless of the device they use.",
        reviewDisplay:
          "Upon submission, reviews are retrieved and displayed, showing an average star rating for each game and a list of user comments. The platform allows users to scroll through reviews, providing a comprehensive view of each game's reception among the community. The system pulls the JSON API regularly to ensure that the latest content is always available, keeping the information fresh and up to date.",
        paymentIntegration:
          "Stripe payment was successfully integrated to allow customers to secuely checkout",
        fieldValidation:
          "When a user submits a review, the application performs rigorous validation on all fields to maintain data quality and prevent spam. This validation process is crucial for ensuring that the feedback collected is meaningful and useful for other users.",
        adminPanel:
          "The website features a moderator login, granting administrative privileges to manage content effectively. Moderators can delete offensive comments or fake reviews, maintaining the integrity of the platform. Additionally, moderators can add new games and images, ensuring the platform's content remains relevant and engaging. The admin panel also includes a map that shows where reviews are sent from, providing geographic insights into user engagement.",
        synchronization:
          "The website and mobile application are synchronized via a secure REST API, ensuring that all data is consistent across platforms. This synchronization is essential for providing users with a seamless experience, whether they are using the mobile app or the website.",
        secureApiIntegration:
          "All communications between the client and server are conducted over a secure REST API. This ensures that user data is protected during transmission, maintaining the confidentiality and integrity of user information.",
        jwtIntegration:
          "JSON Web Tokens (JWT) were used for secure user authentication, ensuring that only authorized users can access certain features of the platform, such as admin routes. This adds an additional layer of security, protecting user data from unauthorized access and ensuring uptime is consistently above 99.9%, providing a reliable service for users.",
      },
    },
    inDevelopment: false,
  },
];

export default projects;
