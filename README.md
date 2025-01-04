<h1>Sistema de Administración para Librería</h1>

<h2>Proyecto para practicar el desarrollo Frontend con Nextjs así como compatibilidad entre .NET CORE y MySQL</h2>

<h2>Tecnologías utilizadas</h2>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,next,dotnet,mysql,tailwind&perline=12" />
  </a>
</p>

<h2>Pasos para ejecutar el proyecto</h2>

<h3>Clonar el repositorio</h3>

      git clone https://github.com/Carlos-Galindo-Personal-Projects/library-utma.git

<h3> Navegar a la rama dev </h3>

      git checkout dev

<h3>Navegar a library-utma-backend, crear un archivo de configuración, ejecutar las migraciones, compilar el proyecto y ejecutarlo</h3>

<p>Ir al directorio <code>ibrary-utma-backend/</code>:</p>
<pre><code>cd ibrary-utma-backend/</code></pre>

<p>Crear un archivo <code>appsettings.json</code></code>:</p>
<pre><code>touch appsettings.Development.json</code></pre>

<p>Agregar las siguientes variables al archivo <code>appsettings.json</code>:</p>
<pre><code>
      {
          "Logging": {
              "LogLevel": {
                  "Default": "Information",
                  "Microsoft.AspNetCore": "Warning"
              }
          },
          "ConnectionStrings": {
              "Connection": "server=YOUR_MYSQL_SERVER;port=YOUR_MYSQL_PORT;database=YOUR_DATABASE_NAME;user=YOUR_MYSQL_NAME;password=YOUR_MYSQL_PASSWORD"
          }
      }
</code></pre>

<p>Crear un archivo <code>launchSettings.json</code></code>:</p>
<pre><code>touch Properties/launchSettings.json</code></pre>

<p>Agregar las siguientes variables al archivo <code>launchSettings.json</code>:</p>
<pre><code>
      {
        "$schema": "http://json.schemastore.org/launchsettings.json",
        "iisSettings": {
          "windowsAuthentication": false,
          "anonymousAuthentication": true,
          "iisExpress": {
            "applicationUrl": "http://localhost:13352",
            "sslPort": 44382
          }
        },
        "profiles": {
          "https": {
              "commandName": "Project",
              "dotnetRunMessages": true,
              "launchBrowser": true,
              "launchUrl": "swagger",
              "applicationUrl": "https://localhost:7087;http://localhost:5221",
              "environmentVariables": {
                  "ASPNETCORE_ENVIRONMENT": "Development",
                  "KEY": "YOUR_JWT_SECRET_KEY",
                  "ISSUER": "utma-library-backend",
                  "AUDIENCE": "umta-library-users"
              }
          }
        }
      }
</code></pre>

<p>Ejecutar las migraciones:</p>
<pre><code>dotnet ef database update</code></pre>

<p>Transpilar el proyecto:</p>
<pre><code>dotnet build</code></pre>

<p>Iniciar el proyecto:</p>
<pre><code>dotnet run</code></pre>
  
<h3>Navegar a library-utma-backend, instalar las dependencias, crear un archivo .env y ejecutar el proyecto</h3>

<p>Ir al directorio <code>api-products/</code>:</p>
<pre><code>cd ../library-utma-backend/</code></pre>

<p>Instalar las dependencias:</p>
<pre><code>npm i</code></pre>

<p>Crear un archivo <code>.env</code>:</p>
<pre><code>touch .env</code></pre>

<p>Agregar las siguientes variables al archivo <code>.env</code>:</p>
<pre><code>
NEXT_PUBLIC_API_URL="https://localhost:7087/api/"
NEXT_PUBLIC_JWT_SECRET="YOUR_JWT_SECRET_KEY"
</code></pre>

<p>Iniciar el proyecto:</p>
<pre><code>next dev --experimental-https</code></pre>

<h3> Ahora puedes hacer usar el frontend en https://localhost:3000 y desde el mismo realizar peticiones a https://localhost:7087</h3>
