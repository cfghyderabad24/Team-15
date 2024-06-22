// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const NotFoundPage = () => {
//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       height="100vh"
//       textAlign="center"
//     >
//       <div style={{ marginBottom: '20px' }}>
//         <img
//           src="./error.svg"
//           alt="Not Found Illustration"
//           style={{ width: '100%', maxWidth: '250px' }}
//         />
//       </div>

//       <Typography variant="h4" color="textSecondary" gutterBottom>
//         Page not found
//       </Typography>
//       <Typography variant="body1" color="textSecondary" paragraph>
//         The page you are looking for might be in another castle.
//       </Typography>
//       <Button component={Link} to="/" variant="primary">
//         Go Home
//       </Button>
//     </Box>
//   );
// }

// export default NotFoundPage;


export default function NotFoundPage() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>

          </div>
        </div>
      </main>
    </>
  )
}
