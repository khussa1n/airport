import PageNavLink from './page-nav-link';

const icon = '/peakpx.jpg';

export default function PageHeader({ navName, linkName }: { navName: string; linkName: string }) {
  return (
    <div
      className="w-full h-[280px] flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${icon})`,
      }}
    >
      <div className="w-full max-w-[1000px] mt-14 text-center text-white space-y-4">
        <h1 className="text-5xl">{navName}</h1>
        <PageNavLink name={linkName} />
      </div>
    </div>
  );
}
