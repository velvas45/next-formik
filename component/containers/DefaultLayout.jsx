import { TransitionLayout } from "./TransitionLayout";

export const DefaultLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <TransitionLayout>{children}</TransitionLayout>
      </body>
    </html>
  );
};
