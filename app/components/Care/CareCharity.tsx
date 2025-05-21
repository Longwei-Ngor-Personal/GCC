function CareCharity() {
  return (
    <section id="charity" className="pt-20 pb-14  bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div className="w-full mt-5 hidden lg:block">
            <iframe
              src="https://www.youtube-nocookie.com/embed/-SqCLuKEjFw"
              className="w-[600px] h-[500px]"
            >
              Your browser does not support the video tag.
            </iframe>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              GC CARE Charity Activity
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              隨著過去10年取得快速的經濟成長，現今的柬埔寨成為東盟國家中增長率最高的市場經濟國家，但在較偏遠的鄉間仍有一些因環境因素而無法獲得較好生活品質的小區。
              每個孩童都是我們未來國家的主人翁，在他們的成長過程中，學習更是不可或缺的一大環節，除了滿足溫飽的基本需要，藉由教育啟發他們的潛能，也能讓他們對未來有所冀盼。
              在秉持著於柬埔寨創造更多美好藍圖的初心中，也希望藉由一點微薄心力，帶給更多需要幫助的人更多溫暖。
              每個人都需要愛、關懷、守護💌
            </p>
          </div>
          <div className="w-full mt-5 lg:hidden ">
            <iframe
              src="https://www.youtube-nocookie.com/embed/-SqCLuKEjFw"
              className="w-[600px] h-[500px]"
            >
              Your browser does not support the video tag.
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareCharity;
