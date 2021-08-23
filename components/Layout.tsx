import Meta from "@components/Meta";
import Header from "@components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  );
};

export default Layout;
