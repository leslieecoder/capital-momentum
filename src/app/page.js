import Home5Main from "@/components/layout/main/Home5Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Capital Momentum",
  description: "🚀 Alta rentabilidad, mínimo esfuerzo.",
};
export default function Home5Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={2}
      headerBg={"black"}
      isOnepage={true}
      headerType={2}
    >
      <ThemeController />
      <Home5Main />
    </PageWrapper>
  );
}
