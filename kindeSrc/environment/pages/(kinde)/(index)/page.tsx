export default async function handleRequest(event: any) {

    return `
      <html>
        <head>
          <title>Index page</title>
        </head>
        <body>
          <style>
            .something::before {
              content: "";
            }
          </style>
          <p>Hello index</p>
        </body>
      </html>
    `;
}
