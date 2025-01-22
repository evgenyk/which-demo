export default async function handleRequest(event: any) {

    return `
      <html>
        <head>
          <title>Index page</title>
        </head>
        <body>
          <style>
            .something::before {
              content: "http://hello.world?aaa=bbb&ccc=ddd";
            }
            .something2::before {
              content: 'http://hello.world?aaa=bbb&ccc=ddd';
            }
          </style>
          <p>Hello index</p>
        </body>
      </html>
    `;
}
