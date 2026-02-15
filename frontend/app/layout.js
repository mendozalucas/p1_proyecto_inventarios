import Sidebar from '../components/sidebar';

export const metadata = {
  title: 'Sistema de inventario',
  description: 'Next.js',
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>demo</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-lg-2 bg-dark text-white vh-100 p-3">
              <Sidebar />
            </div>
            <div className="col-md-9 col-lg-10 p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
