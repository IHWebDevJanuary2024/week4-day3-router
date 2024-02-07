# React Router

In this lessson we've learned how to use `react-router-dom` to create a single page application with multiple routes.
The `react-router-dom` package provides a `BrowserRouter` component that we can use to wrap our entire application. This will allow us to use the `Link` component to navigate between different routes.

In our app we wer displaying a `WelcomePage` component when the user navigates to the `/` route and a `StudentsPage` component when the user navigates to the `/students` route.

To handle routes that don't exist we created an `ErrorPage` component and render it when the user navigates to a route that doesn't exist using the universal "*" route.

We also learned how to use the `useParams` hook to access the parameters of the current route and create dynamic routes `/students/:dittoId`.