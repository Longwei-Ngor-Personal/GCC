function TrustWhy() {
  return (
    <section id="services" className="w-full mt-20 py-12 md:py-24 bg-[#F3F4F6]">
      <div className="px-4 md:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Why use a trust ?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Our interior design is a combination of art and science, coming
              from design includes:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-3 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <h3 className="text-xl font-bold">
                Land transaction restrictions in Cambodia
              </h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                Cambodia's current constitution , the Land Law , stipulates that
                land certificates are divided into: possession certificates (
                soft cards , permanent holding ) issued by the provincial
                government, ownership certificates ( hard cards , permanent
                holding ) issued directly by the government, and strata property
                rights ( leased land ) . Among them, non-Cambodian passport
                holders or Cambodian companies (51% Cambodian equity ) can only
                purchase strata property rights and cannot own permanent rights
                to land. It also means that foreign investors who want to fully
                purchase ( permanently own ) land or villas must borrow the name
                of Cambodian locals to complete the transaction. Not only are
                the procedures complicated, but many sales disputes are also
                derived, and they may even violate the law.
              </p>
            </div>
          </div>

          <div className="md:hidden lg:block bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <h3 className="text-xl font-bold">
                Ensure transaction security for both parties
              </h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                Trust companies mainly provide services in the following
                different situations, acting as an independent third party to
                protect the interests and rights of both parties.
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <h3 className="text-xl font-bold">Land holding</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                The services are mainly provided for foreign investors, so that
                investors can obtain investment profits and also obtain legal
                and safe protection.
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <h3 className="text-xl font-bold">Land sales</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                As a trustee for land transactions, we provide a safe and
                compliant transaction platform for land holders and investors.
              </p>
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <h3 className="text-xl font-bold">Collaborative Development</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                Investors can cooperate with landholders in development through
                trust companies to ensure that the investment amount is used for
                the intended purpose.
              </p>
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <h3 className="text-xl font-bold">Investment Management</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                After completing the transaction, both local and foreign
                investors can entrust a trust company as an investment manager,
                including secondary sales, continued rental income or other
                development plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustWhy;
