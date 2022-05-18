import React from "react";

function Pricing(props) {
  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="breadcrumb-hero">
          <div className="container">
            <div className="breadcrumb-hero">
              <h2>Pricing</h2>
              <p>
                Est dolorum ut non facere possimus quibusdam eligendi
                voluptatem. Quia id aut similique quia voluptas sit quaerat
                debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo
                harum praesentium.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Pricing</li>
          </ol>
        </div>
      </section>
      {/* End Breadcrumbs */}
      {/* ======= Pricing Section ======= */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="box" data-aos="fade-up">
                <h3>Free</h3>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
              <div
                className="box featured"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h3>Business</h3>
                <h4>
                  <sup>$</sup>19<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay={200}>
                <h3>Developer</h3>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay={300}>
                <span className="advanced">Advanced</span>
                <h3>Ultimate</h3>
                <h4>
                  <sup>$</sup>49<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Pricing Section */}
      {/* ======= Frequently Asked Questions Section ======= */}
      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="col-lg-5">
              <i className="bx bx-help-circle" />
              <h4>Non consectetur a erat nam at lectus urna duis?</h4>
            </div>
            <div className="col-lg-7">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="col-lg-5">
              <i className="bx bx-help-circle" />
              <h4>
                Feugiat scelerisque varius morbi enim nunc faucibus a
                pellentesque?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi. Id interdum velit laoreet id donec ultrices. Fringilla
                phasellus faucibus scelerisque eleifend donec pretium. Est
                pellentesque elit ullamcorper dignissim.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-5">
              <i className="bx bx-help-circle" />
              <h4>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                pellentesque eu tincidunt. Lectus urna duis convallis convallis
                tellus.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="col-lg-5">
              <i className="bx bx-help-circle" />
              <h4>
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Aperiam itaque sit optio et deleniti eos nihil quidem cumque.
                Voluptas dolorum accusantium sunt sit enim. Provident
                consequuntur quam aut reiciendis qui rerum dolorem sit odio.
                Repellat assumenda soluta sunt pariatur error doloribus fuga.
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="col-lg-5">
              <i className="bx bx-help-circle" />
              <h4>
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo.
                Dignissim suspendisse in est ante in. Nunc vel risus commodo
                viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </div>
          {/* End F.A.Q Item*/}
        </div>
      </section>
      {/* End Frequently Asked Questions Section */}
    </main>
  );
}

export default Pricing;
