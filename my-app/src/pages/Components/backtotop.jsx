function BackToTop() {
    window?.$('#scroll').on('click', function() {
		window?.$('html, body').animate({
			scrollTop: 0,
		}, 1500);
	});
  return (
    <>
      <section className="back-btn-top">
        <div className="container-fluid p-0">
          <div className="row gx-0">
            <div className="col-xl-12">
              <div id="scroll" className="back-to-top-btn text-center">
                <a href="javascript:void(0);">back to top</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export {BackToTop};