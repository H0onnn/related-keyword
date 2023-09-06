import { MainPageLayout } from './style';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <MainPageLayout>
      <main>{children}</main>
    </MainPageLayout>
  );
};

export default PageLayout;
