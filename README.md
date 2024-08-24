# ContactManagerApi

**ContactManagerApi** is a RESTful API built with ASP.NET Core, implementing JWT-based authentication, IdentityServer for OAuth2/OpenID Connect, and Entity Framework Core with MySQL. This project is designed to manage contacts while providing secure user authentication and authorization.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup and Installation](#setup-and-installation)
  - [Cloning the Repository](#cloning-the-repository)
  - [Configuration](#configuration)
  - [Database Setup](#database-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Commands](#commands)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- **JWT Authentication:** Secure user authentication using JWT tokens.
- **IdentityServer Integration:** Manages OAuth2/OpenID Connect with IdentityServer4.
- **Entity Framework Core:** Utilizes EF Core for database operations with MySQL.
- **Swagger Integration:** Provides interactive API documentation.
- **Dependency Injection:** Utilizes ASP.NET Core's built-in dependency injection.

## Requirements

- [.NET 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)
- [Visual Studio 2022](https://visualstudio.microsoft.com/) or any other IDE that supports .NET Core development
- [Git](https://git-scm.com/)

## Setup and Installation

### Cloning the Repository

```bash
git clone https://github.com/your-username/ContactManagerApi.git
cd ContactManagerApi

Configuration
Before running the project, you need to configure the database connection and JWT settings.

Database Configuration:

Update the appsettings.json file with your MySQL database connection string:

{
  "ConnectionStrings": {
    "DefaultConnection": "server=localhost;port=3306;database=CONTACTAPI;user=root;password=your_password;"
  },
  "Jwt": {
    "Key": "your_super_secret_key",
    "Issuer": "https://localhost:5001",
    "Audience": "contactmanagerapi"
  }
}

JWT Configuration:

Ensure that the Jwt section in appsettings.json contains your issuer, audience, and secret key:

{
  "Jwt": {
    "Key": "your_super_secret_key",
    "Issuer": "https://localhost:5001",
    "Audience": "contactmanagerapi"
  }
}

Database Setup
Add Initial Migrations:

Run the following commands in the Package Manager Console (PMC) or terminal to add migrations for the IdentityServer and your application's AppDbContext:

dotnet ef migrations add InitialIdentityServerConfigurationMigration --context ConfigurationDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
dotnet ef migrations add InitialIdentityServerOperationalMigration --context PersistedGrantDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
dotnet ef migrations add InitialAppDbContextMigration --context AppDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi

Apply Migrations:

Apply the migrations to create the necessary tables in the MySQL database:

dotnet ef database update --context ConfigurationDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
dotnet ef database update --context PersistedGrantDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
dotnet ef database update --context AppDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi


The API will be available at https://localhost:5001.

Project Structure

ContactManagerApi/
│
├── ContactManagerApi.Api/              # API project containing controllers and endpoints
├── ContactManagerApi.Application/      # Application layer containing business logic and services
├── ContactManagerApi.Domain/           # Domain layer containing entities and interfaces
├── ContactManagerApi.Infrastructure/   # Infrastructure layer containing database context and repositories
└── ContactManagerApi.sln               # Solution file

API Project: Contains the controllers and API endpoints.
Application Layer: Includes services and business logic.
Domain Layer: Contains the core domain models and interfaces.
Infrastructure Layer: Includes database context, repositories, and migrations.

Commands
Adding Migrations
To create new migrations for your database, use the following commands:

# Adding initial IdentityServer configuration migration
dotnet ef migrations add InitialIdentityServerConfigurationMigration --context ConfigurationDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi

# Adding initial IdentityServer operational migration
dotnet ef migrations add InitialIdentityServerOperationalMigration --context PersistedGrantDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi

# Adding initial AppDbContext migration
dotnet ef migrations add InitialAppDbContextMigration --context AppDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi



Aqui está o README.md completo com todos os detalhes do projeto, que pode ser copiado e colado de uma vez só:

md
Copiar código
# ContactManagerApi

**ContactManagerApi** is a RESTful API built with ASP.NET Core, implementing JWT-based authentication, IdentityServer for OAuth2/OpenID Connect, and Entity Framework Core with MySQL. This project is designed to manage contacts while providing secure user authentication and authorization.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup and Installation](#setup-and-installation)
  - [Cloning the Repository](#cloning-the-repository)
  - [Configuration](#configuration)
  - [Database Setup](#database-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Commands](#commands)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- **JWT Authentication:** Secure user authentication using JWT tokens.
- **IdentityServer Integration:** Manages OAuth2/OpenID Connect with IdentityServer4.
- **Entity Framework Core:** Utilizes EF Core for database operations with MySQL.
- **Swagger Integration:** Provides interactive API documentation.
- **Dependency Injection:** Utilizes ASP.NET Core's built-in dependency injection.

## Requirements

- [.NET 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)
- [Visual Studio 2022](https://visualstudio.microsoft.com/) or any other IDE that supports .NET Core development
- [Git](https://git-scm.com/)

## Setup and Installation

### Cloning the Repository

```bash
git clone https://github.com/your-username/ContactManagerApi.git
cd ContactManagerApi
Configuration
Before running the project, you need to configure the database connection and JWT settings.

Database Configuration:

Update the appsettings.json file with your MySQL database connection string:

json
Copiar código
{
  "ConnectionStrings": {
    "DefaultConnection": "server=localhost;port=3306;database=CONTACTAPI;user=root;password=your_password;"
  },
  "Jwt": {
    "Key": "your_super_secret_key",
    "Issuer": "https://localhost:5001",
    "Audience": "contactmanagerapi"
  }
}
JWT Configuration:

Ensure that the Jwt section in appsettings.json contains your issuer, audience, and secret key:

json
Copiar código
{
  "Jwt": {
    "Key": "your_super_secret_key",
    "Issuer": "https://localhost:5001",
    "Audience": "contactmanagerapi"
  }
}
Database Setup
Add Initial Migrations:

Run the following commands in the Package Manager Console (PMC) or terminal to add migrations for the IdentityServer and your application's AppDbContext:

bash
Copiar código
dotnet ef migrations add InitialIdentityServerConfigurationMigration --context ConfigurationDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
dotnet ef migrations add InitialIdentityServerOperationalMigration --context PersistedGrantDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
dotnet ef migrations add InitialAppDbContextMigration --context AppDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
Apply Migrations:

Apply the migrations to create the necessary tables in the MySQL database:

bash
Copiar código
dotnet ef database update --context ConfigurationDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
dotnet ef database update --context PersistedGrantDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
dotnet ef database update --context AppDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
Running the Project
Once the database is set up and the configuration is done, you can run the project using the following command:

bash
Copiar código
dotnet run --project ./ContactManagerApi
The API will be available at https://localhost:5001.

Project Structure
bash
Copiar código
ContactManagerApi/
│
├── ContactManagerApi.Api/              # API project containing controllers and endpoints
├── ContactManagerApi.Application/      # Application layer containing business logic and services
├── ContactManagerApi.Domain/           # Domain layer containing entities and interfaces
├── ContactManagerApi.Infrastructure/   # Infrastructure layer containing database context and repositories
└── ContactManagerApi.sln               # Solution file
API Project: Contains the controllers and API endpoints.
Application Layer: Includes services and business logic.
Domain Layer: Contains the core domain models and interfaces.
Infrastructure Layer: Includes database context, repositories, and migrations.
Commands
Adding Migrations
To create new migrations for your database, use the following commands:

bash
Copiar código
# Adding initial IdentityServer configuration migration
dotnet ef migrations add InitialIdentityServerConfigurationMigration --context ConfigurationDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi

# Adding initial IdentityServer operational migration
dotnet ef migrations add InitialIdentityServerOperationalMigration --context PersistedGrantDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi

# Adding initial AppDbContext migration
dotnet ef migrations add InitialAppDbContextMigration --context AppDbContext --project ./ContactManagerApi.Infrastructure --startup-project ./ContactManagerApi
Applying Migrations
Apply migrations to update the database schema:

Running the Project
To run the project:

dotnet run --project ./ContactManagerApi

API Endpoints
Account Management
POST /api/Account/Register - Registers a new user.
POST /api/Account/Login - Logs in a user and returns a JWT token.
Contact Management
GET /api/Contacts - Retrieves all contacts.
POST /api/Contacts - Adds a new contact.
PUT /api/Contacts/{id} - Updates an existing contact.
DELETE /api/Contacts/{id} - Deletes a contact.
Swagger UI
Swagger documentation is available at https://localhost:5001/swagger.

License
This project is licensed under the MIT License - see the LICENSE file for details.

This `README.md` file provides all the necessary information about the project, commands and detailed settings.

