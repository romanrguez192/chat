import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
};

const Meta = ({
  title = "Chat App",
  keywords = "chat, messages, friends",
  description = "A simple chat application",
}: Props): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
